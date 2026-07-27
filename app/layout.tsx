import type { Metadata } from "next";
import { headers } from "next/headers";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "localhost:3000";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.includes("localhost") ? "http" : "https");
  const origin = `${protocol}://${host}`;

  return {
    title: "项征｜个人项目与技术文章",
    description:
      "项征的个人项目网站：Android、AI Agent、计算机视觉、Windows 工程自动化与项目交付记录。",
    icons: {
      icon: "/favicon.svg",
      shortcut: "/favicon.svg",
    },
    openGraph: {
      title: "项征｜把想法做成可验证的作品",
      description: "Android、AI、计算机视觉与工程自动化项目归档。",
      type: "website",
      locale: "zh_CN",
      images: [{ url: `${origin}/og.png`, width: 1733, height: 909, alt: "项征个人网站" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "项征｜把想法做成可验证的作品",
      description: "Android、AI、计算机视觉与工程自动化项目归档。",
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
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
