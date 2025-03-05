import React from 'react';
import { makeStyles } from '@material-ui/core';
import { motion } from 'framer-motion';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  card: {
    position: 'relative',
    width: '100%',
    height: 0,
    paddingBottom: '75%', // 4:3 aspect ratio
    borderRadius: '15px',
    overflow: 'hidden',
    backgroundColor: 'transparent',
    cursor: 'pointer',
  },
  imageContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.5s ease',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.2) 100%)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    padding: theme.spacing(3),
    opacity: 0,
    transition: 'opacity 0.3s ease',
    '&:hover': {
      opacity: 1,
    },
  },
  content: {
    transform: 'translateY(20px)',
    transition: 'transform 0.3s ease',
    '$overlay:hover &': {
      transform: 'translateY(0)',
    },
  },
  title: {
    color: '#fff',
    fontFamily: 'Space Grotesk, sans-serif',
    fontWeight: 600,
    fontSize: '1.25rem',
    marginBottom: theme.spacing(1),
    background: 'linear-gradient(135deg, rgb(255, 0, 255), #FF6F30)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  techStack: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: theme.spacing(0.5),
    marginTop: theme.spacing(1),
  },
  tech: {
    padding: theme.spacing(0.5, 1),
    borderRadius: '15px',
    background: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(5px)',
    color: '#fff',
    fontSize: '0.8rem',
    fontFamily: 'Space Grotesk, sans-serif',
  },
  cardGlow: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'radial-gradient(circle at 50% 50%, rgba(255, 0, 255, 0.2), transparent 70%)',
    opacity: 0,
    transition: 'opacity 0.3s ease',
    pointerEvents: 'none',
    '$card:hover &': {
      opacity: 1,
    },
  },
}));

const ProjectCard = ({ project, onOpen, isMobile }) => {
  const classes = useStyles();
  const { title, image, technology } = project;

  const techArray = technology.split(',').map(tech => tech.trim());

  return (
    <motion.div
      className={classes.card}
      onClick={onOpen}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className={classes.imageContainer}>
        <motion.img
          src={image}
          alt={title}
          className={classes.image}
          whileHover={{ scale: 1.1 }}
        />
        <div className={classes.cardGlow} />
      </div>
      <motion.div 
        className={classes.overlay}
        initial={false}
        whileHover={{ opacity: 1 }}
      >
        <div className={classes.content}>
          <Typography variant="h6" className={classes.title}>
            {title}
          </Typography>
          <div className={classes.techStack}>
            {techArray.slice(0, 3).map((tech, index) => (
              <motion.span
                key={index}
                className={classes.tech}
                whileHover={{ scale: 1.1 }}
              >
                {tech}
              </motion.span>
            ))}
            {techArray.length > 3 && (
              <span className={classes.tech}>+{techArray.length - 3}</span>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;