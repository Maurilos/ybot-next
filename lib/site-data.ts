export type NavItem = {
  href: string;
  label: string;
};

export type Metric = {
  label: string;
  value: string;
  detail: string;
};

export type Pillar = {
  eyebrow: string;
  title: string;
  description: string;
  href: string;
};

export type Project = {
  name: string;
  tag: string;
  summary: string;
  detail: string;
  outcome: string;
  href: string;
};

export type Tool = {
  name: string;
  category: string;
  useCase: string;
  description: string;
  note: string;
};

export type TimelineEntry = {
  year: string;
  title: string;
  description: string;
};

export type Principle = {
  title: string;
  description: string;
};

export type PostSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
  quote?: string;
};

export type Post = {
  slug: string;
  category: string;
  date: string;
  readTime: string;
  title: string;
  kicker: string;
  summary: string;
  tags: string[];
  sections: PostSection[];
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

export const projects: Project[] = [
  {
    name: "YBOT Atlas",
    tag: "内容体系",
    summary: "把旧站散落的内容、栏目和入口重新整理成一张清晰的信息地图。",
    detail:
      "首页、列表页、详情页都共享统一的视觉骨架，后续只需要替换数据源，不需要再推翻样式层。",
    outcome: "目标：更稳的内容沉淀，更清楚的品牌路径。",
    href: "/projects",
  },
  {
    name: "Signal Deck",
    tag: "品牌表达",
    summary: "用更厚重的标题、更开阔的留白和更讲究的模块节奏，抬高整站气场。",
    detail:
      "在参考站的极简基础上增加编辑感、深色场景和品牌锚点，让首页更像门面而不是普通博客入口。",
    outcome: "目标：让 YBOT 一眼有辨识度，而不是像任何一个套皮站。",
    href: "/about",
  },
  {
    name: "Workflow Forge",
    tag: "实验室",
    summary: "把 AI 工具、自动化和实战工作流放进更适合展示的方法论模板。",
    detail:
      "工具页和项目页不是平铺卡片，而是给出适用场景、使用手感和真正值得留下的结论。",
    outcome: "目标：从资源堆积，升级成可反复引用的工作台。",
    href: "/tools",
  },
];

export const tools: Tool[] = [
  {
    name: "Claude / GPT",
    category: "写作与编排",
    useCase: "起稿、拆结构、重写文案、扩充研究框架",
    description:
      "把零散想法迅速压成可发布的框架，尤其适合博客、专题页和 landing page 的初稿搭建。",
    note: "重点不是一次写完，而是把内容骨架先拉齐。",
  },
  {
    name: "Perplexity",
    category: "研究与选题",
    useCase: "热点扫描、资料交叉验证、抓取行业语境",
    description:
      "适合用来确认方向感，把一堆模糊关键词压缩成几个值得深挖的主题。",
    note: "更适合做前置研究，而不是最终结论。",
  },
  {
    name: "Cursor / Codex",
    category: "开发与实现",
    useCase: "前端模板搭建、样式细修、结构重构",
    description:
      "对这种整站模板化项目特别顺手，能把页面系统、卡片语言和布局节奏快速统一。",
    note: "适合先搭系统，再慢慢挂内容。",
  },
  {
    name: "n8n",
    category: "自动化",
    useCase: "信息收集、表单转发、内容归档、推送流程",
    description:
      "用来把网站后续的订阅、线索、素材整理串起来，比纯手动维护省很多重复动作。",
    note: "真正值钱的是流程稳定，而不是节点堆得花。",
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

export const posts: Post[] = [
  {
    slug: "build-a-signal-first-site",
    category: "品牌站",
    date: "2026-04-22",
    readTime: "8 min",
    title: "把个人网站做成一个信号场，而不是资料堆",
    kicker: "Template System",
    summary:
      "网站一旦同时承载博客、工具、项目和个人表达，最容易烂成一个什么都想塞的仓库。真正该先做的不是加功能，而是建立能承受增长的模板秩序。",
    tags: ["信息架构", "个人品牌", "网站改版"],
    sections: [
      {
        heading: "先承认一个事实：内容站不是首页海报",
        paragraphs: [
          "很多个人网站一打开很漂亮，但只要点进二级页就散架。首页是一个风格，列表页像后台导出，文章页又回到默认博客皮，用户很难感到这是同一个品牌。",
          "所以改版的第一刀不该砍在颜色上，而该砍在模板层。首页、栏目页、详情页、页脚、卡片、按钮、标签，这些必须说同一种视觉语言。",
        ],
        quote:
          "真正撑起品牌感的，不是一张 hero 图，而是整站每个页面都像从同一副骨架长出来。",
      },
      {
        heading: "参考可以借气质，不能借身份",
        paragraphs: [
          "参考站给你的启发是节奏、留白和内容优先，而不是复制它的神态。你的网站要比参考对象更像你自己，这样迁移完旧内容之后才不会显得借壳。",
          "如果 YBOT 想更大气、更个性，那就得在标题压迫感、区块层次、暗色场景和品牌锚点上故意拉开差异。",
        ],
        bullets: [
          "标题更大，节奏更强",
          "区块切换更有呼吸",
          "卡片边界更鲜明",
          "页脚不当收尾，而当第二主场",
        ],
      },
      {
        heading: "模板先行，内容接驳才会顺",
        paragraphs: [
          "先用一套稳定模板把首页、博客、工具、项目、关于页做通，再把旧站的真实内容逐页挂进去，这样改版过程最省劲。",
          "前期所有新页面都可以先吃假数据，只要结构跑顺，后面替换成真实数据源就是机械活。",
        ],
      },
    ],
  },
  {
    slug: "editorial-rhythm-for-modern-blogs",
    category: "设计系统",
    date: "2026-04-20",
    readTime: "6 min",
    title: "现代内容站最容易输掉的，其实是页面节奏",
    kicker: "Editorial Rhythm",
    summary:
      "有些站明明配色不差、卡片不丑，却依旧显得薄。问题通常不在单个组件，而在全站节奏太平，哪里都一样重。",
    tags: ["视觉层级", "页面节奏", "卡片系统"],
    sections: [
      {
        heading: "别把每个模块都做成同一个音量",
        paragraphs: [
          "当 Hero、文章列表、项目卡、CTA 和 Footer 全都用相似的背景、相似的边框和相似的空间密度时，页面会像一条没有起伏的直线。",
          "真正高级的首页不是塞更多，而是知道哪里该重、哪里该轻、哪里该给空气。",
        ],
      },
      {
        heading: "大气感来自空间分配，不来自花哨装饰",
        paragraphs: [
          "更大的标题、更长的留白、更克制的颜色、更明确的分区切换，会比任何炫技动画更能抬高内容站的气场。",
          "这也是为什么很多所谓高级模板，最后看起来还是像模板市场货，因为它们只学会了边框和圆角，没学会空间怎么说话。",
        ],
        quote: "真正的贵气，常常是页面敢留空。",
      },
      {
        heading: "文章页必须和首页同一个气质",
        paragraphs: [
          "如果正文宽度、标题区、目录、引用、代码块和底部推荐都没有被设计过，那首页再强也只是门口好看。",
          "详情页才是内容站真正待客的房间。要让人愿意读下去，阅读节奏必须被认真安排。",
        ],
      },
    ],
  },
  {
    slug: "from-links-to-curation",
    category: "工具目录",
    date: "2026-04-18",
    readTime: "7 min",
    title: "工具页别再只放链接了，把它做成真正能复用的工作台",
    kicker: "Tool Curation",
    summary:
      "工具页最常见的问题，是只知道收录，不知道筛选。真正有价值的工具目录，应该能告诉人为什么留、什么时候用、值不值得长期放进自己的系统。",
    tags: ["AI 工具", "工作流", "资源页"],
    sections: [
      {
        heading: "链接越多，不代表价值越大",
        paragraphs: [
          "很多资源页看起来很勤奋，实则只是把别处的链接搬了过来。用户扫一眼会觉得热闹，但记不住，也拿不走。",
          "更好的方法是给每个工具一个明确位置：它解决什么问题、在什么场景下最好用、和别的工具相比值不值得留。",
        ],
      },
      {
        heading: "把工具页做成选择系统",
        paragraphs: [
          "当工具卡片除了名字和简介，还能告诉人使用手感、适用场景和替代关系，整个页面就从链接仓库升级成决策界面。",
          "这会让工具页天然更像品牌资产，因为它表达的是你的判断，而不是搜索结果。",
        ],
        bullets: [
          "工具归类要服务任务，而不是服务平台名字",
          "描述里要写真使用场景",
          "保留少量主观结论，页面会更有你自己的锋利度",
        ],
      },
      {
        heading: "风格统一，内容才显得可靠",
        paragraphs: [
          "如果工具页和博客页像两个产品，信任感会被稀释。视觉模板统一以后，用户会把所有内容都看成同一个人长期输出的一部分。",
          "这也是模板化的意义：不是为了省几小时，而是为了让整个站点形成稳定记忆。",
        ],
      },
    ],
  },
  {
    slug: "project-pages-that-feel-like-case-studies",
    category: "项目展示",
    date: "2026-04-16",
    readTime: "5 min",
    title: "项目页不该只是截图墙，它应该像一份持续更新的案例档案",
    kicker: "Case Study",
    summary:
      "个人项目真正值钱的从来不只是功能列表，而是你怎么判断问题、怎么取舍、怎么把一个想法慢慢抬成作品。",
    tags: ["项目页", "案例研究", "产品叙事"],
    sections: [
      {
        heading: "从功能描述转向决策描述",
        paragraphs: [
          "一个项目如果只写支持什么功能，读者记住的通常只有名词。可一旦你开始解释为什么这么设计、为了什么人、砍掉了什么，项目就有了人格。",
          "这种叙述方式尤其适合内容型个人网站，因为它能把作品和作者绑在一起。",
        ],
      },
      {
        heading: "项目页是品牌可信度的重锤",
        paragraphs: [
          "博客负责展示思考，工具页负责展示筛选，项目页负责证明你真的做过。三者连起来，个人站才会从内容集合升级成可信赖的品牌场。",
          "所以项目页的卡片、结构、配色和版式都应该比普通列表页更稳、更厚，像案例墙而不是公告板。",
        ],
      },
    ],
  },
];

export function getPostBySlug(slug: string) {
  return posts.find((post) => post.slug === slug);
}

export function getAdjacentPosts(slug: string) {
  const currentIndex = posts.findIndex((post) => post.slug === slug);

  return {
    previous: currentIndex > 0 ? posts[currentIndex - 1] : undefined,
    next: currentIndex >= 0 && currentIndex < posts.length - 1 ? posts[currentIndex + 1] : undefined,
  };
}
