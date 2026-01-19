import React from 'react';
import { makeStyles, Typography, IconButton, Grid, Container } from '@material-ui/core';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TelegramIcon from '@mui/icons-material/Telegram';
import { FiMail, FiMapPin } from 'react-icons/fi';
import { useAppTheme } from '../hooks/useAppTheme';

const Contact = () => {
  const appTheme = useAppTheme();
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
    <section 
      className={classes.section} 
      ref={ref}
      style={{
        background: appTheme.darkMode
          ? appTheme.colors.gradientBackground
          : 'linear-gradient(135deg, rgba(91, 33, 182, 0.08) 0%, rgba(245, 158, 11, 0.06) 50%, rgba(14, 165, 233, 0.04) 100%)',
        position: 'relative',
        overflow: 'hidden',
        transition: 'background 0.3s ease',
      }}
    >
      {/* Efecto de partículas de fondo para modo claro */}
      {!appTheme.darkMode && (
        <>
          <div
            style={{
              position: 'absolute',
              top: '-50%',
              right: '-10%',
              width: '500px',
              height: '500px',
              background: 'radial-gradient(circle, rgba(91, 33, 182, 0.1) 0%, transparent 70%)',
              borderRadius: '50%',
              filter: 'blur(60px)',
              animation: 'float 20s ease-in-out infinite',
            }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: '-30%',
              left: '-5%',
              width: '400px',
              height: '400px',
              background: 'radial-gradient(circle, rgba(245, 158, 11, 0.08) 0%, transparent 70%)',
              borderRadius: '50%',
              filter: 'blur(50px)',
              animation: 'float 15s ease-in-out infinite reverse',
            }}
          />
        </>
      )}
      <Container maxWidth="lg">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className={classes.container}
        >
          <div className={classes.titleContainer}>
            <Typography 
              variant="h4" 
              className={classes.title}
              style={{
                color: appTheme.colors.textPrimary,
                transition: 'color 0.3s ease',
              }}
            >
              Conectemos
              <span
                style={{
                  position: 'absolute',
                  bottom: '-6px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '40px',
                  height: '2px',
                  background: appTheme.colors.gradient,
                  borderRadius: '2px',
                  transition: 'background 0.3s ease',
                }}
              />
            </Typography>
            <Typography 
              variant="subtitle1" 
              className={classes.subtitle}
              style={{
                color: appTheme.colors.textSecondary,
                transition: 'color 0.3s ease',
              }}
            >
              ¡Estoy lista para colaborar en tu próximo proyecto!
            </Typography>
          </div>

          {/*<Grid container spacing={4} className={classes.infoContainer}>
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
          </Grid>*/}

          <div 
            className={classes.socialContainer}
            style={{
              background: appTheme.darkMode
                ? 'rgba(255, 0, 255, 0.03)'
                : 'linear-gradient(135deg, rgba(91, 33, 182, 0.12) 0%, rgba(245, 158, 11, 0.1) 50%, rgba(14, 165, 233, 0.08) 100%)',
              border: appTheme.darkMode
                ? '1px solid rgba(255, 0, 255, 0.1)'
                : '1px solid rgba(91, 33, 182, 0.25)',
              backdropFilter: 'blur(20px) saturate(180%)',
              boxShadow: appTheme.darkMode
                ? 'none'
                : '0 8px 32px rgba(91, 33, 182, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
              transition: 'all 0.3s ease',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Efecto de brillo animado en modo claro */}
            {!appTheme.darkMode && (
              <motion.div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: '-100%',
                  width: '100%',
                  height: '100%',
                  background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)',
                }}
                animate={{
                  left: ['-100%', '200%'],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatDelay: 2,
                  ease: 'linear',
                }}
              />
            )}
            <Typography 
              variant="h6" 
              className={classes.socialTitle}
              style={{
                color: appTheme.colors.textPrimary,
                transition: 'color 0.3s ease',
              }}
            >
              Sígueme en las redes
              <span
                style={{
                  position: 'absolute',
                  bottom: '-5px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '30px',
                  height: '2px',
                  background: appTheme.colors.gradient,
                  borderRadius: '2px',
                  transition: 'background 0.3s ease',
                }}
              />
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
                        style={{ 
                          '--hover-color': social.color,
                          background: appTheme.darkMode
                            ? 'linear-gradient(135deg, rgba(30, 42, 56, 0.4) 0%, rgba(30, 42, 56, 0.1) 100%)'
                            : 'linear-gradient(135deg, rgba(91, 33, 182, 0.1) 0%, rgba(245, 158, 11, 0.1) 100%)',
                          border: `1px solid ${appTheme.darkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(91, 33, 182, 0.2)'}`,
                          color: appTheme.colors.textPrimary,
                          transition: 'all 0.3s ease',
                        }}
                        whileHover={{ 
                          backgroundColor: appTheme.darkMode 
                            ? 'rgba(255, 255, 255, 0.1)' 
                            : 'rgba(91, 33, 182, 0.15)',
                          scale: 1.15,
                          rotate: 360,
                          boxShadow: appTheme.darkMode
                            ? '0 0 20px rgba(255, 0, 255, 0.4)'
                            : '0 0 20px rgba(91, 33, 182, 0.4)',
                        }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ duration: 0.4, type: "spring", stiffness: 200 }}
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
    padding: theme.spacing(6, 0),
    position: 'relative',
  },
  container: {
    position: 'relative',
    zIndex: 1,
  },
  titleContainer: {
    textAlign: 'center',
    marginBottom: theme.spacing(5),
  },
  title: {
    fontWeight: 500,
    textAlign: 'center',
    fontSize: '1.8rem',
    fontFamily: 'Space Grotesk, sans-serif',
    textTransform: 'uppercase',
    position: 'relative',
    marginBottom: theme.spacing(1),
    [theme.breakpoints.down('sm')]: {
      fontSize: 'clamp(1.5rem, 4vw, 1.8rem)',
      marginBottom: '0.6rem',
    },
  },
  subtitle: {
    textAlign: 'center',
    marginBottom: theme.spacing(5),
    fontSize: '1rem',
    fontFamily: 'Space Grotesk, sans-serif',
    fontWeight: '300',
    [theme.breakpoints.down('sm')]: {
      fontSize: 'clamp(0.8rem, 2.2vw, 0.9rem)',
      marginBottom: theme.spacing(3),
    },
  },
  infoContainer: {
    marginBottom: theme.spacing(6),
    [theme.breakpoints.down('sm')]: {
      marginBottom: theme.spacing(4),
    },
  },
  infoCard: {
    background: 'linear-gradient(135deg, rgba(30, 42, 56, 0.4) 0%, rgba(30, 42, 56, 0.1) 100%)',
    backdropFilter: 'blur(8px)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '12px',
    padding: theme.spacing(2.5),
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(2),
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    '&:hover': {
      transform: 'translateY(-3px)',
      boxShadow: '0 6px 14px rgba(0, 0, 0, 0.2)',
    },
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(2),
      gap: theme.spacing(1.5),
    },
  },
  infoIcon: {
    fontSize: '1.3rem',
    color: '#FF6F30',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.1rem',
    },
  },
  infoText: {
    color: '#fff',
    fontFamily: 'Space Grotesk, sans-serif',
    fontSize: '0.95rem',
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.85rem',
    },
  },
  socialContainer: {
    textAlign: 'center',
    marginTop: theme.spacing(4),
    padding: theme.spacing(3),
    borderRadius: '10px',
    backdropFilter: 'blur(5px)',
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(2),
      marginTop: theme.spacing(3),
    },
  },
  socialTitle: {
    fontFamily: 'Space Grotesk, sans-serif',
    fontSize: '1.2rem',
    marginBottom: theme.spacing(3),
    fontWeight: 600,
    position: 'relative',
    display: 'inline-block',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1rem',
      marginBottom: theme.spacing(2),
    },
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
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1.6rem',
    backdropFilter: 'blur(8px)',
    cursor: 'pointer',
    '&:hover': {
      color: 'var(--hover-color)',
      borderColor: 'var(--hover-color)',
    },
    [theme.breakpoints.down('sm')]: {
      width: '42px',
      height: '42px',
      fontSize: '1.4rem',
    },
  },
}));

export default Contact;
