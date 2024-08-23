/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      minHeight: {
        "height-minus-hundred": "calc(100vh - 100px)",
      },
      height: {
        "height-hundred": "calc(100vh - 100px)",
      },
      colors: {
        primary: "#337ab7",
        back: "#fbfcfc",
      },
      screens: {
        "md-1000": "1000px",
        "md-1100": "1100px",
        "md-1200": "1200px",
        "md-900": "900px",
      },
    },
  },
  plugins: [],
};
