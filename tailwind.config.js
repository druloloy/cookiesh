/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": {
          "50": "#F5EEEA",
          "100": "#ECDDD5",
          "200": "#D7B9A7",
          "300": "#C4977D",
          "400": "#AF7350",
          "500": "#84563C",
          "600": "#694530",
          "700": "#513525",
          "800": "#352218",
          "900": "#1C120D"
        }
      },
      animation: {
        "spin-slow": 'spin linear 2s',
      },
    },
  },
  plugins: [],
}