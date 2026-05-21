# CLAUDE.md

## 项目信息
- pneumasofia（炁若 / 精神智慧）— 佛道思想内容网站
- 核心目标: 高质量佛道英文内容驱动 SEO 流量，通过 Google AdSense 变现
- 默认语言: 英文，支持中英文切换（`localePrefix: "as-needed"` → `/` 英文, `/zh` 中文）

## 技术栈
- Next.js 16.2 (App Router) + TypeScript + Tailwind CSS 4 + shadcn/ui
- SQLite + Prisma 7（必须用 adapter 模式，不能直接 datasourceUrl）
- NextAuth v4 (CredentialsProvider + JWT)
- next-intl v4（中/英）
- react-markdown + remark-gfm, Markdown + YAML frontmatter

## 关键命令
- `npm run dev` — 开发服务器 (localhost:3000)
- `npm run build` — 生产构建
- `npx prisma studio` / `npx prisma migrate dev` / `npx prisma generate`

## 关键注意点

### Prisma 7 Adapter（容易出错）
```ts
// src/lib/prisma.ts — Prisma 7 必须用 adapter
import { PrismaLibSql } from "@prisma/adapter-libsql";
const prisma = new PrismaClient({ adapter });
// import from "../generated/prisma/client"（不是 @prisma/client）
```

### 国际化
- 检测链: Cookie → Accept-Language → 英文
- next-intl 的 Link/usePathname/useRouter 从 `@/navigation` 导入，不用 next/navigation
- shadcn/ui 组件从 `@/components/ui/*` 导入
- Prisma client 从 `@/lib/prisma` 导入（单例）

### 内容系统
- `src/lib/content.ts` 提供内容加载（GrayMatter frontmatter）
- `src/lib/knowledge-base/` 提供 CBETA + CText 知识库集成

## 知识图谱（必须使用）

`knowledge-graph.json` 是项目的概念本体，写任何新内容前必须阅读。

### 实体类型
- **thinkers**: 尼采、加缪、海德格尔、西谷启治（含核心命题、与佛道关系）
- **nihilismForms**: 存在/认知/道德虚无主义（含症状、佛道回应）
- **concepts**: 空、空空、无我、无常、道、无为、自然、虚舟、庖丁等（含定义、出处、关联）
- **mappings**: 西哲→佛教→道家的概念映射
- **framework**: 夺境→用工具→空空三阶框架
- **canonicalTexts**: 心经、金刚经、道德经、庄子等

### 使用要求
1. 文章中出现的术语必须在 `knowledge-graph.json` 中有定义或与定义一致
2. 跨文章的概念定义不能自相矛盾
3. 引文优先从 CBETA/CText 拉原文
4. 比较哲学论证优先使用 mappings 中的配对

## 内容写作规范（v3 — 场景驱动）

> **自动触发规则**：写任何新文章前，必须先按 `docs/workflow-generation.html` 的规划步骤执行。执行到第 2 步（生成中文版）和第 3 步（英文版）时，必须加载 `.claude/skills/pneumasofia-writing/SKILL.md` 并遵循其规范。不可跳过。

### 核心定位
