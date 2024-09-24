/** @type {import('tailwindcss').Config} */
const config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: ['class'],
  theme: {
    extend: {
      colors: {
        gamaGreen: '#11F96D',
        paceBlue: '#17292D',
        yellowGreen: '#e3ff04',
        customGray: {
          100: '#F2F6FD',
        },
        background: 'hsl(var(--background))',
        foreground: '#BFBFC6',
        primary:'#64BBCD',
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        border: 'hsla(var(--border))',
      },
      animation: {
        scroll:
          'scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite',
      },
      keyframes: {
        scroll: {
          to: {
            transform: 'translate(calc(-50% - 0.5rem))',
          },
        },
      },
      backgroundImage: {
        'cloudy-sides':
          'linear-gradient(to right, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0.6) 15%, transparent 50%, rgba(255, 255, 255, 0.6) 85%, rgba(255, 255, 255, 1))',
      },
    },
  },
  plugins: [],
}

export default config
