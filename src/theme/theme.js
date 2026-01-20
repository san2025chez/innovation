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

// Tema Claro - Diseño ultra moderno, tecnológico e innovador
// Paleta inspirada en interfaces de vanguardia: transmite innovación, tecnología avanzada y elegancia
// Combinación de azul índigo cibernético + cyan eléctrico para un look futurista y limpio
export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#6366F1', // Índigo cibernético - tecnología avanzada y confianza
      light: '#818CF8', // Índigo claro para hover states
      dark: '#4F46E5', // Índigo profundo para elementos activos
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#06B6D4', // Cyan eléctrico - innovación y modernidad
      light: '#22D3EE', // Cyan brillante para acentos
      dark: '#0891B2', // Cyan profundo para profundidad
      contrastText: '#FFFFFF',
    },
    background: {
      default: '#FAFBFC', // Blanco casi puro con toque de gris - limpio y espacioso
      paper: '#FFFFFF', // Blanco puro para cards y elementos elevados
    },
    text: {
      primary: '#111827', // Gris carbón profundo - máximo contraste y legibilidad
      secondary: '#6B7280', // Gris medio elegante - excelente para texto secundario
    },
    // Colores personalizados optimizados para UX moderna y tecnológica
    custom: {
      // Gradiente principal: Índigo a Cyan - transmite tecnología avanzada
      gradient: 'linear-gradient(135deg, #6366F1 0%, #06B6D4 100%)',
      // Gradiente de fondo: Blanco con toques sutiles de índigo y cyan
      gradientBackground: 'linear-gradient(135deg, #FAFBFC 0%, #F3F4F6 50%, #E5E7EB 100%)',
      // Equivalente al magenta en modo claro: Índigo vibrante
      magenta: '#6366F1',
      // Equivalente al naranja en modo claro: Cyan eléctrico
      orange: '#06B6D4',
      // Fondo alterno: Gris muy suave con toque de índigo
      darkBackground: '#F3F4F6',
      // Navbar con blur: Blanco translúcido elegante
      scrolledNavbar: 'rgba(250, 251, 252, 0.95)',
      // Fondo de cards: Gradiente sutil índigo-cyan con opacidad muy baja
      cardBackground: 'linear-gradient(135deg, rgba(99, 102, 241, 0.03) 0%, rgba(6, 182, 212, 0.02) 100%)',
      // Fondo para foto: Gradiente suave que contrasta perfectamente
      photoBackground: 'linear-gradient(135deg, #E5E7EB 0%, #D1D5DB 50%, #F3F4F6 100%)',
      // Colores adicionales para efectos innovadores
      accent1: '#8B5CF6', // Púrpura suave para acentos
      accent2: '#10B981', // Verde esmeralda para elementos destacados
      shadow: 'rgba(99, 102, 241, 0.1)', // Sombra suave con tinte índigo
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
          backgroundColor: '#FAFBFC',
          color: '#111827',
        },
      },
    },
  },
});
