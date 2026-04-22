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
import { heroMetrics, homePillars, siteProfile, timeline } from "@/content/site";
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
        eyebrow={siteProfile.title}
        title={siteProfile.heroTagline}
        description={`${siteProfile.description} 这一版首页已经开始承接旧站真实内容：${snapshot.postCount} 篇文章、${snapshot.resourceCount} 个栏目页面与一批重点入口被重组进新的前台模板。`}
        actions={
          <>
            <PrimaryLink href="/blog">查看已迁移文章</PrimaryLink>
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
            eyebrow="Archive Channels"
            title="旧站内容已经开始按新结构重排。"
            description="不再让文章、资源和专题入口散落在老导航里，而是收进一套更统一、更耐看的编辑型前台。"
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
              eyebrow="Migration Snapshot"
              title="这次不是换一层假皮，而是在迁老站。"
              description={`目前已本地化 ${snapshot.postCount} 篇正式文章、${snapshot.resourceCount} 个公开栏目页，并把旧站主题“技术、折腾、阅读与长期留存”放回到新首页的正中央。`}
            />
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <Tag>Legacy Snapshot</Tag>
              <Tag>Static Content</Tag>
              <Tag>{siteProfile.owner.location}</Tag>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-black/8 bg-white/42 py-20 md:py-24">
        <Container>
          <SectionHeading
            eyebrow="Latest From Legacy"
            title="旧站当前三篇正式文章，已经迁进新模板。"
            description="文章标题、分类、阅读时长、关键词与正文结构都来自旧站公开页面快照，而不是示例文案。"
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
            eyebrow="Selected Columns"
            title="旧站里更像“栏目 / 产品”的入口，被集中成一个展示面。"
            description="Open Source、Fragments、Mindmap Viewer 这些页面不再塞在旧导航里，而是被重新包装成更清晰的专题卡片。"
            action={<InlineLink href="/projects">看栏目页 →</InlineLink>}
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
            eyebrow="Resource Layers"
            title="旧站的资源类页面，也被迁成统一的资源工作台。"
            description="Agent Skills、Wiki、Daily English、Links、Fragments 这些原本分散的页面，现在开始进入更一致的展示层。"
            action={<InlineLink href="/tools" invert>看资源页 →</InlineLink>}
            invert
          />
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {toolStack.slice(0, 3).map((tool) => (
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
              About The Archive
            </p>
            <h2 className="font-display mt-4 text-4xl tracking-[-0.04em] text-[var(--color-foreground)] md:text-5xl">
              作者页里的真实自述，也开始回到新站里。
            </h2>
            <div className="mt-8 space-y-5">
              {siteProfile.aboutLines.slice(1, 4).map((line) => (
                <div key={line} className="rounded-[22px] border border-black/8 bg-black/[0.025] p-5">
                  <p className="text-sm leading-7 text-[var(--color-foreground)]/82 md:text-base md:leading-8">
                    {line}
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
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/44">Next Migration Step</p>
            <div className="mt-5 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <h2 className="font-display text-4xl tracking-[-0.05em] md:text-5xl">
                  下一步可以继续把 archives、categories、wiki 子条目和更多碎片条目往新站接。
                </h2>
                <p className="mt-4 max-w-3xl text-base leading-8 text-white/68">
                  当前已经不是模板示例站，而是把旧站真实公开内容开始逐块迁进来了。后面继续接更多历史内容就行。
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <PrimaryLink href="/blog">继续看文章</PrimaryLink>
                <SecondaryLink href="/about">查看站点说明</SecondaryLink>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
