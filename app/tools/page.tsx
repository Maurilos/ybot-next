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
  description: "YBOT 的工具模板页，先承接模块说明、方法层和未来可替换的工具入口。",
};

export default function ToolsPage() {
  const tools = getAllTools();

  return (
    <>
      <PageHero
        eyebrow="Template Modules"
        title="工具页先做成一个像工作台的地方，再慢慢填进真实资源。"
        description="当前这页先承接方法、模块和系统说明，用占位数据把结构跑顺。未来如果接入真实工具，只需要替换条目。"
        compact
        actions={
          <>
            <PrimaryLink href="/about">看站点说明</PrimaryLink>
            <SecondaryLink href="/blog">回到博客页</SecondaryLink>
          </>
        }
      />

      <section className="py-20 md:py-24">
        <Container>
          <SectionHeading
            eyebrow="Module Grid"
            title="现在先展示“结构”，不是展示历史数据。"
            description="每张卡片都是一个可复用模块方向，目的是让工具页在没有真实内容时也有完成度。"
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
              先定义模块边界
            </h2>
            <p className="mt-4 text-base leading-8 text-[var(--color-muted)]">
              工具页的任务先说清楚：展示方法、清单和工作流，不急着堆真实资源。
            </p>
          </Surface>
          <Surface className="p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-muted)]">02</p>
            <h2 className="font-display mt-4 text-3xl tracking-[-0.04em] text-[var(--color-foreground)]">
              让未来接线更轻
            </h2>
            <p className="mt-4 text-base leading-8 text-[var(--color-muted)]">
              当真实工具进来时，只需要替换卡片内容，不需要重做版式、节奏和信息层级。
            </p>
          </Surface>
          <Surface className="p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-muted)]">03</p>
            <h2 className="font-display mt-4 text-3xl tracking-[-0.04em] text-[var(--color-foreground)]">
              保持整站同一种气质
            </h2>
            <p className="mt-4 text-base leading-8 text-[var(--color-muted)]">
              这页虽然叫工具，但仍然沿用首页和博客页的语言，整体才会显得像同一个站。
            </p>
          </Surface>
        </Container>
      </section>
    </>
  );
}
