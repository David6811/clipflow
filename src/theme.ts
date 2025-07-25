import { createTheme } from '@mui/material/styles';

// Material 3 Design Token Colors
const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#6750A4', // Material 3 primary
      light: '#7F67BE',
      dark: '#53389E',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#625B71', // Material 3 secondary
      light: '#7C7489',
      dark: '#4A4458',
      contrastText: '#FFFFFF',
    },
    tertiary: {
      main: '#7D5260',
      light: '#9A6B79',
      dark: '#633B48',
      contrastText: '#FFFFFF',
    },
    surface: {
      main: '#FEF7FF', // Material 3 surface
      light: '#FFFFFF',
      dark: '#F5EFFF',
      contrastText: '#1D1B20',
    },
    surfaceVariant: {
      main: '#E7E0EC',
      light: '#F4EEFA',
      dark: '#CAC4D0',
      contrastText: '#49454F',
    },
    background: {
      default: '#F6E4E2',
      paper: '#FFFFFF',
    },
    error: {
      main: '#BA1A1A',
      light: '#DE3730',
      dark: '#93000A',
      contrastText: '#FFFFFF',
    },
    outline: {
      main: '#79747E',
      variant: '#CAC4D0',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
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

// Extend the theme with custom Material 3 tokens
declare module '@mui/material/styles' {
  interface Palette {
    tertiary: Palette['primary'];
    surface: Palette['primary'];
    surfaceVariant: Palette['primary'];
    outline: {
      main: string;
      variant: string;
    };
  }

  interface PaletteOptions {
    tertiary?: PaletteOptions['primary'];
    surface?: PaletteOptions['primary'];
    surfaceVariant?: PaletteOptions['primary'];
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