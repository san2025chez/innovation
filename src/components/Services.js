import React from 'react';
import { makeStyles, Grid, Typography, Dialog, DialogContent, IconButton, useTheme, useMediaQuery } from '@material-ui/core';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaDesktop, FaShoppingCart, FaCode, FaDatabase } from 'react-icons/fa';
import { SiTypescript } from 'react-icons/si';
import CloseIcon from '@material-ui/icons/Close';
import { SectionTitle } from './common/SectionTitle';

const useStyles = makeStyles((theme) => ({
  section: {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)',
    padding: theme.spacing(8, 4),
    color: '#FFFFFF',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(4, 2),
    },
    '@media (max-height: 667px)': {
      padding: theme.spacing(3, 2),
      minHeight: 'auto',
    },
  },
  titleContainer: {
    textAlign: 'center',
    marginBottom: theme.spacing(8),
    [theme.breakpoints.down('sm')]: {
      marginBottom: theme.spacing(4),
    },
    '@media (max-height: 667px)': {
      marginBottom: theme.spacing(3),
    },
  },
  title: {
    fontFamily: 'Space Grotesk, sans-serif',
    fontWeight: 700,
    fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
    marginBottom: theme.spacing(2),
    background: 'linear-gradient(135deg, rgb(255, 0, 255), #FF6F30)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    '@media (max-height: 667px)': {
      marginBottom: theme.spacing(1.5),
    },
  },
  subtitle: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontFamily: 'Space Grotesk, sans-serif',
    fontSize: 'clamp(0.9rem, 2.5vw, 1.1rem)',
    '@media (max-height: 667px)': {
      fontSize: 'clamp(0.8rem, 2vw, 1rem)',
    },
  },
  gridContainer: {
    width: '100%',
    maxWidth: '1400px',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: theme.spacing(4),
    padding: theme.spacing(2),
    [theme.breakpoints.down('md')]: {
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: theme.spacing(3),
    },
    [theme.breakpoints.down('sm')]: {
      gridTemplateColumns: '1fr',
      gap: theme.spacing(2.5),
    },
    '@media (max-height: 667px)': {
      gap: theme.spacing(2),
      transform: 'scale(0.92)',
      transformOrigin: 'top center',
    },
    '@media (max-height: 568px)': {
      transform: 'scale(0.85)',
    },
  },
  cardContainer: {
    width: '100%',
    aspectRatio: '1',
    [theme.breakpoints.down('sm')]: {
      aspectRatio: '0.9',
    },
    '@media (max-height: 667px)': {
      aspectRatio: '0.8',
    },
  },
  card: {
    height: '100%',
    padding: theme.spacing(3),
    backgroundColor: 'rgba(30, 42, 56, 0.4)',
    backdropFilter: 'blur(10px)',
    background: 'linear-gradient(135deg, rgba(30, 42, 56, 0.4) 0%, rgba(30, 42, 56, 0.1) 100%)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    textAlign: 'center',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    cursor: 'pointer',
    overflow: 'hidden',
    position: 'relative',
    minHeight: '320px',
    fontFamily: 'Space Grotesk, sans-serif',
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(2.5),
      minHeight: '280px',
    },
    '@media (max-height: 667px)': {
      padding: theme.spacing(2),
      minHeight: '250px',
    },
    '@media (max-height: 568px)': {
      padding: theme.spacing(1.5),
      minHeight: '220px',
    },
  },
  cardGlow: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'radial-gradient(circle at 50% 0%, rgba(255, 0, 255, 0.2), transparent 70%)',
    opacity: 0,
    transition: 'opacity 0.4s ease',
    pointerEvents: 'none',
  },
  icon: {
    fontSize: 'clamp(2rem, 4vw, 3rem)',
    marginBottom: theme.spacing(2.5),
    color: '#fff',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    background: 'linear-gradient(135deg, rgb(255, 0, 255), #FF6F30)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    '@media (max-height: 667px)': {
      marginBottom: theme.spacing(2),
      fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)',
    },
  },
  serviceTitle: {
    color: '#fff',
    fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)',
    fontWeight: 600,
    marginBottom: theme.spacing(2),
    fontFamily: 'Space Grotesk, sans-serif',
    '@media (max-height: 667px)': {
      marginBottom: theme.spacing(1.5),
      fontSize: 'clamp(1rem, 2vw, 1.2rem)',
    },
  },
  description: {
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: 'clamp(0.85rem, 2vw, 1.6rem)',
    lineHeight: 1.6,
    fontWeight: 300,
    marginBottom: theme.spacing(2),
    fontFamily: 'Space Grotesk, sans-serif',
    '@media (max-height: 667px)': {
      lineHeight: 1.4,
      marginBottom: theme.spacing(1.5),
      fontSize: 'clamp(0.8rem, 1.8vw, 0.9rem)',
    },
  },
  dialog: {
    '& .MuiDialog-paper': {
      backgroundColor: '#1a1a1a',
      borderRadius: '20px',
      overflow: 'hidden',
      maxWidth: 600,
    },
  },
  dialogContent: {
    padding: theme.spacing(4),
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(2),
      paddingBottom: theme.spacing(4),
    },
    '@media (max-height: 667px)': {
      padding: theme.spacing(2),
    },
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(2),
    top: theme.spacing(2),
    color: '#fff',
    zIndex: 1,
    '&:hover': {
      background: 'rgba(255, 255, 255, 0.1)',
    },
  },
  dialogTitle: {
    color: '#fff',
    fontFamily: 'Space Grotesk, sans-serif',
    fontWeight: 600,
    fontSize: 'clamp(1.2rem, 3vw, 1.5rem)',
    marginBottom: theme.spacing(2),
    background: 'linear-gradient(135deg, rgb(255, 0, 255), #FF6F30)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    '@media (max-height: 667px)': {
      marginBottom: theme.spacing(1.5),
    },
  },
  dialogDescription: {
    color: 'rgba(255, 255, 255, 0.8)',
    fontFamily: 'Space Grotesk, sans-serif',
    fontSize: 'clamp(0.85rem, 2vw, 1rem)',
    lineHeight: 1.8,
    '@media (max-height: 667px)': {
      lineHeight: 1.6,
    },
  },
}));

const services = [
  { 
    title: 'Aplicaciones Web', 
    description: 'Diseño y desarrollo de aplicaciones web personalizadas que simplifican tus procesos, aumentan tu eficiencia y te ayudan a destacar en tu sector.', 
    icon: <FaDesktop />,
    details: 'Desarrollo aplicaciones web modernas y escalables utilizando las últimas tecnologías y mejores prácticas. Desde aplicaciones empresariales hasta plataformas SaaS.'
  },
  { 
    title: 'E-Commerce', 
    description: 'Diseño y desarrollo tiendas en línea completas que maximizan las ventas y facilitan una experiencia de compra intuitiva y segura para tus clientes.', 
    icon: <FaShoppingCart />,
    details: 'Implementación de soluciones e-commerce personalizadas con integración de pagos, gestión de inventario y análisis de datos para optimizar las ventas.'
  },
  { 
    title: 'Landing Pages', 
    description: 'Creo landing pages optimizadas que capturan leads y convierten visitantes en clientes, ayudando a alcanzar tus objetivos de marketing y ventas.', 
    icon: <FaDesktop />,
    details: 'Diseño de landing pages de alto impacto con enfoque en la conversión, optimización SEO y experiencia de usuario excepcional.'
  },
  { 
    title: 'Software a Medida', 
    description: 'Realizo software a medida que se adapta a tus requerimientos, ofreciendo soluciones personalizadas que optimizan tus procesos y mejoran la eficiencia de tu negocio.', 
    icon: <FaCode />,
    details: 'Desarrollo de soluciones de software personalizadas que se adaptan perfectamente a tus necesidades específicas y flujos de trabajo.'
  },
  { 
    title: 'Actualización y Optimización', 
    description: 'Realizo actualizaciones y optimizaciones para mejorar el rendimiento de tus sistemas, garantizando que estén al día con las últimas características y correcciones de seguridad.', 
    icon: <SiTypescript />,
    details: 'Modernización de aplicaciones existentes, mejora de rendimiento y actualización de seguridad para mantener tu software competitivo.'
  },
  { 
    title: 'Consultoría en Arquitectura', 
    description: 'Ofrezco asesoramiento experto para diseñar arquitecturas de software robustas y escalables que satisfagan tus necesidades actuales y futuras.', 
    icon: <FaDatabase />,
    details: 'Asesoramiento en arquitectura de software, patrones de diseño y mejores prácticas para construir sistemas escalables y mantenibles.'
  },
];

const Services = ({ title, id }) => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
  const cardVariants = {
    hidden: { 
      opacity: 0,
      y: 50,
      scale: 0.95
    },
    visible: { 
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        duration: 0.6
      }
    }
  };

  return (
    <section className={classes.section} id={id}>
      <SectionTitle
        title={title}
        subtitle="Soluciones tecnológicas adaptadas a tus necesidades"
      />
      
      <div className={classes.gridContainer}>
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            custom={index}
          >
            <div className={classes.card}>
              <div className={classes.cardGlow} />
              <motion.div
                className={classes.icon}
                whileHover={{
                  scale: 1.1,
                  rotate: [0, -10, 10, -10, 0],
                  transition: { duration: 0.5 }
                }}
              >
                {service.icon}
              </motion.div>
              <Typography variant="h3" className={classes.serviceTitle}>
                {service.title}
              </Typography>
              <Typography className={classes.description}>
                {service.description}
              </Typography>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{ marginTop: 'auto' }}
              >
                <Typography
                  variant="body2"
                  style={{
                    color: 'rgb(255, 0, 255)',
                    fontWeight: 500,
                    cursor: 'pointer',
                  }}
                >
                  Saber más →
                </Typography>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
