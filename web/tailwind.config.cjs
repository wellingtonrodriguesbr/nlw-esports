/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: "Inter, sans-serif",
      },
      backgroundImage: {
        "nlw-gradient":
          "linear-gradient(89.86deg, #9572FC 13.08%, #43E7AD 40.94%, #E1D55D 90.57%)",
        galaxy: 'url("/background-galaxy.png")',
      },
    },
  },
  plugins: [],
};
