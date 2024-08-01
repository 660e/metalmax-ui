/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        23: 'repeat(23, minmax(0, 1fr))'
      }
    }
  },
  plugins: []
};
