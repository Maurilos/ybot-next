import Link from "next/link";

import { Container } from "@/components/site-primitives";
import { navigation } from "@/lib/site-data";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/8 bg-[rgba(245,240,232,0.78)] backdrop-blur-xl">
      <Container className="flex flex-col gap-4 py-4 md:flex-row md:items-center md:justify-between md:py-5">
        <div className="flex items-center justify-between gap-6">
          <Link href="/" className="group inline-flex flex-col">
            <span className="text-xs font-semibold uppercase tracking-[0.42em] text-[var(--color-muted)] transition group-hover:text-[var(--color-accent-strong)]">
              YBOT
            </span>
            <span className="font-display text-2xl tracking-[-0.05em] text-[var(--color-foreground)]">
              Signal-Led Site System
            </span>
          </Link>
          <div className="hidden h-10 w-px bg-black/10 md:block" />
          <p className="hidden max-w-md text-sm leading-6 text-[var(--color-muted)] md:block">
            保留原站内容方向，把前台皮肤改造成更厚重、更有个人锋芒的编辑型模板。
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 md:justify-end">
          <nav className="flex flex-wrap items-center gap-2 rounded-full border border-black/8 bg-white/70 p-1">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-[var(--color-foreground)] transition hover:bg-black/[0.04]"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <a
            href="https://ybot.top/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center rounded-full border border-black/10 px-4 py-2 text-sm font-semibold text-[var(--color-foreground)] transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent-strong)]"
          >
            旧站入口 ↗
          </a>
        </div>
      </Container>
    </header>
  );
}
