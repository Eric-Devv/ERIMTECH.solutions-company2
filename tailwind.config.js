/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'neon-cyan': '#00f7ff',
        'neon-pink': '#ff00d9',
        'dark': {
          DEFAULT: '#0a0a0a',
          'lighter': '#1a1a1a'
        }
      },
      fontFamily: {
        'cyber': ['Space Grotesk', 'sans-serif']
      },
      animation: {
        'gradient': 'gradient 8s linear infinite',
        'pulse-glow': 'pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        },
        'pulse-glow': {
          '0%, 100%': {
            opacity: '1',
            filter: 'brightness(150%)'
          },
          '50%': {
            opacity: '.8',
            filter: 'brightness(100%)'
          }
        }
      }
    }
  },
  plugins: []
}