import { createTheme } from '@mui/material/styles';

// ClipFlow Enterprise Brand Colors
const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#544342', // Primary Text - Warm brown, professional, reliable
      light: '#6E5D5C',
      dark: '#3E312F',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#2E5984', // Accent Blue - Trust, technology
      light: '#4A7AA8',
      dark: '#1E3A5F',
      contrastText: '#FFFFFF',
    },
    tertiary: {
      main: '#8f4942', // Accent Brown - Innovation, craft
      light: '#A86D67',
      dark: '#6B342E',
      contrastText: '#FFFFFF',
    },
    surface: {
      main: '#FFF8F7', // Surface - Cream white, clean, premium
      light: '#FFFFFF',
      dark: '#F6E4E2',
      contrastText: '#231918',
    },
    surfaceVariant: {
      main: '#F6E4E2', // Primary - Warm off-white, sophisticated
      light: '#FFF8F7',
      dark: '#E8D1CE',
      contrastText: '#544342',
    },
    background: {
      default: '#F6E4E2', // Primary background
      paper: '#FFF8F7', // Surface background
    },
    text: {
      primary: '#231918', // Surface Text - Dark brown, strong readability
      secondary: '#544342', // Primary Text - Warm brown
    },
    error: {
      main: '#DC2626',
      light: '#F87171',
      dark: '#991B1B',
      contrastText: '#FFFFFF',
    },
    // Custom ClipFlow colors
    accent: {
      gold: '#6E5E0F', // Muted gold - Intelligence, precision
      blue: '#2E5984', // Professional blue
      brown: '#8f4942', // Warm terracotta
    },
    outline: {
      main: '#544342',
      variant: '#D1C7C6',
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
    borderRadius: 12, // Material 3 uses more rounded corners
  },
  components: {
    // Material 3 Button styles
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: '20px',
          paddingTop: '10px',
          paddingBottom: '10px',
          paddingLeft: '24px',
          paddingRight: '24px',
          fontSize: '0.875rem',
          fontWeight: 500,
          letterSpacing: '0.1px',
        },
        contained: {
          boxShadow: 'none',
          '&:hover': {
            boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)',
          },
        },
      },
    },
    // Material 3 Card styles
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '12px',
          boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)',
        },
      },
    },
    // Material 3 Paper styles
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: '12px',
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
      gold: string;
      blue: string;
      brown: string;
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
      gold: string;
      blue: string;
      brown: string;
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