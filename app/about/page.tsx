import SiteShell from "../SiteShell";

export default function About() {
  return <SiteShell>
    <section className="page-hero compact"><span>About Me</span><h1 className="gradient-text">关于我</h1><p>教育背景、科研经历与研究兴趣。</p></section>
    <section className="bento about-bento">
      <article className="bento-cell cell-bio"><div className="cell-label">简介 / INTRO</div><h2><span>你好，我是</span><br /><span className="gradient-text">项征</span></h2><p>就读于华中科技大学人工智能与自动化学院，人工智能专业，本硕博 2301 班。</p><p>本科阶段参与两项人工智能方向大学生创新项目，主要实践集中在计算机视觉、目标检测、模型训练与实验分析。</p></article>
      <article className="bento-cell cell-image"><div className="banner-media"><img src="/bg.jpg" alt="网站背景" /></div><div className="banner-text"><strong>项征</strong><span>个人博客与项目记录</span></div></article>
      <article className="bento-cell stat-cell"><span className="stat-label">本科科研</span><strong className="stat-value">2 项大创项目</strong></article>
      <article className="bento-cell stat-cell"><span className="stat-label">主要方向</span><strong className="stat-value">计算机视觉</strong></article>
      <article className="bento-cell"><div className="cell-label">经历 / FACTS</div><div className="fact-list"><div><span>目标检测</span><strong>YOLOv8</strong></div><div><span>项目指导</span><strong>马杰老师</strong></div><div><span>主要工作</span><strong>代码 / 训练 / 实验</strong></div></div></article>
      <article className="bento-cell"><div className="cell-label">研究兴趣 / INTERESTS</div><div className="chip-list"><span>Computer Vision</span><span>VLM</span><span>LLM</span><span>Multimodal AI</span><span>AI Agent</span></div></article>
      <article className="bento-cell cell-doing"><div className="cell-label">当前方向 / NOW</div><ol className="timeline-list"><li><span />继续积累视觉模型训练与评测经验</li><li><span />学习视觉语言模型与多模态方法</li><li><span />通过完整项目强化工程交付能力</li></ol></article>
    </section>
  </SiteShell>;
}
