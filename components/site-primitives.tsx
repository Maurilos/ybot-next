import Link from "next/link";
import type { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  actions?: ReactNode;
  aside?: ReactNode;
  compact?: boolean;
};

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  action?: ReactNode;
  invert?: boolean;
};

type SmartLinkProps = {
  href: string;
  className?: string;
  children: ReactNode;
  invert?: boolean;
};

export function Container({ children, className = "" }: ContainerProps) {
  return (
    <div className={`mx-auto w-full max-w-[1320px] px-6 md:px-10 ${className}`.trim()}>
      {children}
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  description,
  actions,
  aside,
  compact = false,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-black/8 bg-[var(--color-ink)] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(120,150,255,0.25),transparent_38%),radial-gradient(circle_at_80%_20%,rgba(54,83,194,0.35),transparent_32%),linear-gradient(180deg,rgba(255,255,255,0.02),transparent_28%)]" />
      <Container
        className={`relative grid gap-10 py-20 md:py-24 ${
          aside ? "lg:grid-cols-[minmax(0,1.3fr)_minmax(320px,0.7fr)] lg:items-end" : ""
        } ${compact ? "md:py-20" : ""}`}
      >
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-3 rounded-full border border-white/14 bg-white/6 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.32em] text-white/70">
            <span className="h-2 w-2 rounded-full bg-[var(--color-accent)]" />
            {eyebrow}
          </div>
          <h1 className="font-display mt-6 max-w-4xl text-5xl leading-[0.92] tracking-[-0.05em] md:text-7xl lg:text-[5.4rem]">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-white/70 md:text-lg">
            {description}
          </p>
          {actions ? <div className="mt-9 flex flex-wrap gap-4">{actions}</div> : null}
        </div>
        {aside ? <div className="lg:justify-self-end">{aside}</div> : null}
      </Container>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  action,
  invert = false,
}: SectionHeadingProps) {
  return (
    <div className={`mb-10 flex flex-col gap-6 border-b pb-6 md:flex-row md:items-end md:justify-between ${invert ? "border-white/10" : "border-black/8"}`}>
      <div className="max-w-3xl">
        <p className={`text-xs font-semibold uppercase tracking-[0.28em] ${invert ? "text-white/45" : "text-[var(--color-muted)]"}`}>
          {eyebrow}
        </p>
        <h2 className={`font-display mt-3 text-4xl leading-none tracking-[-0.04em] md:text-5xl ${invert ? "text-white" : "text-[var(--color-foreground)]"}`}>
          {title}
        </h2>
        {description ? (
          <p className={`mt-4 max-w-2xl text-base leading-8 md:text-lg ${invert ? "text-white/68" : "text-[var(--color-muted)]"}`}>
            {description}
          </p>
        ) : null}
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  );
}

export function PrimaryLink({ href, className = "", children }: SmartLinkProps) {
  const classes = `inline-flex items-center justify-center rounded-full border border-[var(--color-accent)] bg-[var(--color-accent)] px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[var(--color-accent-strong)] ${className}`.trim();

  if (href.startsWith("http") || href.startsWith("mailto:")) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={classes}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}

export function SecondaryLink({ href, className = "", children }: SmartLinkProps) {
  const classes = `inline-flex items-center justify-center rounded-full border border-white/14 bg-white/6 px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-white/10 ${className}`.trim();

  if (href.startsWith("http") || href.startsWith("mailto:")) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={classes}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}

export function InlineLink({ href, children, invert = false }: SmartLinkProps) {
  const classes = `inline-flex items-center gap-2 text-sm font-semibold transition ${invert ? "text-white hover:text-white/78" : "text-[var(--color-foreground)] hover:text-[var(--color-accent-strong)]"}`;

  if (href.startsWith("http") || href.startsWith("mailto:")) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={classes}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}

export function Surface({ children, className = "" }: ContainerProps) {
  return (
    <div className={`rounded-[28px] border border-black/8 bg-white/72 shadow-[0_18px_60px_rgba(15,23,42,0.06)] backdrop-blur ${className}`.trim()}>
      {children}
    </div>
  );
}

export function Tag({
  children,
  invert = false,
}: {
  children: ReactNode;
  invert?: boolean;
}) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] ${invert ? "border-white/12 bg-white/6 text-white/72" : "border-black/10 bg-black/[0.03] text-[var(--color-muted)]"}`}
    >
      {children}
    </span>
  );
}
