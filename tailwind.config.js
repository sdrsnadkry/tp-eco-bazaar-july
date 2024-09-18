/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/_components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        "display-01": [
          "4.5rem",
          {
            lineHeight: "5.4rem",
          },
        ],
        "heading-01": [
          "3.5rem",
          {
            lineHeight: "4.2rem",
          },
        ],
        "heading-02": [
          "3rem",
          {
            lineHeight: "3.6rem",
          },
        ],
        "heading-05": [
          "2rem",
          {
            lineHeight: "2.4rem",
          },
        ],
        "body-xxl": [
          "1.5rem",
          {
            lineHeight: "2.25rem",
          },
        ],
        "body-medium": [
          "1rem",
          {
            lineHeight: "1.5rem",
          },
        ],
        "body-small": [
          "0.875rem",
          {
            lineHeight: "1.3125rem",
          },
        ],
      },
      fontWeight: {
        "400": '400',
        "500": '500',
        "600": '600',
        
      },
      boxShadow: {
        services: "4px 12px 40px -10px rgba(0,38,3,0.08)",
      },
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
