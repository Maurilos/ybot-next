import snapshot from "@/content/legacy-site.snapshot.json";
import type { LegacyResource } from "@/content/types";

function cleanTitle(title: string) {
  return title.replace(/\s*[—-]\s*YBot Archive$/, "").trim();
}

export const legacyResources: LegacyResource[] = snapshot.resources.map((resource) => ({
  slug: resource.slug,
  title: cleanTitle(resource.title),
  description: resource.description,
  lines: resource.lines,
  url: resource.url,
}));
