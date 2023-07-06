/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "bookmark-purple": "#5267DF",
        "bookmark-red": "#FA5959",
        "bookmark-blue": "#242A45",
        "bookmark-grey": "#9194A2",
        "bookmark-white": "#f7f7f7",
      },
      fontFamily: {
        Burtons: "burtons",
        Poppins: ["Poppins, sans-serif"]
      },
      container :{
        center: true,
        padding: "1rem"
      },
      screens: {
        xs: "300px",
        sm: "640px",
        md: "768px",
        lg: "1080px",
        xl: "1280px",
        ['2xl']: "1530px",
      },
    }
  },
  plugins: [],
}