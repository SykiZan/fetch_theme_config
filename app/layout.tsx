import "./globals.css";
import { Be_Vietnam_Pro } from "next/font/google";
import { readThemeFromCookie } from "@/lib/theme.server";

const beVietnam = Be_Vietnam_Pro({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const theme = await readThemeFromCookie();

  const style = {
    ["--page" as any]: theme.colors.page,
    ["--section" as any]: theme.colors.section,
    ["--panel" as any]: theme.colors.panel,
    ["--card" as any]: theme.colors.card,

    ["--text" as any]: theme.colors.text,
    ["--muted" as any]: theme.colors.muted,

    ["--cardText" as any]: theme.colors.cardText,
    ["--cardMuted" as any]: theme.colors.cardMuted,

    ["--primary" as any]: theme.colors.primary,
    ["--primaryText" as any]: theme.colors.primaryText,

    ["--border" as any]: theme.colors.border,
    ["--ink" as any]: theme.colors.ink,
    ["--tile" as any]: theme.colors.tile,

    ["--title-text" as any]: theme.colors.titleText,
    ["--section-text" as any]: theme.colors.sectionText,
    ["--section-muted" as any]: theme.colors.sectionMuted,
  };

  return (
    <html lang="en" style={style}>
      <head>
        <title>{theme.templateName}</title>
      </head>
      <body
        className={`${beVietnam.className} min-h-screen antialiased bg-page text-text`}
      >
        {children}
      </body>
    </html>
  );
}
