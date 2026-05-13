# pneumasofia 工作区

## 项目信息
- 项目名: pneumasofia（精神智慧 / 灵性智慧）
- 中文名: 炁若
- 类型: 佛道思想智慧网站（内容 + 社区 + 灵宠养成）
- 默认语言: 英文，根据 IP/浏览器自动检测，支持手动切换

## 技术栈
- **框架**: Next.js 16.2 (App Router)
- **语言**: TypeScript
- **样式**: Tailwind CSS 4 + shadcn/ui
- **数据库**: SQLite + Prisma 7
- **认证**: NextAuth v4 (credentials provider)
- **国际化**: next-intl v4 (中/英双语)
- **内容**: react-markdown + remark-gfm
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
│   ├── language-switcher.tsx    ← 语言切换组件
│   └── ui/                      ← shadcn/ui 组件
├── lib/
│   ├── auth.ts                  ← 认证配置
│   └── prisma.ts                ← 数据库客户端
├── navigation.ts                ← next-intl 路由工具
├── proxy.ts                     ← 国际化中间件（语言检测）
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
```

## 数据库模型
- User / Account / Session — 用户认证
- Article / Comment — 佛道思想内容 + 评论
- ForumThread / ForumPost — 社区论坛
- Pet / PetInteraction — 灵宠养成系统

## 国际化
- **默认语言**: 英文
- **检测顺序**: Cookie → Accept-Language 头 → IP 地理定位（预留）→ 英文
- **翻译源**: `messages/zh.json` 为中文源文件
- **翻译原则**: 高质量专业翻译，佛道术语需准确考究
- **URL 结构**: `/` 英文, `/zh` 中文（`localePrefix: "as-needed"`）

## 命令
- `npm run dev` — 启动开发服务器
- `npm run build` — 构建
- `npx prisma studio` — 数据库管理界面
- `npx prisma migrate dev` — 数据库迁移

## 权限
全局 settings.json 已配置 Bash(*) 白名单，项目内所有操作自动放行。
