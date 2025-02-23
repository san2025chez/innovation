import React, { useState } from 'react';
import { makeStyles, Grid, Typography, Dialog, DialogContent, IconButton } from '@material-ui/core';
import ProjectCard from './ProjectCard';
import mockData from '../mock/mockData';
import CloseIcon from '@material-ui/icons/Close';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
const MyWork = ({ title, id }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpen = (project) => {
    setSelectedProject(project);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedProject(null);
  };

  return (
    <div className={classes.section} id={id}>
      <Typography variant="h5" className={classes.title}>
        {title}
      </Typography>
      <div className={classes.gridContainer}>
        <Grid container spacing={3}>
          {mockData.map((project, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                viewport={{ once: true, amount: 0.2 + (index * 0.1) }}
              >
                <ProjectCard
                  title={project.title}
                  /*  description={project.description} */
                  image={project.image}
                  onOpen={() => handleOpen(project)}
                  isHovered={false}
                />
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </div>
      <Dialog
        open={open}
        onClose={handleClose}
        fullWidth
        maxWidth="md"
        className={classes.dialog}
        scroll="paper"
        style={{ overflow: 'hidden' }}
      >
        <DialogContent style={{ overflow: 'hidden', padding: 0 }}>
          <IconButton edge="end" color="inherit" onClick={handleClose} className={classes.closeButton}>
            <CloseIcon />
          </IconButton>
          {selectedProject && (
            <div className={classes.dialogContent}>
              <Typography variant="h4" className={classes.dialogTitle}>
                {selectedProject.title}
              </Typography>
              <Typography className={classes.dialogDescription}>
                {selectedProject.description}
              </Typography>
              <Typography className={classes.dialogDescription}>
                {selectedProject.technology}
              </Typography>
              
              <a href={selectedProject.link} target="_blank" rel="noopener noreferrer" className={classes.link} style={{ color: '#007ACC', textDecoration: 'none', fontSize: '1.0rem', fontFamily: 'Space Grotesk, sans-serif' }}>
              Ir a la página
            </a>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  section: {
    padding: theme.spacing(4),
    backgroundColor: '#000000', // Black background
    color: '#E0E0E0', // Light gray text
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(2),
    },
  },
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: theme.spacing(4),
    fontSize: '2rem',
    fontFamily: 'Space Grotesk, sans-serif',
    textTransform: 'uppercase',
    color: '#FFFFFF', // White text
  },
  gridContainer: {
    maxWidth: '1200px',
    width: '100%',
    padding: '0 16px',
    margin: '0 auto',
    [theme.breakpoints.down('sm')]: {
      padding: '0 8px',
    },
  },
  dialog: {
    '& .MuiDialog-paper': {
      backgroundColor: '#1E2A38', // Dialog background
      color: '#E0E0E0', // Light gray text
      padding: theme.spacing(2),
      overflowX: 'hidden', // Remove horizontal scroll
    },
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: '#FFFFFF', // White close button color
  },
  dialogTitle: {
    fontSize: '1.5rem',
    marginBottom: theme.spacing(2),
    color: '#FFFFFF', // White title text
    fontFamily: 'Space Grotesk, sans-serif',
  },
  dialogDescription: {
    fontSize: '1rem',
    color: '#E0E0E0', // Light gray text
    fontFamily: 'Space Grotesk, sans-serif',
  },
}));

export default MyWork;

