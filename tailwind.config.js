/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'netflix': '#e50914',
        'netflixDark': '#bb1d24',
        },  
    },
  },
  plugins: [],
};
