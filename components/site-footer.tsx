import Link from "next/link";

import { navigation, principles, siteProfile } from "@/content/site";
import { Container, Tag } from "@/components/site-primitives";
import { getRecentPosts } from "@/lib/content";

export function SiteFooter() {
  const latestPosts = getRecentPosts(3);

  return (
    <footer className="border-t border-black/8 bg-[var(--color-ink)] text-white">
      <Container className="py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr_0.9fr]">
          <div>
            <Tag invert>{siteProfile.title}</Tag>
            <h2 className="font-display mt-6 max-w-lg text-4xl tracking-[-0.05em] text-white md:text-5xl">
              关于技术、折腾、阅读与长期留存的一份持续记录。
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-white/68">
              新站已经开始把旧站公开内容静态迁移进来：文章、栏目页、资源页和专题入口都在同一套前台模板里重新组织。
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {principles.map((principle) => (
                <span
                  key={principle.title}
                  className="rounded-full border border-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/72"
                >
                  {principle.title}
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:col-span-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/45">导航</p>
              <ul className="mt-5 space-y-4 text-sm text-white/78">
                {navigation.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="transition hover:text-white">
                      {item.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <a href="https://ybot.top/" target="_blank" rel="noreferrer" className="transition hover:text-white">
                    旧站入口 ↗
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/45">已迁移文章</p>
              <ul className="mt-5 space-y-4 text-sm text-white/78">
                {latestPosts.map((post) => (
                  <li key={post.slug}>
                    <Link href={`/blog/${post.slug}`} className="transition hover:text-white">
                      {post.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="sm:col-span-2">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/45">出处</p>
              <p className="mt-5 max-w-2xl text-sm leading-7 text-white/68">
                当前版本依据旧站首页、search index、Atom feed 与公开栏目页快照构建。作者 GitHub：
                <a href={`https://github.com/${siteProfile.owner.githubHandle}`} target="_blank" rel="noreferrer" className="ml-1 underline-offset-4 hover:underline">
                  @{siteProfile.owner.githubHandle}
                </a>
                。
              </p>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs uppercase tracking-[0.24em] text-white/42 md:flex-row md:items-center md:justify-between">
          <span>© 2026 {siteProfile.title}. Reframed from the legacy archive.</span>
          <span>Real content migrated into a calmer, larger editorial shell</span>
        </div>
      </Container>
    </footer>
  );
}
