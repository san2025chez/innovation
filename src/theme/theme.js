import { createTheme } from '@mui/material/styles';

// Tema Oscuro - Mantiene exactamente los colores actuales del portfolio
export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: 'rgb(255, 0, 255)', // Magenta - color de acento principal
      light: 'rgba(255, 0, 255, 0.7)',
      dark: 'rgba(255, 0, 255, 0.9)',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#FF6F30', // Naranja - color de acento secundario
      light: 'rgba(255, 111, 48, 0.7)',
      dark: 'rgba(255, 111, 48, 0.9)',
      contrastText: '#FFFFFF',
    },
    background: {
      default: '#000000', // Negro puro - fondo principal
      paper: '#0a0a0a', // Negro suave para cards
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#E0E0E0',
    },
    // Colores personalizados para gradientes y efectos
    custom: {
      gradient: 'linear-gradient(135deg, rgb(255, 0, 255), #FF6F30)',
      gradientBackground: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)',
      magenta: 'rgb(255, 0, 255)',
      orange: '#FF6F30',
      darkBackground: '#1a1a1a',
      scrolledNavbar: 'rgba(10, 10, 10, 0.95)',
    },
  },
  typography: {
    fontFamily: 'Space Grotesk, sans-serif',
    h4: {
      fontWeight: 600,
      letterSpacing: '0.5px',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: '#000000',
          color: '#FFFFFF',
        },
      },
    },
  },
});

// Tema Claro - Diseño moderno, tecnológico e innovador
// Paleta optimizada para UX: transmite innovación, responsividad y profesionalismo
// Colores elegidos para crear contraste perfecto con la foto de perfil
export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#5B21B6', // Violeta profundo - transmite innovación y tecnología
      light: '#7C3AED',
      dark: '#4C1D95',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#F59E0B', // Ámbar vibrante - transmite energía y responsividad
      light: '#FBBF24',
      dark: '#D97706',
      contrastText: '#FFFFFF',
    },
    background: {
      default: '#F1F5F9', // Gris azulado suave - fondo principal que contrasta con foto
      paper: '#FFFFFF', // Blanco puro para cards y elementos elevados
    },
    text: {
      primary: '#0F172A', // Casi negro azulado - máximo contraste y legibilidad
      secondary: '#475569', // Gris azulado medio - excelente para texto secundario
    },
    // Colores personalizados optimizados para UX y contraste con foto
    custom: {
      gradient: 'linear-gradient(135deg, #5B21B6, #F59E0B)', // Violeta a ámbar - innovación y energía
      gradientBackground: 'linear-gradient(135deg, #F1F5F9 0%, #E2E8F0 50%, #CBD5E1 100%)', // Gradiente sutil con profundidad
      magenta: '#9333EA', // Violeta vibrante (equivalente al magenta en claro)
      orange: '#F59E0B', // Ámbar (equivalente al naranja en claro)
      darkBackground: '#E2E8F0', // Gris azulado medio para secciones alternas
      scrolledNavbar: 'rgba(241, 245, 249, 0.95)', // Navbar con blur en modo claro
      cardBackground: 'linear-gradient(135deg, rgba(91, 33, 182, 0.05) 0%, rgba(245, 158, 11, 0.05) 100%)', // Fondo sutil para cards
      photoBackground: 'linear-gradient(135deg, #CBD5E1 0%, #94A3B8 100%)', // Fondo que contrasta perfectamente con foto
    },
  },
  typography: {
    fontFamily: 'Space Grotesk, sans-serif',
    h4: {
      fontWeight: 600,
      letterSpacing: '0.5px',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: '#F8FAFC',
          color: '#1E293B',
        },
      },
    },
  },
});
