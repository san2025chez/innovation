import React from 'react';
import { IconButton, Tooltip, useTheme, useMediaQuery } from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme as useCustomTheme } from '../context/ThemeContext';

const ThemeToggle = () => {
  const { darkMode, toggleTheme } = useCustomTheme();
  const muiTheme = useTheme();
  const isMobile = useMediaQuery(muiTheme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(muiTheme.breakpoints.down('md'));

  const iconVariants = {
    initial: { scale: 0, rotate: -180 },
    animate: { 
      scale: 1, 
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15
      }
    },
    exit: { 
      scale: 0, 
      rotate: 180,
      transition: {
        duration: 0.2
      }
    }
  };

  const buttonVariants = {
    hover: {
      scale: 1.1,
      rotate: [0, -10, 10, -10, 0],
      transition: {
        duration: 0.5,
        ease: "easeInOut"
      }
    },
    tap: {
      scale: 0.9
    }
  };

  return (
    <motion.div
      style={{
        position: 'fixed',
        bottom: isMobile ? '20px' : isTablet ? '24px' : '24px',
        right: isMobile ? '20px' : isTablet ? '24px' : '24px',
        zIndex: 9999,
        pointerEvents: 'auto',
      }}
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.5, duration: 0.5 }}
    >
      <Tooltip 
        title={darkMode ? 'Activar Modo Claro' : 'Activar Modo Oscuro'} 
        arrow
        placement={isMobile ? 'top' : 'left'}
        enterTouchDelay={0}
        leaveTouchDelay={300}
      >
        <motion.div
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
        >
          <IconButton
            onClick={toggleTheme}
            aria-label="toggle theme"
            sx={{
              width: isMobile ? 52 : 56,
              height: isMobile ? 52 : 56,
              backgroundColor: darkMode 
                ? 'rgba(255, 0, 255, 0.15)' 
                : 'rgba(91, 33, 182, 0.15)',
              backdropFilter: 'blur(10px)',
              border: `2px solid ${darkMode ? 'rgba(255, 0, 255, 0.4)' : 'rgba(91, 33, 182, 0.4)'}`,
              boxShadow: darkMode
                ? '0 4px 20px rgba(255, 0, 255, 0.4), 0 0 0 1px rgba(255, 0, 255, 0.15)'
                : '0 4px 20px rgba(91, 33, 182, 0.4), 0 0 0 1px rgba(91, 33, 182, 0.15)',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              '&:hover': {
                backgroundColor: darkMode
                  ? 'rgba(255, 0, 255, 0.25)'
                  : 'rgba(91, 33, 182, 0.25)',
                boxShadow: darkMode
                  ? '0 6px 30px rgba(255, 0, 255, 0.5), 0 0 0 1px rgba(255, 0, 255, 0.25)'
                  : '0 6px 30px rgba(91, 33, 182, 0.5), 0 0 0 1px rgba(91, 33, 182, 0.25)',
                transform: 'scale(1.05)',
              },
              '&:active': {
                transform: 'scale(0.95)',
              },
            }}
          >
            <AnimatePresence mode="wait">
              {darkMode ? (
                <motion.div
                  key="sun"
                  variants={iconVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  <Brightness7 
                    sx={{ 
                      fontSize: isMobile ? 30 : 32,
                      color: '#FF6F30',
                      filter: 'drop-shadow(0 0 8px rgba(255, 111, 48, 0.6))',
                    }} 
                  />
                </motion.div>
              ) : (
                <motion.div
                  key="moon"
                  variants={iconVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  <Brightness4 
                    sx={{ 
                      fontSize: isMobile ? 30 : 32,
                      color: muiTheme.palette.primary.main,
                      filter: 'drop-shadow(0 0 8px rgba(91, 33, 182, 0.6))',
                    }} 
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </IconButton>
        </motion.div>
      </Tooltip>
    </motion.div>
  );
};

export default ThemeToggle;
