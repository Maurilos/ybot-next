import type { Post } from "@/content/types";

export const posts: Post[] = [
  {
    slug: "editorial-home-blueprint",
    category: "品牌架构",
    categorySlug: "brand-system",
    publishedAt: "2026-04-16",
    readTime: "8 分钟",
    title: "首页要像封面，不要像公告栏",
    kicker: "Home / Editorial",
    summary:
      "先把首页的气场做出来：一句够稳的主标题、两层 CTA、三条主线入口，再配上足够松弛的留白和节奏。",
    tags: ["首页", "品牌", "Hero", "排版"],
    featured: true,
    rank: 0,
    sections: [
      {
        heading: "首页的任务不是解释一切",
        paragraphs: [
          "真正的大气感，往往不是东西越多越好，而是该重的地方足够重，该轻的地方敢留白。",
          "首页应该优先解决三件事：告诉访问者你是谁、这个站大概写什么、下一步该点哪里。",
        ],
      },
      {
        heading: "封面感来自层级，而不是特效",
        paragraphs: [
          "大标题、短副标题、明确按钮、干净分区，这些基础层级如果立住了，首页自然会更像一个成熟站点。",
          "真正决定质感的，通常是间距、行高、对齐和信息密度，而不是炫目的动效。",
        ],
        bullets: ["主标题足够大", "副标题足够短", "CTA 不超过两个", "首屏不塞满"],
      },
      {
        heading: "后面接内容时也不会乱",
        paragraphs: [
          "当首页已经是一套稳定的封面系统，真实文章和项目接进来时，只是替换内容，不是推倒结构。",
        ],
      },
    ],
  },
  {
    slug: "blog-layout-reading-rhythm",
    category: "内容设计",
    categorySlug: "content-design",
    publishedAt: "2026-04-14",
    readTime: "6 分钟",
    title: "博客列表页，应该像一本正在更新的刊物",
    kicker: "Blog / Reading",
    summary:
      "列表页的重点从来不是把卡片堆满，而是让读者愿意点进去。主打文章、分类条、归档栅格都只是为阅读路径服务。",
    tags: ["博客", "列表页", "阅读体验", "归档"],
    rank: 1,
    sections: [
      {
        heading: "给列表页一个视觉重心",
        paragraphs: [
          "如果所有文章卡片都一样大、一样吵，读者其实很难分辨从哪里开始读。",
          "主打文章的作用，就是给页面一个起点。",
        ],
      },
      {
        heading: "卡片要克制，标题要有分量",
        paragraphs: [
          "列表卡片应该服务标题和摘要，而不是让阴影、边框、装饰元素自己抢戏。",
        ],
        quote: "真正好用的博客列表页，第一眼应该先看到内容层级，而不是设计师炫技。",
      },
    ],
  },
  {
    slug: "tool-page-as-workbench",
    category: "系统模块",
    categorySlug: "systems",
    publishedAt: "2026-04-11",
    readTime: "5 分钟",
    title: "工具页更像工作台，不像杂货仓库",
    kicker: "Tools / Systems",
    summary:
      "工具页先展示方法、模块和结构，再慢慢替换成真实工具。这样页面会更稳，也更容易扩容。",
    tags: ["工具页", "模块", "结构", "信息架构"],
    rank: 2,
    sections: [
      {
        heading: "先定义工具页承担什么",
        paragraphs: [
          "工具页不一定非得立刻塞满真实工具，它完全可以先作为结构展示区，承接方法、清单和模块说明。",
        ],
      },
      {
        heading: "为未来预留接口",
        paragraphs: [
          "当真实资源进入时，替换的只会是文案和条目，不会是模板本身。",
        ],
      },
    ],
  },
  {
    slug: "project-grid-presence",
    category: "展示策略",
    categorySlug: "showcase",
    publishedAt: "2026-04-09",
    readTime: "7 分钟",
    title: "项目页的关键，不是数量，而是存在感",
    kicker: "Projects / Presence",
    summary:
      "项目页要把“值得看”的感觉立起来。一个好的展示页，会让作品像被正式陈列，而不是临时贴上去的链接。",
    tags: ["项目页", "展示", "卡片", "专题"],
    rank: 3,
    sections: [
      {
        heading: "项目页是一面展示墙",
        paragraphs: [
          "项目页通常承担的是信任感与完成度。它要让访问者一眼觉得，这个站背后是有整理能力和持续性的。",
        ],
      },
      {
        heading: "卡片之间要有主次",
        paragraphs: [
          "不是每个项目都该用同一种重量。主推项目、实验项目、长期栏目，本来就应该呈现出不同层级。",
        ],
      },
    ],
  },
];
