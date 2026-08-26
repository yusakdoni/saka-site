import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        saka: {
          blue: "#1E46A5",
          navy: "#121E32",
          black: "#000000",
          gray: "#6B7280",
          lightgray: "#E5E7EB",
          bg: "#F6F8FB",
        },
      },
      fontFamily: {
        head: ["var(--font-montserrat)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      boxShadow: {
        card: "0 1px 2px rgba(18,30,50,0.06), 0 4px 16px rgba(18,30,50,0.06)",
        cardHover: "0 8px 28px rgba(18,30,50,0.12)",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
    },
  },
  plugins: [],
};
export default config;
