/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        abcNord:["var(--font-abcGintoNord)","Noto Sans","Helvetica Neue",Helvetica,Arial,sans-serif],
        ggSans:["var(--font-ggSans)","Noto Sans","Helvetica Neue",Helvetica,Arial,sans-serif]
      }
    },
  },
  plugins: [],
};
