import { Container } from "@/components/site-primitives";

export default function Loading() {
  return (
    <section className="border-b border-black/8 bg-[var(--color-ink)] py-20 text-white md:py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(320px,0.8fr)]">
          <div className="space-y-5">
            <div className="h-8 w-40 animate-pulse rounded-full bg-white/10" />
            <div className="h-20 max-w-3xl animate-pulse rounded-[28px] bg-white/10" />
            <div className="h-6 max-w-2xl animate-pulse rounded-full bg-white/10" />
            <div className="h-6 max-w-xl animate-pulse rounded-full bg-white/8" />
          </div>
          <div className="grid gap-4">
            {Array.from({ length: 3 }).map((_, index) => (
              <div
                key={index}
                className="h-36 animate-pulse rounded-[28px] border border-white/10 bg-white/6"
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
