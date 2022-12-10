/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      "arial-black": "arial-black",
      axiforma: "Axiforma",
    },
    lineHeight: {
      1: 1,
      "1_1": 1.1,
      "1_2": 1.2,
      "1_3": 1.3,
      "1_4": 1.4,
      "1_5": 1.5,
      "1_6": 1.6,
      "1_7": 1.7,
      "1_8": 1.8,
      "1_9": 1.9,
    },
    extend: {
      spacing: {
        "navbar-height": "var(--navbar-height)",
        "100px": "100px",
        "150px": "150px",
        "200px": "200px",
      },
      borderWidth: {
        "1px": "1px",
      },
      colors: {
        Blue: "#051641",
        BlueLight: "#4667B9",
        BLueSocial: "#19357C",
        LightWhite: "#F7F7F7",
        LightBlue2: "#EFF3FF",
        link: "#00264C",
      },
      boxShadow: {
        "effect-1": "0px 4px 4px rgba(0, 0, 0, 0.25)",
      },
      dropShadow: {
        "effect-1": "0px 4px 4px rgba(0, 0, 0, 0.25)",
      },

      backgroundImage: {
        "purple-gradient":
          "linear-gradient(270deg, #000206 -23.91%, #4667B9 105.14%)",
        "purple-gradient-2":
          "linear-gradient(90deg, #19357C 0%, rgba(6, 6, 6, 0.93) 100%)",
        radial:
          "radial-gradient(50% 50% at 50% 50%, #1B1464 10.61%, #534E8A 24.32%, #8783AD 38.67%, #B2B0CB 52.75%, #d4d2e1d3 66.2%, #ecebf2c7 78.88%, #fafafcc9 90.48%, transparent 100%)",
      },
    },
  },
  plugins: [],
};
