import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        panel: "var(--panel)",
        text: "var(--text)",
        muted: "var(--muted)",
        primary: "var(--primary)",
        primaryText: "var(--primaryText)",
        border: "var(--border)",
        section: "var(--section)", 
      },
      boxShadow: {
        card: "0 10px 30px rgba(0,0,0,0.35)",
      },
    },
  },
  plugins: [],
} satisfies Config;
