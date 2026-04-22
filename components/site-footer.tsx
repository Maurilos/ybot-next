import Link from "next/link";

import { Container, Tag } from "@/components/site-primitives";
import { navigation, posts, principles } from "@/lib/site-data";

export function SiteFooter() {
  return (
    <footer className="border-t border-black/8 bg-[var(--color-ink)] text-white">
      <Container className="py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr_0.9fr]">
          <div>
            <Tag invert>YBOT 2.0</Tag>
            <h2 className="font-display mt-6 max-w-lg text-4xl tracking-[-0.05em] text-white md:text-5xl">
              模板先行，内容随后接入，整个站点才会站稳。
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-white/68">
              这次改版不是换一张首页海报，而是建立一个能承接博客、工具、项目和个人表达的前台系统。
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
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/45">精选文章</p>
              <ul className="mt-5 space-y-4 text-sm text-white/78">
                {posts.slice(0, 3).map((post) => (
                  <li key={post.slug}>
                    <Link href={`/blog/${post.slug}`} className="transition hover:text-white">
                      {post.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="sm:col-span-2">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/45">说明</p>
              <p className="mt-5 max-w-2xl text-sm leading-7 text-white/68">
                当前版本先把视觉模板、内容列表、文章详情和项目展示做成统一系统，后续可以直接把真实数据源接进来，不需要再拆一遍前端。
              </p>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs uppercase tracking-[0.24em] text-white/42 md:flex-row md:items-center md:justify-between">
          <span>© 2026 YBOT. Crafted for a stronger front-end identity.</span>
          <span>Editorial rhythm · sharper silhouette · calmer structure</span>
        </div>
      </Container>
    </footer>
  );
}
