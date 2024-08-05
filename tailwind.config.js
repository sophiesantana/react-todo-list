/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'jua': ['Jua', 'sans-serif'],
      },
      fontSize: {
        '40': '40px',
      },
      lineHeight: {
        '50': '50px',
      },
      margin: {
        '72': '72px'
      }
    },
  },
  plugins: [],
}

