/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Rubik', 'sans-serif'],
      },
      colors: {
        bgColor: "var(--bg-color)",
        textColor: "var(--text-color)",
        mainColor: "var(--main-color)",
        hoverColor: "var(--hover-color)",
      }
    },
  },
  plugins: [],
}

