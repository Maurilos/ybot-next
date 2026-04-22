import { ArticleCard, ProjectCard } from "@/components/cards";
import {
  Container,
  InlineLink,
  PageHero,
  PrimaryLink,
  SecondaryLink,
  SectionHeading,
  Surface,
  Tag,
} from "@/components/site-primitives";
import { heroMetrics, homePillars, principles, timeline } from "@/content/site";
import {
  getContentSnapshot,
  getFeaturedPost,
  getFeaturedProjects,
  getAllTools,
  getRecentPosts,
} from "@/lib/content";

export default function Home() {
  const featuredPost = getFeaturedPost();
  const secondaryPosts = featuredPost ? getRecentPosts(2, featuredPost.slug) : [];
  const featuredProjects = getFeaturedProjects(3);
  const toolStack = getAllTools();
  const snapshot = getContentSnapshot();

  return (
    <>
      <PageHero
        eyebrow="Front-End Reframe"
        title="把 YBOT 做成一座更有压场的内容门面。"
        description="保留原网站的内容方向，用整站模板化的方式重做前台视觉层。参考目标站的秩序感，但把气质拉得更厚、更开、更有个人棱角。"
        actions={
          <>
            <PrimaryLink href="/blog">先看模板里的内容页</PrimaryLink>
            <SecondaryLink href="https://ybot.top/">打开旧站对照</SecondaryLink>
          </>
        }
        aside={
          <div className="grid gap-4">
            {heroMetrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-[26px] border border-white/12 bg-white/6 p-6 shadow-[0_18px_48px_rgba(3,7,18,0.28)]"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.26em] text-white/46">
                  {metric.label}
                </p>
                <p className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-white">
                  {metric.value}
                </p>
                <p className="mt-3 text-sm leading-7 text-white/68">{metric.detail}</p>
              </div>
            ))}
          </div>
        }
      />

      <section className="py-20 md:py-24">
        <Container>
          <SectionHeading
            eyebrow="Core Channels"
            title="整站不再只是首页好看，而是每一层都像同一个品牌。"
            description="这次模板化先把最关键的三条内容主线拉通：博客、工具、项目。每条线都共享统一的骨架，但保留自己的叙事重点。"
          />
          <div className="grid gap-6 lg:grid-cols-3">
            {homePillars.map((pillar) => (
              <Surface key={pillar.title} className="h-full p-7 md:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-muted)]">
                  {pillar.eyebrow}
                </p>
                <h3 className="font-display mt-6 text-3xl tracking-[-0.04em] text-[var(--color-foreground)]">
                  {pillar.title}
                </h3>
                <p className="mt-4 text-base leading-8 text-[var(--color-muted)]">
                  {pillar.description}
                </p>
                <div className="mt-8">
                  <InlineLink href={pillar.href}>进入板块 →</InlineLink>
                </div>
              </Surface>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-black/8 bg-white/42 py-20 md:py-24">
        <Container>
          <div className="mb-10 grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
            <SectionHeading
              eyebrow="Content Snapshot"
              title="模板骨架已经能承接真实迁移。"
              description={`目前这套母版已经整理出 ${snapshot.postCount} 篇文章、${snapshot.projectCount} 个项目入口和 ${snapshot.toolCount} 个工具模块的展示逻辑，最近一篇内容时间点是 ${snapshot.latestPostDate}。`}
            />
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <Tag>Migration Ready</Tag>
              <Tag>Static Build</Tag>
              <Tag>Shared UI Shell</Tag>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-black/8 bg-white/42 py-20 md:py-24">
        <Container>
          <SectionHeading
            eyebrow="Latest Essays"
            title="先把阅读层级做漂亮，内容才会像资产。"
            description="参考站的内容优先感值得学，但 YBOT 这版会把标题、留白和模块节奏再往上推一档，让阅读更有门面感。"
            action={<InlineLink href="/blog">查看全部文章 →</InlineLink>}
          />
          {featuredPost ? (
            <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
              <ArticleCard post={featuredPost} featured />
              <div className="grid gap-6">
                {secondaryPosts.map((post) => (
                  <ArticleCard key={post.slug} post={post} />
                ))}
              </div>
            </div>
          ) : null}
        </Container>
      </section>

      <section className="py-20 md:py-24">
        <Container>
          <SectionHeading
            eyebrow="Selected Work"
            title="项目页要像案例档案，不像功能清单。"
            description="项目模块会用更稳的卡片、更厚的叙事和更明确的结果感，帮你把“我做过什么”说得更可信。"
            action={<InlineLink href="/projects">看项目模板 →</InlineLink>}
          />
          <div className="grid gap-6 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-black/8 bg-[var(--color-ink)] py-20 text-white md:py-24">
        <Container>
          <SectionHeading
            eyebrow="Operator Stack"
            title="工具页不是收链接，而是输出判断。"
            description="真正有用的工具目录，得告诉人什么时候用、为什么留、和别的方案相比值不值得长期放进系统。"
            action={<InlineLink href="/tools" invert>看工具目录 →</InlineLink>}
            invert
          />
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {toolStack.map((tool) => (
              <div key={tool.slug} className="rounded-[28px] border border-white/10 bg-white/6 p-7 shadow-[0_18px_60px_rgba(3,7,18,0.24)]">
                <Tag invert>{tool.category}</Tag>
                <h3 className="mt-6 text-2xl font-semibold tracking-[-0.03em] text-white">{tool.name}</h3>
                <p className="mt-3 text-xs uppercase tracking-[0.18em] text-white/42">{tool.priority}</p>
                <p className="mt-4 text-sm leading-7 text-white/68">{tool.description}</p>
                <p className="mt-6 border-t border-white/10 pt-5 text-sm leading-7 text-white/54">{tool.useCase}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-24">
        <Container className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <Surface className="p-8 md:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-muted)]">
              Method
            </p>
            <h2 className="font-display mt-4 text-4xl tracking-[-0.04em] text-[var(--color-foreground)] md:text-5xl">
              这次改版真正要做的，不是一张新皮，而是一套长期能撑住内容增长的母版。
            </h2>
            <div className="mt-8 space-y-5">
              {principles.map((principle) => (
                <div key={principle.title} className="rounded-[22px] border border-black/8 bg-black/[0.025] p-5">
                  <h3 className="text-lg font-semibold tracking-[-0.03em] text-[var(--color-foreground)]">
                    {principle.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">
                    {principle.description}
                  </p>
                </div>
              ))}
            </div>
          </Surface>

          <Surface className="p-8 md:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-muted)]">
              Rollout Path
            </p>
            <div className="mt-8 space-y-8">
              {timeline.map((item) => (
                <div key={item.year} className="grid gap-4 border-t border-black/8 pt-8 md:grid-cols-[110px_1fr] md:gap-8 first:border-t-0 first:pt-0">
                  <div className="font-display text-4xl tracking-[-0.05em] text-[var(--color-accent-strong)]">
                    {item.year}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold tracking-[-0.03em] text-[var(--color-foreground)]">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-[var(--color-muted)] md:text-base md:leading-8">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Surface>
        </Container>
      </section>

      <section className="pb-20 md:pb-24">
        <Container>
          <div className="rounded-[36px] border border-black/8 bg-[var(--color-ink)] px-7 py-10 text-white shadow-[0_26px_90px_rgba(3,7,18,0.22)] md:px-10 md:py-14">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/44">Ready to Scale</p>
            <div className="mt-5 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <h2 className="font-display text-4xl tracking-[-0.05em] md:text-5xl">
                  新模板已经把门面立起来了，下一步就是把旧站内容一层层接进来。
                </h2>
                <p className="mt-4 max-w-3xl text-base leading-8 text-white/68">
                  先完成视觉骨架，再做数据接驳。这样不管博客、工具还是项目，迁移时都不会再被样式反复拖住脚。
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <PrimaryLink href="/blog">进入内容模板</PrimaryLink>
                <SecondaryLink href="/about">查看整站说明</SecondaryLink>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
