import fs from "fs";
import path from "path";
import matter from "gray-matter";

const LOCALES = ["en", "zh"] as const;

export interface ContentMeta {
  title: string;
  subtitle?: string;
  slug: string;
  category: string;
  tags: string[];
  published: boolean;
  order: number;
  continueReading?: string[];
  description?: string;
}

export interface ContentItem {
  meta: ContentMeta;
  content: string;
}

const contentDir = path.join(process.cwd(), "content");
const localeDir = (locale: string) => path.join(contentDir, locale);
const categories = ["buddhism", "taoism", "dialogue", "concepts", "special"];

function parseFrontmatter(raw: string): { meta: ContentMeta; content: string } {
  const { data, content } = matter(raw);

  const tags = Array.isArray(data.tags)
    ? data.tags.map(String)
    : typeof data.tags === "string"
      ? (data.tags as string).split(",").map((t) => t.trim()).filter(Boolean)
      : [];

  return {
    meta: {
      title: String(data.title ?? ""),
      subtitle: data.subtitle ? String(data.subtitle) : undefined,
      slug: String(data.slug ?? ""),
      category: String(data.category ?? ""),
      tags,
      published: Boolean(data.published),
      order: Number(data.order) || 0,
      continueReading: Array.isArray(data.continueReading)
        ? data.continueReading.map(String)
        : undefined,
      description: data.description ? String(data.description) : undefined,
    },
    content: content.trim(),
  };
}

export function getAllContent(locale: string = "en"): ContentItem[] {
  const baseDir = localeDir(locale);
  const items: ContentItem[] = [];

  if (!fs.existsSync(baseDir)) return items;

  for (const cat of categories) {
    const catDir = path.join(baseDir, cat);
    if (!fs.existsSync(catDir)) continue;

    const files = fs.readdirSync(catDir).filter((f) => f.endsWith(".md"));
    for (const file of files) {
      const raw = fs.readFileSync(path.join(catDir, file), "utf-8");
      const { meta, content } = parseFrontmatter(raw);
      items.push({ meta, content });
    }
  }

  return items
    .filter((item) => item.meta.published)
    .sort((a, b) => a.meta.order - b.meta.order);
}

export function getContentByCategory(
  category: string,
  locale: string = "en"
): ContentItem[] {
  return getAllContent(locale).filter((item) => item.meta.category === category);
}

export function getContentBySlug(slug: string, locale: string = "en"): ContentItem | null {
  const items = getAllContent(locale);
  return items.find((item) => item.meta.slug === slug) ?? null;
}
