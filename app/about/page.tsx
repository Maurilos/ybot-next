import type { Metadata } from "next";

import { siteProfile, timeline } from "@/content/site";
import {
  Container,
  PageHero,
  PrimaryLink,
  SecondaryLink,
  SectionHeading,
  Surface,
} from "@/components/site-primitives";
import { getContentSnapshot, getLegacyResourceBySlug } from "@/lib/content";

export const metadata: Metadata = {
  title: "关于",
  description: "YBot Archive 的作者介绍与旧站迁移说明。",
};

export default function AboutPage() {
  const snapshot = getContentSnapshot();
  const aboutPage = getLegacyResourceBySlug("about");

  return (
    <>
      <PageHero
        eyebrow="About The Archive"
        title="一个对网络世界持续保持好奇心的人。"
        description={`${siteProfile.aboutLines[0] || siteProfile.description} 旧站作者页已经抓成本地快照：${snapshot.postCount} 篇文章、${snapshot.resourceCount} 个栏目页与一批专题入口正在被重排进新站。`}
        compact
        actions={
          <>
            <PrimaryLink href="/">回到首页</PrimaryLink>
            <SecondaryLink href="https://ybot.top/about/">查看旧站原页</SecondaryLink>
          </>
        }
      />

      <section className="py-20 md:py-24">
        <Container>
          <SectionHeading
            eyebrow="Profile"
            title="旧站 About 页里的真实自述，已经开始接入。"
            description="这一页不再写模板腔，而是以旧站公开作者介绍为素材，把作者身份和站点气质重新摆进新视觉里。"
          />
          <div className="grid gap-6 lg:grid-cols-2">
            {siteProfile.aboutLines.slice(0, 4).map((line) => (
              <Surface key={line} className="h-full p-8">
                <p className="text-base leading-8 text-[var(--color-foreground)]/84">{line}</p>
              </Surface>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-black/8 bg-white/42 py-20 md:py-24">
        <Container>
          <SectionHeading
            eyebrow="Source Details"
            title="作者与旧站线索。"
            description="下面这些信息都来自旧站公开页面，而不是我编的示例数据。"
          />
          <div className="grid gap-6 lg:grid-cols-3">
            <Surface className="p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-muted)]">GitHub</p>
              <p className="font-display mt-4 text-4xl tracking-[-0.05em] text-[var(--color-foreground)]">
                @{siteProfile.owner.githubHandle}
              </p>
              <p className="mt-4 text-base leading-8 text-[var(--color-muted)]">
                旧站首页公开指向的 GitHub 账号为 {siteProfile.owner.displayName}。
              </p>
            </Surface>
            <Surface className="p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-muted)]">Location</p>
              <p className="font-display mt-4 text-4xl tracking-[-0.05em] text-[var(--color-foreground)]">
                {siteProfile.owner.location}
              </p>
              <p className="mt-4 text-base leading-8 text-[var(--color-muted)]">
                首页 collection info 区块公开显示的地理信息为 {siteProfile.owner.location}。
              </p>
            </Surface>
            <Surface className="p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-muted)]">Legacy Page</p>
              <p className="font-display mt-4 text-4xl tracking-[-0.05em] text-[var(--color-foreground)]">
                {aboutPage?.title ?? "About"}
              </p>
              <p className="mt-4 text-base leading-8 text-[var(--color-muted)]">
                旧站 about 页已抓取为本地快照，后面可以继续细化成更完整的作者页内容模块。
              </p>
            </Surface>
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-24">
        <Container>
          <SectionHeading
            eyebrow="Execution"
            title="迁移是按阶段推进的。"
            description="先抓公开内容，再本地结构化，最后逐页换成真实数据。"
          />
          <div className="grid gap-6 lg:grid-cols-3">
            {timeline.map((item) => (
              <Surface key={item.year} className="h-full p-8">
                <p className="font-display text-5xl tracking-[-0.05em] text-[var(--color-accent-strong)]">
                  {item.year}
                </p>
                <h2 className="mt-6 text-2xl font-semibold tracking-[-0.03em] text-[var(--color-foreground)]">
                  {item.title}
                </h2>
                <p className="mt-4 text-base leading-8 text-[var(--color-muted)]">
                  {item.description}
                </p>
              </Surface>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
