/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      sm: ['14px', '20px'],
      base: ['16px', '24px'],
      xl: ['20px', '28px'],
      '2xl': ['24px', '32px'],
      '3xl': ['30px', '36px'],
      '4xl': ['36px', '44px'],
      '5xl': ['70px', '104px'],
      '6xl': ['110px', '104px'],
    },
    extend: {
      colors: {
        violet: {
          100: "#A5B4FB",
          200: "#A8A6FF",
          300: "#918efa",
          400: "#807dfa",
        },
        pink: {
          200: "#FFA6F6",
          300: "#fa8cef",
          400: "#fa7fee",
        },
        red: {
          200: "#FF9F9F",
          300: "#fa7a7a",
          400: "#f76363",
        },
        orange: {
          200: "#FFC29F",
          300: "#FF965B",
          400: "#fa8543",
        },
        yellow: {
          200: "#FFF59F",
          300: "#FFF066",
          400: "#FFE500",
        },
        lime: {
          100: "#c6fab4",
          200: "#B8FF9F",
          300: "#9dfc7c",
          400: "#7df752",
        },
        cyan: {
          200: "#A6FAFF",
          300: "#79F7FF",
          400: "#53f2fc",
        },
      },
      backgroundImage: (theme) => ({
        desktop: "url('/src/assets/neo-brutalism-image1.webp')",
        mobile: "url('/src/assets/neo-brutalism-image1-mobile.webp')",
      }),
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".bg-desktop": {
          "background-image": "url('/src/assets/neo-brutalism-image1.webp')",
        },
        ".bg-mobile": {
          "background-image":
            "url('/src/assets/neo-brutalism-image1-mobile.webp')",
        },
      };

      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
