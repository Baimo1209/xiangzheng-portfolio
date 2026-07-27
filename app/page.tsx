import Link from "next/link";
import SiteShell from "./SiteShell";
import { articles } from "./content";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function Home() {
  return (
    <SiteShell>
      <section className="hero-section">
        <div className="hero-inner">
          <div className="hero-profile reveal is-visible">
            <div className="avatar-wrap"><img src={`${basePath}/avatar.png`} alt="项征" /></div>
            <h1>项征</h1>
            <p className="profile-role">人工智能 / 计算机视觉 / 项目开发</p>
            <p className="profile-summary">华中科技大学人工智能专业学生，记录科研、项目与工程实践。</p>
            <div className="social-row"><a href="https://github.com/Baimo1209" target="_blank" rel="noreferrer" title="GitHub">GH</a></div>
            <div className="tag-row"><span>AI</span><span>视觉</span><span>开发</span><span>科研</span></div>
          </div>
          <div className="hero-copy reveal is-visible">
            <div className="eyebrow">Welcome</div>
            <h2><span>学习、研究</span><br /><span className="gradient-text">与项目记录</span></h2>
            <p className="typing-line"><span>计算机视觉 · 多模态人工智能 · 软件工程</span></p>
            <blockquote><p>记录做过的项目。</p><cite>- 项征</cite></blockquote>
            <div className="quick-links">
              <Link className="quick-link" href="/about/"><span className="quick-icon" /><span><strong>关于我</strong><small>教育背景、研究兴趣与当前方向</small></span><b>›</b></Link>
              <Link className="quick-link" href="/archives/"><span className="quick-icon" data-icon="book" /><span><strong>文章归档</strong><small>科研、项目与工程实践记录</small></span><b>›</b></Link>
              <Link className="quick-link" href="/skills/"><span className="quick-icon" data-icon="skill" /><span><strong>技能树</strong><small>技术栈与实践能力</small></span><b>›</b></Link>
            </div>
          </div>
        </div>
      </section>
      <section className="content-section">
        <div className="section-heading"><span>Latest Posts</span><h2>最近文章</h2></div>
        <div className="post-grid">
          {articles.slice(0, 3).map((article) => <article className="post-card" key={article.slug}><Link href={`/posts/${article.slug}/`}><time>{article.date}</time><h3>{article.title}</h3><p>{article.excerpt}</p></Link></article>)}
        </div>
      </section>
    </SiteShell>
  );
}
