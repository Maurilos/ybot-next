import type { Metadata } from "next";

import { ToolCard } from "@/components/cards";
import {
  Container,
  PageHero,
  PrimaryLink,
  SecondaryLink,
  SectionHeading,
  Surface,
} from "@/components/site-primitives";
import { getAllTools } from "@/lib/content";

export const metadata: Metadata = {
  title: "资源",
  description: "从 ybot.top 旧站迁来的资源与栏目页，包括 Agent Skills、Wiki、Daily English、Fragments 与 Links。",
};

export default function ToolsPage() {
  const tools = getAllTools();

  return (
    <>
      <PageHero
        eyebrow="Legacy Resources"
        title="旧站那些分散的资源页，正在被收进同一个资源工作台。"
        description="Agent Skills、Wiki、Daily English、Fragments、Links 这些页面原本各自散落在老导航里。现在它们开始以统一卡片语言进入新站。"
        compact
        actions={
          <>
            <PrimaryLink href="https://ybot.top/agent-skills/">看旧站 Agent Skills</PrimaryLink>
            <SecondaryLink href="/blog">回到文章页</SecondaryLink>
          </>
        }
      />

      <section className="py-20 md:py-24">
        <Container>
          <SectionHeading
            eyebrow="Migrated Resources"
            title="这些不再是占位内容，而是旧站真实栏目。"
            description="每张卡片都来自旧站公开页快照，包含真实标题、栏目定位和公开描述。"
          />
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {tools.map((tool) => (
              <ToolCard key={tool.slug} tool={tool} />
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-black/8 bg-white/42 py-20 md:py-24">
        <Container className="grid gap-6 lg:grid-cols-3">
          <Surface className="p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-muted)]">01</p>
            <h2 className="font-display mt-4 text-3xl tracking-[-0.04em] text-[var(--color-foreground)]">
              Agent Skills
            </h2>
            <p className="mt-4 text-base leading-8 text-[var(--color-muted)]">
              旧站已经把 Agent Skills 做成独立 hub，并公开了场景规模与同步频率，这块内容很适合继续产品化。
            </p>
          </Surface>
          <Surface className="p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-muted)]">02</p>
            <h2 className="font-display mt-4 text-3xl tracking-[-0.04em] text-[var(--color-foreground)]">
              Wiki / Daily / Fragments
            </h2>
            <p className="mt-4 text-base leading-8 text-[var(--color-muted)]">
              这些页面构成了旧站的知识沉淀层：长条目、学习输入和短碎片都各有归宿，现在要做的是让它们在新站更清楚。 
            </p>
          </Surface>
          <Surface className="p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-muted)]">03</p>
            <h2 className="font-display mt-4 text-3xl tracking-[-0.04em] text-[var(--color-foreground)]">
              Links
            </h2>
            <p className="mt-4 text-base leading-8 text-[var(--color-muted)]">
              友情链接这种页看着小，但它很能体现一个站点的网络关系。迁过来以后，它会比老样式更像一个完整模块。 
            </p>
          </Surface>
        </Container>
      </section>
    </>
  );
}
