import type { Tool } from "@/content/types";

export const tools: Tool[] = [
  {
    slug: "design-tokens",
    name: "视觉令牌",
    category: "Design System",
    priority: "Core",
    useCase: "颜色 / 圆角 / 阴影 / 字体 / 容器",
    description:
      "把全站的基础视觉变量先固化下来，保证首页、列表页、详情页和空状态都说同一种设计语言。",
    note: "后续无论接博客、资源还是项目，只要沿用这一层，整体气质就不会散。",
  },
  {
    slug: "content-schema",
    name: "内容模型",
    category: "Content Layer",
    priority: "High",
    useCase: "文章 / 工具 / 项目 / 站点信息",
    description:
      "先把内容结构拆成独立模块，未来接真实数据时只替换内容，不会反复动页面本身。",
    note: "这是整站模板化最值钱的一层，能让后续迭代轻很多。",
  },
  {
    slug: "navigation-patterns",
    name: "导航系统",
    category: "Navigation",
    priority: "High",
    useCase: "Header / 当前态 / 路由节奏 / 页面切换",
    description:
      "导航不仅是链接集合，更是品牌第一印象的一部分，所以要稳定、清楚，还得足够耐看。",
    note: "这次顺手把激活态也修正成了更清晰的反差，不会再糊成一团。",
  },
  {
    slug: "reading-layout",
    name: "阅读模板",
    category: "Reading",
    priority: "Core",
    useCase: "文章详情 / 侧栏 / 目录 / 上下篇",
    description:
      "详情页已经具备正式阅读模板需要的骨架：标题区、正文节奏、侧栏信息和相关阅读。",
    note: "文章以后换成真实内容，直接接入就能用。",
  },
  {
    slug: "launch-checklist",
    name: "上线清单",
    category: "Ops",
    priority: "Ready",
    useCase: "元信息 / 404 / Loading / 响应式 / 验证",
    description:
      "模板站最怕只有首屏好看、边角全漏。现在 404、loading、metadata 和多页面一致性已经补上。",
    note: "这层做扎实，后面不管接多少内容，站点都更稳。",
  },
];
