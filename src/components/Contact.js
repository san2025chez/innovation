import React from 'react';
import { makeStyles, Typography, IconButton, Grid, Container } from '@material-ui/core';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
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
  container: {
    textAlign: 'center',
    backgroundColor: '#000000', // Fondo negro
    color: '#FFFFFF', // Texto blanco
  },
  grid: {
    paddingTop: theme.spacing(2),
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  iconButton: {
    color: '#007ACC', // Azul eléctrico
    fontSize: '2.5rem',
    '&:hover': {
      color: '#FF6F30', // Naranja brillante al pasar el mouse
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '2rem',
    },
  },
}));

export default Contact;
