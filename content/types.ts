export type NavItem = {
  href: string;
  label: string;
};

export type Metric = {
  label: string;
  value: string;
  detail: string;
};

export type Pillar = {
  eyebrow: string;
  title: string;
  description: string;
  href: string;
};

export type Project = {
  slug: string;
  name: string;
  tag: string;
  year: string;
  status: string;
  summary: string;
  detail: string;
  outcome: string;
  href: string;
  featured?: boolean;
};

export type Tool = {
  slug: string;
  name: string;
  category: string;
  priority: string;
  useCase: string;
  description: string;
  note: string;
};

export type TimelineEntry = {
  year: string;
  title: string;
  description: string;
};

export type Principle = {
  title: string;
  description: string;
};

export type PostSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
  quote?: string;
};

export type Post = {
  slug: string;
  category: string;
  categorySlug: string;
  publishedAt: string;
  readTime: string;
  title: string;
  kicker: string;
  summary: string;
  tags: string[];
  featured?: boolean;
  rank?: number;
  sections: PostSection[];
  wordCount?: string;
};
