import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "sky-blue": "#71CED0",
        "grey": "#4C4C4C",
        "red": "#D01314",
        "green": "#00C11F",
        "light-black": "#232224",
        "dark-black": "#070508",
        "dark-grey": "#121414",
        "simple-black":"#121414"
      },
      fontFamily: {
        "Inter": "'Inter', 'serif'"
      },
      lineHeight: {
        "customSm": "100%",
        "customMd": "125%",
        "customXmd": "150%",
      },
      fontSize: {
        "customSm": "21px",
        "customXxsm": "40px",
        "customXsm": "49px",
        "customXmd": "32px",
        "customXxmd": "35px",
        "customMd": "64.09px",
        "customLg": "80px",
        "customXl": "100px",
      },
    },
  },
  plugins: [],
} satisfies Config;
