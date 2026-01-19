import React, { createContext, useState, useEffect, useMemo } from 'react';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { lightTheme, darkTheme } from '../theme/theme';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(() => {
    // Verificar preferencia guardada o usar preferencia del sistema
    const savedTheme = localStorage.getItem('darkMode');
    if (savedTheme !== null) {
      return JSON.parse(savedTheme);
    }
    // Por defecto, usar modo oscuro (tema actual del portfolio)
    return true;
  });

  useEffect(() => {
    // Guardar preferencia del tema
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(prevMode => {
      const newMode = !prevMode;
      // Forzar actualización inmediata del DOM
      if (typeof window !== 'undefined') {
        document.documentElement.setAttribute('data-theme', newMode ? 'dark' : 'light');
      }
      return newMode;
    });
  };

  const theme = useMemo(() => (darkMode ? darkTheme : lightTheme), [darkMode]);

  // Actualizar atributo del DOM cuando cambia el tema
  useEffect(() => {
    if (typeof window !== 'undefined') {
      document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light');
    }
  }, [darkMode]);

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme, theme }}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = React.useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
