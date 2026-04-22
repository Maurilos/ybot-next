import type { Metadata } from "next";

import {
  Container,
  PageHero,
  PrimaryLink,
  SecondaryLink,
  SectionHeading,
  Surface,
} from "@/components/site-primitives";
import { principles, timeline } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "关于",
  description: "YBOT 的关于页模板，讲清楚整站改版的方法与原则。",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About The Reframe"
        title="这次改版不是单页美化，而是一次前台品牌系统重建。"
        description="目标很直接：保留原站内容方向，把参考站那种清晰秩序借过来，再把 YBOT 自己的气场、骨感和个人辨识度拉上去。"
        compact
        actions={
          <>
            <PrimaryLink href="/">回到首页</PrimaryLink>
            <SecondaryLink href="/blog">看内容模板</SecondaryLink>
          </>
        }
      />

      <section className="py-20 md:py-24">
        <Container>
          <SectionHeading
            eyebrow="Principles"
            title="先把模板立住，再让内容住进去。"
            description="如果没有统一的前台系统，内容越多，站点越容易散。模板化的意义不是省事，而是让品牌表达有持续性。"
          />
          <div className="grid gap-6 lg:grid-cols-3">
            {principles.map((principle) => (
              <Surface key={principle.title} className="h-full p-8">
                <h2 className="font-display text-3xl tracking-[-0.04em] text-[var(--color-foreground)]">
                  {principle.title}
                </h2>
                <p className="mt-4 text-base leading-8 text-[var(--color-muted)]">
                  {principle.description}
                </p>
              </Surface>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-black/8 bg-white/42 py-20 md:py-24">
        <Container>
          <SectionHeading
            eyebrow="Execution"
            title="落地顺序先稳后快。"
            description="现在已经把整站公共骨架搭起来，后续真实内容接入时会轻很多。"
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

      <section className="py-20 md:py-24">
        <Container>
          <div className="rounded-[36px] border border-black/8 bg-[var(--color-ink)] px-8 py-10 text-white shadow-[0_24px_80px_rgba(15,23,42,0.22)] md:px-10 md:py-14">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/45">What Comes Next</p>
            <h2 className="font-display mt-5 max-w-4xl text-4xl tracking-[-0.05em] md:text-5xl">
              真实内容迁移、分类接线、文章详情增强，这些都可以沿着现在这套母版继续推进。
            </h2>
            <p className="mt-5 max-w-3xl text-base leading-8 text-white/68">
              也就是说，前台风格这一步已经从“灵感”变成“基础设施”。接下来无论加博客、工具目录还是项目案例，整站都不会再像拼起来的。
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
