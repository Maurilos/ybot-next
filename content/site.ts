import snapshot from "@/content/legacy-site.snapshot.json";
import { legacyResources } from "@/content/resources";
import type { Metric, NavItem, Pillar, Principle, TimelineEntry } from "@/content/types";

const aboutPage = legacyResources.find((resource) => resource.slug === "about");

export const siteProfile = {
  title: snapshot.site.title,
  description: snapshot.site.description,
  heroTagline: snapshot.site.heroTagline,
  owner: snapshot.site.owner,
  aboutLines: aboutPage?.lines.slice(0, 5) ?? [],
  legacySections: snapshot.site.nav
    .filter((item, index, items) => {
      const key = `${item.path}-${item.label}`;
      return (
        ["首页", "分享", "归档", "碎片", "英语", "维基", "Agent Skills", "链接", "关于"].includes(item.label) &&
        items.findIndex((candidate) => `${candidate.path}-${candidate.label}` === key) === index
      );
    })
    .slice(0, 9),
};

export const navigation: NavItem[] = [
  { href: "/", label: "首页" },
  { href: "/blog", label: "文章" },
  { href: "/tools", label: "资源" },
  { href: "/projects", label: "栏目" },
  { href: "/about", label: "关于" },
];

export const heroMetrics: Metric[] = [
  {
    label: "旧站文章",
    value: `${snapshot.posts.length} 篇`,
    detail: "已把旧站当前可索引的正式文章清单抓成本地快照，用于静态迁移。",
  },
  {
    label: "栏目页面",
    value: `${legacyResources.length} 个`,
    detail: "About、Wiki、Daily、Fragments、Agent Skills 等页面已经进入迁移素材层。",
  },
  {
    label: "作者与出处",
    value: `@${snapshot.site.owner.githubHandle}`,
    detail: `${snapshot.site.owner.location} · 来自旧站公开页面与搜索索引快照。`,
  },
];

export const homePillars: Pillar[] = [
  {
    eyebrow: "Articles",
    title: "旧站文章",
    description:
      "把 ybot.top 当前首页可见的三篇正式文章迁进新模板：两篇 Claude 深度解析，一篇认知主题文章。",
    href: "/blog",
  },
  {
    eyebrow: "Resources",
    title: "资源栏目",
    description:
      "Agent Skills、Wiki、Daily English、Links 等栏目开始进入统一的资源页，不再散落在旧站的不同导航节点里。",
    href: "/tools",
  },
  {
    eyebrow: "Columns",
    title: "重点栏目",
    description:
      "Open Source、Fragments、Mindmap Viewer 这类更像专题或产品入口的页面，被重新整理进新站的栏目展示层。",
    href: "/projects",
  },
];

export const principles: Principle[] = [
  {
    title: "先抓公开快照，再本地静态化",
    description:
      "这次迁移不是运行时去抓旧站，而是把旧站公开内容保存为本地快照，再喂给新模板，保证构建稳定。",
  },
  {
    title: "模板负责统一表达，内容负责还原身份",
    description:
      "新站继续保持更大气的视觉系统，但文案、文章标题、栏目说明已经开始回到 YBot Archive 的真实语境。",
  },
  {
    title: "旧站栏目不丢，新站结构重排",
    description:
      "旧站有分享、碎片、英语、维基、Agent Skills、链接等栏目，新站会在更清楚的层级里把它们重新组织起来。",
  },
];

export const timeline: TimelineEntry[] = [
  {
    year: "01",
    title: "抓取旧站公开索引",
    description: "已经从首页、搜索索引、feed 与关键栏目页生成本地迁移快照。",
  },
  {
    year: "02",
    title: "映射到新站内容模型",
    description: "把文章、资源栏目、专题页拆成独立模块，开始替换掉模板示例文案。",
  },
  {
    year: "03",
    title: "逐步扩展更多存量页面",
    description: "下一步可以继续把 archives、categories 以及更细的 wiki 条目、碎片条目往新结构里扩。",
  },
];
