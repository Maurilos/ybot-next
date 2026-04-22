import { posts } from "@/content/posts";
import { projects } from "@/content/projects";
import { tools } from "@/content/tools";
import type { Post, Project, Tool } from "@/content/types";

function sortPostsByPublishedAt(collection: Post[]) {
  return [...collection].sort(
    (left, right) =>
      new Date(`${right.publishedAt}T00:00:00Z`).getTime() -
      new Date(`${left.publishedAt}T00:00:00Z`).getTime(),
  );
}

export function formatDisplayDate(date: string) {
  return new Intl.DateTimeFormat("zh-CN", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${date}T00:00:00Z`));
}

export function getAllPosts() {
  return sortPostsByPublishedAt(posts);
}

export function getFeaturedPost() {
  return getAllPosts().find((post) => post.featured) ?? getAllPosts()[0];
}

export function getRecentPosts(limit?: number, excludeSlug?: string) {
  const filtered = getAllPosts().filter((post) => post.slug !== excludeSlug);
  return typeof limit === "number" ? filtered.slice(0, limit) : filtered;
}

export function getPostBySlug(slug: string) {
  return getAllPosts().find((post) => post.slug === slug);
}

export function getAdjacentPosts(slug: string) {
  const orderedPosts = getAllPosts();
  const currentIndex = orderedPosts.findIndex((post) => post.slug === slug);

  return {
    previous: currentIndex > 0 ? orderedPosts[currentIndex - 1] : undefined,
    next:
      currentIndex >= 0 && currentIndex < orderedPosts.length - 1
        ? orderedPosts[currentIndex + 1]
        : undefined,
  };
}

export function getRelatedPosts(slug: string, limit = 2) {
  const currentPost = getPostBySlug(slug);

  if (!currentPost) {
    return [];
  }

  const sameCategory = getAllPosts().filter(
    (post) => post.slug !== slug && post.categorySlug === currentPost.categorySlug,
  );

  if (sameCategory.length >= limit) {
    return sameCategory.slice(0, limit);
  }

  const fallback = getAllPosts().filter(
    (post) => post.slug !== slug && post.categorySlug !== currentPost.categorySlug,
  );

  return [...sameCategory, ...fallback].slice(0, limit);
}

export function getPostCategories() {
  const categoryMap = new Map<string, { name: string; slug: string; count: number }>();

  for (const post of getAllPosts()) {
    const current = categoryMap.get(post.categorySlug);

    categoryMap.set(post.categorySlug, {
      name: post.category,
      slug: post.categorySlug,
      count: (current?.count ?? 0) + 1,
    });
  }

  return [...categoryMap.values()].sort((left, right) => right.count - left.count);
}

export function getAllProjects(): Project[] {
  return [...projects];
}

export function getFeaturedProjects(limit = 3) {
  return getAllProjects()
    .filter((project) => project.featured)
    .slice(0, limit);
}

export function getAllTools(): Tool[] {
  return [...tools];
}

export function getContentSnapshot() {
  const orderedPosts = getAllPosts();

  return {
    postCount: orderedPosts.length,
    projectCount: projects.length,
    toolCount: tools.length,
    latestPostDate: orderedPosts[0] ? formatDisplayDate(orderedPosts[0].publishedAt) : "",
  };
}
