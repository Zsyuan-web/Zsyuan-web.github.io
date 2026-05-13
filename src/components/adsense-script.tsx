"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Google AdSense 脚本加载组件
 *
 * 仅在生产环境且已配置 AdSense ID 时加载
 * 放在根布局中，每个页面切换时重新推送 ad 单元
 */
export function AdSenseScript() {
  const adSenseId = process.env.NEXT_PUBLIC_ADSENSE_ID;
  const pathname = usePathname();

  useEffect(() => {
    // 页面切换时刷新广告
    try {
      if (typeof (window as unknown as Record<string, unknown>).adsbygoogle !== "undefined") {
        ((window as unknown as Record<string, unknown>).adsbygoogle as unknown[]).push({});
      }
    } catch {
      // 静默处理
    }
  }, [pathname]);

  if (!adSenseId) return null;

  return (
    <Script
      id="adsense-init"
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adSenseId}`}
      strategy="afterInteractive"
      crossOrigin="anonymous"
      async
    />
  );
}
