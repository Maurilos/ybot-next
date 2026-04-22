import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Container, PageHero, Surface, Tag } from "@/components/site-primitives";
import {
  formatDisplayDate,
  getAdjacentPosts,
  getAllPosts,
  getPostBySlug,
  getRelatedPosts,
} from "@/lib/content";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: "文章未找到",
    };
  }

  return {
    title: post.title,
    description: post.summary,
    openGraph: {
      title: post.title,
      description: post.summary,
      type: "article",
      publishedTime: `${post.publishedAt}T00:00:00.000Z`,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const adjacent = getAdjacentPosts(post.slug);
  const relatedPosts = getRelatedPosts(post.slug, 2);

  return (
    <>
      <PageHero
        eyebrow={post.category}
        title={post.title}
        description={post.summary}
        compact
        aside={
          <Surface className="rounded-[28px] border-white/10 bg-white/6 p-6 text-white shadow-none backdrop-blur-0">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/45">Article Meta</p>
            <div className="mt-5 space-y-4 text-sm text-white/72">
              <div>
                <p className="text-white/44">发布日期</p>
                <p className="mt-1 font-medium text-white">{formatDisplayDate(post.publishedAt)}</p>
              </div>
              <div>
                <p className="text-white/44">阅读时间</p>
                <p className="mt-1 font-medium text-white">{post.readTime}</p>
              </div>
              <div>
                <p className="text-white/44">主题标签</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-white/12 px-3 py-1 text-xs text-white/72">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Surface>
        }
      />

      <section className="py-20 md:py-24">
        <Container className="grid gap-8 lg:grid-cols-[minmax(0,0.82fr)_minmax(280px,0.18fr)] lg:items-start">
          <article className="rounded-[32px] border border-black/8 bg-white/78 p-8 shadow-[0_18px_60px_rgba(15,23,42,0.06)] backdrop-blur md:p-10 lg:p-12">
            <div className="flex flex-wrap gap-3">
              <Tag>{post.kicker}</Tag>
              {post.tags.map((tag) => (
                <span key={tag} className="rounded-full border border-black/10 px-3 py-1 text-xs text-[var(--color-muted)]">
                  #{tag}
                </span>
              ))}
            </div>

            <div className="article-content mt-10">
              {post.sections.map((section) => (
                <section key={section.heading}>
                  <h2>{section.heading}</h2>
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                  {section.bullets ? (
                    <ul>
                      {section.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  ) : null}
                  {section.quote ? <blockquote>{section.quote}</blockquote> : null}
                </section>
              ))}
            </div>
          </article>

          <aside className="space-y-6 lg:sticky lg:top-28">
            <Surface className="p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-muted)]">
                In This Piece
              </p>
              <div className="mt-5 space-y-4">
                {post.sections.map((section, index) => (
                  <div key={section.heading} className="border-t border-black/8 pt-4 first:border-t-0 first:pt-0">
                    <p className="text-xs uppercase tracking-[0.24em] text-[var(--color-muted)]">0{index + 1}</p>
                    <p className="mt-2 text-sm leading-7 text-[var(--color-foreground)]/84">{section.heading}</p>
                  </div>
                ))}
              </div>
            </Surface>

            <Surface className="p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-muted)]">
                Continue Reading
              </p>
              <div className="mt-5 space-y-4 text-sm leading-7">
                {adjacent.previous ? (
                  <div>
                    <p className="text-xs uppercase tracking-[0.24em] text-[var(--color-muted)]">上一篇</p>
                    <Link href={`/blog/${adjacent.previous.slug}`} className="mt-2 inline-flex text-[var(--color-foreground)] transition hover:text-[var(--color-accent-strong)]">
                      {adjacent.previous.title}
                    </Link>
                  </div>
                ) : null}
                {adjacent.next ? (
                  <div className="border-t border-black/8 pt-4">
                    <p className="text-xs uppercase tracking-[0.24em] text-[var(--color-muted)]">下一篇</p>
                    <Link href={`/blog/${adjacent.next.slug}`} className="mt-2 inline-flex text-[var(--color-foreground)] transition hover:text-[var(--color-accent-strong)]">
                      {adjacent.next.title}
                    </Link>
                  </div>
                ) : null}
              </div>
            </Surface>
          </aside>
        </Container>
      </section>

      <section className="border-t border-black/8 bg-white/42 py-20 md:py-24">
        <Container>
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-muted)]">
                Related Signal
              </p>
              <h2 className="font-display mt-3 text-4xl tracking-[-0.04em] text-[var(--color-foreground)] md:text-5xl">
                继续沿着这条内容线读下去。
              </h2>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {relatedPosts.map((relatedPost) => (
              <Surface key={relatedPost.slug} className="p-8">
                <Tag>{relatedPost.category}</Tag>
                <h3 className="font-display mt-6 text-3xl tracking-[-0.04em] text-[var(--color-foreground)]">
                  {relatedPost.title}
                </h3>
                <p className="mt-4 text-base leading-8 text-[var(--color-muted)]">{relatedPost.summary}</p>
                <div className="mt-6 flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.22em] text-[var(--color-muted)]">
                  <span>{formatDisplayDate(relatedPost.publishedAt)}</span>
                  <span className="h-1 w-1 rounded-full bg-black/20" />
                  <span>{relatedPost.readTime}</span>
                </div>
                <div className="mt-8">
                  <Link href={`/blog/${relatedPost.slug}`} className="inline-flex text-sm font-semibold text-[var(--color-foreground)] transition hover:text-[var(--color-accent-strong)]">
                    打开文章 →
                  </Link>
                </div>
              </Surface>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
