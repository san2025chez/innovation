import React from 'react';
import { makeStyles } from '@material-ui/core';
import { motion } from 'framer-motion';
import { Typography, List, ListItem, ListItemText } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  card: {
    backgroundColor: 'transparent',
    backdropFilter: 'blur(8px)',
    background: 'linear-gradient(135deg, rgba(30, 42, 56, 0.4) 0%, rgba(30, 42, 56, 0.1) 100%)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '15px',
    padding: theme.spacing(3),
    height: '100%',
    transition: 'all 0.3s ease-in-out',
    '&:hover': {
      background: 'linear-gradient(135deg, rgba(255, 0, 255, 0.1) 0%, rgba(255, 111, 48, 0.1) 100%)',
      transform: 'translateY(-5px)',
      boxShadow: '0 10px 20px rgba(255, 0, 255, 0.1)',
    },
  },
  category: {
    color: '#FFFFFF',
    fontSize: props => props.isMobile ? '1.2rem' : '1.4rem',
    fontFamily: 'Space Grotesk, sans-serif',
    fontWeight: 600,
    marginBottom: theme.spacing(2),
    background: 'linear-gradient(135deg, rgb(255, 0, 255), #FF6F30)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  icon: {
    fontSize: '2rem',
    marginBottom: theme.spacing(2),
  },
  listItem: {
    padding: theme.spacing(0.5, 0),
  },
  itemText: {
    color: 'rgba(255, 255, 255, 0.8)',
    fontFamily: 'Space Grotesk, sans-serif',
    fontSize: props => props.isMobile ? '0.9rem' : '1rem',
    transition: 'color 0.3s ease',
    '&:hover': {
      color: '#FF6F30',
    },
  },
}));

export const SkillCard = ({ skill, isMobile }) => {
  const classes = useStyles({ isMobile });
  const { category, items, icon } = skill;

  const listVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.div
      className={classes.card}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className={classes.icon}>{icon}</div>
      <Typography variant="h6" className={classes.category}>
        {category}
      </Typography>
      <List component={motion.ul} variants={listVariants}>
        {items.map((item, index) => (
          <ListItem key={index} className={classes.listItem} disableGutters>
            <motion.div variants={itemVariants}>
              <ListItemText
                primary={item}
                classes={{ primary: classes.itemText }}
              />
            </motion.div>
          </ListItem>
        ))}
      </List>
    </motion.div>
  );
};
