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
  title: "工具",
  description: "YBOT 的工具目录模板页，用更清晰的分类和判断语气展示工作流资源。",
};

export default function ToolsPage() {
  const tools = getAllTools();

  return (
    <>
      <PageHero
        eyebrow="Tool Curation"
        title="工具页不再只是收藏夹，它会像一张带判断的作战桌。"
        description="这一页的重点不是把链接铺满，而是把工具和任务关系讲清楚：什么时候用、为什么留、适不适合长期放进自己的系统。"
        compact
        actions={
          <>
            <PrimaryLink href="/projects">看项目页模板</PrimaryLink>
            <SecondaryLink href="/blog">回到内容页</SecondaryLink>
          </>
        }
      />

      <section className="py-20 md:py-24">
        <Container>
          <SectionHeading
            eyebrow="Curated Stack"
            title="不是收录越多越好，而是留下真正会反复用的。"
            description="工具页在整站里的角色，是把散乱资源提炼成判断系统。每一张卡都应该替你回答一个现实问题。"
          />
          <div className="grid gap-6 md:grid-cols-2">
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
              按任务分组
            </h2>
            <p className="mt-4 text-base leading-8 text-[var(--color-muted)]">
              工具分类不该围着平台名字转，而该围着具体任务：研究、写作、开发、自动化、发布。
            </p>
          </Surface>
          <Surface className="p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-muted)]">02</p>
            <h2 className="font-display mt-4 text-3xl tracking-[-0.04em] text-[var(--color-foreground)]">
              写明使用手感
            </h2>
            <p className="mt-4 text-base leading-8 text-[var(--color-muted)]">
              光有功能描述没有判断，页面就没有人格。哪怕一句短评，也比复制官网介绍更值钱。
            </p>
          </Surface>
          <Surface className="p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-muted)]">03</p>
            <h2 className="font-display mt-4 text-3xl tracking-[-0.04em] text-[var(--color-foreground)]">
              保持和博客同气质
            </h2>
            <p className="mt-4 text-base leading-8 text-[var(--color-muted)]">
              当工具页和文章页看起来像一个品牌产物，整个站点的可信度会明显往上抬。
            </p>
          </Surface>
        </Container>
      </section>
    </>
  );
}
