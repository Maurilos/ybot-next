import type { Project } from "@/content/types";

export const projects: Project[] = [
  {
    slug: "ybot-atlas",
    name: "YBOT Atlas",
    tag: "内容体系",
    year: "2026",
    status: "In Progress",
    summary: "把旧站散落的内容、栏目和入口重新整理成一张清晰的信息地图。",
    detail:
      "首页、列表页、详情页都共享统一的视觉骨架，后续只需要替换数据源，不需要再推翻样式层。",
    outcome: "目标：更稳的内容沉淀，更清楚的品牌路径。",
    href: "/projects",
    featured: true,
  },
  {
    slug: "signal-deck",
    name: "Signal Deck",
    tag: "品牌表达",
    year: "2026",
    status: "Design System",
    summary: "用更厚重的标题、更开阔的留白和更讲究的模块节奏，抬高整站气场。",
    detail:
      "在参考站的极简基础上增加编辑感、深色场景和品牌锚点，让首页更像门面而不是普通博客入口。",
    outcome: "目标：让 YBOT 一眼有辨识度，而不是像任何一个套皮站。",
    href: "/about",
    featured: true,
  },
  {
    slug: "workflow-forge",
    name: "Workflow Forge",
    tag: "实验室",
    year: "2026",
    status: "Content Ops",
    summary: "把 AI 工具、自动化和实战工作流放进更适合展示的方法论模板。",
    detail:
      "工具页和项目页不是平铺卡片，而是给出适用场景、使用手感和真正值得留下的结论。",
    outcome: "目标：从资源堆积，升级成可反复引用的工作台。",
    href: "/tools",
    featured: true,
  },
];
