/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,vue}",
    "./components/**/*.{js,ts,vue}",
    "./layouts/**/*.{js,ts,vue}",
    "./plugins/**/*.{js,ts,vue}",
    "./app.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        primary: "#00bfa6",
        secondary: "#333333",
      },
    },
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        md: "1rem",
        lg: "1rem",
        xl: "4rem",
        "2xl": "7.25rem",
      },
    },
  },
  plugins: [],
};
