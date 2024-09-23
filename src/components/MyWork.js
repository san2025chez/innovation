import React, { useState } from 'react';
import { makeStyles, Grid, Typography, Dialog, DialogContent, IconButton } from '@material-ui/core';
import ProjectCard from './ProjectCard';
import mockData from '../mock/mockData';
import CloseIcon from '@material-ui/icons/Close';

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
              <ProjectCard
                title={project.title}
                description={project.description}
                image={project.image}
                onOpen={() => handleOpen(project)}
              />
            </Grid>
          ))}
        </Grid>
      </div>
      <Dialog
        open={open}
        onClose={handleClose}
        fullWidth
        maxWidth="md" // Ajusta el tamaño máximo del popup
        className={classes.dialog}
      >
        <DialogContent>
          <IconButton edge="end" color="inherit" onClick={handleClose} className={classes.closeButton}>
            <CloseIcon />
          </IconButton>
          {selectedProject && (
            <div>
              <Typography variant="h4" className={classes.dialogTitle}>
                {selectedProject.title}
              </Typography>
              <Typography className={classes.dialogDescription}>
                {selectedProject.description}
              </Typography>
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
    backgroundColor: '#1E2A38',
    color: '#FFFFFF',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', // Centra el contenido horizontalmente
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
  },
  gridContainer: {
    maxWidth: '1200px', // Establece un ancho máximo para centrar la cuadrícula
    width: '100%',
    padding: '0 16px', // Padding horizontal
    margin: '0 auto', // Centra el contenedor de la cuadrícula
    [theme.breakpoints.down('sm')]: {
      padding: '0 8px',
    },
  },
  dialog: {
    '& .MuiDialog-paper': {
      padding: theme.spacing(2),
    },
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
  },
  dialogTitle: {
    marginBottom: theme.spacing(2),
  },
  dialogDescription: {
    fontSize: '1rem',
  },
}));

export default MyWork;
