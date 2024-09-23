// ProjectCard.js
import React, { useState } from 'react';
import { makeStyles, Card, CardMedia, Typography, IconButton } from '@material-ui/core';
import { motion } from 'framer-motion';
import InfoIcon from '@material-ui/icons/Info';

const ProjectCard = ({ title, description, image, onOpen }) => {
  const classes = useStyles();
  const [hover, setHover] = useState(false);

  return (
    <motion.div whileHover={{ scale: 1.05 }}>
      <Card
        className={classes.card}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onClick={onOpen}
      >
        <CardMedia
          component="img"
          image={image}
          className={classes.caratula}
          title={title}
        />
        {hover && (
          <div className={classes.overlay}>
            <Typography variant="h6" className={classes.title}>
              {title}
            </Typography>
            <Typography className={classes.description}>
              {description}
            </Typography>
          </div>
        )}
        <div className={classes.infoIconContainer}>
          <IconButton className={classes.infoIcon} onClick={onOpen}>
            <InfoIcon />
          </IconButton>
        </div>
      </Card>
    </motion.div>
  );
};

const useStyles = makeStyles((theme) => ({
  card: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    overflow: 'hidden',
    transition: 'all 0.3s ease-in-out',
    cursor: 'pointer',
    '&:hover': {
      boxShadow: '0 6px 12px rgba(0, 0, 0, 0.3)',
    },
  },
  caratula: {
    width: '100%',
    height: 'auto',
  },
  overlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: '30%',
    background: 'rgba(0, 0, 0, 0.7)',
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'opacity 0.3s ease-in-out',
    padding: theme.spacing(2),
    boxSizing: 'border-box',
  },
  title: {
    fontWeight: 'bold',
    fontSize: '1.2rem',
  },
  description: {
    fontSize: '0.9rem',
    marginTop: theme.spacing(1),
  },
  infoIconContainer: {
    position: 'absolute',
    bottom: theme.spacing(1),
    right: theme.spacing(1),
  },
  infoIcon: {
    color: '#FFFFFF',
  },
}));

export default ProjectCard;
