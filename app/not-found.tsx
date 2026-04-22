import Link from "next/link";
import type { Metadata } from "next";

import { Container, PrimaryLink, SecondaryLink } from "@/components/site-primitives";

export const metadata: Metadata = {
  title: "页面未找到",
  description: "你访问的页面不存在，回到 YBOT 的内容主场继续浏览。",
};

export default function NotFound() {
  return (
    <section className="relative overflow-hidden border-b border-black/8 bg-[var(--color-ink)] py-20 text-white md:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(120,150,255,0.24),transparent_38%),radial-gradient(circle_at_80%_20%,rgba(54,83,194,0.3),transparent_30%)]" />
      <Container className="relative grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(280px,0.5fr)] lg:items-end">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.34em] text-white/45">404 · Lost Signal</p>
          <h1 className="font-display mt-6 max-w-3xl text-5xl leading-[0.92] tracking-[-0.05em] md:text-7xl">
            这页没接上线，但整座站还亮着。
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-white/68 md:text-lg">
            你访问的路径不存在，或者还没把旧站内容迁进来。先回到首页、博客或项目页，继续沿着新的模板骨架逛下去。
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <PrimaryLink href="/">回到首页</PrimaryLink>
            <SecondaryLink href="/blog">去博客</SecondaryLink>
          </div>
        </div>

        <div className="rounded-[30px] border border-white/10 bg-white/6 p-7 shadow-[0_20px_70px_rgba(3,7,18,0.28)]">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/45">Useful Routes</p>
          <div className="mt-6 space-y-4 text-sm text-white/74">
            <Link href="/blog" className="block rounded-2xl border border-white/10 px-4 py-4 transition hover:bg-white/6 hover:text-white">
              博客模板页
            </Link>
            <Link href="/tools" className="block rounded-2xl border border-white/10 px-4 py-4 transition hover:bg-white/6 hover:text-white">
              工具目录页
            </Link>
            <Link href="/projects" className="block rounded-2xl border border-white/10 px-4 py-4 transition hover:bg-white/6 hover:text-white">
              项目展示页
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
