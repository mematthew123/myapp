/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: { fontFamily: { "source-sans-pro": "'Source Sans Pro'" } },
    colors: {
      white: "#fff",
      turquoise: "#5acfc7",
      violet: "#df4ed9",
      gray: {
        "100": "#f7f7f7",
        "200": "#666",
        "300": "#1261ad",
        "400": "#333",
      },
    },
    fontSize: { sm: "12px", base: "16px" },
    screens: { lg: { max: "1200px" } },
  },
  corePlugins: { preflight: false },
};
