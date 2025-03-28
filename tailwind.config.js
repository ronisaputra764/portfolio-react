/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Rubik', 'sans-serif'],
      },
      animation: {
        scroll: 'scroll 30s linear infinite',
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
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

