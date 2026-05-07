/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#D97757', // Warm Terracotta
          dark: '#E08E73',
        },
        secondary: {
          DEFAULT: '#F2E9E4', // Soft Crema
          dark: '#1A1A1A',  // Deep Charcoal
        },
        surface: {
          DEFAULT: '#FFFFFF',
          dark: '#2D2D2D',
        },
        accent: '#4A5759', // Slate Green
        themeText: {
          DEFAULT: '#22223B',
          dark: '#F2E9E4',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
