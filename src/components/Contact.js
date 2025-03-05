import React from 'react';
import { makeStyles, Typography, IconButton, Grid, Container } from '@material-ui/core';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TelegramIcon from '@mui/icons-material/Telegram';
import { FiMail, FiMapPin } from 'react-icons/fi';

const Contact = () => {
  const classes = useStyles();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const socialLinks = [
    {
      icon: <WhatsAppIcon fontSize="inherit" />,
      url: 'https://api.whatsapp.com/send?phone=543884299868',
      label: 'WhatsApp',
      color: '#25D366'
    },
    {
      icon: <LinkedInIcon fontSize="inherit" />,
      url: 'https://www.linkedin.com/in/anamariavanesasanchez/',
      label: 'LinkedIn',
      color: '#0A66C2'
    },
    {
      icon: <TelegramIcon fontSize="inherit" />,
      url: 'https://t.me/Vanesa2023mar',
      label: 'Telegram',
      color: '#229ED9'
    }
  ];

  const contactInfo = [
    {
      icon: <FiMail />,
      text: 'vanesasanchez@gmail.com',
      label: 'Email'
    },
    {
      icon: <FiMapPin />,
      text: 'San Salvador de Jujuy, Argentina',
      label: 'Location'
    }
  ];

  return (
    <section className={classes.section} ref={ref}>
      <Container maxWidth="lg">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className={classes.container}
        >
          <div className={classes.titleContainer}>
            <Typography variant="h2" className={classes.title}>
              Conectemos
            </Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
              ¡Estoy lista para colaborar en tu próximo proyecto!
            </Typography>
          </div>

       {/*    <Grid container spacing={4} className={classes.infoContainer}>
            {contactInfo.map((info, index) => (
              <Grid item xs={12} sm={6} key={index}>
                <motion.div
                  className={classes.infoCard}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2 * index }}
                >
                  <div className={classes.infoIcon}>{info.icon}</div>
                  <Typography className={classes.infoText}>{info.text}</Typography>
                </motion.div>
              </Grid>
            ))}
          </Grid> */}

          <div className={classes.socialContainer}>
            <Typography variant="h6" className={classes.socialTitle}>
              Sígueme en las redes
            </Typography>
            <Grid container spacing={3} justifyContent="center" className={classes.grid}>
              {socialLinks.map((social, index) => (
                <Grid item key={index}>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <a
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={classes.socialLink}
                      aria-label={social.label}
                    >
                      <motion.div
                        className={classes.iconWrapper}
                        style={{ '--hover-color': social.color }}
                        whileHover={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                      >
                        {social.icon}
                      </motion.div>
                    </a>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

const useStyles = makeStyles((theme) => ({
  section: {
    padding: theme.spacing(8, 0),
    background: '#000000',
    minHeight: '100vh',
    position: 'relative',
  },
  container: {
    position: 'relative',
    zIndex: 1,
  },
  title: {
    color: '#FFFFFF',
    fontWeight: 700,
    marginBottom: theme.spacing(1),
    textAlign: 'center',
    fontSize: '2.5rem',
    [theme.breakpoints.down('sm')]: {
      fontSize: '2rem',
    },
  },
  subtitle: {
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: theme.spacing(6),
    fontSize: '1.1rem',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1rem',
      marginBottom: theme.spacing(4),
    },
  },
  infoContainer: {
    marginBottom: theme.spacing(8),
  },
  infoCard: {
    background: 'linear-gradient(135deg, rgba(30, 42, 56, 0.4) 0%, rgba(30, 42, 56, 0.1) 100%)',
    backdropFilter: 'blur(8px)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '16px',
    padding: theme.spacing(3),
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(2),
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    '&:hover': {
      transform: 'translateY(-4px)',
      boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
    },
  },
  infoIcon: {
    fontSize: '1.5rem',
    color: '#FF6F30',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  infoText: {
    color: '#fff',
    fontFamily: 'Space Grotesk, sans-serif',
    fontSize: '1rem',
  },
  socialContainer: {
    textAlign: 'center',
  },
  socialTitle: {
    color: '#FFFFFF',
    fontFamily: 'Space Grotesk, sans-serif',
    fontSize: '1.25rem',
    marginBottom: theme.spacing(4),
    fontWeight: 500,
  },
  grid: {
    marginTop: theme.spacing(2),
  },
  socialLink: {
    textDecoration: 'none',
    color: 'inherit',
    display: 'block',
  },
  iconWrapper: {
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '2rem',
    background: 'linear-gradient(135deg, rgba(30, 42, 56, 0.4) 0%, rgba(30, 42, 56, 0.1) 100%)',
    backdropFilter: 'blur(8px)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    transition: 'all 0.3s ease',
    color: '#fff',
    '&:hover': {
      color: 'var(--hover-color)',
      borderColor: 'var(--hover-color)',
      boxShadow: '0 0 20px rgba(var(--hover-color), 0.3)',
    },
    [theme.breakpoints.down('sm')]: {
      width: '50px',
      height: '50px',
      fontSize: '1.75rem',
    },
  },
}));

export default Contact;
