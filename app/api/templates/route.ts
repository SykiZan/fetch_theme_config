import { NextResponse } from "next/server";

const templates = [
  {
    key: "classic-blue",
    templateName: "Classic Blue",
    colors: {
      page: "#0B1220",
      section: "#F7F1DF",
      panel: "#0F1B2E",
      card: "#F7F1DF",

      text: "#0B1220",
      muted: "#6B7280",

      cardText: "#0B1220",
      cardMuted: "#4B5563",

      primary: "#FFD400",
      primaryText: "#0B1220",

      border: "#111111",
      ink: "#111111",
      tile: "#FFFFFF",

      titleText: "#ECFFF7",
      sectionText: "#0B1220",
      sectionMuted: "#4B5563",
    },
  },
  {
    key: "modern-emerald",
    templateName: "Modern Emerald",
    colors: {
      page: "#0B1220",
      section: "#122117",
      panel: "#0B2A21",
      card: "#0B2A21",

      text: "#ECFFF7",
      muted: "#96C4A8",

      cardText: "#ECFFF7",
      cardMuted: "#96C4A8",

      primary: "#2EE59D",
      primaryText: "#052116",

      border: "#134537",
      ink: "#052116",
      tile: "#fff",

      titleText: "#ECFFF7",
      sectionText: "#ECFFF7",
      sectionMuted: "#96C4A8",
    },
  },
];

export async function GET() {
  return NextResponse.json(templates);
}
