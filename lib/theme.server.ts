
import { cookies } from "next/headers";
import { getTemplateByKey } from "@/lib/templates.server";

export async function readThemeFromCookie() {
  const store = await cookies();
  const themeKey = store.get("theme")?.value;
  return getTemplateByKey(themeKey);
}
