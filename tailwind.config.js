module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        slowZoom: "slowZoom 10s ease-in-out infinite",
        },
      keyframes: {
        slowZoom: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.1)" },
        },
      },
    },
  },
  darkMode: "class",
  plugins: [],
};