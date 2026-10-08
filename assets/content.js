/* OrigApp — 全站文案表。
 * 只改这个文件就能改全站文字，不用碰 HTML。
 *
 * 结构：ORIGAPP.i18n.zh / ORIGAPP.i18n.en，键名一一对应。
 * 英文暂不做：en 里的值一律留空字符串，渲染时会自动回退到中文。
 *   —— 以后要做英文，把 en 里对应的空串填上即可，填一条生效一条。
 *
 * HTML 里用 data-i18n="键名" 绑定纯文本，data-i18n-html="键名" 绑定带标签的文本。
 */
window.ORIGAPP = window.ORIGAPP || {};

/* ---------- 首页标语（打字机效果，逐句打出再删掉） ---------- */
/* 想改标语就改这两个数组，加几句都行，会循环播放。 */
window.ORIGAPP.taglines = {
  zh: [
    'Default is the best.',
    'Orignal? That is good!',
    'Lite, but powerful!'
  ],
  en: []
};

/* ---------- 文案表 ---------- */
window.ORIGAPP.i18n = {

  zh: {
    /* 通用 */
    'brand': 'OrigApp',
    'nav.home': '首页',
    'nav.mcporter': 'Mod Porter',
    'nav.origday': 'OrigDay',
    'nav.webmirror': 'Web Mirror',
    'nav.launchpad': 'LaunchPad',
    'nav.ffmpegui': 'FFmpegUI',
    'nav.sponsor': '赞助',
    'lang.label': '语言',
    'lang.zh': '中',
    'lang.en': 'EN',
    'sub.intro': '介绍',
    'sub.updates': '更新记录',
    'footer.copy': 'OrigApp · By Sandbox',
    'footer.linkUpdates': '更新记录',
    'footer.linkSponsor': '赞助',
    'footer.linkHome': '首页',

    /* 首页 */
    'home.title': 'OrigApp — 一切从原生 UI 开始',
    'home.desc': 'OrigApp, 推动原生UI软件生态发展',
    'home.hero.eyebrow': 'OrigApp',
    'home.hero.title': '“MINIMALISM”',
    'home.hero.lead': 'OrigApp, 推动原生UI软件生态发展',
    'home.hero.cta1': '我们的项目',
    'home.hero.cta2': '支持我们',

    'home.products.eyebrow': 'Products',
    'home.products.title': '项目',
    'home.products.sub': 'All starts from the original.',

    'prod.mcporter.name': 'Minecraft Mod Porter',
    'prod.mcporter.platform': 'MC模组迁移工具',
    'prod.mcporter.desc': '自动转换模组大部分源代码版本，降低模组版本迁移难度。目前支持 Forge 加载器 1.12 到 1.21 共 20 个版本互转。',
    'prod.origday.name': 'OrigDay',
    'prod.origday.platform': '支持iOS 16 及以上 · SwiftUI',
    'prod.origday.desc': '记录和倒数生活中的重要日子。全部使用苹果原生 SwiftUI 构建，数据纯本地存储，无账号、无联网、无广告、无内购。',
    'prod.webmirror.name': 'Web Mirror',
    'prod.webmirror.platform': '跨平台 · Python 命令行工具',
    'prod.webmirror.desc': '只需输入网址，自动识别站点类型（MediaWiki / WordPress / 静态站点等）并选择最优抓取策略，把整个网站镜像到本地。',
    'prod.launchpad.name': 'LaunchPad for Windows',
    'prod.launchpad.platform': 'Windows 桌面 · WinUI 3',
    'prod.launchpad.desc': '灵感来自 macOS Launchpad 的原生 Windows 应用启动器，使用 WinUI 3 与 Fluent Design 构建，早期开发中。',
    'prod.ffmpegui.name': 'FFmpegUI',
    'prod.ffmpegui.platform': 'Windows 桌面 · WinUI 3',
    'prod.ffmpegui.desc': '面向 FFmpeg 的 Fluent UI 图形前端，转码、裁剪、合并、压缩等常见操作无需手写命令行，早期开发中。',
    'prod.link.detail': '了解详情',
    'prod.link.updates': '更新记录',

    'home.about.eyebrow': 'Why OrigApp',
    'home.about.title': 'Why Orignal',
    'home.about.sub': '原生UI能最大限度融入系统，也是轻量之选',
    'home.about.f1.t': '跟随平台习惯',
    'home.about.f1.b': '控件、间距、动效、深浅色统一设计，提供视觉统一',
    'home.about.f2.t': '纯净体验',
    'home.about.f2.b': '纯本地，无冗余功能',
    'home.about.f3.t': '细节到位',
    'home.about.f3.b': '深浅色跟随、字体缩放、本地化全部支持',

    'home.cta.title': '支持 OrigApp',
    'home.cta.body': 'OrigApp 目前只有 Sandbox 一人在做，还是一名中学生。如果您喜欢这些项目，请支持我 —— 上架前赞助 2 元及以上，即可终身免费使用 OrigDay。',
    'home.cta.btn': '前往赞助页面',

    /* ---------- Minecraft Mod Porter 介绍页 ---------- */
    'mcp.title': 'Minecraft Mod Porter — OrigApp',
    'mcp.desc': '自动转换模组大部分源代码版本，降低模组版本迁移难度。目前支持 Forge 加载器 1.12 到 1.21 共 20 个版本互转。',
    'mcp.eyebrow': 'MC模组迁移工具',
    'mcp.name': 'Minecraft Mod Porter',
    'mcp.lead': '自动转换模组大部分源代码版本，降低模组版本迁移难度。目前支持 Forge 加载器 1.12 到 1.21 共 20 个版本互转。',

    'mcp.overview.title': 'What can it do',
    'mcp.overview.body': '自Minecraft Java 1.12.2后的大更新开始，Forge的接口大改 —— 类改名、方法签名改变、注册方式换写法。低版本模组迁移无疑成为了一项大工程，而该软件则能帮助开发者完成大部分代码升级（也能用于降级）',

    'mcp.flow.title': 'How to use',
    'mcp.flow.sub': '指定模组的源代码文件夹，设定版本，剩下由工具自动完成并生成报告',
    'mcp.s1.t': '① 自动扫描',
    'mcp.s1.b': '扫描文件夹里所有相关文件 —— .java 代码、语言文件、材质配置、构建脚本等，无需手动选择',
    'mcp.s2.t': '② 自动改写',
    'mcp.s2.b': '按照两个版本之间的差异规则，自动改写大部分代码：包名、方法名、注解写法等',
    'mcp.s3.t': '③ 完整细节报告',
    'mcp.s3.b': '需人工判断时保留原代码，并加上注释；同时生成一份清单，列出所有需要手动处理的位置，问题一目了然',
    'mcp.s4.t': '④ 输出完整工程',
    'mcp.s4.b': '把转换后的完整工程输出到指定新文件夹，保留原始项目',

    'mcp.features.title': '功能与特点',
    'mcp.f1.t': '20 个版本互转',
    'mcp.f1.b': '目前支持 Forge 加载器从 1.12 至 1.21 之间共 20 个版本互转，升级和降级都可完成',
    'mcp.f2.t': '两种交互方式',
    'mcp.f2.b': 'CLI - 命令行：更轻量，跨平台<br>GUI - 图形界面：含 Win32 与 WinUI3 两个版本，可自行选择，操作更快捷直观',
    'mcp.f3.tag': '设计特点',
    'mcp.f3.t': '数据库外置',
    'mcp.f3.b': '所有版本迁移映射表独立存放，用户可自行修改添加',

    /* Mod Porter 更新页 */
    'mcp.up.title': 'Mod Porter 更新',
    'mcp.up.desc': 'Minecraft Mod Porter 的版本与改动记录',
    'mcp.up.head': '更新记录',
    'mcp.up.lead': 'Minecraft Mod Porter 的版本与改动',

    /* ---------- Web Mirror 介绍页 ---------- */
    'wm.title': 'Web Mirror — OrigApp',
    'wm.desc': '只需输入网址，自动识别站点类型并选择最优策略，把整个网站镜像到本地。',
    'wm.eyebrow': '跨平台 · Python 命令行工具',
    'wm.name': 'Web Mirror',
    'wm.lead': '只需输入网址，就能把整个网站克隆到本地。自动识别站点类型，为你选择最高效的抓取策略。',

    'wm.overview.title': '要解决什么问题',
    'wm.overview.body': '备份、离线阅读或迁移一个网站，往往需要针对不同站点类型（MediaWiki、WordPress、静态站点等）手写不同的抓取逻辑。Web Mirror 把这些方案封装成会自动切换的适配器，只需给出起始网址即可完成整站镜像，同时严格遵守 robots.txt 与限速规则，避免对目标站点造成压力。',

    'wm.flow.title': '怎么用',
    'wm.flow.sub': '输入网址后，剩下的探测、选策略、抓取、输出全部自动完成',
    'wm.s1.t': '① 探测站点',
    'wm.s1.b': '输入起始网址，程序自动探测目标是 MediaWiki、WordPress，还是普通静态站点',
    'wm.s2.t': '② 匹配策略',
    'wm.s2.b': '按优先级依次尝试 MediaWiki API、WordPress REST API、Sitemap、通用爬虫，JS 重度站点则回退到浏览器渲染',
    'wm.s3.t': '③ 限速抓取',
    'wm.s3.b': '遵守 robots.txt 的 Crawl-delay 与禁止规则，按主机维护独立的自适应限速',
    'wm.s4.t': '④ 输出镜像',
    'wm.s4.b': '保留原始 URL 目录结构，支持断点续传；已有文件按 ETag / Last-Modified 增量跳过',

    'wm.features.title': '功能与特点',
    'wm.f1.t': '5 种抓取策略',
    'wm.f1.b': 'MediaWiki API、WordPress REST API、Sitemap 解析、通用 BFS 爬取、浏览器渲染，按优先级自动降级，兼顾效率与覆盖率',
    'wm.f2.t': '增量与断点续传',
    'wm.f2.b': '依据 ETag / Last-Modified 跳过未变化内容，配合 .part 文件支持断点续传，重复运行不重复下载',
    'wm.f3.tag': '设计特点',
    'wm.f3.t': '面向前端集成',
    'wm.f3.b': '提供交互式 CLI、单条命令的 API 模式，以及可直接嵌入的 Python 库三种接入方式；库模式下可通过回调或 JSONL 事件流对接 Electron / Tauri 等前端界面',

    /* ---------- LaunchPad for Windows 介绍页 ---------- */
    'lp.title': 'LaunchPad for Windows — OrigApp',
    'lp.desc': '灵感来自 macOS Launchpad 的 Windows 原生应用启动器，使用 WinUI 3 与 Fluent Design 打造。',
    'lp.eyebrow': 'Windows 桌面工具 · WinUI 3',
    'lp.name': 'LaunchPad for Windows',
    'lp.lead': '灵感来自 macOS Launchpad 的 Windows 原生应用启动器，使用 WinUI 3 与 Fluent Design 打造。',

    'lp.overview.title': '这是什么',
    'lp.overview.body': 'LaunchPad for Windows 不替换 Windows 开始菜单，而是提供一个独立、专注的应用启动入口。项目使用 WinUI 3 与 Windows App SDK 原生构建，视觉语言遵循 Microsoft Fluent Design，在保留 Launchpad 简洁交互思路的同时贴近 Windows 系统的原生体感。项目目前处于早期开发阶段，功能仍在持续完善中，可能包含不完整的功能或破坏性变更。',

    'lp.features.title': '功能与特点',
    'lp.f1.t': '原生 Windows UI',
    'lp.f1.b': '基于 WinUI 3 与 Windows App SDK 构建，而非套壳网页界面',
    'lp.f2.t': '应用扫描与搜索',
    'lp.f2.b': '自动扫描系统内已安装的应用，并支持快速搜索定位',
    'lp.f3.t': '图标缓存',
    'lp.f3.b': '获取并缓存系统应用图标，加快启动器后续加载的速度',
    'lp.f4.t': '响应式布局',
    'lp.f4.b': '应用图标网格会根据窗口大小自适应调整；另提供独立设置页管理应用偏好',
    'lp.f5.tag': '技术栈',
    'lp.f5.t': '.NET 8 · WinUI 3 · Windows App SDK 2.0.1',
    'lp.f5.b': '使用 CommunityToolkit.Mvvm 组织 MVVM 架构，划分为 Services / Models / ViewModels / Views 等模块；配置为 Windows x64 自包含单文件发布，本地化基于 Windows App SDK 资源管理',

    /* ---------- FFmpegUI 介绍页 ---------- */
    'fu.title': 'FFmpegUI — OrigApp',
    'fu.desc': '面向 FFmpeg 的现代 Fluent UI 图形前端，转码、裁剪、合并、压缩等常见操作无需手写命令行。',
    'fu.eyebrow': 'Windows 桌面工具 · WinUI 3',
    'fu.name': 'FFmpegUI',
    'fu.lead': '面向 FFmpeg 的现代 Fluent UI 图形前端，无需手写命令行参数即可完成转码、裁剪、合并、压缩等常见操作。',

    'fu.overview.title': '要解决什么问题',
    'fu.overview.body': 'FFmpeg 功能强大，但命令行需要用户直接面对大量编码器、容器格式、滤镜、流映射与参数选项。FFmpegUI 在用户与 FFmpeg 之间加入一层结构化的图形界面：由 Fluent UI 收集操作意图，经 ViewModel / Model 转换为结构化配置，再由命令构建器生成 ffmpeg / ffprobe / ffplay 的完整命令并执行。项目不试图替代 FFmpeg 引擎本身，而是让它更好用、更易上手。',

    'fu.features.title': '支持的工作流',
    'fu.f1.t': '覆盖常见操作',
    'fu.f1.b': '转码、裁剪、合并、压缩、提取、图片格式转换，每种操作都有对应的图形化页面，另可用 ffprobe 查看媒体信息、ffplay 预览播放',
    'fu.f2.t': '预设与任务队列',
    'fu.f2.b': '可保存并复用常用的处理配置（预设），任务队列统一管理正在进行的编码与处理进度',
    'fu.f3.tag': '设计特点',
    'fu.f3.t': '命令构建而非重写引擎',
    'fu.f3.b': 'FFmpegUI 从结构化设置生成标准的 ffmpeg / ffprobe / ffplay 命令行，FFmpeg 本身始终是真正的媒体处理引擎，同时保留了直接调整底层参数的高级入口。项目目前处于早期开发阶段，内置简体中文本地化资源',

    /* ---------- OrigDay 介绍页 ---------- */
    'day.title': 'OrigDay — OrigApp',
    'day.desc': '记录和倒数生活中的重要日子。纯本地、无需登录的 iOS 记日与倒数应用。',
    'day.eyebrow': '适配iOS 16 及以上 · SwiftUI',
    'day.name': 'OrigDay',
    'day.lead': '记录和倒数生活中的重要日子。',

    'day.since.label': 'OrigDay 项目已成立',
    'day.since.date': '成立时间：2026/07/18 12:36',

    'day.overview.title': 'Feature',
    'day.overview.body': '全部使用苹果原生 SwiftUI 构建，支持 iOS 16 及以上系统版本；数据纯本地存储，无账号、无联网。支持简体中文、繁体中文、英文，可在系统设置中单独为本 App 切换语言。',

    'day.features.title': '核心功能',
    'day.features.sub': '高度可自定义的卡片',
    'day.f1.t': '倒数与正数自动判断',
    'day.f1.b': '未来的日子显示「还有 N 天」，过去的显示「已经过去了 N 天」，当天显示「今天」，无需手动设置方向',
    'day.f2.t': '两种日期模式',
    'day.f2.b': '可自由选择公历 / 农历模式，也可按月设定',
    'day.f3.t': '提醒',
    'day.f3.b': '本地通知，可选当天提醒、提前自定义天数（1–14 天），或从提前 N 天到当天每天提醒；提醒时间可单独设置，也可跟随事件的具体时间。已过去的一次性事件自动禁用提醒',
    'day.f4.t': '具体时间，精确计时',
    'day.f4.b': '事件可附带具体时刻，并可开启逐秒刷新的精确剩余时间（天 / 时 / 分 / 秒）',
    'day.f5.t': '置顶',
    'day.f5.b': '置顶重要事件，以大卡片显示在首页顶部，一目了然',
    'day.f6.t': '卡片样式',
    'day.f6.b': '每个事件可选主题色，背景支持纯色、渐变或「无」（跟随系统底色，自动适配深浅色并带描边勾勒轮廓）。',
    'day.f7.tag': '特色功能',
    'day.f7.t': '自定义字体',
    'day.f7.b': '每个事件的标题、剩余天数、设定日期三处可分别设置效果；首页卡片可跟随详情页样式，也可单独配置。可以完全匹配你的喜好、风格及品味来自定义卡片样式',
    'day.f8.t': '分享与导出',
    'day.f8.b': '详情页可一键把倒数卡存入相册（比例与屏幕显示一致），或以文字形式分享',

    /* OrigDay 更新页 */
    'day.up.title': 'OrigDay 更新',
    'day.up.desc': 'OrigDay 的版本与改动记录',
    'day.up.head': '更新记录',
    'day.up.lead': 'OrigDay 的版本与改动',

    /* 更新列表状态 */
    'updates.loading': '正在加载…',
    'updates.empty': '暂无更新记录',
    'updates.error': '发生错误，暂时无法加载更新记录，请刷新重试',

    /* ---------- 赞助页 ---------- */
    'spon.title': '赞助 — OrigApp',
    'spon.desc': '支持 OrigApp 的开发，您的支持是我更新的最大动力',
    'spon.eyebrow': 'Sponsor',
    'spon.head': '支持 OrigApp',
    'spon.lead': 'OrigApp 目前只有 Sandbox 一人。您的支持是继续做下去的动力。',

    'spon.why.title': 'Why',
    'spon.why.body': '由于项目的初心是致力于打造纯净的 App 体验，也不会设置内购，需要大家的支持项目才可继续，感谢',

    'spon.how.title': '赞助方式与回报',
    'spon.how.body': '下方是我的微信收款码。所有上架前的赞助者，只要支付 2 元及以上，上架后可终身免费使用 OrigDay（ MC Mod Porter 是免费工具）',

    'spon.imgalt': '微信收款码',
    'spon.note': '',
    'spon.thanks.title': '不方便赞助也没关系',
    'spon.thanks.body': '把软件推荐给需要的人、反馈一个 bug、提一个想法，对我来说也是支持'
  },

  /* 英文：暂不翻译，留空即回退中文。要做英文时逐条填进来。 */
  en: {
    'brand': '',
    'nav.home': '',
    'nav.mcporter': '',
    'nav.origday': '',
    'nav.webmirror': '',
    'nav.launchpad': '',
    'nav.ffmpegui': '',
    'nav.sponsor': '',
    'lang.label': '',
    'lang.zh': '',
    'lang.en': '',
    'sub.intro': '',
    'sub.updates': '',
    'footer.copy': '',
    'footer.linkUpdates': '',
    'footer.linkSponsor': '',
    'footer.linkHome': '',

    'home.title': '',
    'home.desc': '',
    'home.hero.eyebrow': '',
    'home.hero.title': '',
    'home.hero.lead': '',
    'home.hero.cta1': '',
    'home.hero.cta2': '',

    'home.products.eyebrow': '',
    'home.products.title': '',
    'home.products.sub': '',

    'prod.mcporter.name': '',
    'prod.mcporter.platform': '',
    'prod.mcporter.desc': '',
    'prod.origday.name': '',
    'prod.origday.platform': '',
    'prod.origday.desc': '',
    'prod.webmirror.name': '',
    'prod.webmirror.platform': '',
    'prod.webmirror.desc': '',
    'prod.launchpad.name': '',
    'prod.launchpad.platform': '',
    'prod.launchpad.desc': '',
    'prod.ffmpegui.name': '',
    'prod.ffmpegui.platform': '',
    'prod.ffmpegui.desc': '',
    'prod.link.detail': '',
    'prod.link.updates': '',

    'home.about.eyebrow': '',
    'home.about.title': '',
    'home.about.sub': '',
    'home.about.f1.t': '',
    'home.about.f1.b': '',
    'home.about.f2.t': '',
    'home.about.f2.b': '',
    'home.about.f3.t': '',
    'home.about.f3.b': '',

    'home.cta.title': '',
    'home.cta.body': '',
    'home.cta.btn': '',

    'mcp.title': '',
    'mcp.desc': '',
    'mcp.eyebrow': '',
    'mcp.name': '',
    'mcp.lead': '',
    'mcp.overview.title': '',
    'mcp.overview.body': '',
    'mcp.flow.title': '',
    'mcp.flow.sub': '',
    'mcp.s1.t': '', 'mcp.s1.b': '',
    'mcp.s2.t': '', 'mcp.s2.b': '',
    'mcp.s3.t': '', 'mcp.s3.b': '',
    'mcp.s4.t': '', 'mcp.s4.b': '',
    'mcp.features.title': '',
    'mcp.f1.t': '', 'mcp.f1.b': '',
    'mcp.f2.t': '', 'mcp.f2.b': '',
    'mcp.f3.tag': '', 'mcp.f3.t': '', 'mcp.f3.b': '',

    'mcp.up.title': '',
    'mcp.up.desc': '',
    'mcp.up.head': '',
    'mcp.up.lead': '',

    'wm.title': '',
    'wm.desc': '',
    'wm.eyebrow': '',
    'wm.name': '',
    'wm.lead': '',
    'wm.overview.title': '',
    'wm.overview.body': '',
    'wm.flow.title': '',
    'wm.flow.sub': '',
    'wm.s1.t': '', 'wm.s1.b': '',
    'wm.s2.t': '', 'wm.s2.b': '',
    'wm.s3.t': '', 'wm.s3.b': '',
    'wm.s4.t': '', 'wm.s4.b': '',
    'wm.features.title': '',
    'wm.f1.t': '', 'wm.f1.b': '',
    'wm.f2.t': '', 'wm.f2.b': '',
    'wm.f3.tag': '', 'wm.f3.t': '', 'wm.f3.b': '',

    'lp.title': '',
    'lp.desc': '',
    'lp.eyebrow': '',
    'lp.name': '',
    'lp.lead': '',
    'lp.overview.title': '',
    'lp.overview.body': '',
    'lp.features.title': '',
    'lp.f1.t': '', 'lp.f1.b': '',
    'lp.f2.t': '', 'lp.f2.b': '',
    'lp.f3.t': '', 'lp.f3.b': '',
    'lp.f4.t': '', 'lp.f4.b': '',
    'lp.f5.tag': '', 'lp.f5.t': '', 'lp.f5.b': '',

    'fu.title': '',
    'fu.desc': '',
    'fu.eyebrow': '',
    'fu.name': '',
    'fu.lead': '',
    'fu.overview.title': '',
    'fu.overview.body': '',
    'fu.features.title': '',
    'fu.f1.t': '', 'fu.f1.b': '',
    'fu.f2.t': '', 'fu.f2.b': '',
    'fu.f3.tag': '', 'fu.f3.t': '', 'fu.f3.b': '',

    'day.title': '',
    'day.desc': '',
    'day.eyebrow': '',
    'day.name': '',
    'day.lead': '',
    'day.since.label': '',
    'day.since.date': '',
    'day.overview.title': '',
    'day.overview.body': '',
    'day.features.title': '',
    'day.features.sub': '',
    'day.f1.t': '', 'day.f1.b': '',
    'day.f2.t': '', 'day.f2.b': '',
    'day.f3.t': '', 'day.f3.b': '',
    'day.f4.t': '', 'day.f4.b': '',
    'day.f5.t': '', 'day.f5.b': '',
    'day.f6.t': '', 'day.f6.b': '',
    'day.f7.tag': '', 'day.f7.t': '', 'day.f7.b': '',
    'day.f8.t': '', 'day.f8.b': '',

    'day.up.title': '',
    'day.up.desc': '',
    'day.up.head': '',
    'day.up.lead': '',

    'updates.loading': '',
    'updates.empty': '',
    'updates.error': '',

    'spon.title': '',
    'spon.desc': '',
    'spon.eyebrow': '',
    'spon.head': '',
    'spon.lead': '',
    'spon.why.title': '',
    'spon.why.body': '',
    'spon.how.title': '',
    'spon.how.body': '',
    'spon.imgalt': '',
    'spon.note': '',
    'spon.thanks.title': '',
    'spon.thanks.body': ''
  }
};

/* OrigDay 页面上那个「项目已成立」的计时卡片，起算时刻。 */
window.ORIGAPP.origdaySince = '2026-07-18T12:36:00';
