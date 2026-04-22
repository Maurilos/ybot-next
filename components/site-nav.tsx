'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

import { navigation } from "@/content/site";

function isActive(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteNav() {
  const pathname = usePathname();

  return (
    <nav className="flex flex-wrap items-center gap-2 rounded-full border border-black/8 bg-white/70 p-1 shadow-[0_10px_30px_rgba(15,23,42,0.04)]">
      {navigation.map((item) => {
        const active = isActive(pathname, item.href);

        return (
          <Link
            key={item.href}
            href={item.href}
            aria-current={active ? "page" : undefined}
            className={`rounded-full px-4 py-2 text-sm font-medium transition ${
              active
                ? "bg-[var(--color-ink)] text-white shadow-[0_10px_24px_rgba(11,17,32,0.18)]"
                : "text-[var(--color-foreground)] hover:bg-black/[0.04]"
            }`}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
