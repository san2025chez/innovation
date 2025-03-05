import React from 'react';
import { makeStyles } from '@material-ui/core';
import { motion } from 'framer-motion';
import { CardMedia, Typography, Box } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  card: {
    backgroundColor: 'transparent',
    backdropFilter: 'blur(8px)',
    background: 'linear-gradient(135deg, rgba(30, 42, 56, 0.4) 0%, rgba(30, 42, 56, 0.1) 100%)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '15px',
    padding: theme.spacing(3),
    transition: 'all 0.3s ease-in-out',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: props => props.isMobile ? '160px' : '200px',
    '&:hover': {
      background: 'linear-gradient(135deg, rgba(255, 0, 255, 0.1) 0%, rgba(255, 111, 48, 0.1) 100%)',
      transform: 'translateY(-5px)',
      boxShadow: '0 10px 20px rgba(255, 0, 255, 0.1)',
    },
  },
  imageContainer: {
    width: '100%',
    height: props => props.isMobile ? '60px' : '80px',
    position: 'relative',
    marginBottom: theme.spacing(2),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
    filter: 'brightness(0.9) contrast(1.1)',
    transition: 'all 0.3s ease',
    '&:hover': {
      filter: 'brightness(1.2) contrast(1.2)',
    },
  },
  name: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: '#FFFFFF',
    fontSize: props => props.isMobile ? '0.9rem' : '1rem',
    lineHeight: '1.8',
    fontFamily: 'Space Grotesk, sans-serif',
    fontWeight: 500,
    marginTop: theme.spacing(1),
    background: 'linear-gradient(135deg, rgb(255, 0, 255), #FF6F30)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    opacity: 0.9,
    transition: 'opacity 0.3s ease',
    '&:hover': {
      opacity: 1,
    },
  },
  glow: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '100%',
    height: '100%',
    background: 'radial-gradient(circle, rgba(255, 0, 255, 0.1) 0%, transparent 70%)',
    opacity: 0,
    transition: 'opacity 0.3s ease',
    '$card:hover &': {
      opacity: 1,
    },
  },
}));

export const TechnologyCard = ({ technology, isMobile }) => {
  const classes = useStyles({ isMobile });
  const { img, name } = technology;

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className={classes.card}>
        <motion.div 
          className={classes.imageContainer}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3, type: "spring" }}
        >
          <div className={classes.glow} />
          <motion.img
            src={img}
            alt={name}
            className={classes.image}
            whileHover={{ rotate: 360 }}
            transition={{ duration: 1, type: "spring" }}
          />
        </motion.div>
        <Typography variant="body2" className={classes.name}>
          {name}
        </Typography>
      </div>
    </motion.div>
  );
};
