import type { Config } from 'tailwindcss'

export default {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        coffee: '#6B4F4F',
        cream: '#FBF7F1',
        sand: '#E9DFD3',
        cocoa: '#3E2E2E',
        accent: '#C97A40'
      },
      fontFamily: {
        serif: ['var(--font-serif)'],
        sans: ['var(--font-sans)']
      },
      container: { center: true, padding: '1rem' }
    }
  },
  plugins: []
} satisfies Config
