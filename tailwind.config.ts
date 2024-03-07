import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        saffron: "#E3651D",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      blur: {
        "2xl": "20px",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
export default config;
