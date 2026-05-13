import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

const config: Config = {
  darkMode: 'class',
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        wegrow: {
          dark: '#081f16',
          darker: '#04120c',
          card: '#0c2e21',
          lime: '#ccfc62',
          limeHover: '#b5e350',
          grey: '#d1d5db',
        },
        surface: {
          DEFAULT: '#081f16',
          light: '#0c2e21',
          dark: '#04120c',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', ...defaultTheme.fontFamily.sans],
        serif: ['var(--font-playfair)', ...defaultTheme.fontFamily.serif],
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        neumorph: '8px 8px 16px rgba(0,0,0,0.15), -8px -8px 16px rgba(255,255,255,0.1)',
        neumorphInset: 'inset 4px 4px 8px rgba(0,0,0,0.12), inset -4px -4px 8px rgba(255,255,255,0.07)',
      },
      borderRadius: {
        glass: '1rem',
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};

export default config;
