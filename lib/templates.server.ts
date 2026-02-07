import { cache } from "react";
import { headers } from "next/headers";

export type ThemeName = "classic-blue" | "modern-emerald";

export type ThemeConfig = {
  key: ThemeName;
  templateName: string;
  colors: Record<string, string>;
};

async function getOriginFromHeaders() {
  const h = await headers(); // ✅ await fixes your TS error

  const host = h.get("x-forwarded-host") ?? h.get("host");
  const proto = h.get("x-forwarded-proto") ?? "http";

  if (!host) throw new Error("Missing host header");
  return `${proto}://${host}`;
}

// ✅ cache() is fine; it will cache per-request in RSC
export const getTemplates = cache(async (): Promise<ThemeConfig[]> => {
  const origin = await getOriginFromHeaders();

  const res = await fetch(`${origin}/api/templates`, { cache: "no-store" });
  if (!res.ok) throw new Error(`Failed to load templates: ${res.status}`);

  return res.json();
});

export async function pickRandomTemplate(): Promise<ThemeConfig> {
  const templates = await getTemplates();
  return templates[Math.floor(Math.random() * templates.length)];
}

export async function getTemplateByKey(key?: string | null) {
  const templates = await getTemplates();
  const found = templates.find((t) => t.key === key);
  return found ?? templates[0];
}
