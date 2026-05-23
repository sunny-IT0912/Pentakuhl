/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Playfair Display', 'serif'],
      },
      colors: {
        primary: '#003087',    // Main dark blue
        accent: '#00AEEF',     // Bright cyan blue
        dark: '#001F4D',
      }
    },
  },
  plugins: [],
}