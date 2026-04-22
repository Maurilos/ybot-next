import snapshot from "@/content/legacy-site.snapshot.json";
import type { Post } from "@/content/types";

const rankMap: Record<string, number> = {
  "putongren-fanshen-renzhicha": 0,
  "claude-recommended-setup02": 1,
  "claude-recommended-setup01": 2,
};

function toCategorySlug(category: string) {
  if (category === "AI") return "ai";
  if (category === "认知") return "cognition";
  return category.toLowerCase();
}

function toKicker(post: (typeof snapshot.posts)[number]) {
  if (post.category === "AI") {
    return "Claude / AI";
  }

  if (post.category === "认知") {
    return "认知 / 思考";
  }

  return post.category;
}

export const posts: Post[] = snapshot.posts.map((post) => {
  const introSummary = post.sections[0]?.paragraphs[0];

  return {
    slug: post.slug,
    category: post.category,
    categorySlug: toCategorySlug(post.category),
    publishedAt: post.publishedAt,
    readTime: post.readTime,
    title: post.title,
    kicker: toKicker(post),
    summary: introSummary || post.summary,
    tags: post.keywords.slice(0, 5),
    featured: post.slug === "putongren-fanshen-renzhicha",
    rank: rankMap[post.slug] ?? 99,
    sections: post.sections.map((section) => ({
      heading: section.heading,
      paragraphs: section.paragraphs,
      bullets: section.bullets ?? undefined,
      quote: section.quote ?? undefined,
    })),
    sourceUrl: post.url,
    wordCount: post.wordCount,
  };
});
