import React from 'react';
import { makeStyles } from '@material-ui/core';
import { motion } from 'framer-motion';
import { CardMedia, Typography, Box } from '@material-ui/core';
import { useAppTheme } from '../hooks/useAppTheme';

const useStyles = makeStyles((theme) => ({
  card: {
    backgroundColor: 'transparent',
    backdropFilter: 'blur(8px)',
    borderRadius: '12px',
    padding: theme.spacing(2),
    transition: 'all 0.3s ease-in-out',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    aspectRatio: '1',
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(3),
    },
  },
  imageContainer: {
    width: '60%',
    aspectRatio: '1',
    position: 'relative',
    marginBottom: theme.spacing(1),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.up('md')]: {
      width: '58%',
      maxWidth: 115,
      marginBottom: theme.spacing(2),
    },
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
    filter: 'brightness(0.9) contrast(1.1)',
    transition: 'all 0.3s ease',
    [theme.breakpoints.up('md')]: {
      maxHeight: 95,
    },
    '&:hover': {
      filter: 'brightness(1.2) contrast(1.2)',
    },
  },
  glow: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '100%',
    height: '100%',
    opacity: 0,
    transition: 'opacity 0.3s ease',
    '$card:hover &': {
      opacity: 1,
    },
  },
  name: {
    textAlign: 'center',
    fontSize: '0.875rem',
    lineHeight: '1.2',
    fontFamily: 'Space Grotesk, sans-serif',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    maxWidth: '100%',
    marginTop: 'auto',
    [theme.breakpoints.up('md')]: {
      fontSize: '1rem',
    },
  },
}));

export const TechnologyCard = ({ technology, isMobile }) => {
  const appTheme = useAppTheme();
  const classes = useStyles({ isMobile });
  const { img, name } = technology;

  // Efectos innovadores: movimiento flotante y rotación 3D
  const floatAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  const rotate3D = {
    rotateX: [0, 15, 0, -15, 0],
    rotateY: [0, 15, 0, -15, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ 
        scale: 1.08,
        z: 50,
      }}
      whileTap={{ scale: 0.95 }}
      transition={{ 
        type: "spring",
        stiffness: 300,
        damping: 20
      }}
    >
      <motion.div 
        className={classes.card}
        style={{
          background: appTheme.darkMode
            ? 'linear-gradient(135deg, rgba(30, 42, 56, 0.4) 0%, rgba(30, 42, 56, 0.1) 100%)'
            : 'linear-gradient(135deg, rgba(91, 33, 182, 0.08) 0%, rgba(245, 158, 11, 0.08) 100%)',
          border: `1px solid ${appTheme.darkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(91, 33, 182, 0.2)'}`,
          transition: 'all 0.3s ease-in-out',
        }}
        whileHover={{
          background: appTheme.darkMode
            ? 'linear-gradient(135deg, rgba(255, 0, 255, 0.15) 0%, rgba(255, 111, 48, 0.15) 100%)'
            : 'linear-gradient(135deg, rgba(91, 33, 182, 0.2) 0%, rgba(245, 158, 11, 0.2) 100%)',
          y: -8,
          boxShadow: appTheme.darkMode
            ? '0 15px 30px rgba(255, 0, 255, 0.2), 0 0 40px rgba(255, 111, 48, 0.1)'
            : '0 15px 30px rgba(91, 33, 182, 0.2), 0 0 40px rgba(245, 158, 11, 0.1)',
          border: `1px solid ${appTheme.darkMode ? 'rgba(255, 0, 255, 0.4)' : 'rgba(91, 33, 182, 0.4)'}`,
        }}
        animate={floatAnimation}
      >
        <motion.div 
          className={classes.imageContainer}
          whileHover={{ 
            scale: 1.15,
            rotateZ: [0, 5, -5, 5, 0],
          }}
          animate={rotate3D}
          transition={{ 
            duration: 0.4,
            type: "spring",
            stiffness: 200
          }}
        >
          <motion.div 
            className={classes.glow}
            style={{
              background: appTheme.darkMode
                ? 'radial-gradient(circle, rgba(255, 0, 255, 0.2) 0%, transparent 70%)'
                : 'radial-gradient(circle, rgba(91, 33, 182, 0.2) 0%, transparent 70%)',
            }}
            animate={{
              opacity: [0.3, 0.7, 0.3],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.img
            src={img}
            alt={name}
            className={classes.image}
            whileHover={{ 
              rotate: 360,
              scale: 1.1,
            }}
            animate={{
              y: [0, -5, 0],
            }}
            transition={{ 
              rotate: { duration: 0.8, type: "spring" },
              y: { duration: 2, repeat: Infinity, ease: "easeInOut" }
            }}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <Typography 
            variant="body2" 
            className={classes.name}
            style={{
              color: appTheme.colors.textPrimary,
              transition: 'color 0.3s ease',
            }}
          >
            {name}
          </Typography>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
