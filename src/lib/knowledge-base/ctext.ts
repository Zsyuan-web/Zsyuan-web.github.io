/**
 * CText (中国哲学书电子化计划) API 客户端
 * 涵盖儒、道、墨、法、兵家等中国哲学典籍
 * API 文档: https://ctext.org/tools/api
 */

const CTEXT_API = "https://api.ctext.org";

export interface CtextSearchResult {
  urn: string;
  title: string;
  text: string;
}

/**
 * 获取典籍文本内容
 * @param urn CTP URN，如 ctp:dao-de-jing
 * @returns 文本段落列表
 */
export async function getText(urn: string): Promise<{
  title: string;
  paragraphs: string[];
}> {
  const url = `${CTEXT_API}/gettext?urn=${urn}`;
  try {
    const res = await fetch(url, {
      next: { revalidate: 86400 },
    });
    if (!res.ok) throw new Error(`CText API error: ${res.status}`);
    const data = await res.json();
    return {
      title: data.title || "",
      paragraphs: data.fulltext || [],
    };
  } catch (error) {
    console.error("CText getText failed:", error);
    return { title: "", paragraphs: [] };
  }
}

/**
 * 搜索典籍
 * @param keyword 搜索关键词
 */
export async function searchTexts(
  keyword: string
): Promise<CtextSearchResult[]> {
  const url = `${CTEXT_API}/searchtexts?q=${encodeURIComponent(keyword)}`;
  try {
    const res = await fetch(url, {
      next: { revalidate: 86400 },
    });
    if (!res.ok) throw new Error(`CText search error: ${res.status}`);
    const data = await res.json();
    return (data.results || []).map((r: Record<string, unknown>) => ({
      urn: r.urn as string,
      title: r.title as string,
      text: (r.text as string) || "",
    }));
  } catch (error) {
    console.error("CText search failed:", error);
    return [];
  }
}

/**
 * 获取典籍标题列表
 */
export async function getTextTitles() {
  const url = `${CTEXT_API}/gettexttitles`;
  try {
    const res = await fetch(url, {
      next: { revalidate: 86400 },
    });
    if (!res.ok) throw new Error(`CText titles error: ${res.status}`);
    return await res.json();
  } catch (error) {
    console.error("CText titles failed:", error);
    return [];
  }
}

// 常用典籍 URN
export const CLASSICS = {
  DAO_DE_JING: "ctp:dao-de-jing",           // 道德经
  ZHUANGZI: "ctp:zhuangzi",                   // 庄子
  ZHOU_YI: "ctp:book-of-changes",             // 周易
  LIEZI: "ctp:liezi",                          // 列子
  HUANGDI_NEI_JING: "ctp:huangdi-neijing",    // 黄帝内经
  YAN_TIE_LUN: "ctp:yan-tie-lun",             // 盐铁论
  BAO_PU_ZI: "ctp:baopuzi",                   // 抱朴子
  LUN_HENG: "ctp:lun-heng",                   // 论衡
  ANALECTS: "ctp:analects",                   // 论语
  MENCIUS: "ctp:mencius",                     // 孟子
  MOZI: "ctp:mozi",                           // 墨子
  XUNZI: "ctp:xunzi",                         // 荀子
  HAN_FEI_ZI: "ctp:hanfeizi",                // 韩非子
  SHI_JI: "ctp:records-of-the-grand-historian", // 史记
} as const;
