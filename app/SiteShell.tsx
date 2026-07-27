"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const nav = [
  ["首页", "/"],
  ["关于", "/about/"],
  ["技能", "/skills/"],
  ["归档", "/archives/"],
];

export default function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [islandOpen, setIslandOpen] = useState(false);
  const [clock, setClock] = useState("--:--");
  const [date, setDate] = useState("今天");

  useEffect(() => {
    const update = () => {
      const now = new Date();
      setClock(`${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}`);
      setDate(`${now.getMonth() + 1}月${now.getDate()}日 ${["周日", "周一", "周二", "周三", "周四", "周五", "周六"][now.getDay()]}`);
    };
    update();
    const timer = window.setInterval(update, 30000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <>
      <div className="site-bg" style={{"--site-bg-image": "url('/bg.jpg')", "--site-bg-mobile-image": "url('/bg-mobile.jpg')"} as React.CSSProperties} aria-hidden="true" />
      <div className="site-noise" aria-hidden="true" />
      <header className="site-header is-scrolled">
        <nav className="nav-shell" aria-label="主导航">
          <Link className="brand gradient-text" href="/">项征</Link>
          <button className="nav-toggle" type="button" aria-expanded={menuOpen} aria-label="打开导航" onClick={() => setMenuOpen(!menuOpen)}>
            <span /><span /><span />
          </button>
          <div className={`nav-links${menuOpen ? " is-open" : ""}`}>
            {nav.map(([text, href]) => (
              <Link className={(href === "/" ? pathname === "/" : pathname.startsWith(href)) ? "is-active" : ""} href={href} key={href} onClick={() => setMenuOpen(false)}>{text}</Link>
            ))}
          </div>
        </nav>
      </header>
      <aside className={`dynamic-island${islandOpen ? " is-open" : ""}`} aria-label="时间状态">
        <button className="di-collapsed" type="button" aria-expanded={islandOpen} onClick={() => setIslandOpen(!islandOpen)}>
          <span className="di-live-dot" /><span>{clock}</span>
        </button>
        <div className="di-panel"><div><div className="di-greeting">你好</div><div className="di-date">{date}</div></div><div className="di-divider" /><div className="di-weather"><span>个人博客</span></div></div>
      </aside>
      <main className="site-main">{children}</main>
      <footer className="site-footer">
        <div className="footer-inner">
          <div><strong>项征</strong><p>个人博客与项目记录</p></div>
          <div className="footer-runtime"><span>华中科技大学</span><strong>人工智能专业</strong></div>
          <div className="footer-links">
            <Link href="/about/">关于</Link><Link href="/skills/">技能</Link><Link href="/archives/">归档</Link>
            <a href="https://github.com/Baimo1209" target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </div>
      </footer>
    </>
  );
}
