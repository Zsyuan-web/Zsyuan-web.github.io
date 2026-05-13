import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col flex-1">
      {/* Header */}
      <header className="border-b border-zinc-200 dark:border-zinc-800">
        <nav className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="text-xl font-semibold tracking-tight">
            炁若 <span className="text-sm text-zinc-500 font-normal">pneumasofia</span>
          </Link>
          <div className="flex items-center gap-6 text-sm">
            <Link href="/wisdom" className="hover:text-zinc-600 dark:hover:text-zinc-300">智慧</Link>
            <Link href="/community" className="hover:text-zinc-600 dark:hover:text-zinc-300">社区</Link>
            <Link href="/pet" className="hover:text-zinc-600 dark:hover:text-zinc-300">灵宠</Link>
            <Link href="/login" className="px-3 py-1.5 rounded-md bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 text-sm font-medium">
              登录
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section className="flex-1 flex flex-col items-center justify-center px-4 py-24 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight max-w-2xl">
          佛道思想 · 智慧社区 · 灵性之宠
        </h1>
        <p className="mt-6 text-lg text-zinc-600 dark:text-zinc-400 max-w-xl">
          探索佛教与道教的深邃智慧，在社区中交流心得，培育属于你的灵性宠物，一同成长。
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <Link
            href="/wisdom"
            className="px-6 py-3 rounded-lg bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 font-medium"
          >
            开始探索
          </Link>
          <Link
            href="/community"
            className="px-6 py-3 rounded-lg border border-zinc-300 dark:border-zinc-700 font-medium"
          >
            加入社区
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-5xl mx-auto px-4 pb-24 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-6 rounded-xl border border-zinc-200 dark:border-zinc-800">
          <div className="w-10 h-10 rounded-lg bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center text-lg mb-4">📿</div>
          <h2 className="text-lg font-semibold mb-2">佛道智慧</h2>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
            深入浅出地介绍佛教与道教的核心思想、经典解读、修行方法，以及两家思想的交融与对话。
          </p>
        </div>
        <div className="p-6 rounded-xl border border-zinc-200 dark:border-zinc-800">
          <div className="w-10 h-10 rounded-lg bg-sky-100 dark:bg-sky-900/30 flex items-center justify-center text-lg mb-4">💬</div>
          <h2 className="text-lg font-semibold mb-2">社区论坛</h2>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
            与志同道合者交流心得、提问解惑、分享感悟。注册后即可参与讨论。
          </p>
        </div>
        <div className="p-6 rounded-xl border border-zinc-200 dark:border-zinc-800">
          <div className="w-10 h-10 rounded-lg bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center text-lg mb-4">🐉</div>
          <h2 className="text-lg font-semibold mb-2">灵宠养成</h2>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
            培育属于你的灵性宠物，通过互动喂养、修行训练提升等级，见证它的成长与进化。
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-200 dark:border-zinc-800 py-8 text-center text-sm text-zinc-500">
        <p>炁若 · pneumasofia — 精神智慧 · 灵性之旅</p>
      </footer>
    </div>
  );
}
