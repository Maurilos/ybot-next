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
import { heroMetrics, homePillars, siteProfile } from "@/content/site";
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
        description={`${siteProfile.description} 现在先用 ${snapshot.postCount} 篇示例文章、${snapshot.toolCount} 个工具模块和 ${snapshot.projectCount} 个项目位，把首页节奏和整站气质打磨顺。`}
        actions={
          <>
            <PrimaryLink href="/blog">看博客模板</PrimaryLink>
            <SecondaryLink href="/about">看架构说明</SecondaryLink>
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

      <section className="py-16 md:py-20">
        <Container>
          <SectionHeading
            eyebrow="Site Layers"
            title="先看这座站的三条主线。"
            description="首页先承担品牌入口和导航职责，把博客、工具和项目三条线清楚摆出来。"
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

      <section className="border-b border-black/8 bg-white/42 py-16 md:py-20">
        <Container>
          <SectionHeading
            eyebrow="Featured Writing"
            title="最新文章"
            description="先让列表页和详情页的阅读感成立，后面再慢慢替换成真实内容。"
            action={<InlineLink href="/blog">查看博客页 →</InlineLink>}
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

      <section className="py-16 md:py-20">
        <Container>
          <SectionHeading
            eyebrow="Project Presence"
            title="项目精选"
            description="这里先把陈列方式和层级关系做好，让项目区看起来像作品展示，而不是链接堆叠。"
            action={<InlineLink href="/projects">看项目页 →</InlineLink>}
          />
          <div className="grid gap-6 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-black/8 bg-[var(--color-ink)] py-16 text-white md:py-20">
        <Container>
          <SectionHeading
            eyebrow="Tool Modules"
            title="工具区"
            description="在真实资源还没接进来之前，先用模块化信息把这一页撑稳。"
            action={<InlineLink href="/tools" invert>看工具页 →</InlineLink>}
            invert
          />
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {toolStack.slice(0, 3).map((tool) => (
              <div
                key={tool.slug}
                className="rounded-[28px] border border-white/10 bg-white/6 p-7 shadow-[0_18px_60px_rgba(3,7,18,0.24)]"
              >
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

      <section className="py-12 md:py-16">
        <Container>
          <Surface className="p-7 md:p-9">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-muted)]">
              YBOT 2.0
            </p>
            <div className="mt-5 grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <h2 className="font-display max-w-4xl text-[2.35rem] tracking-[-0.05em] text-[var(--color-foreground)] md:text-[3.1rem]">
                  首页先做轻，结构先做稳。
                </h2>
                <p className="mt-3 max-w-3xl text-[15px] leading-8 text-[var(--color-muted)] md:text-base">
                  现在只保留最该出现的 5 段内容，后面的说明压成一块。首页会更利落，也更像成熟站点的门面。
                </p>
              </div>
              <div className="flex flex-wrap gap-3 lg:justify-end">
                <Tag>Cleaner Home</Tag>
                <Tag>Better Type</Tag>
                <Tag>{siteProfile.owner.location}</Tag>
              </div>
            </div>
          </Surface>
        </Container>
      </section>
    </>
  );
}
