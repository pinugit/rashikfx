import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#001c93",

          secondary: "#2a79e9",

          accent: "#292954",

          neutral: "#f6f6fb",

          "base-100": "#17191a",
          "base-200": "#1b1c1d",
          "base-300": "#9b9387",

          info: "#8be8fd",

          success: "#52fa7c",

          warning: "#f1fa89",

          error: "#ff5757",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
export default config;
