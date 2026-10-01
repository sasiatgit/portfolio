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
          'primary-content': '#000000',
          secondary: '#7c3aed',
          accent: '#f59e0b',
          neutral: '#b8e2f2',
          'base-100': '#87ceeb',
          'base-200': '#a0d8ef',
          'base-300': '#b8e2f2',
          'base-content': '#000000',
          info: '#38bdf8',
          success: '#34d399',
          warning: '#fbbf24',
          error: '#fb7185',
        },
      },
    ],
  },
}
