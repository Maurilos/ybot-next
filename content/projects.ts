import type { Project } from "@/content/types";

export const projects: Project[] = [
  {
    slug: "feature-showcase",
    name: "作品陈列面板",
    tag: "Showcase",
    year: "2026",
    status: "旗舰模块",
    summary:
      "用于承接真正重要的项目、专题或实验入口。它不求多，只求第一眼就有完成度和辨识度。",
    detail: "适合未来放主打项目、长期专题、独立产品或代表性案例。",
    outcome: "后面只要换内容，不需要再重做结构。",
    href: "/projects",
    featured: true,
  },
  {
    slug: "lab-column",
    name: "实验栏目区",
    tag: "Lab",
    year: "2026",
    status: "持续更新",
    summary:
      "给轻实验、阶段性尝试和专题试水留一个正式位置，让它们看起来像正在成长的作品，而不是边角料。",
    detail: "适合未来接小工具、测试页、短专题和未完成但值得展示的方向。",
    outcome: "站点会因此更有呼吸感，不会只剩文章归档。",
    href: "/projects",
    featured: true,
  },
  {
    slug: "case-archive",
    name: "案例归档层",
    tag: "Archive",
    year: "2026",
    status: "可扩容",
    summary:
      "一层更偏结构化的项目归档，用来承接未来越来越多的作品条目，同时保持页面秩序。",
    detail: "适合继续细分成案例卡片、更新时间、分类标签与结果摘要。",
    outcome: "数量上来以后，站点依然不会乱。",
    href: "/projects",
    featured: true,
  },
];
