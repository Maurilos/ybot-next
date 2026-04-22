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
              一套先把前台架构立起来的内容站母版。
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-white/68">
              这一版只负责模板系统本身：路由、页面骨架、组件语言、阅读节奏和品牌气质全部先固定下来。
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
              </ul>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/45">示例文章</p>
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
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/45">当前状态</p>
              <p className="mt-5 max-w-2xl text-sm leading-7 text-white/68">
                现在页面里展示的是占位数据，只用来验证整站架构是否顺手。后面真正接内容时，不需要再重做模板。
              </p>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs uppercase tracking-[0.24em] text-white/42 md:flex-row md:items-center md:justify-between">
          <span>© 2026 {siteProfile.title}. Editorial template in progress.</span>
          <span>Architecture first, content later.</span>
        </div>
      </Container>
    </footer>
  );
}
