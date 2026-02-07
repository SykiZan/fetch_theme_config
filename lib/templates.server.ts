import { cache } from "react";

export type ThemeName = "classic-blue" | "modern-emerald";

export type ThemeConfig = {
  key: ThemeName;
  templateName: string;
  colors: Record<string, string>;
};

// ✅ use cache() so it doesn’t refetch multiple times per request tree
export const getTemplates = cache(async (): Promise<ThemeConfig[]> => {
  // IMPORTANT: on the server, use absolute URL
  const base = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

  const res = await fetch(`${base}/api/templates`, { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to load templates");

  return res.json();
});

export async function pickRandomTemplate(): Promise<ThemeConfig> {
  const templates = await getTemplates();
  return templates[Math.floor(Math.random() * templates.length)];
}

export async function getTemplateByKey(key?: string | null) {
  const templates = await getTemplates();
  const found = templates.find((t) => t.key === key);
  return found ?? templates[0]; // fallback
}
