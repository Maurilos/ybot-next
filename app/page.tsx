export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black">
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm uppercase tracking-[0.25em] text-black/50">
            ybot.top
          </p>

          <h1 className="text-5xl font-bold leading-tight md:text-7xl">
            一个更现代的个人内容站
          </h1>

          <p className="mt-6 text-lg leading-8 text-black/65">
            这里会放博客、AI 工具、实用教程和个人项目。
            这是新版本站点的第一版首页，后面会继续升级成更完整的内容站。
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="/blog"
              className="rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
            >
              查看博客
            </a>

            <a
              href="https://ybot.top"
              target="_blank"
              rel="noopener"
              className="rounded-full border border-black/15 px-6 py-3 text-sm font-medium text-black transition hover:bg-black/5"
            >
              旧站
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-6 pb-24 md:grid-cols-3">
        <div className="rounded-3xl border border-black/10 p-6">
          <h2 className="text-xl font-semibold">博客内容</h2>
          <p className="mt-3 text-sm leading-7 text-black/60">
            技术笔记、AI 玩法、建站过程和日常折腾记录。
          </p>
        </div>

        <div className="rounded-3xl border border-black/10 p-6">
          <h2 className="text-xl font-semibold">工具导航</h2>
          <p className="mt-3 text-sm leading-7 text-black/60">
            整理我自己在用的 AI 工具、效率工具和实用资源。
          </p>
        </div>

        <div className="rounded-3xl border border-black/10 p-6">
          <h2 className="text-xl font-semibold">个人项目</h2>
          <p className="mt-3 text-sm leading-7 text-black/60">
            展示正在做的站点、自动化项目和实验性想法。
          </p>
        </div>
      </section>
    </main>
  );
}