import React, { useRef, useState } from 'react';
import { makeStyles, TextField, Typography, Grid, Container } from '@material-ui/core';
import { useInView } from 'react-intersection-observer';
import emailjs from '@emailjs/browser';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSend, FiCheckCircle } from 'react-icons/fi';

const ContactForm = ({ title, id }) => {
  const form = useRef();
  const classes = useStyles();
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
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
          setIsSubmitted(true);
          setFormData({ user_name: '', user_email: '', message: '' });
          setTimeout(() => setIsSubmitted(false), 5000);
        },
        (error) => {
          alert('Error al enviar el mensaje.');
        },
      );
  };

  const formVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const successVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.3,
        ease: "easeIn"
      }
    }
  };

  return (
    <section className={classes.section} id={id} ref={ref}>
      <motion.div
        className={classes.container}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={formVariants}
      >
        <div className={classes.content}>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={classes.titleContainer}
          >
            <Typography variant="h2" className={classes.title}>
              {title || 'Contacto'}
            </Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
              ¿Tienes un proyecto en mente? ¡Hablemos!
            </Typography>
          </motion.div>

          <div className={classes.formWrapper}>
            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div
                  className={classes.successMessage}
                  variants={successVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  key="success"
                >
                  <FiCheckCircle className={classes.successIcon} />
                  <Typography variant="h6">¡Mensaje enviado con éxito!</Typography>
                  <Typography>Me pondré en contacto contigo pronto.</Typography>
                </motion.div>
              ) : (
                <motion.form
                  ref={form}
                  onSubmit={sendEmail}
                  className={classes.form}
                  variants={formVariants}
                  key="form"
                >
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
                      <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <motion.button
                          className={classes.submitButton}
                          type="submit"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <span>Enviar</span>
                          <FiSend className={classes.sendIcon} />
                        </motion.button>
                      </div>
                    </Grid>
                  </Grid>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

const useStyles = makeStyles((theme) => ({
  section: {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)',
    padding: theme.spacing(8, 4),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    overflow: 'hidden',
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(4, 2),
    },
  },
  container: {
    width: '100%',
    maxWidth: '1200px',
    margin: '0 auto',
    position: 'relative',
    zIndex: 1,
  },
  content: {
    background: 'linear-gradient(135deg, rgba(30, 42, 56, 0.4) 0%, rgba(30, 42, 56, 0.1) 100%)',
    backdropFilter: 'blur(8px)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '24px',
    padding: theme.spacing(6),
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(4, 2),
    },
  },
  titleContainer: {
    textAlign: 'center',
    marginBottom: theme.spacing(6),
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
  formWrapper: {
    position: 'relative',
    minHeight: '400px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  form: {
    width: '100%',
  },
  textField: {
    '& .MuiOutlinedInput-root': {
      backgroundColor: 'rgba(255, 255, 255, 0.03)',
      borderRadius: '12px',
      transition: 'all 0.3s ease',
      '& fieldset': {
        borderColor: 'rgba(255, 255, 255, 0.1)',
        borderWidth: '1px',
      },
      '&:hover fieldset': {
        borderColor: 'rgba(255, 0, 255, 0.5)',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#FF6F30',
      },
    },
    '& .MuiOutlinedInput-input': {
      color: '#FFFFFF',
      padding: '16px',
      fontSize: '1rem',
    },
    '& .MuiInputLabel-root': {
      color: 'rgba(255, 255, 255, 0.7)',
      fontSize: '1rem',
      '&.Mui-focused': {
        color: '#FF6F30',
      },
    },
  },
  submitButton: {
    width: 'auto',
    minWidth: '160px',
    maxWidth: '200px',
    padding: '12px 24px',
    fontSize: '1rem',
    fontFamily: 'Space Grotesk, sans-serif',
    fontWeight: 600,
    color: '#FFFFFF',
    background: 'linear-gradient(135deg, rgb(255, 0, 255), #FF6F30)',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    transition: 'all 0.3s ease',
    position: 'relative',
    overflow: 'hidden',
    boxShadow: '0 2px 10px rgba(255, 0, 255, 0.2)',
    '&:before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))',
      opacity: 0,
      transition: 'opacity 0.3s ease',
    },
    '&:hover': {
      boxShadow: '0 4px 15px rgba(255, 0, 255, 0.3)',
      '&:before': {
        opacity: 1,
      },
    },
  },
  sendIcon: {
    fontSize: '1.2rem',
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

export default ContactForm;
