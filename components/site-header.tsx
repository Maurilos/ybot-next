import Link from "next/link";

import { siteProfile } from "@/content/site";
import { SiteNav } from "@/components/site-nav";
import { Container } from "@/components/site-primitives";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/8 bg-[rgba(245,240,232,0.78)] backdrop-blur-xl">
      <Container className="flex flex-col gap-4 py-4 md:flex-row md:items-center md:justify-between md:py-5">
        <div className="flex items-center justify-between gap-6">
          <Link href="/" className="group inline-flex flex-col">
            <span className="text-xs font-semibold uppercase tracking-[0.42em] text-[var(--color-muted)] transition group-hover:text-[var(--color-accent-strong)]">
              {siteProfile.owner.label}
            </span>
            <span className="font-display text-2xl tracking-[-0.05em] text-[var(--color-foreground)]">
              {siteProfile.title}
            </span>
          </Link>
          <div className="hidden h-10 w-px bg-black/10 md:block" />
          <p className="hidden max-w-md text-sm leading-6 text-[var(--color-muted)] md:block">
            {siteProfile.description}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 md:justify-end">
          <SiteNav />
        </div>
      </Container>
    </header>
  );
}
