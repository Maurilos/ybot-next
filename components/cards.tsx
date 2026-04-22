import { InlineLink, Surface, Tag } from "@/components/site-primitives";
import { formatDisplayDate } from "@/lib/content";
import type { Post, Project, Tool } from "@/content/types";

export function ArticleCard({
  post,
  featured = false,
}: {
  post: Post;
  featured?: boolean;
}) {
  return (
    <Surface
      className={`group h-full p-7 transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_80px_rgba(15,23,42,0.10)] ${
        featured ? "md:p-9" : ""
      }`}
    >
      <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-muted)]">
        <span>{post.category}</span>
        <span className="h-1 w-1 rounded-full bg-black/20" />
        <span>{formatDisplayDate(post.publishedAt)}</span>
        <span className="h-1 w-1 rounded-full bg-black/20" />
        <span>{post.readTime}</span>
      </div>
      <div className="mt-6 flex flex-wrap gap-3">
        <Tag>{post.kicker}</Tag>
      </div>
      <h3
        className={`font-display mt-6 text-[var(--color-foreground)] transition group-hover:text-[var(--color-accent-strong)] ${
          featured ? "text-3xl md:text-[2.5rem]" : "text-2xl"
        }`}
      >
        {post.title}
      </h3>
      <p className="mt-4 text-sm leading-7 text-[var(--color-muted)] md:text-base md:leading-8">
        {post.summary}
      </p>
      <div className="mt-6 flex flex-wrap gap-2">
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-black/10 px-3 py-1 text-xs text-[var(--color-muted)]"
          >
            #{tag}
          </span>
        ))}
      </div>
      <div className="mt-8">
        <InlineLink href={`/blog/${post.slug}`}>阅读全文 →</InlineLink>
      </div>
    </Surface>
  );
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Surface className="h-full p-8">
      <div className="flex items-start justify-between gap-4">
        <Tag>{project.tag}</Tag>
        <div className="text-right">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--color-muted)]">
            {project.year}
          </p>
          <p className="mt-2 text-xs text-[var(--color-foreground)]/64">{project.status}</p>
        </div>
      </div>
      <h3 className="font-display mt-6 text-3xl tracking-[-0.04em] text-[var(--color-foreground)]">
        {project.name}
      </h3>
      <p className="mt-4 text-base leading-8 text-[var(--color-muted)]">{project.summary}</p>
      <p className="mt-6 border-t border-black/8 pt-6 text-sm leading-7 text-[var(--color-foreground)]/82">
        {project.detail}
      </p>
      <p className="mt-6 text-sm font-medium text-[var(--color-accent-strong)]">{project.outcome}</p>
      <div className="mt-8">
        <InlineLink href={project.href}>查看板块 →</InlineLink>
      </div>
    </Surface>
  );
}

export function ToolCard({ tool }: { tool: Tool }) {
  return (
    <Surface className="h-full p-7">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <Tag>{tool.category}</Tag>
        <span className="text-xs uppercase tracking-[0.2em] text-[var(--color-muted)]">
          {tool.priority}
        </span>
      </div>
      <h3 className="mt-6 text-2xl font-semibold tracking-[-0.03em] text-[var(--color-foreground)]">
        {tool.name}
      </h3>
      <p className="mt-3 text-xs uppercase tracking-[0.18em] text-[var(--color-muted)]">{tool.useCase}</p>
      <p className="mt-4 text-sm leading-7 text-[var(--color-muted)] md:text-base md:leading-8">
        {tool.description}
      </p>
      <p className="mt-6 rounded-2xl border border-black/8 bg-black/[0.025] p-4 text-sm leading-7 text-[var(--color-foreground)]/80">
        {tool.note}
      </p>
      <div className="mt-8">
        <InlineLink href="/tools">保留为模板模块 →</InlineLink>
      </div>
    </Surface>
  );
}
