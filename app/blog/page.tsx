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
import {
  formatDisplayDate,
  getContentSnapshot,
  getFeaturedPost,
  getPostCategories,
  getRecentPosts,
} from "@/lib/content";

export const metadata: Metadata = {
  title: "博客",
  description: "YBOT 的博客模板页，强调更强的标题层级、阅读节奏和编辑感。",
};

export default function BlogPage() {
  const featuredPost = getFeaturedPost();
  const archivePosts = featuredPost ? getRecentPosts(undefined, featuredPost.slug) : [];
  const categories = getPostCategories();
  const snapshot = getContentSnapshot();
  const allPosts = featuredPost ? [featuredPost, ...archivePosts] : [];
  const oldestPost = allPosts.at(-1);

  return (
    <>
      <PageHero
        eyebrow="Journal"
        title="博客页不只是在列文章，它应该像一本正在持续更新的刊物。"
        description={`这一版把文章列表做成更有封面感的结构：上方一篇主打，下面是更克制的栅格。目前已经整理出 ${snapshot.postCount} 篇内容，最近更新于 ${snapshot.latestPostDate}。`}
        compact
        actions={
          <>
            {featuredPost ? <PrimaryLink href={`/blog/${featuredPost.slug}`}>阅读主打文章</PrimaryLink> : null}
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
          {featuredPost ? <ArticleCard post={featuredPost} featured /> : null}
        </Container>
      </section>

      <section className="border-y border-black/8 bg-white/42 py-20 md:py-24">
        <Container>
          <SectionHeading
            eyebrow="Categories"
            title="先把迁移后的栏目框架立清楚。"
            description="现在先用分类统计和主线模块把内容结构固定住。后面接入旧站文章时，列表页的骨架不用再推倒重搭。"
          />
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {categories.map((category) => (
              <Surface key={category.slug} className="p-7">
                <Tag>{category.name}</Tag>
                <p className="font-display mt-6 text-4xl tracking-[-0.05em] text-[var(--color-foreground)]">
                  {String(category.count).padStart(2, "0")}
                </p>
                <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">
                  这个板块已经有可展示内容，适合后续继续沿同一条结构扩容。
                </p>
              </Surface>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-24">
        <Container>
          <div className="mb-8 flex flex-wrap items-center gap-3">
            {categories.map((category) => (
              <Tag key={category.slug}>{category.name}</Tag>
            ))}
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {archivePosts.map((post) => (
              <ArticleCard key={post.slug} post={post} />
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-black/8 py-20 md:py-24">
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
              Archive Shape
            </p>
            <div className="mt-6 space-y-5 text-sm leading-7 text-[var(--color-foreground)]/84 md:text-base md:leading-8">
              <p>1. 首页保留精选文章入口，让高价值内容先被看到。</p>
              <p>2. 列表页承担归档与分类，不抢首页的戏，但要显得更专业。</p>
              <p>3. 当前最早一批文章时间跨度从 {oldestPost ? formatDisplayDate(oldestPost.publishedAt) : snapshot.latestPostDate} 到 {snapshot.latestPostDate}。</p>
            </div>
            {featuredPost ? (
              <div className="mt-8">
                <InlineLink href={`/blog/${featuredPost.slug}`}>查看详情页模板 →</InlineLink>
              </div>
            ) : null}
          </Surface>
        </Container>
      </section>
    </>
  );
}
