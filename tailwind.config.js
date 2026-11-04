/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        espresso:  '#1F1A17',
        choco:     '#301B14',
        blush:     '#FFE3DC',
        cream:     '#FFFDFB',
        'blush-mid':'#F5C8BC',
        'espresso-light': '#3A2E29',
        gold:      '#C8A97A',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        script:  ['"Dancing Script"', 'cursive'],
        sans:    ['"Plus Jakarta Sans"', '"Inter"', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['clamp(4rem,10vw,10rem)', { lineHeight: '0.9', letterSpacing: '-0.03em' }],
        'display-lg': ['clamp(2.8rem,6vw,6rem)',  { lineHeight: '0.95', letterSpacing: '-0.02em' }],
        'display-md': ['clamp(2rem,4vw,4rem)',     { lineHeight: '1.05', letterSpacing: '-0.015em' }],
        'overline':   ['0.68rem',                  { lineHeight: '1', letterSpacing: '0.22em' }],
      },
      spacing: {
        section: '7rem',
        'section-sm': '4rem',
      },
      backgroundImage: {
        'noise': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E\")",
      },
      animation: {
        'fade-up':    'fadeUp 0.8s cubic-bezier(0.16,1,0.3,1) forwards',
        'fade-in':    'fadeIn 0.6s ease forwards',
        'slide-left': 'slideLeft 0.8s cubic-bezier(0.16,1,0.3,1) forwards',
        'marquee':    'marquee 25s linear infinite',
      },
      keyframes: {
        fadeUp:    { from: { opacity:0, transform:'translateY(32px)' }, to: { opacity:1, transform:'translateY(0)' } },
        fadeIn:    { from: { opacity:0 }, to: { opacity:1 } },
        slideLeft: { from: { opacity:0, transform:'translateX(40px)' }, to: { opacity:1, transform:'translateX(0)' } },
        marquee:   { from: { transform:'translateX(0)' }, to: { transform:'translateX(-50%)' } },
      },
      transitionTimingFunction: {
        'luxury': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
}
