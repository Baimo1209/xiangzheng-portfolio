import type { Metadata } from "next";
import "./globals.css";

const publicOrigin = process.env.GITHUB_PAGES === "true"
  ? "https://baimo1209.github.io/xiangzheng-portfolio"
  : "https://xiangzheng-portfolio.wishadel.chatgpt.site";
const publicPath = process.env.GITHUB_PAGES === "true" ? "/xiangzheng-portfolio" : "";

export const metadata: Metadata = {
  metadataBase: new URL(publicOrigin),
  title: "项征 | 个人博客",
  description: "项征的个人博客，记录人工智能科研、软件项目与工程实践。",
  icons: { icon: `${publicPath}/favicon.svg`, shortcut: `${publicPath}/favicon.svg` },
  openGraph: {
    title: "项征 | 个人博客",
    description: "人工智能科研、软件项目与工程实践记录。",
    type: "website",
    locale: "zh_CN",
    images: [{ url: "/og.png", width: 1733, height: 909, alt: "项征个人网站" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "项征 | 个人博客",
    description: "人工智能科研、软件项目与工程实践记录。",
    images: ["/og.png"],
  },
};

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
