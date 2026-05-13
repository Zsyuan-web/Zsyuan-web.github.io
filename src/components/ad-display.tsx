"use client";

import { useEffect, useRef } from "react";

interface AdDisplayProps {
  /** Google AdSense 广告单元 Slot ID */
  slot: string;
  /** 广告格式: display（横幅）, in-article（文中）, multiplex（信息流） */
  format?: "display" | "in-article" | "multiplex";
  /** 自定义类名 */
  className?: string;
}

/**
 * Google AdSense 广告组件
 *
 * 用法：
 * <AdDisplay slot="1234567890" format="display" />
 */
export function AdDisplay({ slot, format = "display", className = "" }: AdDisplayProps) {
  const adRef = useRef<HTMLDivElement>(null);
  const adSenseId = process.env.NEXT_PUBLIC_ADSENSE_ID;

  useEffect(() => {
    if (!adSenseId || !adRef.current) return;

    try {
      const adsbygoogle = (window as unknown as Record<string, unknown>).adsbygoogle as unknown[];
      if (adsbygoogle) {
        adsbygoogle.push({});
      }
    } catch {
      // 静默处理
    }
  }, [adSenseId]);

  if (!adSenseId) return null;

  const style = format === "in-article" ? { display: "block", textAlign: "center" as const } : {};

  return (
    <div ref={adRef} className={`ad-container my-6 ${className}`}>
      <ins
        className="adsbygoogle"
        style={style}
        data-ad-client={adSenseId}
        data-ad-slot={slot}
        data-ad-format={format === "in-article" ? "fluid" : "auto"}
        data-full-width-responsive="true"
      />
    </div>
  );
}
