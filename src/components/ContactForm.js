import React, { useRef, useState } from 'react';
import { makeStyles, TextField, Button, Typography, Grid, Container, Paper } from '@material-ui/core';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';


const ContactForm = ({ title, id }) => {
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
          alert('Mensaje enviado con éxito.');
          setFormData({ user_name: '', user_email: '', message: '' });
        },
        (error) => {
          alert('Error al enviar el mensaje.');
        },
      );
  };

  return (
    <div className={classes.section} id={id}>
      <Container className={classes.container}>
        <Paper elevation={3} className={classes.paper}>
          <Typography variant="h4" className={classes.contactTitle}>
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
                <motion.button
                  className={classes.contactButton}
                  type="submit"
                  variant="contained"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  ENVIAR
                </motion.button>

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
    backgroundColor: '#000000', // Fondo negro
    color: '#FFFFFF', // Texto blanco
    fontFamily: 'Space Grotesk, sans-serif',
  },
  paper: {
    width: '100%',
    maxWidth: 800,
    padding: theme.spacing(4),
    borderRadius: theme.shape.borderRadius,
    backgroundColor: '#1E2A38', // Fondo de la tarjeta
    color: '#FFFFFF', // Texto blanco
    boxShadow: theme.shadows[5],
  },
  contactTitle: {
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: theme.spacing(4),
    fontSize: '2rem',
    textTransform: 'uppercase',
  },
  form: {
    marginTop: theme.spacing(2),
  },
  textField: {
    marginBottom: theme.spacing(2),
    backgroundColor: '#FFFFFF', // Fondo blanco para campos de texto
  },
  submitButton: {
    backgroundColor: '#007ACC', // Azul eléctrico
    color: '#FFFFFF',
    '&:hover': {
      backgroundColor: '#005C7F', // Un tono más oscuro al pasar el mouse
    },
  },
  contactButton: {
    color: '#FFFFFF',
    backgroundColor: '#007ACC', // Azul Eléctrico
    borderRadius: '10px',
    padding: '10px 20px',
    fontSize: '16px',
    border: 'none',
    cursor: 'pointer',
    transition: 'background-color 0.3s, transform 0.2s',
    '&:hover': {
        backgroundColor: '#FF6F30', // Naranja Brillante en hover
    },
},
}));

export default ContactForm;
