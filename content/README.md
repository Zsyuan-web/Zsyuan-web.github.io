# 内容管理

## 目录结构

```
content/
├── buddhism/          ← 佛教思想
│   ├── overview.md    ← 总览/导论
│   ├── core-teachings.md
│   └── ...
├── taoism/            ← 道教思想
│   ├── overview.md
│   ├── core-teachings.md
│   └── ...
├── dialogue/          ← 佛道对话与比较
│   ├── comparison.md
│   └── ...
├── concepts/          ← 核心概念索引
│   ├── emptiness.md
│   ├── dao.md
│   └── ...
└── metadata/          ← 分类、标签、引用数据
```

## 工作流程

1. **规划**：在内容目录中创建大纲（`*.plan.md`）
2. **写作**：写中文源文件（`zh/`），带 YAML frontmatter
3. **翻译**：生成英文版（`en/`）
4. **发布**：内容自动被网站加载渲染

## Frontmatter 格式

```yaml
---
title: 文章标题
slug: article-slug
category: buddhism | taoism | dialogue | concepts
tags: [核心概念, 经典, 人物]
published: true
order: 1
---
```

## 写作原则

- 中文源文件为权威版本，确保术语准确
- 佛教术语参照 CBETA 用词习惯
- 道教术语参照《道藏》传统译法
- 英文翻译力求学术级质量，参照专业佛道研究文献
- 保留关键术语的原文/拼音标注
