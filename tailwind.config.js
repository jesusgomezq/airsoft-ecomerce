/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        designColor: "#ff014f",
        bgBodyColor: "#021b2b",
        bgDesingColor: "#02031a",
      },

      container: {
        center: true,
        padding: {
          default: "1rem",
          sm: "3rem",
        },
      },
    },
  },
  plugins: [],
};
