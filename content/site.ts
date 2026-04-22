import type { Metric, NavItem, Pillar, Principle, TimelineEntry } from "@/content/types";

export const siteProfile = {
  title: "YBOT",
  description:
    "一套更大气、更有编辑感的个人内容站母版。先把整站结构、视觉节奏和模块关系立起来，再慢慢接入真实内容。",
  heroTagline: "先把整站架构搭稳，再让内容慢慢长出来。",
  owner: {
    displayName: "YBOT Studio",
    label: "Editorial System",
    role: "Builder / Curator",
    location: "Shanghai",
  },
  aboutLines: [
    "这个版本只负责把前台架构立起来：路由、模板、节奏、排版、卡片系统和阅读体验全部先定型。",
    "它不依赖任何历史数据。当前页面里的文章、工具和项目都只是占位内容，用来验证结构是否顺手。",
    "首页负责气质和入口，博客页负责归档和阅读，工具页负责方法与模块，项目页负责展示与扩展。",
    "真正的内容以后可以一批批接入，但那应该发生在模板、信息层级和视觉系统已经稳定之后。",
  ],
};

export const navigation: NavItem[] = [
  { href: "/", label: "首页" },
  { href: "/blog", label: "博客" },
  { href: "/tools", label: "工具" },
  { href: "/projects", label: "项目" },
  { href: "/about", label: "关于" },
];

export const heroMetrics: Metric[] = [
  {
    label: "核心路由",
    value: "05 个",
    detail: "首页、博客、工具、项目、关于已经统一进一套整站模板体系。",
  },
  {
    label: "模板模块",
    value: "12+ 组",
    detail: "导航、Hero、卡片、详情页、页脚、404 与 loading 都能复用。",
  },
  {
    label: "内容状态",
    value: "占位架构",
    detail: "现在只保留结构和视觉节奏，后面再把真实内容接进来。",
  },
];

export const homePillars: Pillar[] = [
  {
    eyebrow: "Journal",
    title: "博客模板",
    description:
      "先把列表页和详情页的阅读体验搭成型：主打文章、分类统计、栅格归档、正文排版全部已经有骨架。",
    href: "/blog",
  },
  {
    eyebrow: "Toolkit",
    title: "工具工作台",
    description:
      "工具页现在承接的是模块化信息：设计令牌、内容模型、导航系统、上线清单，适合以后再替换成真实资源。",
    href: "/tools",
  },
  {
    eyebrow: "Showcase",
    title: "项目展示层",
    description:
      "项目页负责拉开气场，把专题、案例、实验入口陈列得更像作品展示，而不是一个平铺直叙的链接列表。",
    href: "/projects",
  },
];

export const principles: Principle[] = [
  {
    title: "先立结构",
    description: "先把页面关系、信息层级和组件系统稳定下来，再决定接什么内容。",
  },
  {
    title: "统一语气",
    description: "首页、列表页、详情页、页脚和空状态都必须处在同一套视觉语言里。",
  },
  {
    title: "内容后置",
    description: "当前数据只承担占位职责，后续替换真实内容时，不需要再推倒模板重做。",
  },
];

export const timeline: TimelineEntry[] = [
  {
    year: "01",
    title: "定义视觉系统",
    description: "把颜色、字体、容器、圆角、阴影和模块节奏先统一成一套稳定表达。",
  },
  {
    year: "02",
    title: "铺开整站模板",
    description: "首页、博客、工具、项目、关于、404 与 loading 全部接到同一套母版上。",
  },
  {
    year: "03",
    title: "后续接入真实内容",
    description: "等骨架稳定后，再把未来的文章、项目、资源逐步换进来，不会再动大结构。",
  },
];
