/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Lato', 'system-ui', 'sans-serif'],
        serif: ['Fraunces', 'serif'],
      },
      colors: {
        accent: {
          50:  '#f0f4ff',
          100: '#e0e9ff',
          200: '#c7d7fd',
          300: '#a5bcfb',
          400: '#8098f7',
          500: '#6272f0',
          600: '#4d54e3',
          700: '#3f43c8',
          800: '#353aa2',
          900: '#303580',
        },
        cream: '#f6f1e7',
        teal: {
          600: '#1f4d3f',
          700: '#173b30',
        },
      },
    },
  },
  plugins: [],
};
