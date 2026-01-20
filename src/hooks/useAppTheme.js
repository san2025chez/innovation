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
      : 'linear-gradient(135deg, #6366F1 0%, #06B6D4 100%)'),
    gradientBackground: theme.palette.custom?.gradientBackground || (darkMode
      ? 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)'
      : 'linear-gradient(135deg, #FAFBFC 0%, #F3F4F6 50%, #E5E7EB 100%)'),
    magenta: theme.palette.custom?.magenta || (darkMode ? 'rgb(255, 0, 255)' : '#6366F1'),
    orange: theme.palette.custom?.orange || (darkMode ? '#FF6F30' : '#06B6D4'),
    accent1: theme.palette.custom?.accent1 || (darkMode ? 'rgb(255, 0, 255)' : '#8B5CF6'),
    accent2: theme.palette.custom?.accent2 || (darkMode ? '#FF6F30' : '#10B981'),
    shadow: theme.palette.custom?.shadow || (darkMode ? 'rgba(255, 0, 255, 0.2)' : 'rgba(99, 102, 241, 0.1)'),
    cardBackground: theme.palette.custom?.cardBackground || (darkMode 
      ? 'rgba(10, 10, 10, 0.8)'
      : 'linear-gradient(135deg, rgba(99, 102, 241, 0.03) 0%, rgba(6, 182, 212, 0.02) 100%)'),
    photoBackground: theme.palette.custom?.photoBackground || (darkMode
      ? 'linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%)'
      : 'linear-gradient(135deg, #E5E7EB 0%, #D1D5DB 50%, #F3F4F6 100%)'),
    scrolledNavbar: theme.palette.custom?.scrolledNavbar || (darkMode
      ? 'rgba(10, 10, 10, 0.95)'
      : 'rgba(250, 251, 252, 0.95)'),
  }), [theme, darkMode]);
  
  return {
    theme,
    darkMode,
    colors,
  };
};
