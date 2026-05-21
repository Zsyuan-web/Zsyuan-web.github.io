/**
 * scripts/update-inventory.mjs
 * 扫描 content/ 和 knowledge/，更新缺口清单和 inventory 记录
 *
 * 用法：
 *   node scripts/update-inventory.mjs          # 执行更新（写入文件）
 *   node scripts/update-inventory.mjs --report  # 干运行，仅输出报告
 *
 * 前提：文章的 frontmatter 必须准确填写 tags 字段（如 [空, 无我, 缘起]）
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import matter from "gray-matter";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PROJECT_ROOT = path.join(__dirname, "..");

const CONTENT_DIR = path.join(PROJECT_ROOT, "content");
const KNOWLEDGE_CONCEPTS_DIR = path.join(PROJECT_ROOT, "knowledge", "concepts");
const INVENTORY_FILE = path.join(PROJECT_ROOT, "content-inventory", "gaps", "needed-articles.md");
const DRY_RUN = process.argv.includes("--report");

// ── 工具函数 ─────────────────────────────────

function getAllPublishedArticles() {
  const articles = [];
  for (const locale of ["en", "zh"]) {
    const localeDir = path.join(CONTENT_DIR, locale);
    if (!fs.existsSync(localeDir)) continue;
    for (const cat of fs.readdirSync(localeDir)) {
      const catDir = path.join(localeDir, cat);
      if (!fs.isDirectorySync(catDir)) continue;
      for (const file of fs.readdirSync(catDir).filter(f => f.endsWith(".md"))) {
        const raw = fs.readFileSync(path.join(catDir, file), "utf-8");
        const { data } = matter(raw);
        if (data.published !== false) {
          articles.push({
            slug: data.slug || file.replace(".md", ""),
            locale,
            category: cat,
            title: data.title || "",
            tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
            file: path.join(catDir, file),
          });
        }
      }
    }
  }
  return articles;
}

function getAllKnowledgeConcepts() {
  if (!fs.existsSync(KNOWLEDGE_CONCEPTS_DIR)) return [];
  return fs.readdirSync(KNOWLEDGE_CONCEPTS_DIR)
    .filter(f => f.endsWith(".md"))
    .map(f => f.replace(".md", ""));
}

function buildCoverageMap(articles) {
  const map = new Map(); // conceptId → { articles: [], quality: string }

  for (const article of articles) {
    for (const tag of article.tags) {
      const concept = tag.trim();
      if (!concept) continue;

      if (!map.has(concept)) {
        map.set(concept, { articles: [], quality: "partial" });
      }
      const entry = map.get(concept);
      entry.articles.push({
        slug: article.slug,
        locale: article.locale,
        title: article.title,
        category: article.category,
      });
    }
  }

  // 质量评估：如果一个概念有 en 和 zh 两个语言的文章，质量 = full
  for (const [concept, data] of map.entries()) {
    const locales = new Set(data.articles.map(a => a.locale));
    data.quality = locales.size >= 2 ? "full" : "partial";
  }

  return map;
}

function generateReport(coverageMap, allConcepts) {
  const covered = Array.from(coverageMap.keys());
  const missing = allConcepts.filter(c => !coverageMap.has(c));
  const totalArticles = Array.from(coverageMap.values()).reduce(
    (s, d) => s + d.articles.length, 0
  );

  const now = new Date().toLocaleString("zh-CN", { timeZone: "Asia/Shanghai" });

  let report = `---
type: gap-list
title: "Needed Articles — Auto-generated Report"
generated: ${new Date().toISOString()}
---

# 缺口清单自动报告

> 生成时间：${now}
> 警告：此文件由脚本自动生成，手动修改可能被覆盖。
> 如需添加备注，请在 \`notes:\` 字段中添加，或在下方手动区域编辑。

## 统计

| 指标 | 数值 |
|------|------|
| 知识库概念总数 | ${allConcepts.length} |
| 已覆盖概念 | ${covered.length} |
| 缺口概念 | ${missing.length} |
| 总文章数 | ${totalArticles} |

## 已覆盖概念

`;

  if (covered.length === 0) {
    report += "_暂无已覆盖概念。_\n";
  } else {
    for (const [concept, data] of coverageMap.entries()) {
      const qualityLabel = data.quality === "full" ? "✅ 完全覆盖" : "🔄 部分覆盖";
      const articleList = data.articles
        .map(a => {
          const lang = a.locale === "en" ? "EN" : "ZH";
          return `[${a.slug}]\\[${lang}\\]`;
        })
        .join(", ");
      report += `- **${concept}** — ${qualityLabel}\n`;
      report += `  文章：${articleList}\n`;
    }
  }

  report += `\n## 缺口概念\n\n`;

  if (missing.length === 0) {
    report += "_✅ 暂无缺口。所有概念均有文章覆盖。_\n";
  } else {
    for (const concept of missing) {
      report += `- ${concept}\n`;
    }
  }

  report += `\n---\n\n## 手动编辑区\n\n_以下内容不会被脚本覆盖，可安全添加备注：_\n\n`;

  return report;
}

// ── 主程序 ──────────────────────────────────

function main() {
  console.log("[inventory] 扫描内容目录...");

  const articles = getAllPublishedArticles();
  console.log(`  已发布文章：${articles.length}`);

  const allConcepts = getAllKnowledgeConcepts();
  console.log(`  知识库概念：${allConcepts.length}`);

  const coverageMap = buildCoverageMap(articles);
  console.log(`  已覆盖概念：${coverageMap.size}`);
  console.log(`  缺口概念：${allConcepts.length - coverageMap.size}`);

  const report = generateReport(coverageMap, allConcepts);

  if (DRY_RUN) {
    console.log("\n[inventory] 干运行模式 — 仅输出报告，不修改文件\n");
    console.log(report);
  } else {
    console.log("\n[inventory] 写入缺口报告...");
    fs.writeFileSync(INVENTORY_FILE, report, "utf-8");
    console.log(`  已更新：${INVENTORY_FILE}`);

    // 同时更新 content-inventory/hot.md
    const hotFile = path.join(PROJECT_ROOT, "content-inventory", "hot.md");
    const hotEntry = `\n## ${new Date().toISOString()}\n- 缺口扫描完成：${coverageMap.size}/${allConcepts.length} 概念已覆盖`;
    fs.appendFileSync(hotFile, hotEntry, "utf-8");
    console.log("  已更新：content-inventory/hot.md");
  }

  console.log("\n[inventory] 完成。");
}

main();