import type { Tool } from "@/content/types";

export const tools: Tool[] = [
  {
    slug: "claude-gpt",
    name: "Claude / GPT",
    category: "写作与编排",
    priority: "Core Stack",
    useCase: "起稿、拆结构、重写文案、扩充研究框架",
    description:
      "把零散想法迅速压成可发布的框架，尤其适合博客、专题页和 landing page 的初稿搭建。",
    note: "重点不是一次写完，而是把内容骨架先拉齐。",
  },
  {
    slug: "perplexity",
    name: "Perplexity",
    category: "研究与选题",
    priority: "Research Layer",
    useCase: "热点扫描、资料交叉验证、抓取行业语境",
    description:
      "适合用来确认方向感，把一堆模糊关键词压缩成几个值得深挖的主题。",
    note: "更适合做前置研究，而不是最终结论。",
  },
  {
    slug: "cursor-codex",
    name: "Cursor / Codex",
    category: "开发与实现",
    priority: "Execution",
    useCase: "前端模板搭建、样式细修、结构重构",
    description:
      "对这种整站模板化项目特别顺手，能把页面系统、卡片语言和布局节奏快速统一。",
    note: "适合先搭系统，再慢慢挂内容。",
  },
  {
    slug: "n8n",
    name: "n8n",
    category: "自动化",
    priority: "Ops",
    useCase: "信息收集、表单转发、内容归档、推送流程",
    description:
      "用来把网站后续的订阅、线索、素材整理串起来，比纯手动维护省很多重复动作。",
    note: "真正值钱的是流程稳定，而不是节点堆得花。",
  },
];
