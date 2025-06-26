/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        terminal: {
          // GitHub Dark theme colors
          bg: "#0d1117",
          surface: "#161b22",
          border: "#30363d",
          text: "#e6edf3",
          primary: "#1f6feb",
          secondary: "#8b5cf6",
          accent: "#f59e0b",
          success: "#3fb950",
          error: "#f85149",
          warning: "#d29922",
          muted: "#7d8590",
          "muted-light": "#8b949e",
          highlight: "#ffd33d",
          "code-bg": "#161b22",
          sidebar: "#0d1117",
          "sidebar-hover": "#21262d",
          active: "#1f6feb",
        },
      },
      fontFamily: {
        mono: [
          "Roboto Mono",
          "SF Mono",
          "Monaco",
          "Inconsolata",
          "Fira Code",
          "monospace",
        ],
      },
      fontSize: {
        "terminal-xs": [
          "0.75rem",
          { lineHeight: "1.5", letterSpacing: "0.025em" },
        ],
        "terminal-sm": [
          "0.875rem",
          { lineHeight: "1.6", letterSpacing: "0.025em" },
        ],
        "terminal-base": [
          "1rem",
          { lineHeight: "1.7", letterSpacing: "0.025em" },
        ],
      },
      animation: {
        "terminal-cursor": "cursor 1.2s step-end infinite",
        "fade-in": "fadeIn 0.3s ease-in-out",
        "slide-up": "slideUp 0.4s ease-out",
        type: "typing 3.5s steps(40, end)",
      },
      keyframes: {
        cursor: {
          "0%, 50%": { opacity: "1" },
          "51%, 100%": { opacity: "0" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        slideUp: {
          from: { transform: "translateY(20px)", opacity: "0" },
          to: { transform: "translateY(0)", opacity: "1" },
        },
        typing: {
          from: { width: "0" },
          to: { width: "100%" },
        },
      },
      boxShadow: {
        terminal:
          "0 4px 12px rgba(0, 0, 0, 0.05), 0 2px 6px rgba(0, 0, 0, 0.1)",
        "terminal-hover":
          "0 8px 24px rgba(0, 0, 0, 0.1), 0 4px 12px rgba(0, 0, 0, 0.15)",
      },
    },
  },
  plugins: [],
}
