/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#FBB400',
        'secondary': '#A4F3DE',
      },
      boxShadow: {
        'custom': '4px 8px 0 rgba(0, 0, 0, 1)'
      },
      fontFamily: {
        sans: ['Custom Font', 'sans-serif'],
        serif: ['Georgia', 'Cambria', 'Times New Roman', 'serif'],
        mono: ['Menlo', 'Monaco', 'Courier New', 'monospace'],
      },
    },
  },
  plugins: [],
}
