/**
 * 知识库统一入口
 * 整合 CBETA（佛教）+ CText（中国哲学）两大古籍数据库
 *
 * 使用方式：
 * ```
 * import { kb } from "@/lib/knowledge-base";
 * const results = await kb.search("缘起性空");
 * ```
 */

import { searchSutra, SUTRAS } from "./cbeta";
import { getText, searchTexts, CLASSICS } from "./ctext";

export interface KnowledgeResult {
  source: "cbeta" | "ctext";
  title: string;
  content: string;
  reference: string;
}

export const kb = {
  /**
   * 跨库搜索（佛教 + 中国哲学）
   */
  async search(query: string, limit: number = 5): Promise<KnowledgeResult[]> {
    const [cbetaResults, ctextResults] = await Promise.all([
      searchSutra(query, undefined, limit),
      searchTexts(query),
    ]);

    const results: KnowledgeResult[] = [];

    for (const r of cbetaResults.results) {
      results.push({
        source: "cbeta",
        title: r.work,
        content: r.text,
        reference: `CBETA ${r.work} 卷${r.juan}`,
      });
    }

    for (const r of ctextResults.slice(0, limit)) {
      results.push({
        source: "ctext",
        title: r.title,
        content: r.text,
        reference: r.urn,
      });
    }

    return results;
  },

  /**
   * 获取经典原文
   */
  async getClassic(urn: string, source: "cbeta" | "ctext" = "ctext") {
    if (source === "cbeta") {
      const toc = await import("./cbeta").then((m) => m.getToc(urn));
      return toc;
    }
    return getText(urn);
  },

  /**
   * 预置参考：常用佛道经典列表
   */
  references: {
    buddhist: [
      { title: "心经", urn: SUTRAS.HEART_SUTRA, source: "cbeta" as const },
      { title: "金刚经", urn: SUTRAS.DIAMOND_SUTRA, source: "cbeta" as const },
      { title: "六祖坛经", urn: SUTRAS.PLATFORM_SUTRA, source: "cbeta" as const },
      { title: "中论", urn: SUTRAS.MIDDLE_WAY, source: "cbeta" as const },
    ],
    taoist: [
      { title: "道德经", urn: CLASSICS.DAO_DE_JING, source: "ctext" as const },
      { title: "庄子", urn: CLASSICS.ZHUANGZI, source: "ctext" as const },
      { title: "列子", urn: CLASSICS.LIEZI, source: "ctext" as const },
      { title: "抱朴子", urn: CLASSICS.BAO_PU_ZI, source: "ctext" as const },
    ],
  },
};
