/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#132347',
        secondary: '#0D1932',
        dark: '#0E1D34',
        accent: '#FF9A4A',
        accentMuted: '#B7743F',
        white: '#FFFFFF',
      },
      fontFamily: {
        heading: ['"Playfair Display"', 'serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
