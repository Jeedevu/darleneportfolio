/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        rose:    { DEFAULT: '#C9446A', light: '#F4A8BB', pale: '#FAD8E2', blush: '#FFF0F4' },
        cream:   { DEFAULT: '#FAF6EF', dark: '#F5EAD8' },
        beige:   { DEFAULT: '#E5CDA8', dark: '#C8A882' },
        taupe:   '#8C7B6E',
        brown:   { DEFAULT: '#3D2C24', light: '#6B4C3B' },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans:  ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        brutal:    '4px 4px 0px #1A1212',
        'brutal-lg': '7px 7px 0px #1A1212',
        'brutal-rose': '4px 4px 0px #C9446A',
      },
      animation: {
        'fade-up':   'fadeUp 0.6s ease forwards',
        'fade-in':   'fadeIn 0.5s ease forwards',
        'bounce-slow': 'bounceSlow 2s ease-in-out infinite',
      },
      keyframes: {
        fadeUp:  { from: { opacity: 0, transform: 'translateY(24px)' }, to: { opacity: 1, transform: 'translateY(0)' } },
        fadeIn:  { from: { opacity: 0 }, to: { opacity: 1 } },
        bounceSlow: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(8px)' } },
      },
    },
  },
  plugins: [],
}
