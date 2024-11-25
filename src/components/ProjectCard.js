import React, { useState } from 'react';
import { makeStyles, Card, CardMedia, Typography, IconButton } from '@material-ui/core';
import { motion } from 'framer-motion';
import InfoIcon from '@material-ui/icons/Info';

const ProjectCard = ({ title, description, image, onOpen , inView}) => {
  const classes = useStyles();
  const [hover, setHover] = useState(false);

  return (
    <motion.div whileHover={{ scale: 1.05 }}>
      <Card className={classes.card}>
        <CardMedia
          component="img"
          image={image}
          className={classes.caratula}
          title={title}
        />
<div className={classes.cardContent}>
          <div className={classes.infoContainer}>
            <Typography variant="h6" className={classes.title}>
              {title}
            </Typography>
            <IconButton className={classes.infoIcon} onClick={onOpen}>
              <InfoIcon />
            </IconButton>
          </div>
          <Typography className={classes.description}>
            {description}
          </Typography>
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
    minHeight: '200px',
    alignItems: 'center',
    overflow: 'hidden',
    transition: 'all 0.3s ease-in-out',
    cursor: 'pointer',
    backgroundColor: '#121212', // Darker background for a modern feel
    color: '#FFFFFF', // White text for better contrast
    height: 300, // Set a fixed height
    borderRadius: 10,
    justifyContent: 'space-between',
  },
  cardContent: {
    padding: theme.spacing(2),
  },
  caratula: {
    width: '100%',
    height: '200px', // Adjust height as needed
    objectFit: 'cover', // Ensure image covers the entire area
  },
  overlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: '100%', // Full height for a more immersive overlay
    /*     background: 'rgba(0, 0, 0, 0.7)', */
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'opacity 0.3s ease-in-out',
    padding: theme.spacing(2),
    boxSizing: 'border-box',
    flexGrow: 1,
  },
  infoContainer: {
    display: 'flex',
    alignItems: 'center', // Center title and infoIcon vertically
    marginBottom: theme.spacing(1), // Add spacing between title and description
  },
  title: {
    fontWeight: 'bold',
    fontSize: '1.2rem',
    color: '#FFFFFF',
  },
  infoIcon: {
    marginLeft: theme.spacing(1), // Add spacing between title and infoIcon
    color: '#007ACC',
  },
  description: {
    fontSize: '0.9rem',
    marginTop: theme.spacing(1),
    color: '#E0E0E0',
    textAlign: 'justify',
    hyphens: 'auto',
  },
}));

export default ProjectCard;