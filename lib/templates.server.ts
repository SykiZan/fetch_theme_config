import { cache } from "react";

export type ThemeName = "classic-blue" | "modern-emerald";

export type ThemeConfig = {
  key: ThemeName;
  templateName: string;
  colors: Record<string, string>;
};

function getBaseUrl() {
  // local dev
  if (process.env.NEXT_PUBLIC_SITE_URL) return process.env.NEXT_PUBLIC_SITE_URL;

  // Vercel provides VERCEL_URL without protocol
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;

  // safe fallback
  return "http://localhost:3000";
}

export const getTemplates = cache(async (): Promise<ThemeConfig[]> => {
  const res = await fetch(new URL("/api/templates", getBaseUrl()), {
    cache: "no-store",
  });

  if (!res.ok) throw new Error(`Failed to load templates: ${res.status}`);
  return res.json();
});

export async function pickRandomTemplate(): Promise<ThemeConfig> {
  const templates = await getTemplates();
  return templates[Math.floor(Math.random() * templates.length)];
}

export async function getTemplateByKey(key?: string | null) {
  const templates = await getTemplates();
  return templates.find((t) => t.key === key) ?? templates[0];
}
