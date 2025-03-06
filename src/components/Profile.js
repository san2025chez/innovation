import React from 'react';
import { makeStyles } from '@material-ui/core';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCode, FaLaptopCode, FaRocket } from 'react-icons/fa';

const Profile = ({id}) => {
  const classes = useStyles();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const containerVariants = {
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

  const highlightVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const highlights = [
    {
      icon: <FaCode />,
      title: "Full-Stack Developer",
      text: "+3 años de experiencia"
    },
    {
      icon: <FaLaptopCode />,
      title: "Soluciones Innovadoras",
      text: "Tecnologías modernas"
    },
    {
      icon: <FaRocket />,
      title: "Digitalización",
      text: "Mejora de procesos"
    }
  ];

  return (
    <section className={classes.section} ref={ref} id={id}>
      <motion.div
        className={classes.container}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <div className={classes.content}>
          <motion.h2 
            className={classes.title}
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Sobre Mí
          </motion.h2>
          
          <div className={classes.highlightsContainer}>
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                className={classes.highlightCard}
                variants={highlightVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.03, translateY: -5 }}
              >
                <div className={classes.highlightIcon}>{highlight.icon}</div>
                <h3 className={classes.highlightTitle}>{highlight.title}</h3>
                <p className={classes.highlightText}>{highlight.text}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            className={classes.description}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p>
              Ingeniera Informática y Desarrolladora Full-Stack con más de 3 años de experiencia 
              en el desarrollo de sistemas y aplicaciones. Me especializo en crear soluciones 
              innovadoras y eficientes utilizando nuevas tecnologías.
            </p>
            <p>
              Mi capacidad analítica me permite resolver problemas de manera efectiva, y siempre 
              busco mejorar mis habilidades para enfrentar nuevos desafíos.
            </p>
            <div className={classes.servicesSection}>
              <h3 className={classes.servicesTitle}>Soluciones tecnológicas para:</h3>
              <ul className={classes.servicesList}>
                <motion.li whileHover={{ x: 10, color: '#FF6F30' }}>Digitalizar tu negocio o servicio</motion.li>
                <motion.li whileHover={{ x: 10, color: '#FF6F30' }}>Desarrollar un nuevo proyecto</motion.li>
                <motion.li whileHover={{ x: 10, color: '#FF6F30' }}>Mejorar tus procesos</motion.li>
              </ul>
            </div>
            <p className={classes.closingText}>
              Estoy disponible para trabajar con empresas, proyectos personales o emprendimientos. 
              ¡Estoy emocionada de colaborar contigo y hacer realidad tus ideas!
            </p>
          </motion.div>
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
      padding: theme.spacing(6, 2),
    },
  },
  container: {
    width: '100%',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  content: {
    background: 'linear-gradient(135deg, rgba(30, 42, 56, 0.4) 0%, rgba(30, 42, 56, 0.1) 100%)',
    backdropFilter: 'blur(8px)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '24px',
    padding: theme.spacing(4),
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(3, 2),
    },
  },
  title: {
    textAlign: 'center',
    fontSize: '2.5rem',
    fontWeight: 700,
    marginBottom: theme.spacing(4),
    fontFamily: 'Space Grotesk, sans-serif',
    background: 'linear-gradient(135deg, rgb(255, 0, 255), #FF6F30)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    position: 'relative',
    '&:after': {
      content: '""',
      position: 'absolute',
      bottom: '-10px',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '60px',
      height: '3px',
      background: 'linear-gradient(90deg, rgb(255, 0, 255), #FF6F30)',
      borderRadius: '2px',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '2rem',
      marginBottom: theme.spacing(3),
    },
  },
  highlightsContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: theme.spacing(3),
    marginBottom: theme.spacing(4),
    [theme.breakpoints.down('sm')]: {
      gap: theme.spacing(2),
      marginBottom: theme.spacing(3),
    },
  },
  highlightCard: {
    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)',
    borderRadius: '16px',
    padding: theme.spacing(3),
    textAlign: 'center',
    transition: 'all 0.3s ease',
    border: '1px solid rgba(255, 255, 255, 0.05)',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
  },
  highlightIcon: {
    fontSize: '2.5rem',
    marginBottom: theme.spacing(1.5),
    background: 'linear-gradient(135deg, rgb(255, 0, 255), #FF6F30)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  highlightTitle: {
    color: '#fff',
    fontSize: '1.25rem',
    fontWeight: 600,
    marginBottom: theme.spacing(0.5),
    fontFamily: 'Space Grotesk, sans-serif',
  },
  highlightText: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: '0.9rem',
    lineHeight: 1.4,
  },
  description: {
    color: 'rgba(255, 255, 255, 0.9)',
    fontSize: '1rem',
    fontFamily: 'Space Grotesk, sans-serif',
    lineHeight: 1.6,
    '& p': {
      marginBottom: theme.spacing(2),
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.95rem',
    },
  },
  servicesSection: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    padding: theme.spacing(2),
    background: 'rgba(255, 255, 255, 0.03)',
    borderRadius: '12px',
    border: '1px solid rgba(255, 255, 255, 0.05)',
  },
  servicesTitle: {
    color: '#fff',
    fontSize: '1.1rem',
    fontWeight: 600,
    marginBottom: theme.spacing(1.5),
    fontFamily: 'Space Grotesk, sans-serif',
  },
  servicesList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    '& li': {
      color: 'rgba(255, 255, 255, 0.9)',
      fontSize: '1rem',
      marginBottom: theme.spacing(1),
      paddingLeft: theme.spacing(2),
      position: 'relative',
      transition: 'all 0.3s ease',
      cursor: 'default',
      '&:before': {
        content: '"→"',
        position: 'absolute',
        left: 0,
        color: 'rgb(255, 0, 255)',
      },
    },
  },
  closingText: {
    color: 'rgba(255, 255, 255, 0.9)',
    fontSize: '1rem',
    lineHeight: 1.6,
    marginTop: theme.spacing(2),
    padding: theme.spacing(2),
    borderLeft: '3px solid rgb(255, 0, 255)',
    background: 'rgba(255, 0, 255, 0.05)',
    borderRadius: '0 8px 8px 0',
  },
}));

export default Profile;
