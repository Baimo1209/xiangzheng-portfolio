import SiteShell from "../SiteShell";
import { skillGroups } from "../content";

export default function Skills() {
  return <SiteShell>
    <section className="page-hero compact"><span>Skill Tree</span><h1 className="gradient-text">技能树</h1><p>按实践方向整理的技术与工具。</p></section>
    <section className="content-section skill-section"><div className="skill-grid">
      {skillGroups.map((group, index) => <article className="glass-card" key={group.title}><div className="skill-card-head"><div><h2>{group.title}</h2><p>{group.subtitle}</p></div><span>{String(index + 1).padStart(2, "0")}</span></div><div className="skill-list">{group.items.map(([name, level]) => <div className="skill-item" key={name}><div><span>{name}</span><strong>{level}%</strong></div><i><b style={{width: `${level}%`}} /></i></div>)}</div></article>)}
    </div><div className="tool-cloud"><span>Python</span><span>PyTorch</span><span>Java</span><span>Android</span><span>Git</span><span>GitHub</span><span>PowerShell</span><span>VS Code</span></div></section>
  </SiteShell>;
}
