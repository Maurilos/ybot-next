import type { Metadata } from "next";

import { ProjectCard } from "@/components/cards";
import {
  Container,
  PageHero,
  PrimaryLink,
  SecondaryLink,
  SectionHeading,
  Surface,
} from "@/components/site-primitives";
import { getAllProjects } from "@/lib/content";

export const metadata: Metadata = {
  title: "栏目",
  description: "从 ybot.top 旧站迁来的重点栏目与专题入口，包括 Open Source、Fragments 与 Mindmap Viewer。",
};

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <>
      <PageHero
        eyebrow="Legacy Columns"
        title="旧站里那些更像“产品 / 专题”的页面，已经被提取成独立栏目。"
        description="Open Source Projects、Fragments、Mindmap Viewer 这些页面在旧站里是分散入口，现在被重新整理成更像专题卡片的展示层。"
        compact
        actions={
          <>
            <PrimaryLink href="https://ybot.top/open-source/">查看旧站开源页</PrimaryLink>
            <SecondaryLink href="/tools">看资源工作台</SecondaryLink>
          </>
        }
      />

      <section className="py-20 md:py-24">
        <Container>
          <SectionHeading
            eyebrow="Selected Columns"
            title="这些是旧站里最适合被重新包装的入口。"
            description="它们在老站已经有公开页面与内容线索，新站要做的是把它们的辨识度、结构和可继续扩展性拉起来。"
          />
          <div className="grid gap-6 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-black/8 bg-white/42 py-20 md:py-24">
        <Container className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <Surface className="p-8 md:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-muted)]">
              Column Strategy
            </p>
            <h2 className="font-display mt-4 text-4xl tracking-[-0.05em] text-[var(--color-foreground)] md:text-5xl">
              新站不会照抄旧站样式，但会保留旧站的内容身份。 
            </h2>
            <p className="mt-5 text-base leading-8 text-[var(--color-muted)]">
              所以这些页面在新站里不再只是旧模板里的一个链接，而会变成真正有气场、有摘要、有延展空间的栏目模块。 
            </p>
          </Surface>
          <Surface className="p-8 md:p-10">
            <div className="space-y-5 text-sm leading-7 text-[var(--color-foreground)]/84 md:text-base md:leading-8">
              <p>— Open Source 可以继续细化成仓库卡片、更新时间和外链结构。</p>
              <p>— Fragments 很适合以后变成独立短内容流。</p>
              <p>— Mindmap Viewer 这类轻工具页，适合纳入新站的实验/工具入口层。</p>
            </div>
          </Surface>
        </Container>
      </section>
    </>
  );
}
