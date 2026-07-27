const projects = [
  {
    number: "01",
    title: "YOLOv8 图像识别",
    label: "本科科研 · 目标检测",
    description:
      "大学生创新创业训练项目。承担主要代码开发，完成数据处理、模型训练、实验验证、参数调整与结果分析，建立了视觉模型训练的完整实践链路。",
    result: "Python · PyTorch · YOLOv8",
    href: "#article-research",
  },
  {
    number: "02",
    title: "计算机视觉 AI 项目",
    label: "本科科研 · 马杰老师指导",
    description:
      "参与计算机视觉方向创新项目，负责部分核心算法与代码实现，并参与模型训练、实验测试和效果优化，持续积累视觉算法工程经验。",
    result: "视觉算法 · 模型训练 · 实验分析",
    href: "#article-research",
  },
  {
    number: "03",
    title: "ASMR Player",
    label: "ANDROID · JAVA",
    description:
      "面向本地音声文件的 Android 播放器。递归识别音频、封面与 WebVTT 台词，支持同步字幕、进度跳转、拖动排序和离线缓存。",
    result: "12 次提交 · v1.4.0 · 完全本地运行",
    href: "https://github.com/Baimo1209/ASMR-Player",
  },
  {
    number: "04",
    title: "医疗症状分诊助手",
    label: "PYTHON · AI AGENT",
    description:
      "为 Kaggle Healthcare AI Agent Hackathon 制作的本地浏览器原型。以多轮问答整理症状、动态更新风险等级，并明确展示就医建议与安全边界。",
    result: "本地优先 · 多轮状态 · 风险分层",
    href: "https://github.com/Baimo1209/healthcare-symptom-triage-assistant",
  },
  {
    number: "05",
    title: "LightDiff 图像增强",
    label: "PYTORCH · COMPUTER VISION",
    description:
      "从选题、数据构建到训练评测和课程报告的完整交付。实现轻量条件扩散模型、TorchScript 导出、4K 分块推理与可复现实验记录。",
    result: "62,955 参数 · 0.298 MiB · 51 项测试通过",
    href: "#article-lightdiff",
  },
  {
    number: "06",
    title: "Windows 工程自动化",
    label: "POWERSHELL · DELIVERY",
    description:
      "围绕代理链路、应用更新、桌面性能和开发环境做证据驱动的诊断与自动化，把一次性修复沉淀为可回滚、可验证的工作流。",
    result: "诊断 · 回滚 · 自动化 · 验证",
    href: "#article-windows",
  },
];

const skills = [
  {
    title: "应用开发",
    summary: "把需求落到可以安装、运行和持续迭代的产品。",
    items: ["Java / Android", "React / Next.js", "HTML / CSS", "本地优先应用设计"],
  },
  {
    title: "AI 与计算机视觉",
    summary: "不只调用模型，更重视数据、评测、失败样本和交付证据。",
    items: ["Python / PyTorch", "训练与消融实验", "TorchScript 部署", "AI Agent 原型"],
  },
  {
    title: "工程与自动化",
    summary: "处理真实 Windows 环境中的依赖、网络、构建和恢复路径。",
    items: ["PowerShell", "Git / GitHub Actions", "代理链路诊断", "自动化与可逆变更"],
  },
  {
    title: "项目交付",
    summary: "从模糊目标到可运行版本，再用测试和文档收束成果。",
    items: ["需求拆解", "最小完整版本", "测试与性能基准", "技术报告与归档"],
  },
];

const articles = [
  {
    id: "article-research",
    date: "本科阶段",
    category: "科研经历",
    title: "从 YOLOv8 到多模态：我的视觉 AI 研究起点",
    lead:
      "两项大学生创新创业训练项目，让我从“会调用模型”走向理解数据、训练、实验和代码实现之间的完整关系。",
    paragraphs: [
      "我就读于华中科技大学人工智能与自动化学院人工智能专业、本硕博 2301 班。本科阶段参与两项人工智能创新项目，其中一项以 YOLOv8 为基础开展图像识别与目标检测实践，我承担主要代码开发，并完成数据处理、模型训练、实验测试与参数调优。",
      "另一项计算机视觉项目由马杰老师指导，我参与视觉算法模块和部分核心代码实现，并围绕训练结果进行实验分析与优化。这些经历形成了我在 Python、C++、PyTorch、目标检测和视觉模型训练方面的基础。",
      "研究生阶段希望在已有计算机视觉经验上继续探索多模态人工智能、视觉语言模型、大语言模型与 AI Agent，优先参与具有真实应用价值、能够沉淀工程能力和实验成果的研究项目。",
    ],
    tags: ["YOLOv8", "Computer Vision", "PyTorch", "Multimodal AI"],
  },
  {
    id: "article-lightdiff",
    date: "2026.07.19",
    category: "计算机视觉",
    title: "把课程设计做成一套可验证的 LightDiff 交付",
    lead:
      "这不是只训练一次模型，而是把选题、数据、实验、部署和报告串成同一条证据链。",
    paragraphs: [
      "项目以低照度图像增强为目标，构建了冻结的数据版本和确定性训练样本。训练阶段保留 40 个 epoch 的历史、最佳 checkpoint、轻中重三档退化结果与 1/2/4 步消融，避免只展示一张“看起来不错”的效果图。",
      "最终模型包含 62,955 个参数，TorchScript 体积约 0.298 MiB；512×512 推理中位数约 7.24 ms，并完成真实 4K 分块推理。整体 PSNR 为 21.760 dB、SSIM 为 0.8825，同时如实保留重退化场景弱于简单基线的限制。",
      "这次工作让我确认：完整项目的价值不只在最优指标，也在于任何结论都能回到数据、模型、测试和报告中被复核。",
    ],
    tags: ["PyTorch", "Diffusion", "Evaluation", "TorchScript"],
  },
  {
    id: "article-asmr",
    date: "2026.06.20",
    category: "Android",
    title: "ASMR Player：为本地音声目录设计播放器",
    lead:
      "从真实文件结构出发，处理封面、音轨、台词和播放状态，而不是把它做成又一个依赖云端的播放器。",
    paragraphs: [
      "应用使用 Android 系统文件夹选择器，由用户主动授权目录，再递归识别 MP3、WAV、图片和 WebVTT 文件。作品列表、音轨列表、同步台词、歌词式跳转、迷你播放器与播放历史围绕本地使用场景组织。",
      "项目不声明 INTERNET 权限，不上传文件列表和播放记录；目录授权、排序和缓存全部保存在设备本地。正式版使用独立 release key 签名，并明确把密钥排除在仓库之外。",
      "这个项目训练的是产品边界：功能不是越多越好，权限、隐私、离线体验和可维护的文件识别规则同样属于核心设计。",
    ],
    tags: ["Android", "Java", "WebVTT", "Offline-first"],
  },
  {
    id: "article-healthcare",
    date: "2026.06.23",
    category: "AI Agent",
    title: "医疗症状分诊助手：让安全边界成为产品功能",
    lead:
      "医疗原型最重要的不是“像医生一样回答”，而是组织信息、识别风险，并清楚知道自己不能做什么。",
    paragraphs: [
      "原型通过多轮对话维护患者资料、主要症状、持续时间和严重程度，能够理解常见否定回答，并在新信息进入后刷新风险等级与下一步建议。",
      "界面提供疾病与症状检索，但始终将结果定位为教育性分诊支持，不代替诊断；紧急警示、就医路径和免责声明不是页脚补充，而是输出结构的一部分。",
      "项目采用本地浏览器界面和本地案例保存，便于演示、复现和审查，也让我更重视高风险 AI 产品中的可解释状态与明确升级路径。",
    ],
    tags: ["Python", "Agent", "Risk Triage", "Safety"],
  },
  {
    id: "article-windows",
    date: "2026.07.17",
    category: "工程实践",
    title: "从一次修复到可复用的 Windows 工程工作流",
    lead:
      "真正困难的故障通常跨越应用、系统代理、Git、服务和网络端点；解决它们需要证据，而不是连续重装。",
    paragraphs: [
      "在 GitHub 更新异常中，我把用户代理、WinHTTP、Git 专用代理和应用网络路径拆开验证，并分别测试 github.com、codeload.github.com 与 objects.githubusercontent.com，避免用一次成功请求替代真实健康判断。",
      "在桌面卡顿与开发工具问题中，我保留恢复路径、比较变更前后状态，再把有效处理固化为脚本。执行成功只是中间状态，用户可见行为得到复现和验证才算问题解决。",
      "这套方法也延伸到项目交付：小步、可逆、保留证据，遇到失败先定位层级，再选择影响最小的修复。",
    ],
    tags: ["Windows", "PowerShell", "Networking", "Debugging"],
  },
];

export default function Home() {
  return (
    <main>
      <header className="topbar">
        <a className="wordmark" href="#top" aria-label="项征首页">
          项征<span>·</span>
        </a>
        <nav aria-label="主导航">
          <a href="#about">关于</a>
          <a href="#work">项目</a>
          <a href="#skills">技能</a>
          <a href="#archive">文章</a>
        </nav>
        <a className="github-link" href="https://github.com/Baimo1209">
          GitHub ↗
        </a>
      </header>

      <section className="hero" id="top">
        <p className="eyebrow">XIANG ZHENG · PERSONAL ARCHIVE · 2026</p>
        <div className="hero-grid">
          <div>
            <h1>
              把想法做成
              <br />
              <em>可验证的作品。</em>
            </h1>
          </div>
          <div className="hero-note">
            <p>
              项征，一名以代码与 AI 协作完成项目的在校开发者。关注本地优先应用、
              计算机视觉、工程自动化，以及从原型到完整交付的全过程。
            </p>
            <div className="status">
              <span aria-hidden="true" />
              当前方向：项目完善与持续学习
            </div>
          </div>
        </div>
        <div className="hero-strip" aria-label="能力关键词">
          <span>ANDROID</span>
          <span>PYTHON</span>
          <span>COMPUTER VISION</span>
          <span>AUTOMATION</span>
          <span>DELIVERY</span>
        </div>
      </section>

      <section className="section about" id="about">
        <div className="section-index">01 / 关于</div>
        <div className="about-copy">
          <p className="large-copy">
            我不把“会用工具”当成项目终点。比起堆叠技术名词，我更在意一个想法能否
            <strong>运行、被测试、被解释，并被交付。</strong>
          </p>
          <div className="about-columns">
            <p>
              我的项目通常从真实问题开始：怎样管理复杂的本地音声目录，怎样让医疗 AI
              原型保持安全边界，怎样把课程实验变成可复核的结果，怎样在 Windows
              环境中找到跨层故障的真正原因。
            </p>
            <p>
              工作方式是先完成最小但完整的版本，再围绕失败样本、性能指标和使用反馈迭代。
              AI 是放大执行力的协作者；需求判断、风险边界和最终验证仍由人负责。
            </p>
          </div>
          <div className="profile-grid">
            <article>
              <span>教育背景</span>
              <strong>华中科技大学</strong>
              <p>人工智能与自动化学院<br />人工智能专业 · 本硕博 2301 班</p>
            </article>
            <article>
              <span>本科科研</span>
              <strong>2 项大创项目</strong>
              <p>YOLOv8 图像识别<br />计算机视觉算法与模型训练</p>
            </article>
            <article>
              <span>研究兴趣</span>
              <strong>视觉 × 多模态</strong>
              <p>Computer Vision · VLM<br />LLM · Multimodal AI · Agent</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section" id="work">
        <div className="section-heading">
          <div className="section-index">02 / 项目</div>
          <h2>精选工作</h2>
          <p>从公开仓库与近期项目中整理的代表性实践。</p>
        </div>
        <div className="project-list">
          {projects.map((project) => (
            <a className="project-row" href={project.href} key={project.number}>
              <span className="project-number">{project.number}</span>
              <div>
                <span className="project-label">{project.label}</span>
                <h3>{project.title}</h3>
              </div>
              <p>{project.description}</p>
              <span className="project-result">{project.result}</span>
              <span className="arrow" aria-hidden="true">
                ↗
              </span>
            </a>
          ))}
        </div>
      </section>

      <section className="section skills-section" id="skills">
        <div className="section-heading">
          <div className="section-index">03 / 技能</div>
          <h2>能力不是标签，<br />是完成事情的方法。</h2>
        </div>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <article className="skill-card" key={skill.title}>
              <span>0{index + 1}</span>
              <h3>{skill.title}</h3>
              <p>{skill.summary}</p>
              <ul>
                {skill.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section archive" id="archive">
        <div className="section-heading archive-heading">
          <div className="section-index">04 / 文章归档</div>
          <h2>工作笔记</h2>
          <p>记录项目为什么这样做、如何验证，以及哪些地方仍需改进。</p>
        </div>
        <div className="article-list">
          {articles.map((article) => (
            <article className="article" id={article.id} key={article.id}>
              <div className="article-meta">
                <time>{article.date}</time>
                <span>{article.category}</span>
              </div>
              <div className="article-content">
                <h3>{article.title}</h3>
                <p className="article-lead">{article.lead}</p>
                <details>
                  <summary>阅读全文 <span>＋</span></summary>
                  <div className="article-body">
                    {article.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </details>
                <div className="tags">
                  {article.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <footer>
        <div>
          <p className="footer-title">项征</p>
          <p>把想法做成可验证的作品。</p>
        </div>
        <div className="footer-links">
          <a href="https://github.com/Baimo1209">GitHub ↗</a>
          <a href="#top">返回顶部 ↑</a>
        </div>
        <p className="copyright">© 2026 XIANG ZHENG</p>
      </footer>
    </main>
  );
}
