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
        title="博客页不只是列文章，它应该像一本持续更新的刊物。"
        description={`当前先用 ${snapshot.postCount} 篇示例文章把列表和详情页骨架跑通，最近更新于 ${snapshot.latestPostDate}。以后替换真实内容时，不需要再动版式。`}
        compact
        actions={
          <>
            {featuredPost ? <PrimaryLink href={`/blog/${featuredPost.slug}`}>阅读主打文章</PrimaryLink> : null}
            <SecondaryLink href="/projects">看项目页节奏</SecondaryLink>
          </>
        }
      />

      <section className="py-20 md:py-24">
        <Container>
          <SectionHeading
            eyebrow="Featured Story"
            title="当前主打"
            description="先让列表页拥有一个明确的视觉起点，后面的归档栅格再跟上。"
          />
          {featuredPost ? <ArticleCard post={featuredPost} featured /> : null}
        </Container>
      </section>

      <section className="border-y border-black/8 bg-white/42 py-20 md:py-24">
        <Container>
          <SectionHeading
            eyebrow="Categories"
            title="分类先做成结构，不急着追数量。"
            description="这里只用少量占位分类验证版式、统计模块和标签节奏，等真实内容接入再自然扩容。"
          />
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {categories.map((category) => (
              <Surface key={category.slug} className="p-7">
                <Tag>{category.name}</Tag>
                <p className="font-display mt-6 text-4xl tracking-[-0.05em] text-[var(--color-foreground)]">
                  {String(category.count).padStart(2, "0")}
                </p>
                <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">
                  先把信息层级跑顺，后面换成真实文章时这块会很省心。
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
              列表页的工作，是把读者顺手送进正文。
            </h2>
            <p className="mt-5 text-base leading-8 text-[var(--color-muted)]">
              所以这套卡片保留分量，但不过度表演。真正的重点还是标题、摘要和清楚的阅读路径。
            </p>
          </Surface>

          <Surface className="p-8 md:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-muted)]">
              Archive Shape
            </p>
            <div className="mt-6 space-y-5 text-sm leading-7 text-[var(--color-foreground)]/84 md:text-base md:leading-8">
              <p>1. 首页只放精选，保持门面干净。</p>
              <p>2. 列表页承担归档和延展，不和首页抢戏。</p>
              <p>
                3. 当前示例文章时间跨度从{" "}
                {oldestPost ? formatDisplayDate(oldestPost.publishedAt) : snapshot.latestPostDate} 到{" "}
                {snapshot.latestPostDate}。
              </p>
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
