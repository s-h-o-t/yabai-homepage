/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      colors: ({ colors }) => ({
        base: colors.slate,
      }),
      fontFamily: {
        sans: ["Poppins"],
      },
      fontWeight: {
        normal: 300,
        bold: 600,
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
