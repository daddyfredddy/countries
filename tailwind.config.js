/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "dblue": "hsl(209, 23%, 22%)",
        "vdblue": "hsl(207, 26%, 17%)",
        "vdblue1": "hsl(200, 15%, 8%)",
        "dgray": "hsl(200, 15%, 8%)",
        "vlgray": "hsl(0, 0%, 95%)",
        "white": "hsl(0, 0%, 100%)",
        "kalas1": "#C4C4C4",
        "kalas2": "#B2B2B2",
        "kalas3": "#979797",
        "kalas4": "#111517",
      }
    },
    fontFamily: {
      fonty: ["Nunito", "Sans"],
    }
  },
  plugins: [],
}

