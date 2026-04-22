import type { Metadata } from "next";

import { siteProfile, timeline } from "@/content/site";
import {
  Container,
  PageHero,
  PrimaryLink,
  SecondaryLink,
  SectionHeading,
  Surface,
} from "@/components/site-primitives";
import { getContentSnapshot } from "@/lib/content";

export const metadata: Metadata = {
  title: "关于",
  description: "YBOT 模板站的定位、结构说明与当前搭建状态。",
};

export default function AboutPage() {
  const snapshot = getContentSnapshot();

  return (
    <>
      <PageHero
        eyebrow="About The Build"
        title="这是一份整站母版说明。"
        description={`${siteProfile.aboutLines[0]} 当前已经有 ${snapshot.postCount} 篇示例文章、${snapshot.toolCount} 个工具模块和 ${snapshot.projectCount} 个项目卡位，用来验证结构。`}
        compact
        actions={
          <>
            <PrimaryLink href="/">回到首页</PrimaryLink>
            <SecondaryLink href="/blog">查看博客模板</SecondaryLink>
          </>
        }
      />

      <section className="py-20 md:py-24">
        <Container>
          <SectionHeading
            eyebrow="Profile"
            title="这版站点的目标很简单：先让架构成熟。"
            description="先把信息层级、阅读节奏和模块边界打磨到舒服，再考虑接入哪些真实内容。"
          />
          <div className="grid gap-6 lg:grid-cols-2">
            {siteProfile.aboutLines.map((line) => (
              <Surface key={line} className="h-full p-8">
                <p className="text-base leading-8 text-[var(--color-foreground)]/84">{line}</p>
              </Surface>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-black/8 bg-white/42 py-20 md:py-24">
        <Container>
          <SectionHeading
            eyebrow="Build Notes"
            title="关于这套模板的几个锚点。"
            description="它不是临时拼出来的几页，而是一套能继续长东西的结构。"
          />
          <div className="grid gap-6 lg:grid-cols-3">
            <Surface className="p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-muted)]">Name</p>
              <p className="font-display mt-4 text-4xl tracking-[-0.05em] text-[var(--color-foreground)]">
                {siteProfile.owner.displayName}
              </p>
              <p className="mt-4 text-base leading-8 text-[var(--color-muted)]">
                先把这个站当成一块内容母版，而不是急着还原旧页面。
              </p>
            </Surface>
            <Surface className="p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-muted)]">Role</p>
              <p className="font-display mt-4 text-4xl tracking-[-0.05em] text-[var(--color-foreground)]">
                {siteProfile.owner.role}
              </p>
              <p className="mt-4 text-base leading-8 text-[var(--color-muted)]">
                首页、博客、工具和项目都围绕同一套编辑感与品牌感来组织。
              </p>
            </Surface>
            <Surface className="p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-muted)]">Base</p>
              <p className="font-display mt-4 text-4xl tracking-[-0.05em] text-[var(--color-foreground)]">
                {siteProfile.owner.location}
              </p>
              <p className="mt-4 text-base leading-8 text-[var(--color-muted)]">
                当前只保留站点应该有的骨架、节奏和气场，不依赖旧内容才能成立。
              </p>
            </Surface>
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-24">
        <Container>
          <SectionHeading
            eyebrow="Execution"
            title="这套站是按阶段推进的。"
            description="先固定视觉和模板，再逐步填内容，这样后面就不会反复返工。"
          />
          <div className="grid gap-6 lg:grid-cols-3">
            {timeline.map((item) => (
              <Surface key={item.year} className="h-full p-8">
                <p className="font-display text-5xl tracking-[-0.05em] text-[var(--color-accent-strong)]">
                  {item.year}
                </p>
                <h2 className="mt-6 text-2xl font-semibold tracking-[-0.03em] text-[var(--color-foreground)]">
                  {item.title}
                </h2>
                <p className="mt-4 text-base leading-8 text-[var(--color-muted)]">
                  {item.description}
                </p>
              </Surface>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
