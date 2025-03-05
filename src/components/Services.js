import React from 'react';
import { makeStyles, Grid, Typography, Dialog, DialogContent, IconButton, useTheme, useMediaQuery } from '@material-ui/core';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaDesktop, FaShoppingCart, FaCode, FaDatabase } from 'react-icons/fa';
import { SiTypescript } from 'react-icons/si';
import CloseIcon from '@material-ui/icons/Close';

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
  },
  titleContainer: {
    textAlign: 'center',
    marginBottom: theme.spacing(8),
    [theme.breakpoints.down('sm')]: {
      marginBottom: theme.spacing(4),
    },
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
  gridContainer: {
    width: '100%',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  cardContainer: {
    height: '100%',
    minHeight: 320,
    [theme.breakpoints.down('sm')]: {
      minHeight: 280,
    },
  },
  card: {
    height: '100%',
    padding: theme.spacing(4),
    backgroundColor: 'transparent',
    backdropFilter: 'blur(8px)',
    background: 'linear-gradient(135deg, rgba(30, 42, 56, 0.4) 0%, rgba(30, 42, 56, 0.1) 100%)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    transition: 'all 0.3s ease-in-out',
    cursor: 'pointer',
    overflow: 'hidden',
    position: 'relative',
    '&:hover': {
      transform: 'translateY(-5px)',
      background: 'linear-gradient(135deg, rgba(255, 0, 255, 0.1) 0%, rgba(255, 111, 48, 0.1) 100%)',
      boxShadow: '0 10px 20px rgba(255, 0, 255, 0.1)',
      '& $cardGlow': {
        opacity: 1,
      },
    },
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(3),
    },
  },
  cardGlow: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'radial-gradient(circle at 50% 50%, rgba(255, 0, 255, 0.15), transparent 70%)',
    opacity: 0,
    transition: 'opacity 0.3s ease',
    pointerEvents: 'none',
  },
  icon: {
    fontSize: '3rem',
    marginBottom: theme.spacing(2),
    background: 'linear-gradient(135deg, rgb(255, 0, 255), #FF6F30)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    [theme.breakpoints.down('sm')]: {
      fontSize: '2.5rem',
    },
  },
  serviceTitle: {
    color: '#fff',
    fontFamily: 'Space Grotesk, sans-serif',
    fontWeight: 600,
    fontSize: '1.25rem',
    marginBottom: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.1rem',
    },
  },
  description: {
    color: 'rgba(255, 255, 255, 0.8)',
    fontFamily: 'Space Grotesk, sans-serif',
    fontSize: '0.95rem',
    lineHeight: 1.6,
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.9rem',
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
    fontSize: '1.5rem',
    marginBottom: theme.spacing(2),
    background: 'linear-gradient(135deg, rgb(255, 0, 255), #FF6F30)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  dialogDescription: {
    color: 'rgba(255, 255, 255, 0.8)',
    fontFamily: 'Space Grotesk, sans-serif',
    fontSize: '1rem',
    lineHeight: 1.8,
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

export const Services = ({ title, id }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [selectedService, setSelectedService] = React.useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { 
      opacity: 0,
      y: 50,
      scale: 0.9
    },
    visible: { 
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        duration: 0.5
      }
    }
  };

  const handleOpen = (service) => {
    setSelectedService(service);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedService(null);
  };

  return (
    <section className={classes.section} id={id} ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className={classes.titleContainer}
      >
        <Typography variant="h2" className={classes.title}>
          {title || 'Servicios'}
        </Typography>
        <Typography variant="subtitle1" className={classes.subtitle}>
          Soluciones digitales profesionales para tu negocio
        </Typography>
      </motion.div>

      <motion.div
        className={classes.gridContainer}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <motion.div
                className={classes.cardContainer}
                variants={cardVariants}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div 
                  className={classes.card}
                  onClick={() => handleOpen(service)}
                >
                  <div className={classes.cardGlow} />
                  <div className={classes.icon}>{service.icon}</div>
                  <Typography variant="h6" className={classes.serviceTitle}>
                    {service.title}
                  </Typography>
                  <Typography className={classes.description}>
                    {service.description}
                  </Typography>
                </div>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </motion.div>

      <Dialog
        open={open}
        onClose={handleClose}
        className={classes.dialog}
        fullWidth
        maxWidth="sm"
        TransitionComponent={motion.div}
        TransitionProps={{
          initial: { opacity: 0, y: 50 },
          animate: { opacity: 1, y: 0 },
          exit: { opacity: 0, y: 50 },
          transition: { duration: 0.3 }
        }}
      >
        <DialogContent className={classes.dialogContent}>
          <IconButton 
            className={classes.closeButton}
            onClick={handleClose}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
          <AnimatePresence>
            {selectedService && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className={classes.icon}>{selectedService.icon}</div>
                <Typography variant="h4" className={classes.dialogTitle}>
                  {selectedService.title}
                </Typography>
                <Typography className={classes.dialogDescription}>
                  {selectedService.details}
                </Typography>
              </motion.div>
            )}
          </AnimatePresence>
        </DialogContent>
      </Dialog>
    </section>
  );
};
