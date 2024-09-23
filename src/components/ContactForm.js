import React, { useRef ,useState } from 'react';
import { makeStyles, TextField, Button, Typography, Grid, Container, Paper } from '@material-ui/core';
import emailjs from '@emailjs/browser';

const ContactForm = ({ title, dark, id }) => {
  const form = useRef();

  const classes = useStyles();
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_wzijndk', 'template_49qbndc', form.current, {
        publicKey: 'XT5EO2oI14qIFykvW',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          alert('Mensaje enviado con éxito.');
          setFormData({ user_name: '', user_email: '', message: '' });
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert('Error al enviar el mensaje.');
        },
      );
  };

  return (
    <div className={`${classes.section} ${classes.sectiondark}`} id={id}>

    <Container className={classes.container}>
      <Paper elevation={3} className={classes.paper}>
        <Typography variant="h4" className={`${classes.title} ${classes.contactTitle}`}>
        {title}
        </Typography>
        <form ref={form} onSubmit={sendEmail} className={classes.form}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <TextField
                name="user_name"
                label="Nombre"
                variant="outlined"
                fullWidth
                required
                value={formData.user_name}
                onChange={handleChange}
                className={classes.textField}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                name="user_email"
                label="Correo Electrónico"
                type="email"
                variant="outlined"
                fullWidth
                required
                value={formData.user_email}
                onChange={handleChange}
                className={classes.textField}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="message"
                label="Mensaje"
                variant="outlined"
                fullWidth
                multiline
                minRows={4}
                required
                value={formData.message}
                onChange={handleChange}
                className={classes.textField}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                className={classes.submitButton}
              >
                Enviar
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  container: {

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing(4),
    backgroundColor: '#1E2A38',
    color: '#FFFFFF',
    fontFamily: 'Space Grotesk, sans-serif',
    border: 'none',
    boxShadow: 'none',
    

  },
  paper: {
    width: '100%',
    maxWidth: 800,
    padding: theme.spacing(4),
    borderRadius: theme.shape.borderRadius,
    backgroundColor: '#1E2A38',
    color: '#FFFFFF',
    boxShadow: theme.shadows[5],
    fontFamily: 'Space Grotesk, sans-serif',
  },
  title: {
    marginBottom: theme.spacing(3),
    textAlign: 'center',
    fontFamily: 'Space Grotesk, sans-serif',
  },
  contactTitle: {
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: theme.spacing(4),
    fontSize: '2rem',
    fontFamily: 'Space Grotesk, sans-serif',
    textTransform: 'uppercase',
    color: '#FFFFFF',
    marginTop: theme.spacing(4),
  },
  form: {
    marginTop: theme.spacing(2),
    fontFamily: 'Space Grotesk, sans-serif',
  },
  textField: {
    marginBottom: theme.spacing(2),
    backgroundColor: '#FFFFFF',
    borderRadius: theme.shape.borderRadius,
    fontFamily: 'Space Grotesk, sans-serif',
  },
  submitButton: {
    backgroundColor: '#00BFA5',
    color: '#FFFFFF',
    '&:hover': {
      backgroundColor: '#00a89f',
    },
    fontFamily: 'Space Grotesk, sans-serif',
  },
}));

export default ContactForm;
