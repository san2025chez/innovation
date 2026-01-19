import React from 'react';
import { useTheme as useCustomTheme } from '../context/ThemeContext';

/**
 * Hook personalizado para acceder al tema de MUI v5 desde componentes
 * que usan Material-UI v4 makeStyles
 * Asegura re-renderizado cuando cambia el tema usando useMemo
 */
export const useAppTheme = () => {
  const { theme, darkMode } = useCustomTheme();
  
  // Memoizar colores para asegurar actualización cuando cambia el tema
  const colors = React.useMemo(() => ({
    background: theme.palette.background.default,
    paper: theme.palette.background.paper,
    textPrimary: theme.palette.text.primary,
    textSecondary: theme.palette.text.secondary,
    primary: theme.palette.primary.main,
    secondary: theme.palette.secondary.main,
    gradient: theme.palette.custom?.gradient || (darkMode 
      ? 'linear-gradient(135deg, rgb(255, 0, 255), #FF6F30)'
      : 'linear-gradient(135deg, #5B21B6, #F59E0B)'),
    gradientBackground: theme.palette.custom?.gradientBackground || (darkMode
      ? 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)'
      : 'linear-gradient(135deg, #F1F5F9 0%, #E2E8F0 50%, #CBD5E1 100%)'),
    magenta: theme.palette.custom?.magenta || (darkMode ? 'rgb(255, 0, 255)' : '#9333EA'),
    orange: theme.palette.custom?.orange || (darkMode ? '#FF6F30' : '#F59E0B'),
  }), [theme, darkMode]);
  
  return {
    theme,
    darkMode,
    colors,
  };
};
