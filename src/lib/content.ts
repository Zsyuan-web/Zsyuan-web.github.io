import fs from "fs";
import path from "path";

export interface ContentMeta {
  title: string;
  slug: string;
  category: string;
  tags: string[];
  published: boolean;
  order: number;
}

export interface ContentItem {
  meta: ContentMeta;
  content: string;
}

const contentDir = path.join(process.cwd(), "content");
const localeDir = (locale: string) => path.join(contentDir, locale);
const categories = ["buddhism", "taoism", "dialogue", "concepts"];

function parseFrontmatter(raw: string): { meta: ContentMeta; content: string } {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) {
    throw new Error("Invalid frontmatter");
  }

  const fm: Record<string, unknown> = {};
  const lines = match[1].split("\n");
  for (const line of lines) {
    const sep = line.indexOf(":");
    if (sep === -1) continue;
    const key = line.slice(0, sep).trim();
    let val: unknown = line.slice(sep + 1).trim();

    if (val === "true") val = true;
    else if (val === "false") val = false;
    else if (/^\d+$/.test(val as string)) val = parseInt(val as string, 10);

    fm[key] = val;
  }

  return {
    meta: {
      title: (fm.title as string) || "",
      slug: (fm.slug as string) || "",
      category: (fm.category as string) || "",
      tags: (fm.tags as string[]) || [],
      published: (fm.published as boolean) || false,
      order: (fm.order as number) || 0,
    },
    content: match[2].trim(),
  };
}

export function getAllContent(locale: string = "zh"): ContentItem[] {
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
  locale: string = "zh"
): ContentItem[] {
  return getAllContent(locale).filter((item) => item.meta.category === category);
}

export function getContentBySlug(slug: string, locale: string = "zh"): ContentItem | null {
  const items = getAllContent(locale);
  return items.find((item) => item.meta.slug === slug) ?? null;
}
