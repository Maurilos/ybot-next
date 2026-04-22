import type { Metadata } from "next";

import { ArticleCard } from "@/components/cards";
import {
  Container,
  InlineLink,
  PageHero,
  PrimaryLink,
  SecondaryLink,
  SectionHeading,
  Surface,
  Tag,
} from "@/components/site-primitives";
import { posts } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "博客",
  description: "YBOT 的博客模板页，强调更强的标题层级、阅读节奏和编辑感。",
};

export default function BlogPage() {
  const [featuredPost, ...restPosts] = posts;

  return (
    <>
      <PageHero
        eyebrow="Journal"
        title="博客页不只是在列文章，它应该像一本正在持续更新的刊物。"
        description="这一版把文章列表做成更有封面感的结构：上方一篇主打，下面是更克制的栅格。等旧站内容接进来后，整页会天然更稳。"
        compact
        actions={
          <>
            <PrimaryLink href={`/blog/${featuredPost.slug}`}>阅读主打文章</PrimaryLink>
            <SecondaryLink href="https://ybot.top/">对照旧站内容</SecondaryLink>
          </>
        }
      />

      <section className="py-20 md:py-24">
        <Container>
          <SectionHeading
            eyebrow="Featured Story"
            title="当前主打"
            description="用更大的标题、更长的留白和更清楚的元信息，给列表页一个真正的视觉重心。"
          />
          <ArticleCard post={featuredPost} featured />
        </Container>
      </section>

      <section className="border-y border-black/8 bg-white/42 py-20 md:py-24">
        <Container>
          <div className="mb-8 flex flex-wrap items-center gap-3">
            <Tag>品牌站</Tag>
            <Tag>设计系统</Tag>
            <Tag>工具目录</Tag>
            <Tag>项目展示</Tag>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {restPosts.map((post) => (
              <ArticleCard key={post.slug} post={post} />
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-24">
        <Container className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <Surface className="p-8 md:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-muted)]">
              Reading Logic
            </p>
            <h2 className="font-display mt-4 text-4xl tracking-[-0.05em] text-[var(--color-foreground)] md:text-5xl">
              文章列表的重点，是让人愿意点进去，而不是让卡片自己抢戏。
            </h2>
            <p className="mt-5 text-base leading-8 text-[var(--color-muted)]">
              所以这一版列表卡片保持克制，真正把重量给标题、摘要和阅读路径。视觉会有辨识度，但不会喧宾夺主。
            </p>
          </Surface>

          <Surface className="p-8 md:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-muted)]">
              Suggested Flow
            </p>
            <div className="mt-6 space-y-5 text-sm leading-7 text-[var(--color-foreground)]/84 md:text-base md:leading-8">
              <p>1. 首页保留精选文章入口，让高价值内容先被看到。</p>
              <p>2. 列表页承担归档与筛选，不抢首页的戏，但要显得更专业。</p>
              <p>3. 文章详情页统一正文排版，读起来舒服，品牌气质自然就稳了。</p>
            </div>
            <div className="mt-8">
              <InlineLink href={`/blog/${featuredPost.slug}`}>查看详情页模板 →</InlineLink>
            </div>
          </Surface>
        </Container>
      </section>
    </>
  );
}
