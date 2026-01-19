import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button, Container, Grid, Typography } from '@material-ui/core';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionTitle } from './common/SectionTitle';
import emailjs from '@emailjs/browser';
import { FiSend, FiCheckCircle } from 'react-icons/fi';
import { useAppTheme } from '../hooks/useAppTheme';

const useStyles = makeStyles((theme) => ({
  section: {
    minHeight: '100vh',
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
        borderColor: 'rgba(128, 128, 128, 0.3)',
      },
      '&:hover fieldset': {
        borderColor: 'rgba(128, 128, 128, 0.5)',
      },
      '&.Mui-focused fieldset': {
        borderColor: theme.palette.primary?.main || '#6366F1',
      },
    },
    '& .MuiOutlinedInput-input': {
      fontFamily: 'Space Grotesk, sans-serif',
      fontSize: 'clamp(0.85rem, 2vw, 1rem)',
      '@media (max-height: 667px)': {
        fontSize: 'clamp(0.8rem, 1.8vw, 0.9rem)',
      },
    },
    '& .MuiInputLabel-root': {
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
    color: '#fff',
    padding: theme.spacing(1.5, 4),
    fontSize: 'clamp(0.9rem, 2vw, 1rem)',
    fontFamily: 'Space Grotesk, sans-serif',
    fontWeight: 600,
    borderRadius: '25px',
    transition: 'all 0.3s ease-in-out',
    '&:hover': {
      transform: 'translateY(-2px)',
    },
    '@media (max-height: 667px)': {
      padding: theme.spacing(1.2, 3),
      fontSize: 'clamp(0.85rem, 1.8vw, 0.9rem)',
    },
  },
  successMessage: {
    textAlign: 'center',
    padding: theme.spacing(4),
  },
  successIcon: {
    fontSize: '3rem',
    marginBottom: theme.spacing(2),
  },
}));

const ContactForm = ({ id }) => {
  const appTheme = useAppTheme();
  const classes = useStyles();
  const [formData, setFormData] = useState({
    email: '',
    name: '',
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
      .sendForm('service_7pw7ik8', 'template_0mc832r', e.target, {
        publicKey: 'cVDAzuZPikytEPoeA',
      })
      .then(
        () => {
          setIsSubmitted(true);
          setFormData({ email: '',name: '', message: '' });
          setTimeout(() => setIsSubmitted(false), 5000);
        },
        (error) => {
          alert('Error al enviar el mensaje.');
        },
      );
  };

  return (
    <section 
      className={classes.section} 
      id={id}
      style={{
        background: appTheme.colors.gradientBackground,
        transition: 'background 0.3s ease',
      }}
    >
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
                label="Email"
                variant="outlined"
                fullWidth
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                className={classes.input}
                label="Nombre"
                variant="outlined"
                fullWidth
                name="name"
                value={formData.name}
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
                    <FiCheckCircle 
                      className={classes.successIcon}
                      style={{ color: appTheme.colors.orange }}
                    />
                    <Typography 
                      variant="h6"
                      style={{ color: appTheme.colors.textPrimary }}
                    >
                      ¡Mensaje enviado con éxito!
                    </Typography>
                    <Typography
                      style={{ color: appTheme.colors.textSecondary }}
                    >
                      Me pondré en contacto contigo pronto.
                    </Typography>
                  </motion.div>
                ) : (
                  <Button
                    type="submit"
                    variant="contained"
                    className={classes.submitButton}
                    style={{
                      background: appTheme.colors.gradient,
                      boxShadow: appTheme.darkMode
                        ? '0 5px 15px rgba(255, 111, 48, 0.4)'
                        : '0 5px 15px rgba(99, 102, 241, 0.4)',
                    }}
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
