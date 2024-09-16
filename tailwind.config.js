/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/_components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",

        primary: "#00B207",
        "soft-primary": "#84D187",
        "hard-primary": "#2C742F",
        warning: "#FF8A00",
        danger: "#EA4B48",
        "green-grey": {
          9: "#002603",
          8: "#173B1A",
          7: "#2B572E",
          6: "#406B42",
        },

        gray: {
          50: "#EDF2EE",
          100: "#E6E6E6",
          400: "#999999",
          500: "#808080",
          800: "#333333",
        },
      },
      backgroundImage: {
        "slider-bg": 'url("/slider.png")',
      },
    },
  },
  plugins: [],
};
