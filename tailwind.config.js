/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Brand palette
        teal: {
          DEFAULT: '#0F5C63',
          50:  '#E6F3F4',
          100: '#C2E1E3',
          200: '#8DC4C8',
          300: '#5AA7AE',
          400: '#2D8A92',
          500: '#0F5C63',
          600: '#0D4F56',
          700: '#0B4249',
          800: '#08353C',
          900: '#05282F',
        },
        gold: {
          DEFAULT: '#C9A24B',
          50:  '#FAF5E9',
          100: '#F3E7C6',
          200: '#E8D09D',
          300: '#DDB874',
          400: '#D3A15B',
          500: '#C9A24B',
          600: '#B08934',
          700: '#8C6D29',
          800: '#69521E',
          900: '#463713',
        },
        charcoal: {
          DEFAULT: '#1F2933',
          50:  '#F4F5F7',
          100: '#E1E4E8',
          200: '#BDC3CC',
          300: '#99A2B0',
          400: '#758193',
          500: '#516177',
          600: '#3D4E5F',
          700: '#2E3D4E',
          800: '#1F2933',
          900: '#111921',
        },
        muted: '#64748B',
        offwhite: '#F7F9FA',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body:    ['"Inter"', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      boxShadow: {
        card:  '0 4px 24px rgba(15, 92, 99, 0.08)',
        'card-hover': '0 12px 40px rgba(15, 92, 99, 0.16)',
        gold:  '0 4px 24px rgba(201, 162, 75, 0.20)',
      },
      animation: {
        'fade-up':   'fadeUp 0.6s ease forwards',
        'fade-in':   'fadeIn 0.5s ease forwards',
        'slide-in':  'slideIn 0.5s ease forwards',
        'marquee':   'marquee 30s linear infinite',
        'loader':    'loader 1.2s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%':   { opacity: '0', transform: 'translateX(-24px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        marquee: {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        loader: {
          '0%':   { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(200%)' },
        },
      },
    },
  },
  plugins: [],
};
