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
  title: "项目",
  description: "YBOT 的项目模板页，用来承接未来的作品、专题和实验入口。",
};

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <>
      <PageHero
        eyebrow="Project Showcase"
        title="项目页负责把这座站的存在感拉出来。"
        description="这里先不用历史条目，而是用占位项目卡定义展示方式、层级关系和扩展空间。以后接案例、专题或产品都更顺。"
        compact
        actions={
          <>
            <PrimaryLink href="/blog">看博客页</PrimaryLink>
            <SecondaryLink href="/tools">看工具页</SecondaryLink>
          </>
        }
      />

      <section className="py-20 md:py-24">
        <Container>
          <SectionHeading
            eyebrow="Selected Projects"
            title="项目区先把陈列感做出来。"
            description="真正大气的项目页，不是堆很多卡片，而是让每张卡都有位置、有主次、有存在感。"
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
              Showcase Strategy
            </p>
            <h2 className="font-display mt-4 text-4xl tracking-[-0.05em] text-[var(--color-foreground)] md:text-5xl">
              先把版式做得像作品墙，再决定挂什么作品。
            </h2>
            <p className="mt-5 text-base leading-8 text-[var(--color-muted)]">
              这一步做对以后，项目页天然就会更有品牌感，不会像从博客列表里顺手分出来的附属页面。
            </p>
          </Surface>
          <Surface className="p-8 md:p-10">
            <div className="space-y-5 text-sm leading-7 text-[var(--color-foreground)]/84 md:text-base md:leading-8">
              <p>— 主打项目负责抬高页面气场。</p>
              <p>— 实验项目负责让站点保持活性。</p>
              <p>— 归档型项目负责让未来扩容时依旧清楚。</p>
            </div>
          </Surface>
        </Container>
      </section>
    </>
  );
}
