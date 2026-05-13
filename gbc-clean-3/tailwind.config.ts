import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
          './app/**/*.{js,ts,jsx,tsx,mdx}',
          './components/**/*.{js,ts,jsx,tsx,mdx}',
        ],
    theme: {
          extend: {
                  colors: {
                            forest: {
                                        50: '#eef5f0',
                                        100: '#d6e7dd',
                                        200: '#aecfba',
                                        300: '#80b196',
                                        400: '#558f74',
                                        500: '#357555',
                                        600: '#2a6048',
                                        700: '#1f4a36',
                                        800: '#173728',
                                        900: '#102a1d',
                                        950: '#0b1f15',
                            },
                            moss: {
                                        400: '#8aa953',
                                        500: '#6b8e23',
                            },
                            charcoal: {
                                        700: '#3a3a3a',
                                        800: '#262626',
                                        900: '#1a1a1a',
                            },
                            cream: {
                                        50: '#faf7f0',
                                        100: '#f3ede0',
                                        200: '#e8dfc9',
                            },
                            stone: {
                                        50: '#f7f5f1',
                                        100: '#ecebe5',
                            },
                  },
                  fontFamily: {
                            display: ['var(--font-inter-tight)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
                            sans: ['var(--font-inter)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
                  },
          },
    },
    plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};

export default config;
