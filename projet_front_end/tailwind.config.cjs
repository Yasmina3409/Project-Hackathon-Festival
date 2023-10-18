import defaultTheme from 'tailwindcss/defaultTheme'
// import { colors as customColors } from './styles/colors';
/** @type {import('tailwindcss').Config} */

module.exports = {
   content: [
      './pages/**/*.{ts,tsx}',
      './components/**/*.{ts,tsx}',
      './app/**/*.{ts,tsx}',
      './src/**/*.{ts,tsx}',
   ],
   darkMode: ['class'],
   theme: {
      container: {
         center: true,
         padding: '2rem',
         screens: {
            '2xl': '1400px',
         },
      },
      extend: {
         colors:{
            // ...customColors,
            ...defaultTheme.colors,
         },
         fontSize: {
            'xl-fluid': ['clamp(12px, 8.57vw, 96px)'],
            'lg-fluid': ['clamp(8px, 4.2vw, 32px)'],
            'md-fluid': ['clamp(8px, 3.5vw, 24px)'],
            'sm-fluid': ['clamp(8px, 3.5vw, 16px)'],
            '2xs': [
               '0.5rem',
               {
                  lineHeight: '0.8rem',
               },
            ],
            '3xs': [
               '0.3rem',
               {
                  lineHeight: '0.75rem',
               },
            ],
            ...defaultTheme.fontSize,
         },
         aspectRatio: {
            portrait: '9/16',
            ...defaultTheme.aspectRatio,
         },
         screens: {
            xs: '475px',
            ...defaultTheme.screens,
         },
         width: {
            128: '32rem',
            144: '36rem',
            256: '64rem',
            ...defaultTheme.width,
         },
         height: {
            128: '32rem',
            144: '36rem',
            ...defaultTheme.height,
         },
         spacing: {
            128: '32rem',
            144: '36rem',
            ...defaultTheme.spacing,
         },
         backgroundImage: {
            'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
            'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
         },
         animation: {
            reveal: 'scaleAndFade 750ms ease-in-out',
            rotate: 'rotate 20s linear infinite',
            revealFromBottom: 'fadeAndSlideFromBottom 450ms ease-in-out 1.45s both',
            marquee: 'marquee 10s linear infinite',
            scroll: 'scrollInvitation 1s ease-in-out 1s both infinite',
            'accordion-down': 'accordion-down 0.2s ease-out',
            'accordion-up': 'accordion-up 0.2s ease-out',
            ...defaultTheme.animation,
         },
         keyframes: {
            marquee: {
               '0%': {transform: 'translateX(-33%)'},
               '100%': {transform: 'translateX(-50%)'},
            },
            scrollInvitation: {
               '0%': {transform: 'translateY(-30px)', opacity: 0},
               '100%': {transform: 'translateY(0%)', opacity: 1},
            },
            fadeAndSlideFromBottom: {
               '0%': {opacity: '0', transform: 'translateY(100px)'},
               '100%': {opacity: '1', transform: 'translateY(0)'},
            },
            scaleAndFade: {
               '0%': {opacity: '0', transform: 'scale(0.95)'},
               '100%': {opacity: '1', transform: 'scale(1)'},
            },
            fadeIn: {
               '0%': {opacity: '0'},
               '100%': {opacity: '1'},
            },
            rotate: {
               '0%': {transform: 'rotate(0deg)'},
               '100%': {transform: 'rotate(360deg)'},
            },
            'accordion-down': {
               from: {height: 0},
               to: {height: 'var(--radix-accordion-content-height)'},
            },
            'accordion-up': {
               from: {height: 'var(--radix-accordion-content-height)'},
               to: {height: 0},
            },
         },
         fontFamily: {
            ...defaultTheme.fontFamily,
            roboto: ['var(--font-roboto)'],
            marker: ['var(--marker)'],
         },
      },
   },
   plugins: [
      require('tailwindcss-animate'),
      require('tailwindcss-text-balance'),
      require('@tailwindcss/typography'),
      require('daisyui'),
   ],
   future: {
      hoverOnlyWhenSupported: true,
   },
   // daisyUI config (optional - here are the default values)
   daisyui: {
      themes: [
         'lemonade'], // true: all themes | false: only light + dark | array: specific themes like this ["light", "dark", "cupcake"]
      darkTheme: true,
      base: true, // applies background color and foreground color for root element by default
      styled: true, // include daisyUI customColors and design decisions for all components
      utils: true, // adds responsive and modifier utility classes
      rtl: false, // rotate style direction from left-to-right to right-to-left. You also need to add dir="rtl" to your html tag and install `tailwindcss-flip` plugin for Tailwind CSS.
      prefix: '', // prefix for daisyUI classnames (components, modifiers and responsive class names. Not twcolors)
      logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
   },
}
