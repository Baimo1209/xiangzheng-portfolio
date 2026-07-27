import { notFound } from "next/navigation";
import SiteShell from "../../SiteShell";
import { articles } from "../../content";

export default async function Post({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articles.find(item => item.slug === slug);
  if (!article) notFound();
  return <SiteShell><article className="post-layout"><header className="post-header"><time>{article.date} · {article.category}</time><h1>{article.title}</h1><p>{article.excerpt}</p>{article.repository && <a className="repository-link" href={article.repository.url} target="_blank" rel="noreferrer">{article.repository.label} ↗</a>}</header><div className="post-content">{article.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}</div></article></SiteShell>;
}
