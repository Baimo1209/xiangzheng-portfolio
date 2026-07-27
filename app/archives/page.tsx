import Link from "next/link";
import SiteShell from "../SiteShell";
import { articles } from "../content";

export default function Archives() {
  return <SiteShell><section className="page-hero compact"><span>Archives</span><h1 className="gradient-text">文章归档</h1><p>科研、项目与工程实践记录。</p></section><section className="content-section archive-list">{articles.map(article => <article className="archive-item" key={article.slug}><time>{article.date}</time><Link href={`/posts/${article.slug}/`}>{article.title}</Link></article>)}</section></SiteShell>;
}
