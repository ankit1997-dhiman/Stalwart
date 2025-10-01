/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true, // ✅ ensures Tailwind utilities take precedence
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
