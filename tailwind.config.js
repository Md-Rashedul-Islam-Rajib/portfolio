/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'helvetica-neue': ['Helvetica Neue', 'sans-serif'],
        'la-belle-aurore': ['La Belle Aurore', 'cursive'],
        'coolvetica': ['Coolvetica', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

