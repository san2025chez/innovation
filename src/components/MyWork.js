import React, { useEffect, useState } from 'react';
import { makeStyles, Grid, Typography, Dialog, DialogContent, IconButton, useTheme, useMediaQuery, Box } from '@material-ui/core';
import ProjectCard from './ProjectCard';
import mockData from '../mock/mockData';
import CloseIcon from '@material-ui/icons/Close';
import LaunchIcon from '@material-ui/icons/Launch';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { SectionTitle } from './common/SectionTitle';
import { useAppTheme } from '../hooks/useAppTheme';

const MyWork = ({ title, id, dark = false }) => {
  const appTheme = useAppTheme();
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  useEffect(() => {
    return () => {
      // Cleanup: evitar que el body quede bloqueado si el componente se desmonta
      document.body.style.overflow = '';
    };
  }, []);

  const handleOpen = (project) => {
    setSelectedProject(project);
    setOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedProject(null);
    document.body.style.overflow = '';
  };

  // Animaciones mejoradas
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { 
      opacity: 0,
      y: 80,
      scale: 0.8,
      rotateX: -15,
    },
    visible: { 
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.8,
      }
    }
  };

  // Efecto de partículas de fondo
  const particles = Array.from({ length: 20 }, (_, i) => i);

  return (
    <section 
      className={classes.section} 
      id={id}
      style={{
        background: appTheme.colors.gradientBackground,
        color: appTheme.colors.textSecondary,
        transition: 'background 0.3s ease, color 0.3s ease',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Partículas de fondo animadas */}
      <div className={classes.particlesContainer}>
        {particles.map((particle, index) => (
          <motion.div
            key={index}
            className={classes.particle}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0.3, 0.6, 0.3],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Gradiente de fondo animado */}
      <motion.div
        className={classes.animatedGradient}
        animate={{
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      <SectionTitle
        title={title}
        subtitle="Explora mis proyectos y trabajos creativos"
      />

      <motion.div
        ref={ref}
        className={classes.gridContainer}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: "-100px" }}
      >
        <Grid container spacing={isMobile ? 3 : 4}>
          {mockData.map((project, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <motion.div
                variants={cardVariants}
                custom={index}
                whileHover={{
                  scale: 1.05,
                  y: -10,
                  transition: { 
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                    duration: 0.3 
                  }
                }}
                style={{ perspective: '1000px' }}
              >
                <ProjectCard
                  project={project}
                  onOpen={() => handleOpen(project)}
                  isMobile={isMobile}
                  index={index}
                />
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </motion.div>

      {/* Diálogo mejorado */}
      <AnimatePresence>
        {open && (
          <Dialog
            open={open}
            onClose={handleClose}
            fullWidth
            maxWidth="lg"
            disableScrollLock={true}
            className={classes.dialog}
            PaperProps={{
              style: {
                backgroundColor: 'transparent',
                boxShadow: 'none',
                overflow: 'visible',
              }
            }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className={classes.backdrop}
              onClick={handleClose}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 50 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className={classes.dialogPaper}
              style={{
                background: appTheme.darkMode
                  ? 'linear-gradient(135deg, rgba(10, 10, 10, 0.95) 0%, rgba(20, 20, 20, 0.95) 100%)'
                  : 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(250, 250, 255, 0.95) 100%)',
                backdropFilter: 'blur(20px) saturate(180%)',
                border: `1px solid ${appTheme.darkMode ? 'rgba(255, 0, 255, 0.2)' : 'rgba(99, 102, 241, 0.2)'}`,
                boxShadow: appTheme.darkMode
                  ? '0 20px 60px rgba(0, 0, 0, 0.5), 0 0 40px rgba(255, 0, 255, 0.1)'
                  : '0 20px 60px rgba(0, 0, 0, 0.15), 0 0 40px rgba(99, 102, 241, 0.1)',
              }}
            >
              <DialogContent className={classes.dialogContent}>
                <IconButton 
                  className={classes.closeButton}
                  onClick={handleClose}
                  aria-label="close"
                  style={{
                    color: appTheme.colors.textPrimary,
                    backgroundColor: appTheme.darkMode
                      ? 'rgba(255, 255, 255, 0.1)'
                      : 'rgba(0, 0, 0, 0.05)',
                  }}
                >
                  <CloseIcon />
                </IconButton>
                
                {selectedProject && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className={classes.projectDetails}
                  >
                    <motion.div 
                      className={classes.imageContainer}
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      <img 
                        src={selectedProject.image} 
                        alt={selectedProject.title}
                        className={classes.dialogImage}
                      />
                      <div 
                        className={classes.imageOverlay}
                        style={{
                          background: appTheme.colors.gradient,
                          opacity: 0.1,
                        }}
                      />
                    </motion.div>
                    
                    <div className={classes.detailsContent}>
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                      >
                        <Typography 
                          variant="h4" 
                          className={classes.dialogTitle}
                          style={{
                            color: appTheme.colors.textPrimary,
                            background: appTheme.colors.gradient,
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                          }}
                        >
                          {selectedProject.title}
                        </Typography>
                      </motion.div>
                      
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                      >
                        <Typography 
                          className={classes.dialogDescription}
                          style={{
                            color: appTheme.colors.textSecondary,
                          }}
                        >
                          {selectedProject.description}
                        </Typography>
                      </motion.div>
                      
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className={classes.techStack}
                      >
                        {selectedProject.technology.split(',').map((tech, index) => (
                          <motion.span
                            key={index}
                            className={classes.techTag}
                            style={{
                              background: appTheme.darkMode
                                ? 'rgba(255, 0, 255, 0.15)'
                                : 'rgba(99, 102, 241, 0.1)',
                              color: appTheme.darkMode
                                ? 'rgb(255, 0, 255)'
                                : appTheme.colors.magenta,
                              border: `1px solid ${appTheme.darkMode ? 'rgba(255, 0, 255, 0.3)' : 'rgba(99, 102, 241, 0.3)'}`,
                            }}
                            whileHover={{ 
                              scale: 1.1,
                              y: -2,
                              boxShadow: appTheme.darkMode
                                ? '0 4px 12px rgba(255, 0, 255, 0.4)'
                                : '0 4px 12px rgba(99, 102, 241, 0.4)',
                            }}
                            whileTap={{ scale: 0.95 }}
                          >
                            {tech.trim()}
                          </motion.span>
                        ))}
                      </motion.div>
                      
                      <motion.a
                        href={selectedProject.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={classes.projectLink}
                        style={{
                          background: appTheme.colors.gradient,
                          boxShadow: appTheme.darkMode
                            ? '0 4px 15px rgba(255, 0, 255, 0.3)'
                            : '0 4px 15px rgba(99, 102, 241, 0.3)',
                        }}
                        whileHover={{ 
                          scale: 1.05,
                          boxShadow: appTheme.darkMode
                            ? '0 6px 20px rgba(255, 0, 255, 0.4)'
                            : '0 6px 20px rgba(99, 102, 241, 0.4)',
                        }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <LaunchIcon style={{ marginRight: '8px', fontSize: '1.2rem' }} />
                        Ver Proyecto
                      </motion.a>
                    </div>
                  </motion.div>
                )}
              </DialogContent>
            </motion.div>
          </Dialog>
        )}
      </AnimatePresence>
    </section>
  );
};

const useStyles = makeStyles((theme) => ({
  section: {
    minHeight: '100vh',
    padding: theme.spacing(10, 6),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
    overflow: 'hidden',
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(8, 4),
    },
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(6, 3),
    },
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(4, 2.5),
    },
    '@media (max-height: 667px)': {
      padding: theme.spacing(4, 2.5),
      minHeight: 'auto',
    },
  },
  particlesContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    pointerEvents: 'none',
    zIndex: 0,
    overflow: 'hidden',
  },
  particle: {
    position: 'absolute',
    width: '4px',
    height: '4px',
    borderRadius: '50%',
    background: 'linear-gradient(135deg, #6366F1, #06B6D4)',
    pointerEvents: 'none',
    [theme.breakpoints.down('sm')]: {
      width: '3px',
      height: '3px',
    },
  },
  animatedGradient: {
    position: 'absolute',
    top: '-50%',
    left: '-50%',
    width: '200%',
    height: '200%',
    background: 'radial-gradient(circle, rgba(99, 102, 241, 0.05) 0%, transparent 70%)',
    backgroundSize: '200% 200%',
    pointerEvents: 'none',
    zIndex: 0,
  },
  gridContainer: {
    width: '100%',
    maxWidth: '1400px',
    margin: '0 auto',
    position: 'relative',
    zIndex: 1,
    padding: theme.spacing(0, 2),
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(0, 1.5),
    },
    [theme.breakpoints.down('sm')]: {
      maxWidth: '100%',
      padding: theme.spacing(0, 1),
    },
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(0, 0.5),
    },
  },
  dialog: {
    '& .MuiDialog-container': {
      backdropFilter: 'blur(10px)',
    },
  },
  backdrop: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    backdropFilter: 'blur(8px)',
    zIndex: 1300,
  },
  dialogPaper: {
    position: 'relative',
    borderRadius: '24px',
    overflow: 'hidden',
    maxWidth: '900px',
    width: '95%',
    maxHeight: '90vh',
    margin: 'auto',
    zIndex: 1301,
    [theme.breakpoints.down('sm')]: {
      width: '95%',
      maxHeight: '95vh',
      borderRadius: '20px',
    },
    [theme.breakpoints.down('xs')]: {
      width: '98%',
      borderRadius: '16px',
    },
  },
  dialogContent: {
    padding: theme.spacing(4),
    fontFamily: 'Space Grotesk, sans-serif',
    position: 'relative',
    overflowY: 'auto',
    maxHeight: '90vh',
    '&::-webkit-scrollbar': {
      width: '8px',
    },
    '&::-webkit-scrollbar-track': {
      background: 'transparent',
    },
    '&::-webkit-scrollbar-thumb': {
      background: 'rgba(99, 102, 241, 0.3)',
      borderRadius: '4px',
      '&:hover': {
        background: 'rgba(99, 102, 241, 0.5)',
      },
    },
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(3),
      maxHeight: '95vh',
    },
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(2),
    },
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(2),
    top: theme.spacing(2),
    zIndex: 10,
    width: '40px',
    height: '40px',
    transition: 'all 0.3s ease',
    '&:hover': {
      transform: 'rotate(90deg) scale(1.1)',
      backgroundColor: 'rgba(255, 0, 0, 0.1)',
    },
    [theme.breakpoints.down('xs')]: {
      right: theme.spacing(1),
      top: theme.spacing(1),
      width: '36px',
      height: '36px',
    },
  },
  projectDetails: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    gap: theme.spacing(4),
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
      alignItems: 'flex-start',
    },
    [theme.breakpoints.down('sm')]: {
      gap: theme.spacing(3),
    },
  },
  imageContainer: {
    width: '100%',
    position: 'relative',
    borderRadius: '16px',
    overflow: 'hidden',
    aspectRatio: '16/9',
    [theme.breakpoints.up('md')]: {
      width: '50%',
      flexShrink: 0,
    },
    [theme.breakpoints.down('sm')]: {
      borderRadius: '12px',
    },
  },
  dialogImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    display: 'block',
    borderRadius: '16px',
    [theme.breakpoints.down('sm')]: {
      borderRadius: '12px',
    },
  },
  imageOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    pointerEvents: 'none',
    borderRadius: '16px',
    [theme.breakpoints.down('sm')]: {
      borderRadius: '12px',
    },
  },
  detailsContent: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    gap: theme.spacing(2.5),
    [theme.breakpoints.up('md')]: {
      paddingLeft: theme.spacing(3),
    },
    [theme.breakpoints.down('sm')]: {
      gap: theme.spacing(2),
    },
  },
  dialogTitle: {
    fontSize: 'clamp(1.5rem, 4vw, 2rem)',
    fontWeight: 700,
    marginBottom: theme.spacing(2),
    lineHeight: 1.2,
    fontFamily: 'Space Grotesk, sans-serif',
    [theme.breakpoints.down('sm')]: {
      fontSize: 'clamp(1.3rem, 5vw, 1.8rem)',
      marginBottom: theme.spacing(1.5),
    },
  },
  dialogDescription: {
    fontSize: 'clamp(0.95rem, 2.5vw, 1.1rem)',
    lineHeight: 1.7,
    fontWeight: 300,
    fontFamily: 'Space Grotesk, sans-serif',
    [theme.breakpoints.down('sm')]: {
      fontSize: 'clamp(0.9rem, 3vw, 1rem)',
      lineHeight: 1.6,
    },
  },
  techStack: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: theme.spacing(1),
    marginTop: theme.spacing(1),
    [theme.breakpoints.down('sm')]: {
      gap: theme.spacing(0.75),
    },
  },
  techTag: {
    fontSize: 'clamp(0.75rem, 2vw, 0.85rem)',
    padding: `${theme.spacing(0.75)}px ${theme.spacing(1.5)}px`,
    borderRadius: '20px',
    fontWeight: 500,
    fontFamily: 'Space Grotesk, sans-serif',
    transition: 'all 0.3s ease',
    cursor: 'default',
    backdropFilter: 'blur(10px)',
    [theme.breakpoints.down('sm')]: {
      fontSize: 'clamp(0.7rem, 2vw, 0.8rem)',
      padding: `${theme.spacing(0.5)}px ${theme.spacing(1.25)}px`,
    },
  },
  projectLink: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#FFFFFF',
    fontSize: 'clamp(0.9rem, 2.5vw, 1rem)',
    fontWeight: 600,
    padding: `${theme.spacing(1.25)} ${theme.spacing(3)}`,
    borderRadius: '12px',
    textDecoration: 'none',
    fontFamily: 'Space Grotesk, sans-serif',
    transition: 'all 0.3s ease',
    marginTop: theme.spacing(1),
    width: 'fit-content',
    [theme.breakpoints.down('sm')]: {
      padding: `${theme.spacing(1)} ${theme.spacing(2.5)}`,
      fontSize: 'clamp(0.85rem, 3vw, 0.95rem)',
    },
  },
}));

export default MyWork;
