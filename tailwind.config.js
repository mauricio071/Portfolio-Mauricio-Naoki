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
      colors: {
        primary: "#00bfa6",
        secondary: "#333333",
      },
    },
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2.5rem",
        xl: "4.5rem",
        "2xl": "7.25rem",
      },
    },
  },
  plugins: [],
};
