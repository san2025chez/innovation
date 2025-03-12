import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Container, useTheme, useMediaQuery } from '@material-ui/core';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const useStyles = makeStyles((theme) => ({
  section: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)',
    padding: theme.spacing(4),
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(2),
    },
  },
  container: {
    maxWidth: '1200px',
    width: '100%',
    position: 'relative',
    zIndex: 1,
  },
  content: {
    backgroundColor: 'rgba(30, 42, 56, 0.4)',
    backdropFilter: 'blur(10px)',
    borderRadius: '24px',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    padding: theme.spacing(6),
    position: 'relative',
    overflow: 'hidden',
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(4),
    },
  },
  title: {
    color: '#fff',
    fontSize: '2.5rem',
    fontWeight: 700,
    marginBottom: theme.spacing(4),
    textAlign: 'center',
    fontFamily: 'Space Grotesk, sans-serif',
    background: 'linear-gradient(135deg, rgb(255, 0, 255), #FF6F30)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    [theme.breakpoints.down('sm')]: {
      fontSize: '2rem',
      marginBottom: theme.spacing(3),
    },
  },
  description: {
    color: 'rgba(255, 255, 255, 0.9)',
    fontSize: '1.2rem',
    lineHeight: 1.8,
    marginBottom: theme.spacing(4),
    textAlign: 'justify',
    maxWidth: '800px',
    margin: '0 auto',
    position: 'relative',
    zIndex: 2,
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.1rem',
      lineHeight: 1.6,
    },
  },
  highlight: {
    color: '#FF6F30',
    fontWeight: 600,
  },
  glow: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '150%',
    height: '150%',
    background: 'radial-gradient(circle, rgba(255, 0, 255, 0.1) 0%, transparent 70%)',
    opacity: 0.5,
    pointerEvents: 'none',
    zIndex: 1,
  },
}));

const Profile = ({ title, id }) => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const contentVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className={classes.section} id={id}>
      <Container className={classes.container}>
        <motion.div
          ref={ref}
          variants={contentVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className={classes.content}
        >
          <div className={classes.glow} />
          <Typography variant="h2" className={classes.title}>
            {title || 'Acerca de Mí'}
          </Typography>
          <Typography className={classes.description}>
            Soy un apasionado desarrollador de software con experiencia en la creación de soluciones digitales innovadoras. 
            Mi enfoque se centra en construir aplicaciones web modernas y eficientes que no solo cumplan con los requisitos técnicos, 
            sino que también proporcionen una experiencia excepcional al usuario.
          </Typography>
          <Typography className={classes.description}>
            Me especializo en el desarrollo web utilizando las últimas tecnologías y mejores prácticas. 
            Mi objetivo es crear soluciones que no solo resuelvan problemas, sino que también sean escalables, 
            mantenibles y estén preparadas para el futuro.
          </Typography>
          <Typography className={classes.description}>
            Constantemente me mantengo actualizado con las últimas tendencias y tecnologías en el desarrollo web, 
            lo que me permite ofrecer soluciones modernas y eficientes para cada proyecto.
          </Typography>
        </motion.div>
      </Container>
    </section>
  );
};

export default Profile;
