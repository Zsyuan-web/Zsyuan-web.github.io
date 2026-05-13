# pneumasofia 工作区

## 项目信息
- 项目名: pneumasofia（精神智慧 / 灵性智慧）
- 中文名: 炁若
- 类型: 佛道思想智慧网站（内容 + 社区 + 灵宠养成）
- **核心目标**: 通过高质量佛道内容获取 Google AdSense 广告收益
- 默认语言: 英文，根据 IP/浏览器自动检测，支持手动切换

## 技术栈
- **框架**: Next.js 16.2 (App Router)
- **语言**: TypeScript
- **样式**: Tailwind CSS 4 + shadcn/ui
- **数据库**: SQLite + Prisma 7
- **认证**: NextAuth v4 (credentials provider)
- **国际化**: next-intl v4 (中/英双语)
- **内容**: react-markdown + remark-gfm
- **广告**: Google AdSense（展示广告 + 内容内嵌广告 + 信息流广告）
- **运行时**: Node.js 22

## 项目结构
```
src/
├── app/
│   ├── [locale]/                ← 国际化路由
│   │   ├── layout.tsx           ← 本地化布局（导航栏、语言切换）
│   │   └── page.tsx             ← 首页
│   ├── api/auth/[...nextauth]/  ← 认证 API
│   ├── globals.css              ← 全局样式
│   └── layout.tsx               ← 根布局
├── components/
│   ├── adsense-script.tsx       ← AdSense 脚本加载
│   ├── ad-display.tsx           ← 广告单元组件
│   ├── language-switcher.tsx    ← 语言切换组件
│   └── ui/                      ← shadcn/ui 组件
├── lib/
│   ├── auth.ts                  ← 认证配置
│   ├── knowledge-base/          ← 外部知识库集成
│   └── prisma.ts                ← 数据库客户端
├── navigation.ts                ← next-intl 路由工具
├── proxy.ts                     ← 国际化中间件
├── generated/prisma/            ← Prisma 生成代码
└── types/                       ← 类型定义
i18n/
├── request.ts                   ← next-intl 配置
└── routing.ts                   ← 路由/语言配置
messages/
├── en.json                      ← 英译
└── zh.json                      ← 中文源文件
prisma/
├── schema.prisma                ← 数据库模型
└── dev.db                       ← SQLite 数据库文件
content/                         ← 内容知识库
├── zh/buddhism/                 ← 中文佛教内容系列
├── zh/taoism/                   ← 中文道教内容系列
├── plan.md                      ← 内容规划总纲
└── workflow.md                  ← 内容工作流程
```

## 数据库模型
- User / Account / Session — 用户认证
- Article / Comment — 佛道思想内容 + 评论
- ForumThread / ForumPost — 社区论坛
- Pet / PetInteraction — 灵宠养成系统

## 广告策略
- **广告来源**: Google AdSense（配置 `NEXT_PUBLIC_ADSENSE_ID`）
- **广告位布局**:
  - 文章列表页：信息流广告（每 5-6 篇插入一个广告位）
  - 文章详情页：内容内嵌广告（正文中）+ 底部展示广告
  - 社区页面：侧边栏/列表间展示广告
- **用户体验**: 广告不遮挡内容，不干扰阅读，保持页面简洁
- **SEO 优先**: 高质量原创内容 → 自然流量 → 广告曝光

## 外部知识库
- **CBETA API** — 佛典全文检索（大正藏、卍续藏等）
- **CText API** — 中国哲学书电子化计划（道德经、庄子等）
- 使用方式: `import { kb } from "@/lib/knowledge-base"`

## 用户画像（基于真实搜索数据）
参考 `content/persona-research.md`，三大核心用户群：
- **焦虑解谜者** (28-40岁) — 搜索"how to stop worrying"，功能性需求
- **哲学探索者** (22-35岁) — 搜索"Buddhism for beginners"，概念性需求
- **修行实践者** (30-50岁) — 搜索"how to meditate correctly"，进阶需求

TOP 10 高频问题已定位（无我+轮回矛盾居首），内容策略优先覆盖长尾关键词。

## 内容工作流
```
你（灵感） → 我（查知识库 + 逻辑推演） → 补充成文 → 入库
```
- 文章风格：游戏攻略式（关卡拆解 → 底层逻辑 → Boss 战 → 成就奖励）
- 当前进度：**10/26 篇**（佛教 8 篇、道教 2 篇、对话 0 篇、概念 0 篇）
- 源文件：`content/zh/`（中文），英译同步生成到 `content/en/`

## 国际化
- **默认语言**: 英文（海外流量为主 → 广告收益更高）
- **检测顺序**: Cookie → Accept-Language 头 → IP 地理定位（预留）→ 英文
- **翻译源**: `messages/zh.json` 为中文源文件
- **URL 结构**: `/` 英文, `/zh` 中文（`localePrefix: "as-needed"`）

## 命令
- `npm run dev` — 启动开发服务器
- `npm run build` — 构建
- `npx prisma studio` — 数据库管理界面
- `npx prisma migrate dev` — 数据库迁移

## 权限
全局 settings.json 已配置 Bash(*) 白名单，项目内所有操作自动放行。
