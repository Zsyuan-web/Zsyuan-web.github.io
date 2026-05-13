# pneumasofia 工作区

## 项目信息
- 项目名: pneumasofia（精神智慧 / 灵性智慧）
- 中文名: 炁若
- 类型: 佛道思想智慧网站（内容 + 社区 + 灵宠养成）

## 技术栈
- **框架**: Next.js 16.2 (App Router)
- **语言**: TypeScript
- **样式**: Tailwind CSS 4
- **数据库**: SQLite + Prisma 7
- **认证**: NextAuth v4 (credentials provider)
- **运行时**: Node.js 22

## 项目结构
```
src/
├── app/
│   ├── api/auth/[...nextauth]/  ← 认证 API
│   ├── globals.css              ← 全局样式
│   ├── layout.tsx               ← 根布局
│   └── page.tsx                 ← 首页
├── components/                  ← 可复用组件
├── lib/
│   ├── auth.ts                  ← 认证配置
│   └── prisma.ts                ← 数据库客户端
├── generated/prisma/            ← Prisma 生成代码
└── types/                       ← 类型定义
prisma/
├── schema.prisma                ← 数据库模型
└── dev.db                       ← SQLite 数据库文件
```

## 数据库模型
- User / Account / Session — 用户认证
- Article / Comment — 佛道思想内容 + 评论
- ForumThread / ForumPost — 社区论坛
- Pet / PetInteraction — 灵宠养成系统

## 命令
- `npm run dev` — 启动开发服务器
- `npm run build` — 构建
- `npx prisma studio` — 数据库管理界面
- `npx prisma migrate dev` — 数据库迁移

## 权限
全局 settings.json 已配置 Bash(*) 白名单，项目内所有操作自动放行。
