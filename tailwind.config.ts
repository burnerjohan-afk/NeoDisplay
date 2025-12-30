import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Couleur principale - Tech Premium (Film LED)
        'tech-blue': '#2F8FFF',
        // Couleur secondaire - Smartfilm
        'smartfilm-turquoise': '#22E3D5',
        // Arrière-plan principal
        'graphite': '#0B0F14',
        // Gris neutres UI
        'gray-light': '#E6E8EC',
        'gray-medium': '#A3A8AE',
        'gray-dark': '#1A1F26',
        'gray-text': '#6E7682',
        // États UX
        'success': '#2ECC71',
        'error': '#E74C3C',
        'warning': '#F1C40F',
        // Aliases pour compatibilité
        primary: {
          dark: '#0B0F14',
          gray: '#1A1F26',
          light: '#1A1F26',
        },
        neon: {
          blue: '#2F8FFF',
          green: '#22E3D5',
        },
        accent: {
          white: '#E6E8EC',
          gray: '#A3A8AE',
          dark: '#6E7682',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'var(--font-work-sans)', 'system-ui', 'sans-serif'],
        display: ['var(--font-poppins)', 'var(--font-clash)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'monospace'],
      },
      fontSize: {
        'h1': ['56px', { lineHeight: '1.1', fontWeight: '600' }],
        'h2': ['40px', { lineHeight: '1.2', fontWeight: '600' }],
        'h3': ['28px', { lineHeight: '1.3', fontWeight: '600' }],
        'body': ['18px', { lineHeight: '1.6' }],
        'body-sm': ['16px', { lineHeight: '1.6' }],
        'caption': ['14px', { lineHeight: '1.5' }],
        'caption-sm': ['13px', { lineHeight: '1.5' }],
      },
      backgroundImage: {
        'gradient-tech': 'linear-gradient(135deg, #0B0F14 0%, #0F1621 60%, #0B0F14 100%)',
        'gradient-film-led': 'linear-gradient(135deg, #2F8FFF 0%, #1E6FD9 100%)',
        'gradient-smartfilm': 'linear-gradient(135deg, #22E3D5 0%, #1AB8A8 100%)',
      },
      boxShadow: {
        'glow-blue': '0 0 20px rgba(47, 143, 255, 0.4), 0 0 40px rgba(47, 143, 255, 0.2)',
        'glow-turquoise': '0 0 20px rgba(34, 227, 213, 0.4), 0 0 40px rgba(34, 227, 213, 0.2)',
        'glow-cyan': '0 0 25px rgba(34, 227, 213, 0.5), 0 0 50px rgba(34, 227, 213, 0.3)',
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
      },
      backdropBlur: {
        'glass': '10px',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'glow-blue': 'glowBlue 2s ease-in-out infinite alternate',
        'glow-turquoise': 'glowTurquoise 2s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        glowBlue: {
          '0%': { boxShadow: '0 0 10px rgba(47, 143, 255, 0.3)' },
          '100%': { boxShadow: '0 0 25px rgba(47, 143, 255, 0.6)' },
        },
        glowTurquoise: {
          '0%': { boxShadow: '0 0 10px rgba(34, 227, 213, 0.3)' },
          '100%': { boxShadow: '0 0 25px rgba(34, 227, 213, 0.6)' },
        },
      },
    },
  },
  plugins: [],
}
export default config

