/* OrigApp — 首屏前置脚本。
 * 必须放在 <head> 里、样式表之前，作用是在页面绘制前就把语言定下来，
 * 避免先渲染一套界面再切换（闪烁）。
 * 皮肤已固定为 FluentUI（Liquid Glass / Apple 皮肤已下线）。 */
(function () {
  var d = document.documentElement;

  /* 皮肤：全站统一 FluentUI，不再提供切换。 */
  d.setAttribute('data-skin', 'fluent');

  /* 语言：英文文案目前是空的，所以默认一律中文，只认用户手动切换。 */
  var lang = null;
  try { lang = localStorage.getItem('origapp.lang'); } catch (e) {}
  if (lang !== 'zh' && lang !== 'en') lang = 'zh';
  d.setAttribute('data-lang', lang);
  d.setAttribute('lang', lang === 'en' ? 'en' : 'zh-Hans');
})();
