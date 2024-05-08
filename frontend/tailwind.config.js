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
      dropShadow: {
        "3xl": "0 35px 35px rgba(0, 0, 0, 0.25)",
        "4xl": [
          "0 35px 35px rgba(0, 0, 0, 0.25)",
          "0 45px 65px rgba(0, 0, 0, 0.15)",
        ],
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
