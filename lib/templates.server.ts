import { cache } from "react";
import { headers } from "next/headers";

export type ThemeName = "classic-blue" | "modern-emerald";

export type ThemeConfig = {
  key: ThemeName;
  templateName: string;
  colors: Record<string, string>;
};

export const getTemplates = cache(async (): Promise<ThemeConfig[]> => {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;

  if (!baseUrl) {
    throw new Error("NEXT_PUBLIC_SITE_URL is not set");
  }

  const res = await fetch(`${baseUrl}/api/templates`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error(`Failed to load templates: ${res.status}`);
  }

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
