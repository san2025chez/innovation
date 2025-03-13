import React, { useState } from 'react';
import { makeStyles, Grid, Typography, Dialog, DialogContent, IconButton, useTheme, useMediaQuery } from '@material-ui/core';
import ProjectCard from './ProjectCard';
import mockData from '../mock/mockData';
import CloseIcon from '@material-ui/icons/Close';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { SectionTitle } from './common/SectionTitle';

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
      padding: theme.spacing(4, 2),
    },
    '@media (max-height: 667px)': {
      padding: theme.spacing(3, 2),
      minHeight: 'auto',
    },
  },
  gridContainer: {
    width: '100%',
    maxWidth: '1200px',
    margin: '0 auto',
    '@media (max-height: 667px)': {
      transform: 'scale(0.95)',
      transformOrigin: 'top center',
    },
    '@media (max-height: 568px)': {
      transform: 'scale(0.85)',
    },
  },
  dialogContent: {
    padding: theme.spacing(4),
    fontFamily: 'Space Grotesk, sans-serif',
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(2),
    },
    '@media (max-height: 667px)': {
      padding: theme.spacing(2),
      '& img': {
        maxHeight: '180px',
      },
    },
    '@media (max-height: 568px)': {
      '& img': {
        maxHeight: '150px',
      },
    },
  },
  dialogTitle: {
    fontSize: 'clamp(1.2rem, 3vw, 1.5rem)',
    marginBottom: theme.spacing(2),
    '@media (max-height: 667px)': {
      marginBottom: theme.spacing(1),
    },
  },
  dialogDescription: {
    fontSize: 'clamp(0.85rem, 2vw, 1rem)',
    lineHeight: 1.6,
    '@media (max-height: 667px)': {
      lineHeight: 1.4,
    },
  },
  techStack: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px',
    marginTop: theme.spacing(2),
    '@media (max-height: 667px)': {
      marginTop: theme.spacing(1),
      gap: '6px',
    },
  },
  techTag: {
    fontSize: 'clamp(0.75rem, 2vw, 0.9rem)',
    padding: '4px 12px',
    borderRadius: '15px',
    background: 'rgba(255, 0, 255, 0.1)',
    color: 'rgb(255, 0, 255)',
    '@media (max-height: 667px)': {
      padding: '3px 10px',
    },
  },
  projectLink: {
    fontSize: 'clamp(0.85rem, 2vw, 1rem)',
    padding: 'clamp(8px, 2vw, 12px) clamp(20px, 4vw, 35px)',
    '@media (max-height: 667px)': {
      padding: 'clamp(6px, 1.5vw, 10px) clamp(15px, 3vw, 30px)',
    },
  },
}));

export default MyWork;
