import daisyui from 'daisyui'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Avenir Next"', 'Inter', 'system-ui', 'sans-serif'],
        serif: ['Iowan Old Style', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        portfolio: {
          primary: '#7dd3fc',
          'primary-content': '#03111f',
          secondary: '#7c3aed',
          accent: '#f59e0b',
          neutral: '#10203a',
          'base-100': '#071120',
          'base-200': '#0b1730',
          'base-300': '#10203a',
          'base-content': '#e5eefc',
          info: '#38bdf8',
          success: '#34d399',
          warning: '#fbbf24',
          error: '#fb7185',
        },
      },
    ],
  },
}
