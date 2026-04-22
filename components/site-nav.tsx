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
    <nav className="flex flex-wrap items-center gap-2 rounded-full border border-black/8 bg-white/80 p-1.5 shadow-[0_10px_30px_rgba(15,23,42,0.05)] backdrop-blur">
      {navigation.map((item) => {
        const active = isActive(pathname, item.href);

        return (
          <Link
            key={item.href}
            href={item.href}
            aria-current={active ? "page" : undefined}
            style={active ? { color: "#ffffff" } : undefined}
            className={`inline-flex min-w-[5.5rem] items-center justify-center rounded-full px-5 py-3 text-[15px] font-semibold tracking-[-0.02em] transition duration-200 ${
              active
                ? "bg-[var(--color-ink)] !text-white shadow-[0_12px_28px_rgba(11,17,32,0.22)]"
                : "text-[var(--color-foreground)]/90 hover:bg-black/[0.04]"
            }`}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
