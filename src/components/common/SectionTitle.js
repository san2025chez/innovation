import React from 'react';
import { Typography, makeStyles } from '@material-ui/core';
import { motion } from 'framer-motion';

const useStyles = makeStyles((theme) => ({
  titleContainer: {
    textAlign: 'center',
    marginBottom: theme.spacing(6),
    [theme.breakpoints.down('sm')]: {
      marginBottom: theme.spacing(4),
    },
    '@media (max-height: 667px)': {
      marginBottom: theme.spacing(3),
    },
  },
  title: {
    fontFamily: 'Space Grotesk, sans-serif',
    fontWeight: 700,
    fontSize: 'clamp(1.5rem, 3vw, 2.2rem)',
    marginBottom: theme.spacing(1.5),
    background: 'linear-gradient(135deg, rgb(255, 0, 255), #FF6F30)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    '@media (max-height: 667px)': {
      fontSize: 'clamp(1.3rem, 2.5vw, 1.8rem)',
      marginBottom: theme.spacing(1),
    },
    '@media (max-height: 568px)': {
      fontSize: 'clamp(1.2rem, 2vw, 1.5rem)',
    },
  },
  subtitle: {
    color: '#E0E0E0',
    margin: '0 auto',
    fontSize: '1.25rem',
    maxWidth: '600px',
    textAlign: 'center',
    fontFamily: 'Space Grotesk, sans-serif',
    fontWeight: 300,
    lineHeight: 1.6,
    [theme.breakpoints.down('sm')]: {
      fontSize: 'clamp(0.8rem, 1.8vw, 0.9rem)',
      lineHeight: 1.4,
    },
    '@media (max-height: 667px)': {
      fontSize: 'clamp(0.8rem, 1.8vw, 0.9rem)',
      lineHeight: 1.4,
      maxWidth: '500px',
    },
    '@media (max-height: 568px)': {
      fontSize: 'clamp(0.75rem, 1.6vw, 0.85rem)',
      maxWidth: '450px',
    },
  },
}));

export const SectionTitle = ({ title, subtitle }) => {
  const classes = useStyles();

  return (
    <motion.div
      className={classes.titleContainer}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <Typography variant="h2" className={classes.title}>
        {title}
      </Typography>
      {subtitle && (
        <Typography variant="subtitle1" className={classes.subtitle}>
          {subtitle}
        </Typography>
      )}
    </motion.div>
  );
};
