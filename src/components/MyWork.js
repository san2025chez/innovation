import React, { useState } from 'react';
import { makeStyles, Grid, Typography, Dialog, DialogContent, IconButton, useTheme, useMediaQuery } from '@material-ui/core';
import ProjectCard from './ProjectCard';
import mockData from '../mock/mockData';
import CloseIcon from '@material-ui/icons/Close';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const MyWork = ({ title, id, dark = false }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  const handleOpen = (project) => {
    setSelectedProject(project);
    setOpen(true);
    // Prevenir scroll en el body cuando el diálogo está abierto
    document.body.style.overflow = 'hidden';
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedProject(null);
    // Restaurar scroll en el body cuando el diálogo se cierra
    document.body.style.overflow = 'unset';
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { 
      opacity: 0,
      y: 50,
      scale: 0.95
    },
    visible: { 
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        duration: 0.6
      }
    }
  };

  return (
    <section className={classes.section} id={id}>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className={classes.titleContainer}
      >
        <Typography variant="h2" className={classes.title}>
          {title}
        </Typography>
        <Typography variant="subtitle1" className={classes.subtitle}>
          Explora mis proyectos y trabajos creativos
        </Typography>
      </motion.div>

      <motion.div
        ref={ref}
        className={classes.gridContainer}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: "-50px" }}
      >
        <Grid container spacing={4}>
          {mockData.map((project, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <motion.div
                variants={cardVariants}
                custom={index}
                whileHover={{
                  scale: 1.03,
                  transition: { duration: 0.2 }
                }}
              >
                <ProjectCard
                  project={project}
                  onOpen={() => handleOpen(project)}
                  isMobile={isMobile}
                />
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </motion.div>

      <Dialog
        open={open}
        onClose={handleClose}
        fullWidth
        maxWidth="md"
        className={classes.dialog}
        TransitionComponent={motion.div}
        TransitionProps={{
          initial: { opacity: 0, y: 50 },
          animate: { opacity: 1, y: 0 },
          exit: { opacity: 0, y: 50 },
          transition: { duration: 0.3 }
        }}
        PaperProps={{
          style: {
            overflowY: 'auto',
            maxHeight: '90vh',
            WebkitOverflowScrolling: 'touch' // Mejora el scroll en iOS
          }
        }}
      >
        <DialogContent className={classes.dialogContent}>
          <IconButton 
            className={classes.closeButton}
            onClick={handleClose}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
          <AnimatePresence>
            {selectedProject && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className={classes.projectDetails}
              >
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title}
                  className={classes.dialogImage}
                />
                <div className={classes.detailsContent}>
                  <Typography variant="h4" className={classes.dialogTitle}>
                    {selectedProject.title}
                  </Typography>
                  <Typography className={classes.dialogDescription}>
                    {selectedProject.description}
                  </Typography>
                  <div className={classes.techStack}>
                    {selectedProject.technology.split(',').map((tech, index) => (
                      <motion.span
                        key={index}
                        className={classes.techTag}
                        whileHover={{ scale: 1.1 }}
                      >
                        {tech.trim()}
                      </motion.span>
                    ))}
                  </div>
                  <motion.a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={classes.projectLink}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Project
                  </motion.a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </DialogContent>
      </Dialog>
    </section>
  );
};

const useStyles = makeStyles((theme) => ({
  section: {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)',
    padding: theme.spacing(8, 4),
    color: '#E0E0E0',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(6, 2),
    },
  },
  titleContainer: {
    textAlign: 'center',
    marginBottom: theme.spacing(8),
    [theme.breakpoints.down('sm')]: {
      marginBottom: theme.spacing(4),
    },
  },
  title: {
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
  gridContainer: {
    width: '100%',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  dialog: {
    '& .MuiDialog-paper': {
      margin: theme.spacing(2),
      backgroundColor: '#1a1a1a',
      borderRadius: '15px',
      overflow: 'hidden',
      [theme.breakpoints.down('sm')]: {
        margin: theme.spacing(1),
        maxHeight: '95vh',
      },
    },
  },
  dialogContent: {
    padding: theme.spacing(3),
    overflow: 'auto',
    '-webkit-overflow-scrolling': 'touch',
    '&::-webkit-scrollbar': {
      width: '8px',
    },
    '&::-webkit-scrollbar-track': {
      background: 'rgba(255, 255, 255, 0.1)',
      borderRadius: '4px',
    },
    '&::-webkit-scrollbar-thumb': {
      background: 'rgba(255, 255, 255, 0.2)',
      borderRadius: '4px',
      '&:hover': {
        background: 'rgba(255, 255, 255, 0.3)',
      },
    },
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(2),
    top: theme.spacing(2),
    color: '#fff',
    zIndex: 1,
    '&:hover': {
      background: 'rgba(255, 255, 255, 0.1)',
    },
  },
  projectDetails: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(3),
  },
  dialogImage: {
    width: '100%',
    height: '300px',
    objectFit: 'cover',
    borderRadius: '10px',
    [theme.breakpoints.down('sm')]: {
      height: '200px',
    },
  },
  detailsContent: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(2),
  },
  dialogTitle: {
    color: '#fff',
    fontFamily: 'Space Grotesk, sans-serif',
    fontWeight: 600,
  },
  dialogDescription: {
    color: 'rgba(255, 255, 255, 0.8)',
    fontFamily: 'Space Grotesk, sans-serif',
    lineHeight: 1.6,
  },
  techStack: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: theme.spacing(1),
    marginTop: theme.spacing(2),
  },
  techTag: {
    padding: theme.spacing(0.5, 1.5),
    borderRadius: '20px',
    background: 'linear-gradient(135deg, rgba(255, 0, 255, 0.1), rgba(255, 111, 48, 0.1))',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    color: '#fff',
    fontSize: '0.9rem',
    fontFamily: 'Space Grotesk, sans-serif',
  },
  projectLink: {
    display: 'inline-block',
    marginTop: theme.spacing(2),
    padding: theme.spacing(1.5, 3),
    background: 'linear-gradient(135deg, rgb(255, 0, 255), #FF6F30)',
    color: '#fff',
    textDecoration: 'none',
    borderRadius: '25px',
    fontFamily: 'Space Grotesk, sans-serif',
    fontWeight: 500,
    textAlign: 'center',
    transition: 'all 0.3s ease',
    '&:hover': {
      transform: 'translateY(-2px)',
      boxShadow: '0 5px 15px rgba(255, 0, 255, 0.3)',
    },
  },
}));

export default MyWork;
