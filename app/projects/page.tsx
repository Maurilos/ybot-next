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
import { projects } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "项目",
  description: "YBOT 的项目展示模板页，用更稳的节奏把作品讲成持续更新的案例。",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Selected Work"
        title="项目页要像案例研究，不像一堵冷冰冰的截图墙。"
        description="这里的叙事重点不是功能名词，而是你怎么判断、怎么取舍、怎么把一个想法慢慢锻造成作品。"
        compact
        actions={
          <>
            <PrimaryLink href="/about">查看方法说明</PrimaryLink>
            <SecondaryLink href="/tools">看工具工作台</SecondaryLink>
          </>
        }
      />

      <section className="py-20 md:py-24">
        <Container>
          <SectionHeading
            eyebrow="Case Study Board"
            title="作品是品牌的重锤，项目页必须够稳。"
            description="博客告诉人你想什么，工具页告诉人你怎么筛选，项目页则证明你真的做过。三者一起，站点才会有可信度。"
          />
          <div className="grid gap-6 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-black/8 bg-white/42 py-20 md:py-24">
        <Container className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <Surface className="p-8 md:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-muted)]">
              What Changes Here
            </p>
            <h2 className="font-display mt-4 text-4xl tracking-[-0.05em] text-[var(--color-foreground)] md:text-5xl">
              这一版项目模板会比参考站更厚，更像真正的品牌资产页。
            </h2>
            <p className="mt-5 text-base leading-8 text-[var(--color-muted)]">
              更明显的板块区分、更稳的卡片体量、更强的结果导向表达，会让项目页天然比普通内容列表更有说服力。
            </p>
          </Surface>
          <Surface className="p-8 md:p-10">
            <div className="space-y-5 text-sm leading-7 text-[var(--color-foreground)]/84 md:text-base md:leading-8">
              <p>— 每个项目都应该交代目标、结构、取舍和阶段性产出。</p>
              <p>— 项目卡片的重量感要高于普通博客卡片，才能形成层级差异。</p>
              <p>— 如果未来接入真实案例，直接沿着这套版式扩展就够了。</p>
            </div>
          </Surface>
        </Container>
      </section>
    </>
  );
}
