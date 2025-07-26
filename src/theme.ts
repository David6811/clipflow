import { createTheme } from '@mui/material/styles';

// ClipFlow Modern Professional Color System
const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1E293B', // Deep slate - Modern, sophisticated, professional
      light: '#475569',
      dark: '#0F172A',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#3B82F6', // Vibrant blue - Innovation, trust, energy
      light: '#60A5FA',
      dark: '#1D4ED8',
      contrastText: '#FFFFFF',
    },
    tertiary: {
      main: '#8B5CF6', // Modern purple - Creativity, premium, tech
      light: '#A78BFA',
      dark: '#7C3AED',
      contrastText: '#FFFFFF',
    },
    surface: {
      main: '#FFFFFF', // Pure white - Clean, modern, minimalist
      light: '#FAFAFA',
      dark: '#F8FAFC',
      contrastText: '#1E293B',
    },
    surfaceVariant: {
      main: '#F8FAFC', // Subtle gray - Elegant background
      light: '#FFFFFF',
      dark: '#F1F5F9',
      contrastText: '#475569',
    },
    background: {
      default: '#FFFFFF', // Clean white background
      paper: '#FAFAFA', // Subtle paper background
    },
    text: {
      primary: '#1E293B', // Deep slate - Strong readability
      secondary: '#64748B', // Medium slate - Elegant secondary text
    },
    error: {
      main: '#EF4444',
      light: '#F87171',
      dark: '#DC2626',
      contrastText: '#FFFFFF',
    },
    success: {
      main: '#10B981',
      light: '#34D399',
      dark: '#059669',
      contrastText: '#FFFFFF',
    },
    warning: {
      main: '#F59E0B',
      light: '#FBBF24',
      dark: '#D97706',
      contrastText: '#FFFFFF',
    },
    // Custom ClipFlow colors - Modern palette
    accent: {
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', // Premium gradient
      purple: '#8B5CF6', // Modern purple
      blue: '#3B82F6', // Vibrant blue
      teal: '#14B8A6', // Fresh teal
      rose: '#F43F5E', // Energetic rose
    },
    outline: {
      main: '#E2E8F0',
      variant: '#F1F5F9',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    // Material 3 Typography Scale
    displayLarge: {
      fontSize: '3.5rem',
      fontWeight: 400,
      lineHeight: 1.12,
      letterSpacing: '-0.25px',
    },
    displayMedium: {
      fontSize: '2.813rem',
      fontWeight: 400,
      lineHeight: 1.16,
      letterSpacing: '0px',
    },
    displaySmall: {
      fontSize: '2.25rem',
      fontWeight: 400,
      lineHeight: 1.22,
      letterSpacing: '0px',
    },
    headlineLarge: {
      fontSize: '2rem',
      fontWeight: 400,
      lineHeight: 1.25,
      letterSpacing: '0px',
    },
    headlineMedium: {
      fontSize: '1.75rem',
      fontWeight: 400,
      lineHeight: 1.29,
      letterSpacing: '0px',
    },
    headlineSmall: {
      fontSize: '1.5rem',
      fontWeight: 400,
      lineHeight: 1.33,
      letterSpacing: '0px',
    },
    titleLarge: {
      fontSize: '1.375rem',
      fontWeight: 400,
      lineHeight: 1.27,
      letterSpacing: '0px',
    },
    titleMedium: {
      fontSize: '1rem',
      fontWeight: 500,
      lineHeight: 1.5,
      letterSpacing: '0.15px',
    },
    titleSmall: {
      fontSize: '0.875rem',
      fontWeight: 500,
      lineHeight: 1.43,
      letterSpacing: '0.1px',
    },
    bodyLarge: {
      fontSize: '1rem',
      fontWeight: 400,
      lineHeight: 1.5,
      letterSpacing: '0.5px',
    },
    bodyMedium: {
      fontSize: '0.875rem',
      fontWeight: 400,
      lineHeight: 1.43,
      letterSpacing: '0.25px',
    },
    bodySmall: {
      fontSize: '0.75rem',
      fontWeight: 400,
      lineHeight: 1.33,
      letterSpacing: '0.4px',
    },
    labelLarge: {
      fontSize: '0.875rem',
      fontWeight: 500,
      lineHeight: 1.43,
      letterSpacing: '0.1px',
    },
    labelMedium: {
      fontSize: '0.75rem',
      fontWeight: 500,
      lineHeight: 1.33,
      letterSpacing: '0.5px',
    },
    labelSmall: {
      fontSize: '0.688rem',
      fontWeight: 500,
      lineHeight: 1.45,
      letterSpacing: '0.5px',
    },
  },
  shape: {
    borderRadius: 16, // Modern rounded corners
  },
  transitions: {
    easing: {
      easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
      easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
      easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
      sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
    },
    duration: {
      shortest: 150,
      shorter: 200,
      short: 250,
      standard: 300,
      complex: 375,
      enteringScreen: 225,
      leavingScreen: 195,
    },
  },
  components: {
    // Modern Button styles with smooth transitions
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: '12px',
          paddingTop: '12px',
          paddingBottom: '12px',
          paddingLeft: '24px',
          paddingRight: '24px',
          fontSize: '0.95rem',
          fontWeight: 600,
          letterSpacing: '0.02em',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            transform: 'translateY(-2px)',
          },
        },
        contained: {
          boxShadow: '0 4px 14px 0 rgba(59, 130, 246, 0.15)',
          '&:hover': {
            boxShadow: '0 6px 20px 0 rgba(59, 130, 246, 0.25)',
            transform: 'translateY(-2px)',
          },
        },
        outlined: {
          borderWidth: '2px',
          '&:hover': {
            borderWidth: '2px',
            backgroundColor: 'rgba(59, 130, 246, 0.04)',
          },
        },
      },
    },
    // Modern Card styles with subtle shadows
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '20px',
          boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            boxShadow: '0 10px 25px 0 rgba(0, 0, 0, 0.1), 0 4px 6px 0 rgba(0, 0, 0, 0.05)',
            transform: 'translateY(-4px)',
          },
        },
      },
    },
    // Modern Paper styles
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: '16px',
          backgroundImage: 'none',
        },
        elevation1: {
          boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        },
        elevation2: {
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        },
        elevation3: {
          boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        },
      },
    },
    // Modern Chip styles
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: '12px',
          fontWeight: 500,
          transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            transform: 'scale(1.02)',
          },
        },
      },
    },
    // AppBar with backdrop blur
    MuiAppBar: {
      styleOverrides: {
        root: {
          backdropFilter: 'blur(20px) saturate(180%)',
          backgroundColor: 'rgba(255, 255, 255, 0.85)',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        },
      },
    },
  },
});

// Extend the theme with ClipFlow brand tokens
declare module '@mui/material/styles' {
  interface Palette {
    tertiary: Palette['primary'];
    surface: Palette['primary'];
    surfaceVariant: Palette['primary'];
    accent: {
      gradient: string;
      purple: string;
      blue: string;
      teal: string;
      rose: string;
    };
    outline: {
      main: string;
      variant: string;
    };
  }

  interface PaletteOptions {
    tertiary?: PaletteOptions['primary'];
    surface?: PaletteOptions['primary'];
    surfaceVariant?: PaletteOptions['primary'];
    accent?: {
      gradient: string;
      purple: string;
      blue: string;
      teal: string;
      rose: string;
    };
    outline?: {
      main: string;
      variant: string;
    };
  }
}

declare module '@mui/material/AppBar' {
  // eslint-disable-next-line no-unused-vars
  interface AppBarPropsColorOverrides {
    surface: true;
  }
}

export default theme;