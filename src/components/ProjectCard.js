import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import { motion } from 'framer-motion';
import { Typography } from '@material-ui/core';
import { useAppTheme } from '../hooks/useAppTheme';
import LaunchIcon from '@material-ui/icons/Launch';

const useStyles = makeStyles((theme) => ({
  card: {
    position: 'relative',
    width: '100%',
    height: 0,
    paddingBottom: '75%', // 4:3 aspect ratio
    borderRadius: '20px',
    overflow: 'hidden',
    backgroundColor: 'transparent',
    cursor: 'pointer',
    perspective: '1000px',
    [theme.breakpoints.down('sm')]: {
      borderRadius: '16px',
      paddingBottom: '70%',
    },
    [theme.breakpoints.down('xs')]: {
      borderRadius: '14px',
      paddingBottom: '65%',
    },
  },
  cardInner: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    transformStyle: 'preserve-3d',
    transition: 'transform 0.6s',
  },
  imageContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    borderRadius: '20px',
    [theme.breakpoints.down('sm')]: {
      borderRadius: '16px',
    },
    [theme.breakpoints.down('xs')]: {
      borderRadius: '14px',
    },
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    padding: theme.spacing(3),
    opacity: 0,
    transition: 'opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.5) 50%, transparent 100%)',
    borderRadius: '20px',
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(2.5),
      borderRadius: '16px',
    },
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(2),
      borderRadius: '14px',
    },
    '&:hover': {
      opacity: 1,
    },
  },
  content: {
    transform: 'translateY(30px)',
    transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    '$overlay:hover &': {
      transform: 'translateY(0)',
    },
  },
  title: {
    color: '#fff',
    fontFamily: 'Space Grotesk, sans-serif',
    fontWeight: 700,
    fontSize: 'clamp(1.1rem, 3vw, 1.4rem)',
    marginBottom: theme.spacing(1.5),
    textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)',
    lineHeight: 1.3,
    [theme.breakpoints.down('sm')]: {
      fontSize: 'clamp(1rem, 4vw, 1.3rem)',
      marginBottom: theme.spacing(1),
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: 'clamp(0.95rem, 4.5vw, 1.2rem)',
    },
  },
  techStack: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: theme.spacing(0.75),
    marginTop: theme.spacing(1),
    [theme.breakpoints.down('sm')]: {
      gap: theme.spacing(0.5),
    },
  },
  tech: {
    padding: `${theme.spacing(0.5)}px ${theme.spacing(1)}px`,
    borderRadius: '12px',
    background: 'rgba(255, 255, 255, 0.15)',
    backdropFilter: 'blur(10px) saturate(180%)',
    color: '#fff',
    fontSize: 'clamp(0.7rem, 2vw, 0.8rem)',
    fontFamily: 'Space Grotesk, sans-serif',
    fontWeight: 500,
    border: '1px solid rgba(255, 255, 255, 0.2)',
    transition: 'all 0.3s ease',
    [theme.breakpoints.down('sm')]: {
      fontSize: 'clamp(0.65rem, 2.5vw, 0.75rem)',
      padding: `${theme.spacing(0.4)}px ${theme.spacing(0.85)}px`,
    },
  },
  cardGlow: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    height: '80%',
    background: 'radial-gradient(circle, rgba(99, 102, 241, 0.3) 0%, transparent 70%)',
    opacity: 0,
    transition: 'opacity 0.4s ease',
    pointerEvents: 'none',
    borderRadius: '50%',
    filter: 'blur(20px)',
    '$card:hover &': {
      opacity: 1,
    },
  },
  borderGlow: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    borderRadius: '20px',
    padding: '2px',
    background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.5), rgba(6, 182, 212, 0.5))',
    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
    WebkitMaskComposite: 'xor',
    maskComposite: 'exclude',
    opacity: 0,
    transition: 'opacity 0.4s ease',
    pointerEvents: 'none',
    [theme.breakpoints.down('sm')]: {
      borderRadius: '16px',
    },
    [theme.breakpoints.down('xs')]: {
      borderRadius: '14px',
    },
    '$card:hover &': {
      opacity: 1,
    },
  },
  shine: {
    position: 'absolute',
    top: 0,
    left: '-100%',
    width: '100%',
    height: '100%',
    background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)',
    transition: 'left 0.6s ease',
    pointerEvents: 'none',
    borderRadius: '20px',
    [theme.breakpoints.down('sm')]: {
      borderRadius: '16px',
    },
    [theme.breakpoints.down('xs')]: {
      borderRadius: '14px',
    },
    '$card:hover &': {
      left: '100%',
    },
  },
  viewButton: {
    position: 'absolute',
    bottom: theme.spacing(2),
    left: '50%',
    transform: 'translateX(-50%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: theme.spacing(0.75),
    padding: `${theme.spacing(0.75)} ${theme.spacing(2)}`,
    borderRadius: '12px',
    background: 'rgba(255, 255, 255, 0.15)',
    backdropFilter: 'blur(10px) saturate(180%)',
    border: '1px solid rgba(255, 255, 255, 0.3)',
    color: '#fff',
    fontSize: 'clamp(0.75rem, 2vw, 0.9rem)',
    fontFamily: 'Space Grotesk, sans-serif',
    fontWeight: 600,
    cursor: 'pointer',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    zIndex: 5,
    textShadow: '0 2px 8px rgba(0, 0, 0, 0.3)',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
    [theme.breakpoints.down('sm')]: {
      bottom: theme.spacing(1.5),
      padding: `${theme.spacing(0.6)} ${theme.spacing(1.75)}`,
      fontSize: 'clamp(0.7rem, 2.5vw, 0.85rem)',
    },
    [theme.breakpoints.down('xs')]: {
      bottom: theme.spacing(1.25),
      padding: `${theme.spacing(0.5)} ${theme.spacing(1.5)}`,
      fontSize: 'clamp(0.65rem, 3vw, 0.8rem)',
    },
    '&:hover': {
      background: 'rgba(255, 255, 255, 0.25)',
      transform: 'translateX(-50%) translateY(-2px)',
      boxShadow: '0 6px 20px rgba(0, 0, 0, 0.3)',
      borderColor: 'rgba(255, 255, 255, 0.5)',
    },
    '&:active': {
      transform: 'translateX(-50%) translateY(0)',
    },
  },
  buttonIcon: {
    fontSize: 'clamp(0.9rem, 2.5vw, 1.1rem)',
    [theme.breakpoints.down('sm')]: {
      fontSize: 'clamp(0.85rem, 3vw, 1rem)',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: 'clamp(0.8rem, 3.5vw, 0.95rem)',
    },
  },
}));

const ProjectCard = ({ project, onOpen, isMobile, index }) => {
  const classes = useStyles();
  const appTheme = useAppTheme();
  const { title, image, technology } = project;
  const [isHovered, setIsHovered] = useState(false);

  const techArray = technology.split(',').map(tech => tech.trim());

  return (
    <motion.div
      className={classes.card}
      onClick={onOpen}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ 
        scale: 1.02,
      }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        delay: index * 0.1,
        duration: 0.6,
        type: "spring",
        stiffness: 100,
      }}
    >
      <div className={classes.cardInner}>
        <div className={classes.imageContainer}>
          <motion.img
            src={image}
            alt={title}
            className={classes.image}
            animate={isHovered ? { scale: 1.15 } : { scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
          <div 
            className={classes.cardGlow}
            style={{
              background: appTheme.darkMode
                ? 'radial-gradient(circle, rgba(255, 0, 255, 0.4) 0%, transparent 70%)'
                : 'radial-gradient(circle, rgba(99, 102, 241, 0.3) 0%, transparent 70%)',
            }}
          />
          <div className={classes.borderGlow} />
          <div className={classes.shine} />
        </div>
        
        {/* Botón "Ver Proyecto" siempre visible */}
        <motion.button
          className={classes.viewButton}
          onClick={(e) => {
            e.stopPropagation();
            onOpen();
          }}
          whileHover={{ 
            scale: 1.05,
            y: -2,
          }}
          whileTap={{ scale: 0.95 }}
          style={{
            background: isHovered 
              ? 'rgba(255, 255, 255, 0.25)' 
              : 'rgba(255, 255, 255, 0.15)',
            borderColor: isHovered 
              ? 'rgba(255, 255, 255, 0.5)' 
              : 'rgba(255, 255, 255, 0.3)',
          }}
        >
          <LaunchIcon className={classes.buttonIcon} />
          <span>Ver Proyecto</span>
        </motion.button>
        
        <motion.div 
          className={classes.overlay}
          initial={false}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.4 }}
        >
          <motion.div 
            className={classes.content}
            animate={{ y: isHovered ? 0 : 30 }}
            transition={{ duration: 0.4 }}
          >
            <Typography variant="h6" className={classes.title}>
              {title}
            </Typography>
            <div className={classes.techStack}>
              {techArray.slice(0, 3).map((tech, techIndex) => (
                <motion.span
                  key={techIndex}
                  className={classes.tech}
                  whileHover={{ 
                    scale: 1.1,
                    y: -2,
                  }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ 
                    opacity: isHovered ? 1 : 0,
                    y: isHovered ? 0 : 10,
                  }}
                  transition={{ 
                    delay: techIndex * 0.1,
                    duration: 0.3,
                  }}
                >
                  {tech}
                </motion.span>
              ))}
              {techArray.length > 3 && (
                <motion.span
                  className={classes.tech}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ 
                    opacity: isHovered ? 1 : 0,
                    y: isHovered ? 0 : 10,
                  }}
                  transition={{ 
                    delay: 0.3,
                    duration: 0.3,
                  }}
                >
                  +{techArray.length - 3}
                </motion.span>
              )}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
