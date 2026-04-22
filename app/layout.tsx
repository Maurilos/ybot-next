import type { Metadata } from "next";

import { siteProfile } from "@/content/site";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://ybot.top"),
  title: {
    default: `${siteProfile.title} — Reframed`,
    template: `%s | ${siteProfile.title}`,
  },
  description: siteProfile.description,
  openGraph: {
    title: siteProfile.title,
    description: siteProfile.description,
    url: "https://ybot.top",
    siteName: siteProfile.title,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteProfile.title,
    description: siteProfile.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>
        <div className="relative min-h-screen overflow-x-clip">
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
