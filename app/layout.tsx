import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "localhost:3000";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.includes("localhost") ? "http" : "https");
  const origin = `${protocol}://${host}`;

  return {
    title: "项征 | 个人博客",
    description:
      "项征的个人博客，记录人工智能科研、软件项目与工程实践。",
    icons: {
      icon: "/favicon.svg",
      shortcut: "/favicon.svg",
    },
    openGraph: {
      title: "项征 | 个人博客",
      description: "人工智能科研、软件项目与工程实践记录。",
      type: "website",
      locale: "zh_CN",
      images: [{ url: `${origin}/og.png`, width: 1733, height: 909, alt: "项征个人网站" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "项征 | 个人博客",
      description: "人工智能科研、软件项目与工程实践记录。",
      images: [`${origin}/og.png`],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
