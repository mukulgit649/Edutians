/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#4f46e5',
        accent: '#06d6a0',
        background: {
          light: '#F9FAFB',
          dark: '#111827',
        },
        card: {
          light: '#FFFFFF',
          dark: '#1F2937',
        },
        text: {
          light: '#1F2937',
          dark: '#F9FAFB',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Poppins', 'sans-serif'],
      },
      animation: {
        'gradient': 'gradient 8s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite',
        'glow-logo': 'glow-logo 2s ease-in-out infinite',
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
          },
        },
        float: {
          '0%, 100%': {
            transform: 'translateY(0)',
          },
          '50%': {
            transform: 'translateY(-20px)',
          },
        },
        glow: {
          '0%, 100%': {
            opacity: 1,
          },
          '50%': {
            opacity: 0.5,
          },
        },
        'glow-logo': {
          '0%, 100%': {
            filter: 'drop-shadow(0 0 8px #4f46e5) drop-shadow(0 0 16px #06d6a0)',
          },
          '50%': {
            filter: 'drop-shadow(0 0 12px #4f46e5) drop-shadow(0 0 24px #06d6a0)',
          },
        },
      },
      backgroundImage: {
        'gradient-dots': 'radial-gradient(circle, currentColor 1px, transparent 1px)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
}; 