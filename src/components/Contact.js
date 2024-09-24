import React from 'react';
import { makeStyles, Typography, IconButton, Grid, Container } from '@material-ui/core';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import TelegramIcon from '@mui/icons-material/Telegram';

const Contact = () => {
  const classes = useStyles();

  return (
  
      <Container className={classes.container}>
        
        <Grid container spacing={2} justifyContent="center" className={classes.grid}>
          <Grid item>
            <a href='https://api.whatsapp.com/send?phone=543884299868' target="_blank" rel="noopener noreferrer">
              <IconButton className={classes.iconButton}>
                <WhatsAppIcon fontSize="inherit" />
              </IconButton>
            </a>
          </Grid>
          <Grid item>
            <a href="https://www.linkedin.com/in/anamariavanesasanchez/" target="_blank" rel="noopener noreferrer">
              <IconButton className={classes.iconButton}>
                <LinkedInIcon fontSize="inherit" />
              </IconButton>
            </a>
          </Grid>
      
        {/*   <Grid item>
            <a href="https://github.com/san2025chez" target="_blank" rel="noopener noreferrer">
              <IconButton className={classes.iconButton}>
                <GitHubIcon fontSize="inherit" />
              </IconButton>
            </a>
          </Grid> */}
          <Grid item>
            <a href="https://t.me/Vanesa2023mar" target="_blank" rel="noopener noreferrer">
              <IconButton className={classes.iconButton}>
                <TelegramIcon fontSize="inherit" />
              </IconButton>
            </a>
          </Grid>
        </Grid>
      </Container>
   
  );
};

const useStyles = makeStyles((theme) => ({
  section: {
    minHeight: "30vh",
    backgroundColor: "#1E2A38",
    padding: theme.spacing(4),
  },
  sectiondark: {
    color: "#FFFFFF",
  },
  container: {
    textAlign: 'center',
    color: "#1E2A38",
    backgroundColor: "#1E2A38",
  },
  title: {
    marginBottom: theme.spacing(3),
    fontWeight: 'bold',
    color: '#FFFFFF',
    fontSize: '2rem',
  },
  grid: {
    paddingTop: theme.spacing(2),
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  iconButton: {
    color: '#FFFFFF',
    fontSize: '2.5rem',
    '&:hover': {
      color: '#00BFA5', // Color de resaltado
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '2rem', // Tamaño de los iconos para dispositivos móviles
    },
  },
}));

export default Contact;
