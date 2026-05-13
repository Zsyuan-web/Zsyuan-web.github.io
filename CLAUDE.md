# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 项目信息
- 项目: pneumasofia（炁若 / 精神智慧）— 佛道思想内容网站
- 类型: 内容 + 社区 + 灵宠养成
- **核心目标**: 高质量佛道英文内容驱动 SEO 流量，通过 Google AdSense 变现
- 默认语言: 英文，支持中英文切换（`localePrefix: "as-needed"` → `/` 英文, `/zh` 中文）

## 技术栈
- **框架**: Next.js 16.2 (App Router) + TypeScript
- **样式**: Tailwind CSS 4 + shadcn/ui (Card, Button, Input, Dialog, Tabs, Badge 等)
- **数据库**: SQLite + **Prisma 7**（必须使用 adapter 模式，不支持直接 datasourceUrl）
- **认证**: NextAuth v4 (CredentialsProvider + JWT)
- **国际化**: next-intl v4（中/英），检测链: Cookie → Accept-Language → 英文
- **内容**: react-markdown + remark-gfm，Markdown + YAML frontmatter
- **广告**: Google AdSense（通过 `NEXT_PUBLIC_ADSENSE_ID` 配置）

## 关键命令
- `npm run dev` — 开发服务器 (localhost:3000)
- `npm run build` — 生产构建
- `npx prisma studio` — 数据库管理
- `npx prisma migrate dev` — 数据库迁移
- `npx prisma generate` — 重新生成 Prisma client

## 架构要点

### 国际化路由
```
i18n/routing.ts  → 定义 routing (locales: ["en","zh"], default: "en")
i18n/request.ts  → next-intl 请求配置，加载 messages/{locale}.json
src/proxy.ts     → 语言检测中间件（Cookie → Accept-Language → 英文）
src/navigation.ts → 导出 <Link>, usePathname, useRouter (使用 createNavigation)
src/app/[locale]/ → 所有页面在此路由下
```

### Prisma 7 Adapter（注意！）
```ts
// src/lib/prisma.ts — Prisma 7 必须使用 adapter 模式
import { PrismaLibSql } from "@prisma/adapter-libsql";
const adapter = new PrismaLibSql({ url: "file:./prisma/dev.db" });
const prisma = new PrismaClient({ adapter });
// import from "../generated/prisma/client" (不是 @prisma/client)
```

### 内容系统
```
content/zh/buddhism/   — 8 篇佛教内容
content/zh/taoism/     — 2 篇道教内容
content/zh/special/    — 4 篇画像驱动专题
content/plan.md        — 26+3 篇规划总纲
content/workflow.md    — 灵感→知识库→推演→成文 工作流
content/persona-research.md — Google 用户画像研究
```

内容加载：`src/lib/content.ts` 提供 `getAllContent()`, `getContentByCategory()`, `getContentBySlug()`，基于 GrayMatter frontmatter 解析。

### 知识库集成
```ts
import { kb } from "@/lib/knowledge-base";
// kb.search("关键词")  → 跨 CBETA + CText 搜索
// kb.getClassic("ctp:dao-de-jing") → 获取经典全文
// kb.references.buddhist / .taoist → 预置经典引用
```
- CBETA API: `https://cbdata.dila.edu.tw/stable/search` — 佛典全文检索（需 Referer 头）
- CText API: `https://api.ctext.org/gettext` — 中国哲学经典

### Google AdSense
- `src/components/adsense-script.tsx` — 根布局中加载 adsbygoogle.js
- `src/components/ad-display.tsx` — 可复用广告单元组件
  - `<AdDisplay slot="xxx" format="display|in-article|multiplex" />`
- 广告位策略: 列表页信息流 / 文章页内嵌 / 底部展示

### WebStorm 设置
- 文件 → 设置 → 搜索 "node_modules" → 将 node_modules 标记为排除目录
- 代码提示会更准确，性能也会提升

### 代码规范
- 缩进：2 空格
- 分号：可选
- 引号：单引号 (JSX 属性用双引号)
- 换行：LF
- 文件结尾：保留换行符
- 组件命名：PascalCase，文件名与组件名一致
- 变量/函数：camelCase
- 常量：UPPER_SNAKE_CASE

### TypeScript 使用
- 优先使用 interface 而非 type（除非需要联合类型/映射类型）
- 使用 `as` 语法进行类型断言
- 启用 strict 模式
- 禁止使用 `any`，尽可能使用 `unknown`
- 使用 `import type { ... }` 导入类型
- 使用 Promise<void> 表示异步函数的返回类型
- 使用 Record<string, unknown> 表示未知对象

### 文件组织
- 每个组件一个文件，组件名与文件名一致
- 公共组件放在 src/components/ 下
- 页面特定组件放在对应页面目录的 components/ 下
- 使用 index.ts 文件重新导出，简化导入路径

### 三方库使用原则
- next-intl 的 Link/usePathname/useRouter 从 @/navigation 导入，不用 next/navigation
- shadcn/ui 组件从 @/components/ui/* 导入，新组件通过 npx shadcn@latest add 安装
- Prisma client 从 @/lib/prisma 导入（单例）

## 内容工作流
```
你（灵感） → 我（查 CBETA/CText 知识库） → 游戏攻略式推演 → 成文入库
```
- 文章结构：概念拆解 → 底层逻辑 → 进阶心法 → 常见误解 → 收获
- 用户画像驱动：3 类核心用户（焦虑解谜者 / 哲学探索者 / 修行实践者）
- 所有引用标注 CBETA/CText 编号，保持可回溯验证性
- 当前内容: 14 篇（佛教 8 + 道教 2 + 专题 4）
