/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'jua': ['Jua', 'sans-serif'],
        'source-sans': ['Source Sans Pro', 'sans-serif'],
      },
      colors: {
        'background': 'var(--background)',
        'text': 'var(--text)',
        'info': 'var(--info)',
        'input': 'var(--input)',
        'input-bg': 'var(--input-bg)',
        'task': 'var(--task)',
        'task-name': 'var(--task-name)'
      },
      fontSize: {
        '40': '40px',
        '16': '16px'
      },
      lineHeight: {
        '50': '50px',
        '22': '22px'
      },
      margin: {
        '72': '72px'
      },
      width: {
        '736': '736px',
        '641': '641px',
        '85': '85px'
      },
      height: {
        '287': '287px'
      }
    },
  },
  plugins: [],
}

