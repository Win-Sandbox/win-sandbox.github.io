/* OrigApp — 站点逻辑。无依赖，纯静态可用。
 * 负责：文案渲染(i18n) / 皮肤与语言切换 / 导航高亮 / 标语打字机 / 更新列表。 */
(function () {
  'use strict';

  var d = document.documentElement;
  var I18N = (window.ORIGAPP && window.ORIGAPP.i18n) || { zh: {}, en: {} };

  function lang() { return d.getAttribute('data-lang') === 'en' ? 'en' : 'zh'; }

  /* 取文案：当前语言取不到或为空 → 回退中文（英文未翻译时就走这条路）。 */
  function t(key) {
    var cur = I18N[lang()] || {};
    var v = cur[key];
    if (v === undefined || v === null || v === '') v = (I18N.zh || {})[key];
    return v === undefined || v === null ? '' : v;
  }

  function esc(s) {
    return String(s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;')
      .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  /* ---------- 把文案刷进页面 ---------- */

  function applyI18n() {
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      el.textContent = t(el.getAttribute('data-i18n'));
    });
    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      el.innerHTML = t(el.getAttribute('data-i18n-html'));
    });
    document.querySelectorAll('[data-i18n-attr]').forEach(function (el) {
      // 形如 data-i18n-attr="alt:spon.imgalt, title:nav.home"
      el.getAttribute('data-i18n-attr').split(',').forEach(function (pair) {
        var kv = pair.split(':');
        if (kv.length === 2) el.setAttribute(kv[0].trim(), t(kv[1].trim()));
      });
    });
    var titleKey = document.body.getAttribute('data-title-key');
    if (titleKey) document.title = t(titleKey);
    var descKey = document.body.getAttribute('data-desc-key');
    var descEl = document.querySelector('meta[name="description"]');
    if (descKey && descEl) descEl.setAttribute('content', t(descKey));
  }

  /* ---------- 导航高亮 ---------- */

  function markActiveNav() {
    var page = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
    document.querySelectorAll('[data-page]').forEach(function (a) {
      // data-page 可以写多个文件名（空格分隔），产品页和它的更新页共用一个导航项
      var pages = a.getAttribute('data-page').toLowerCase().split(/\s+/);
      if (pages.indexOf(page) > -1) a.classList.add('active');
    });
  }

  /* ---------- 语言切换器 ----------
     皮肤切换（FluentUI / Liquid Glass）已下线，全站固定使用 FluentUI。 */

  function syncToggles() {
    document.querySelectorAll('[data-set-lang]').forEach(function (b) {
      b.setAttribute('aria-pressed', String(b.getAttribute('data-set-lang') === lang()));
    });
  }

  function initToggles() {
    document.addEventListener('click', function (e) {
      var lBtn = e.target.closest && e.target.closest('[data-set-lang]');
      if (lBtn) {
        var l = lBtn.getAttribute('data-set-lang');
        d.setAttribute('data-lang', l);
        d.setAttribute('lang', l === 'en' ? 'en' : 'zh-Hans');
        try { localStorage.setItem('origapp.lang', l); } catch (err) {}
        applyI18n();
        syncToggles();
        restartTagline();
      }
    });
    syncToggles();
  }

  /* ---------- 标语打字机 ----------
     一句一句地打出来，停一会，再一个字一个字删掉，换下一句。
     光标是一根下划线，停顿时会闪。 */

  var twTimer = null;

  function restartTagline() {
    if (twTimer) { clearTimeout(twTimer); twTimer = null; }
    startTagline();
  }

  function startTagline() {
    var host = document.getElementById('tagline');
    if (!host) return;

    var pool = (window.ORIGAPP && window.ORIGAPP.taglines) || {};
    var lines = pool[lang()];
    if (!lines || !lines.length) lines = pool.zh || [];
    lines = lines.filter(function (s) { return s && String(s).trim(); });

    host.innerHTML = '<span class="tw-text"></span><span class="tw-caret"></span>';
    var textEl = host.querySelector('.tw-text');
    var caret = host.querySelector('.tw-caret');

    if (!lines.length) { caret.classList.add('blink'); return; }

    // 尊重「减少动态效果」的系统设置：直接显示第一句，不做打字动画
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      textEl.textContent = lines[0];
      caret.classList.add('blink');
      return;
    }

    var li = 0, ci = 0, deleting = false;

    (function step() {
      var line = lines[li];

      if (!deleting) {
        ci++;
        textEl.textContent = line.slice(0, ci);
        if (ci >= line.length) {
          deleting = true;
          caret.classList.add('blink');
          twTimer = setTimeout(step, 1900);          // 打完停一下
          return;
        }
        caret.classList.remove('blink');
        twTimer = setTimeout(step, 78 + Math.random() * 52);
      } else {
        ci--;
        textEl.textContent = line.slice(0, ci);
        if (ci <= 0) {
          deleting = false;
          li = (li + 1) % lines.length;
          caret.classList.add('blink');
          twTimer = setTimeout(step, 620);           // 删完换句前停一下
          return;
        }
        caret.classList.remove('blink');
        twTimer = setTimeout(step, 34);
      }
    })();
  }

  /* ---------- 更新列表 ----------
     数据来自 body[data-updates] 指定的 JSON 文件，格式：
     { "updates": [ { "date": "2026-08-01", "tag": "v1.0.0", "title": "…", "body": "…" } ] } */

  function renderUpdates() {
    var list = document.getElementById('updates-list');
    if (!list) return;
    var src = document.body.getAttribute('data-updates');
    if (!src) return;

    list.innerHTML = '<div class="empty">' + esc(t('updates.loading')) + '</div>';

    fetch(src, { cache: 'no-store' })
      .then(function (r) {
        if (!r.ok) throw new Error('HTTP ' + r.status);
        return r.json();
      })
      .then(function (data) {
        var items = Array.isArray(data) ? data : (data.updates || []);
        items = items.slice().sort(function (a, b) {
          return String(b.date || '').localeCompare(String(a.date || ''));
        });
        if (!items.length) {
          list.innerHTML = '<div class="empty">' + esc(t('updates.empty')) + '</div>';
          return;
        }
        list.innerHTML = items.map(function (it) {
          var badge = it.tag ? '<span class="u-badge">' + esc(it.tag) + '</span>' : '';
          return '<article class="update">' +
                   '<div class="u-meta"><span class="u-date">' + esc(it.date || '') + '</span>' + badge + '</div>' +
                   '<h3>' + esc(it.title || '') + '</h3>' +
                   '<div class="u-body">' + esc(it.body || '') + '</div>' +
                 '</article>';
        }).join('');
      })
      .catch(function () {
        list.innerHTML = '<div class="empty">' + esc(t('updates.error')) + '</div>';
      });
  }

  /* ---------- OrigDay 页的「项目已成立」计时卡 ---------- */

  function startDayCounter() {
    var el = document.getElementById('dc-count');
    if (!el) return;
    var since = new Date((window.ORIGAPP && window.ORIGAPP.origdaySince) || '');
    if (isNaN(since.getTime())) return;

    (function tick() {
      var sec = Math.max(0, Math.floor((Date.now() - since.getTime()) / 1000));
      var d = Math.floor(sec / 86400); sec %= 86400;
      var h = Math.floor(sec / 3600);  sec %= 3600;
      var m = Math.floor(sec / 60);
      el.textContent = d + ' 天 ' + h + ' 小时 ' + m + ' 分 ' + (sec % 60) + ' 秒';
      setTimeout(tick, 1000);
    })();
  }

  /* ---------- 启动 ---------- */

  function init() {
    applyI18n();
    markActiveNav();
    initToggles();
    startTagline();
    startDayCounter();
    renderUpdates();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
