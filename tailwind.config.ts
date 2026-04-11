import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          green: "#17824F",
          blue: "#1D6CB6",
          ink: "#0F172A",
          muted: "#5B6475",
          surface: "#F8FCFF",
          line: "#DDE8F2"
        }
      },
      fontFamily: {
        body: ["var(--font-body)", "sans-serif"],
        heading: ["var(--font-heading)", "sans-serif"]
      },
      boxShadow: {
        soft: "0 20px 60px -28px rgba(15, 23, 42, 0.28)"
      },
      backgroundImage: {
        "mesh-glow":
          "radial-gradient(circle at top left, rgba(23, 130, 79, 0.18), transparent 30%), radial-gradient(circle at top right, rgba(29, 108, 182, 0.16), transparent 28%), linear-gradient(180deg, rgba(248, 252, 255, 0.98) 0%, rgba(255, 255, 255, 1) 100%)"
      }
    }
  },
  plugins: []
};

export default config;
