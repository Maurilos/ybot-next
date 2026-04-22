import { legacyResources } from "@/content/resources";
import type { Project } from "@/content/types";

function getResource(slug: string) {
  const resource = legacyResources.find((item) => item.slug === slug);

  if (!resource) {
    throw new Error(`Missing legacy resource: ${slug}`);
  }

  return resource;
}

const openSource = getResource("open-source");
const fragments = getResource("fragments");
const mindmap = getResource("mindmap-viewer");

export const projects: Project[] = [
  {
    slug: openSource.slug,
    name: openSource.title,
    tag: "开源栏目",
    year: "2026",
    status: "11 GitHub projects",
    summary:
      openSource.description || "旧站的开源项目页，集中展示 GitHub 仓库与更新节奏。",
    detail: openSource.lines.slice(3, 8).join(" · "),
    outcome: "把仓库列表从旧站风格迁进新站后，可以进一步接项目封面、摘要和外链。",
    href: "/projects",
    featured: true,
    sourceUrl: openSource.url,
  },
  {
    slug: fragments.slug,
    name: fragments.title,
    tag: "碎片索引",
    year: "2026",
    status: "知识片段归档",
    summary:
      fragments.lines[0] || "旧站的碎片页，把零散问题和操作记录聚合成一个索引面。",
    detail: fragments.lines.slice(2, 7).join(" · "),
    outcome: "这类短条目后面适合拆成独立短内容流，做成更现代的 fragment archive。",
    href: "/projects",
    featured: true,
    sourceUrl: fragments.url,
  },
  {
    slug: mindmap.slug,
    name: mindmap.title,
    tag: "脑图工具",
    year: "2026",
    status: "全屏查看器",
    summary:
      mindmap.description || "旧站已有独立 mindmap viewer 页面，可以作为轻量工具入口。",
    detail: "当前公开抓到的信息较少，但栏目与功能定位已经明确，可继续补页面内容和视觉表现。",
    outcome: "适合作为后续产品化小工具入口，纳入新站的栏目展示层。",
    href: "/projects",
    featured: true,
    sourceUrl: mindmap.url,
  },
];
