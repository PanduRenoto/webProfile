import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '16px'
    },
    extend: {
      fontFamily: {
        'font-inter': ['inter', 'sans-serif']
      },
      colors: {
        kuning: "#f5be37",
        hitam: "#0f172a",
        abu: "#64748b"
      },
      screens: {
        '2xl': '1320px'
      }
    },
  },
  plugins: [],
} satisfies Config;
