import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button, Container, Grid, Typography } from '@material-ui/core';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionTitle } from './common/SectionTitle';
import emailjs from '@emailjs/browser';
import { FiSend, FiCheckCircle } from 'react-icons/fi';

const useStyles = makeStyles((theme) => ({
  section: {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)',
    padding: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(4, 2),
    },
    '@media (max-height: 667px)': {
      padding: theme.spacing(3, 2),
      minHeight: 'auto',
    },
  },
  form: {
    width: '100%',
    maxWidth: '800px',
    margin: '0 auto',
    fontFamily: 'Space Grotesk, sans-serif',
    '@media (max-height: 667px)': {
      transform: 'scale(0.92)',
      transformOrigin: 'top center',
    },
    '@media (max-height: 568px)': {
      transform: 'scale(0.85)',
    },
  },
  input: {
    marginBottom: theme.spacing(3),
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'rgba(255, 255, 255, 0.23)',
      },
      '&:hover fieldset': {
        borderColor: 'rgba(255, 255, 255, 0.5)',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#FF6F30',
      },
    },
    '& .MuiOutlinedInput-input': {
      color: '#fff',
      fontFamily: 'Space Grotesk, sans-serif',
      fontSize: 'clamp(0.85rem, 2vw, 1rem)',
      '@media (max-height: 667px)': {
        fontSize: 'clamp(0.8rem, 1.8vw, 0.9rem)',
      },
    },
    '& .MuiInputLabel-root': {
      color: 'rgba(255, 255, 255, 0.7)',
      fontFamily: 'Space Grotesk, sans-serif',
      fontSize: 'clamp(0.85rem, 2vw, 1rem)',
      '@media (max-height: 667px)': {
        fontSize: 'clamp(0.8rem, 1.8vw, 0.9rem)',
      },
    },
    [theme.breakpoints.down('sm')]: {
      marginBottom: theme.spacing(2),
    },
  },
  submitButton: {
    background: 'linear-gradient(135deg, rgb(255, 0, 255), #FF6F30)',
    color: '#fff',
    padding: theme.spacing(1.5, 4),
    fontSize: 'clamp(0.9rem, 2vw, 1rem)',
    fontFamily: 'Space Grotesk, sans-serif',
    fontWeight: 600,
    borderRadius: '25px',
    transition: 'all 0.3s ease-in-out',
    '&:hover': {
      transform: 'translateY(-2px)',
      boxShadow: '0 5px 15px rgba(255, 111, 48, 0.4)',
    },
    '@media (max-height: 667px)': {
      padding: theme.spacing(1.2, 3),
      fontSize: 'clamp(0.85rem, 1.8vw, 0.9rem)',
    },
  },
  successMessage: {
    textAlign: 'center',
    padding: theme.spacing(4),
    color: '#FFFFFF',
  },
  successIcon: {
    fontSize: '3rem',
    color: '#FF6F30',
    marginBottom: theme.spacing(2),
  },
}));

const ContactForm = ({ id }) => {
  const classes = useStyles();
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_wzijndk', 'template_49qbndc', e.target, {
        publicKey: 'XT5EO2oI14qIFykvW',
      })
      .then(
        () => {
          setIsSubmitted(true);
          setFormData({ user_name: '', user_email: '', message: '' });
          setTimeout(() => setIsSubmitted(false), 5000);
        },
        (error) => {
          alert('Error al enviar el mensaje.');
        },
      );
  };

  return (
    <section className={classes.section} id={id}>
      <SectionTitle
        title="Contáctame"
        subtitle="¿Tienes un proyecto en mente? ¡Hablemos!"
      />
      
      <Container>
        <motion.form
          className={classes.form}
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                className={classes.input}
                label="Nombre"
                variant="outlined"
                fullWidth
                name="user_name"
                value={formData.user_name}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                className={classes.input}
                label="Email"
                variant="outlined"
                fullWidth
                name="user_email"
                type="email"
                value={formData.user_email}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                className={classes.input}
                label="Mensaje"
                variant="outlined"
                fullWidth
                multiline
                rows={4}
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} style={{ textAlign: 'center' }}>
              <AnimatePresence>
                {isSubmitted ? (
                  <motion.div
                    className={classes.successMessage}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3 }}
                  >
                    <FiCheckCircle className={classes.successIcon} />
                    <Typography variant="h6">¡Mensaje enviado con éxito!</Typography>
                    <Typography>Me pondré en contacto contigo pronto.</Typography>
                  </motion.div>
                ) : (
                  <Button
                    type="submit"
                    variant="contained"
                    className={classes.submitButton}
                  >
                    Enviar Mensaje
                    <FiSend style={{ marginLeft: '8px' }} />
                  </Button>
                )}
              </AnimatePresence>
            </Grid>
          </Grid>
        </motion.form>
      </Container>
    </section>
  );
};

export default ContactForm;
