/**
 * CBETA (中华电子佛典协会) API 客户端
 * 佛典全文检索与引用
 * API 文档: https://cbdata.dila.edu.tw/static_pages/api
 */

const CBETA_API = "https://cbdata.dila.edu.tw/stable";

export interface CbetaSearchResult {
  work: string;
  juan: number;
  title: string;
  text: string;
  canon: string;
  file: string;
}

export interface CbetaReference {
  work: string;
  title: string;
  juan: number;
  text: string;
  canon: string;
}

/**
 * 全文搜索佛典内容
 */
export async function searchSutra(
  keyword: string,
  canon?: string,
  rows: number = 5
): Promise<{
  results: CbetaSearchResult[];
  total: number;
}> {
  const params = new URLSearchParams({
    q: keyword,
    rows: String(rows),
    mark: "1",
    around: "30",
  });

  if (canon) params.set("canon", canon);

  const url = `${CBETA_API}/search?${params}`;

  try {
    const res = await fetch(url, {
      headers: { Referer: "https://pneumasofia.app" },
      next: { revalidate: 86400 },
    });

    if (!res.ok) throw new Error(`CBETA API error: ${res.status}`);

    const data = await res.json();
    const rawResults: unknown[] = Array.isArray(data)
      ? data
      : (data.results as unknown[]) || [];

    return {
      results: rawResults.slice(0, rows).map((r) => {
        const item = r as Record<string, unknown>;
        return {
          work: (item.work as string) || "",
          juan: (item.juan as number) || 0,
          title: (item.title as string) || "",
          text: (item.text as string) || "",
          canon: (item.canon as string) || "",
          file: (item.file as string) || "",
        };
      }),
      total:
        (rawResults[0] as Record<string, unknown>)?.term_hits as number ||
        rawResults.length,
    };
  } catch (error) {
    console.error("CBETA search failed:", error);
    return { results: [], total: 0 };
  }
}

/**
 * 按经名搜索佛典
 */
export async function searchByTitle(title: string) {
  const params = new URLSearchParams({ q: title });
  const url = `${CBETA_API}/search/title?${params}`;

  try {
    const res = await fetch(url, {
      headers: { Referer: "https://pneumasofia.app" },
      next: { revalidate: 86400 },
    });
    if (!res.ok) throw new Error(`CBETA title search error: ${res.status}`);
    return await res.json();
  } catch (error) {
    console.error("CBETA title search failed:", error);
    return { results: [] };
  }
}

/**
 * 获取佛典目录
 */
export async function getToc(work: string) {
  const url = `${CBETA_API}/works/toc?work=${work}`;
  try {
    const res = await fetch(url, {
      headers: { Referer: "https://pneumasofia.app" },
      next: { revalidate: 86400 },
    });
    if (!res.ok) throw new Error(`CBETA TOC error: ${res.status}`);
    return await res.json();
  } catch (error) {
    console.error("CBETA TOC failed:", error);
    return null;
  }
}

/**
 * 常用佛典编号
 */
export const SUTRAS = {
  HEART_SUTRA: "T08n0251",
  DIAMOND_SUTRA: "T08n0235",
  LOTUS_SUTRA: "T09n0262",
  SURANGAMA_SUTRA: "T19n0945",
  NIRVANA_SUTRA: "T12n0374",
  AVATAMSAKA_SUTRA: "T10n0279",
  PLATFORM_SUTRA: "T48n2008",
  MIDDLE_WAY: "T30n1564",
  YOGACARA: "T31n1585",
} as const;
