module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        aorusTheme: {
          primary: "#0D0F66",
          secondary: "#242F9B",
          accent: "#3A4256",
          neutral: "#3d4451",
          "base-100": "#ffffff",
        },
      },
      "light",
      "cupcake",
    ],
  },
  plugins: [require("daisyui")],
}
