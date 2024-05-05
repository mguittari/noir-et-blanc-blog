/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    variants: {
      extend: {
        backgroundColor: ["valid", "invalid"],
        borderColor: ["valid", "invalid"],
        textColor: ["valid", "invalid"],
      },
    },
    extend: {
      fontFamily: {
        questrial: ["questrial", "sans-serif"],
        librebaskerville: ["librebaskerville", "serif"],
      },
      scale: {
        175: "1.75",
        200: "2",
        250: "2.5",
        230: "2.3",
      },
    },
  },
  plugins: [],
};
