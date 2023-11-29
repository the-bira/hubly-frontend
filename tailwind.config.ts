import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        mont: ['var(--font-montserrat)'],
      },
      colors: {
        primary: '#B63E96',
        primaryDark: '#58E6D9',
        light: '#F5F5F5',
       dark: '#1B1B1B',
      }
    },
  },
  plugins: [],
}
export default config
