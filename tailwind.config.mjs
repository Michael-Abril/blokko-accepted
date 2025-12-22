/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'blokko-primary': '#4aa6db',
        'blokko-green': '#76c23a',
        'blokko-dark': '#0A2540',
        'blokko-light': '#E2E8F0',
        'blokko-card': '#f4f8fb'
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif']
      }
    }
  },
  plugins: []
};
