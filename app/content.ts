export const articles = [
  {
    slug: "misc-certificates", date: "2026-09-14", category: "杂项",
    title: "杂项：英语六级与计算机三级",
    excerpt: "英语六级成绩和计算机三级考试记录。",
    paragraphs: [
      "2024 年 12 月参加大学英语六级考试，总分 566 分。其中听力 185 分，阅读 219 分，写作和翻译 162 分。",
      "2025 年 3 月参加全国计算机等级考试，取得三级网络技术证书，成绩合格。",
    ],
  },
  {
    slug: "poland-summer-school", date: "2026-09-14", category: "实习实践",
    title: "波兰实践：华沙大学暑期访学",
    excerpt: "2026 年 8 月参加华沙大学暑期项目，记录课程学习和文化参访。",
    paragraphs: [
      "2026 年 8 月 1 日至 16 日，我参加了波兰华沙大学暑期访学项目。主要安排是课程学习和文化参访。",
      "课程包括波兰语言与文化、信息技术、网络安全、应用物理和人工智能等。",
    ],
  },
  {
    slug: "vision-research", date: "2026-03-27", category: "科研经历",
    title: "大学生创新项目：目标检测与无人机检测",
    excerpt: "参与两项大学生创新项目，主要做数据整理、代码编写、模型训练和测试。",
    paragraphs: [
      "本科期间，我参与了两项人工智能方向的大学生创新项目。",
      "项翔老师指导的项目使用 YOLOv8 做目标检测。我主要负责代码编写，整理数据和标注，划分训练集与验证集，并进行训练和测试。根据误检、漏检的情况调整数据和参数。",
      "马杰老师指导的项目是低成本便携式无人机检测系统。我参与视觉算法和部分代码编写，主要涉及视频分析、点位分析和检测结果处理，也参与了训练和测试。",
    ],
  },
  {
    slug: "lightdiff-delivery", date: "2026-07-19", category: "计算机视觉课程设计",
    title: "计算机视觉课程设计：LightDiff 图像增强",
    excerpt: "一次轻量图像增强模型的课程设计，包括数据处理、训练、测试和报告整理。",
    paragraphs: [
      "课程设计选择了轻量生成式图像增强方向，尝试改善低照度、模糊和噪声等问题。",
      "数据使用 DIV2K，按 800 张训练图、100 张验证图划分。对原图加入低照度、模糊、色偏、噪声和压缩等退化，生成 3,200 对训练样本和 300 对验证样本，并分为轻、中、重三档。",
      "模型使用轻量条件扩散网络，在 RTX 4090 上训练了 40 轮。先运行 1 轮检查训练流程，再继续训练，保存每轮状态和验证结果最好的模型。最佳模型出现在第 23 轮。",
      "在 300 对验证样本上，模型的 PSNR 为 21.760 dB，SSIM 为 0.8825。整体 PSNR 比退化输入高 3.437 dB，比自动对比度与锐化基线高 1.538 dB。但重度退化下只有 15.454 dB，低于基线的 18.017 dB，这部分效果仍不理想。",
      "模型有 62,955 个参数，导出为 TorchScript 后约 0.298 MiB。RTX 4090 上处理 512×512 图像的中位耗时约为 7.24 ms。另用重叠切块的方式测试了 4K 图像，最后整理了训练记录、结果图片和课程报告。",
    ],
  },
  {
    slug: "asmr-player", date: "2026-06-20", category: "Android",
    title: "ASMR Player：本地音声播放器",
    excerpt: "自己尝试做的 Android 播放器，用于播放本地音声文件和显示台词。",
    repository: { label: "ASMR Player 代码库", url: "https://github.com/Baimo1209/ASMR-Player" },
    paragraphs: [
      "ASMR Player 是我尝试做的 Android 本地音声播放器，安装后显示为“白沫播放器”。选择文件夹后，会扫描其中的 MP3、WAV、封面和 WebVTT 台词文件。",
      "播放器按作品和音轨整理文件，支持封面显示、同步台词、点击台词跳转和拖动排序。返回列表后可以继续播放，并通过底部小播放器暂停或切歌。",
      "开发中主要处理了多层目录扫描、封面匹配、台词同步和播放状态保存。目录授权、排序和播放记录保存在本机。当前版本不申请联网权限，文件访问通过系统授权。",
      "源码、构建说明和 APK 发布在 GitHub，签名密钥与本地配置不包含在仓库中。",
    ],
  },
  {
    slug: "healthcare-agent", date: "2026-06-23", category: "AI Agent",
    title: "Kaggle 项目：医疗症状分诊助手",
    excerpt: "和室友参加 Kaggle 活动时做的演示程序，通过问答整理症状并显示风险提示。",
    repository: { label: "医疗分诊助手代码库", url: "https://github.com/Baimo1209/healthcare-symptom-triage-assistant" },
    demo: { label: "Kaggle 演示", url: "https://www.kaggle.com/code/xiangzheng968/healthcare-triage-demo" },
    paragraphs: [
      "这是我和室友参加 Kaggle Healthcare AI Agent Hackathon 时做的演示程序，使用 Python 编写，在本地浏览器中运行。",
      "程序通过多轮问答记录年龄、既往病史、症状、持续时间和严重程度，再根据回答更新风险提示和就医建议。也可以搜索疾病名称或症状，并在本机保存演示病例。",
      "开发时处理了否定回答，例如“没有胸痛或呼吸困难”，避免把用户否认的症状加入记录。页面同时显示紧急警示和使用说明。",
      "这只是教育用途的原型，不提供诊断，不能替代医生。源码和启动说明在 GitHub，Kaggle 页面提供演示。",
    ],
  },
];

export const skillGroups = [
  { title: "人工智能与视觉", subtitle: "AI & Computer Vision", items: [["Python / PyTorch", 84], ["YOLOv8 / 目标检测", 82], ["模型训练与评测", 80], ["多模态 AI", 68]] },
  { title: "应用开发", subtitle: "Application Development", items: [["Java / Android", 82], ["React / Next.js", 74], ["HTML / CSS", 76], ["本地优先设计", 84]] },
  { title: "工程实践", subtitle: "Engineering", items: [["Git / GitHub", 82], ["PowerShell", 80], ["测试与性能验证", 78], ["问题诊断与自动化", 84]] },
];
