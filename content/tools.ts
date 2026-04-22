import { legacyResources } from "@/content/resources";
import type { Tool } from "@/content/types";

function getResource(slug: string) {
  const resource = legacyResources.find((item) => item.slug === slug);

  if (!resource) {
    throw new Error(`Missing legacy resource: ${slug}`);
  }

  return resource;
}

const agentSkills = getResource("agent-skills");
const wiki = getResource("wiki");
const daily = getResource("daily");
const links = getResource("links");
const fragments = getResource("fragments");

export const tools: Tool[] = [
  {
    slug: agentSkills.slug,
    name: agentSkills.title,
    category: "Agent Skills",
    priority: "62,000+ 工具 / 53 场景",
    useCase: "MCP / Debugging / Browser / API / GitHub / Notion 等场景索引",
    description:
      agentSkills.lines[0] || "旧站的 Agent Skills Hub，聚合 AI Agent 技能与场景导航。",
    note: agentSkills.lines.slice(1, 5).join(" · "),
    sourceUrl: agentSkills.url,
  },
  {
    slug: wiki.slug,
    name: wiki.title,
    category: "Wiki",
    priority: "知识沉淀",
    useCase: "Android / Basis / Network / OS / Design Patterns",
    description:
      wiki.lines[0] || "旧站的维基栏目，覆盖 Android、系统、网络与基础知识条目。",
    note: wiki.lines.slice(1, 4).join(" · "),
    sourceUrl: wiki.url,
  },
  {
    slug: daily.slug,
    name: daily.title,
    category: "Daily English",
    priority: "语言学习",
    useCase: "单词、短语、句子、月度英语学习汇总",
    description:
      daily.description || "旧站的 Daily English 栏目，用于英语输入与月度归档。",
    note: daily.lines.slice(0, 3).join(" · "),
    sourceUrl: daily.url,
  },
  {
    slug: fragments.slug,
    name: fragments.title,
    category: "Fragments",
    priority: "技术碎片",
    useCase: "Android / Edge / HTTPS / Kindle / macOS / Python / SSH",
    description:
      fragments.lines[0] || "旧站的碎片索引页，承载零散知识与简短观点。",
    note: fragments.lines.slice(2, 6).join(" · "),
    sourceUrl: fragments.url,
  },
  {
    slug: links.slug,
    name: links.title,
    category: "Links",
    priority: "友情链接",
    useCase: "站点互链、推荐站点与博客网络",
    description:
      links.description || "没有链接的博客是孤独的。",
    note: links.lines.join(" · "),
    sourceUrl: links.url,
  },
];
