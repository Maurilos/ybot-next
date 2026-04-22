import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ybot.top"),
  title: {
    default: "YBOT — Signal-Led Site System",
    template: "%s | YBOT",
  },
  description:
    "一个更大气、更有个性的内容型个人站模板系统，承接博客、工具、项目与品牌表达。",
  openGraph: {
    title: "YBOT — Signal-Led Site System",
    description:
      "把博客、工具、项目与个人品牌放进同一套前台模板，做出更厚重的内容型站点。",
    url: "https://ybot.top",
    siteName: "YBOT",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "YBOT — Signal-Led Site System",
    description:
      "更大气、更锋利的内容型个人站模板系统。",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className={`${geistSans.variable} ${geistMono.variable}`}>
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
