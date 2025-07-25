/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Material 3 Color Tokens
      colors: {
        // Primary colors
        'primary': {
          50: '#F3F0FF',
          100: '#E9E2FF',
          200: '#D6C6FF',
          300: '#BCA0FF',
          400: '#9C75FF',
          500: '#6750A4', // Main primary
          600: '#5A3D96',
          700: '#4C2C85',
          800: '#3F1A73',
          900: '#2F0A5B',
        },
        // Secondary colors
        'secondary': {
          50: '#F5F3F7',
          100: '#EAE7EC',
          200: '#D5CFD6',
          300: '#BAB3BC',
          400: '#9A919A',
          500: '#625B71', // Main secondary
          600: '#524A60',
          700: '#42394F',
          800: '#33293E',
          900: '#24192D',
        },
        // Surface colors
        'surface': {
          50: '#FFFFFF',
          100: '#FEF7FF', // Main surface
          200: '#F5EFFF',
          300: '#E7E0EC',
          400: '#D0C3CC',
          500: '#B4A7B7',
          600: '#968FA2',
          700: '#79747E', // Outline
          800: '#49454F',
          900: '#1D1B20',
        },
        // Additional semantic colors
        'tertiary': {
          50: '#FDF2F8',
          100: '#FCE7F3',
          200: '#FBCFE8',
          300: '#F9A8D4',
          400: '#F472B6',
          500: '#7D5260', // Main tertiary
          600: '#6D4555',
          700: '#5D384A',
          800: '#4D2B3F',
          900: '#3D1E34',
        },
        'error': {
          50: '#FEF2F2',
          100: '#FEE2E2',
          200: '#FECACA',
          300: '#FCA5A5',
          400: '#F87171',
          500: '#BA1A1A', // Main error
          600: '#DC2626',
          700: '#B91C1C',
          800: '#991B1B',
          900: '#7F1D1D',
        },
      },
      // Material 3 Typography Scale
      fontSize: {
        // Display
        'display-large': ['3.5rem', { lineHeight: '4rem', letterSpacing: '-0.25px' }],
        'display-medium': ['2.813rem', { lineHeight: '3.25rem', letterSpacing: '0px' }],
        'display-small': ['2.25rem', { lineHeight: '2.75rem', letterSpacing: '0px' }],
        
        // Headline
        'headline-large': ['2rem', { lineHeight: '2.5rem', letterSpacing: '0px' }],
        'headline-medium': ['1.75rem', { lineHeight: '2.25rem', letterSpacing: '0px' }],
        'headline-small': ['1.5rem', { lineHeight: '2rem', letterSpacing: '0px' }],
        
        // Title
        'title-large': ['1.375rem', { lineHeight: '1.75rem', letterSpacing: '0px' }],
        'title-medium': ['1rem', { lineHeight: '1.5rem', letterSpacing: '0.15px' }],
        'title-small': ['0.875rem', { lineHeight: '1.25rem', letterSpacing: '0.1px' }],
        
        // Body
        'body-large': ['1rem', { lineHeight: '1.5rem', letterSpacing: '0.5px' }],
        'body-medium': ['0.875rem', { lineHeight: '1.25rem', letterSpacing: '0.25px' }],
        'body-small': ['0.75rem', { lineHeight: '1rem', letterSpacing: '0.4px' }],
        
        // Label
        'label-large': ['0.875rem', { lineHeight: '1.25rem', letterSpacing: '0.1px' }],
        'label-medium': ['0.75rem', { lineHeight: '1rem', letterSpacing: '0.5px' }],
        'label-small': ['0.688rem', { lineHeight: '1rem', letterSpacing: '0.5px' }],
      },
      // Material 3 Border Radius
      borderRadius: {
        'xs': '4px',
        'sm': '8px',
        'md': '12px',
        'lg': '16px',
        'xl': '20px',
        '2xl': '24px',
        '3xl': '28px',
      },
      // Material 3 Shadows
      boxShadow: {
        'elevation-1': '0px 1px 2px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)',
        'elevation-2': '0px 1px 2px rgba(0, 0, 0, 0.3), 0px 2px 6px 2px rgba(0, 0, 0, 0.15)',
        'elevation-3': '0px 1px 3px rgba(0, 0, 0, 0.3), 0px 4px 8px 3px rgba(0, 0, 0, 0.15)',
        'elevation-4': '0px 2px 3px rgba(0, 0, 0, 0.3), 0px 6px 10px 4px rgba(0, 0, 0, 0.15)',
        'elevation-5': '0px 4px 4px rgba(0, 0, 0, 0.3), 0px 8px 12px 6px rgba(0, 0, 0, 0.15)',
      },
      // Material 3 Spacing
      spacing: {
        '4xs': '2px',
        '3xs': '4px',
        '2xs': '8px',
        'xs': '12px',
        'sm': '16px',
        'md': '20px',
        'lg': '24px',
        'xl': '32px',
        '2xl': '40px',
        '3xl': '48px',
        '4xl': '56px',
        '5xl': '64px',
      },
      // Material 3 Animation curves
      transitionTimingFunction: {
        'emphasized': 'cubic-bezier(0.2, 0, 0, 1)',
        'emphasized-decelerate': 'cubic-bezier(0.05, 0.7, 0.1, 1)',
        'emphasized-accelerate': 'cubic-bezier(0.3, 0, 0.8, 0.15)',
        'standard': 'cubic-bezier(0.2, 0, 0, 1)',
        'standard-decelerate': 'cubic-bezier(0, 0, 0, 1)',
        'standard-accelerate': 'cubic-bezier(0.3, 0, 1, 1)',
      },
    },
  },
  plugins: [
    // Custom Material 3 utilities
    function({ addUtilities }) {
      const newUtilities = {
        '.surface-container-lowest': {
          backgroundColor: '#FFFFFF',
        },
        '.surface-container-low': {
          backgroundColor: '#F7F2FA',
        },
        '.surface-container': {
          backgroundColor: '#F3EDF7',
        },
        '.surface-container-high': {
          backgroundColor: '#ECE6F0',
        },
        '.surface-container-highest': {
          backgroundColor: '#E6E0E9',
        },
        '.state-layer-hover': {
          position: 'relative',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: '0',
            left: '0',
            right: '0',
            bottom: '0',
            backgroundColor: 'currentColor',
            opacity: '0',
            transition: 'opacity 200ms cubic-bezier(0.2, 0, 0, 1)',
            borderRadius: 'inherit',
          },
          '&:hover::before': {
            opacity: '0.08',
          },
        },
        '.state-layer-pressed': {
          '&:active::before': {
            opacity: '0.12',
          },
        },
      }
      addUtilities(newUtilities)
    }
  ],
}