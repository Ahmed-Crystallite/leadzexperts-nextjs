/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        berlin: ['var(--font-berlin)', 'sans-serif'],
        sans: ['var(--font-primary)', 'sans-serif']
      },
      screens: {
        xs: { max: "576px" },
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        "2xl": "1400px",
      },
      container: {
        center: true,
        padding: "0.5rem",
      },
      colors: {
        primary: "#b6189b",
        secondary: "#873d9f",
        blue: "#1c6cd9",
        lightblue: "#6fa5ed",
        third: "#039f50",
        black: "#222222",
        yellow: "#fabb1a",
      },
    },
  },
  plugins: [],
};
