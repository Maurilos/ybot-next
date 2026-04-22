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
        description={`${siteProfile.description} 现在已经把 ${snapshot.postCount} 篇示例文章、${snapshot.toolCount} 个工具模块和 ${snapshot.projectCount} 个项目展示位接进这套模板里，用来验证整站节奏。`}
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

      <section className="py-20 md:py-24">
        <Container>
          <SectionHeading
            eyebrow="Site Layers"
            title="整站骨架已经立起来了。"
            description="这版先不碰旧数据，只把首页、内容页、工具页和项目页做成同一套成熟前台。"
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

      <section className="border-b border-black/8 bg-white/42 py-20 md:py-24">
        <Container>
          <SectionHeading
            eyebrow="Featured Writing"
            title="博客页先用示例文章把阅读路径跑通。"
            description="列表卡片、主打文章、分类模块和详情页节奏都已经具备，后面直接替换成真实内容就行。"
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

      <section className="py-20 md:py-24">
        <Container>
          <SectionHeading
            eyebrow="Project Presence"
            title="项目页负责把站点的气场拉起来。"
            description="这里先用占位项目卡去定义陈列方式、层级关系和未来的扩展空间。"
            action={<InlineLink href="/projects">看项目页 →</InlineLink>}
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
            eyebrow="Tool Modules"
            title="工具页先做成一个更像工作台的模块层。"
            description="当真实资源还没进来时，这一页先承接方法、模块、系统说明，站点也不会显得空。"
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

      <section className="py-16 md:py-20">
        <Container>
          <Surface className="p-8 md:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-muted)]">
              YBOT 2.0
            </p>
            <div className="mt-5 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <h2 className="font-display text-4xl tracking-[-0.05em] text-[var(--color-foreground)] md:text-5xl">
                  首页先收束到 5 个核心区块，其他说明压成一段就够了。
                </h2>
                <p className="mt-4 max-w-3xl text-base leading-8 text-[var(--color-muted)]">
                  这样首页会更利落，信息密度也更像成熟站点。后面你只需要在这套骨架上继续填内容，不用再反复改版式。
                </p>
              </div>
              <div className="flex flex-wrap gap-3 lg:justify-end">
                <Tag>Cleaner Home</Tag>
                <Tag>Editorial Flow</Tag>
                <Tag>{siteProfile.owner.location}</Tag>
              </div>
            </div>
          </Surface>
        </Container>
      </section>
    </>
  );
}
