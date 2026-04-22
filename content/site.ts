import type { Metric, NavItem, Pillar, Principle, TimelineEntry } from "@/content/types";

export const navigation: NavItem[] = [
  { href: "/", label: "首页" },
  { href: "/blog", label: "博客" },
  { href: "/tools", label: "工具" },
  { href: "/projects", label: "项目" },
  { href: "/about", label: "关于" },
];

export const heroMetrics: Metric[] = [
  {
    label: "站点定位",
    value: "内容 × 工具 × 项目",
    detail: "把博客、资源、实验和品牌表达折进同一套前台模板。",
  },
  {
    label: "设计目标",
    value: "更大气、更锋利",
    detail: "不是复刻参考站，而是借它的秩序感做出更强的压场。",
  },
  {
    label: "技术基座",
    value: "Next 16 / React 19",
    detail: "用 App Router 做整站模板化，后续直接挂接旧站内容即可。",
  },
];

export const homePillars: Pillar[] = [
  {
    eyebrow: "Editorial",
    title: "博客内容",
    description:
      "长文、教程、复盘与观点统一成编辑感更强的阅读体验，让内容本身站到舞台中央。",
    href: "/blog",
  },
  {
    eyebrow: "Curation",
    title: "工具导航",
    description:
      "把 AI 工具、工作流和效率资源收进更清爽的目录系统，不再像杂乱的链接仓库。",
    href: "/tools",
  },
  {
    eyebrow: "Work",
    title: "个人项目",
    description:
      "项目页不只罗列功能，而是突出方法、产出和长期积累，让个人品牌更有骨头。",
    href: "/projects",
  },
];

export const principles: Principle[] = [
  {
    title: "先做模板系统，再挂真实内容",
    description:
      "这次优先把视觉层、导航层、列表层和详情层统一，后面替换旧站内容时不会反复返工。",
  },
  {
    title: "参考骨架，不复制表情",
    description:
      "借参考站的秩序、留白和内容优先逻辑，但把品牌气质做得更厚、更开、更有个人锋芒。",
  },
  {
    title: "把阅读体验抬到品牌层级",
    description:
      "文章详情页、栏目列表页和项目页都必须像同一个品牌说话，而不是各做各的。",
  },
];

export const timeline: TimelineEntry[] = [
  {
    year: "01",
    title: "整理旧站内容资产",
    description: "先保留原有内容方向，把博客、工具、项目拆分成清晰的信息入口。",
  },
  {
    year: "02",
    title: "建立视觉模板母版",
    description: "统一 Header、Footer、Hero、列表卡片、详情页正文和 CTA 模块。",
  },
  {
    year: "03",
    title: "逐页接入真实数据",
    description: "后续把 ybot.top 的真实内容一批批挂进来，而不是再重做前端皮肤。",
  },
];
