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
  },
  title: {
    color: '#fff',
    fontFamily: 'Space Grotesk, sans-serif',
    fontWeight: 700,
    fontSize: '2.5rem',
    marginBottom: theme.spacing(2),
    background: 'linear-gradient(135deg, rgb(255, 0, 255), #FF6F30)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    [theme.breakpoints.down('sm')]: {
      fontSize: '2rem',
    },
  },
  subtitle: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontFamily: 'Space Grotesk, sans-serif',
    fontSize: '1.1rem',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1rem',
    },
  },
}));

export const SectionTitle = ({ title, subtitle }) => {
  const classes = useStyles();

  return (
    <motion.div
      className={classes.titleContainer}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
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
