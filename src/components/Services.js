import React from 'react';
import { makeStyles, Grid, Typography, Dialog, DialogContent, IconButton } from '@material-ui/core';
import { Card, CardContent } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import { FaDesktop, FaShoppingCart, FaCode,FaCss3Alt,FaDatabase } from 'react-icons/fa';
import { GiSettingsKnobs } from 'react-icons/gi';
import { SiTypescript } from 'react-icons/si';
import CloseIcon from '@material-ui/icons/Close';

// Define styles using makeStyles
const useStyles = makeStyles((theme) => ({
  section: {
    padding: theme.spacing(4),
    backgroundColor: '#000000', // Fondo negro
    color: '#FFFFFF', // Texto blanco
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(2),
    },
  },
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: theme.spacing(4),
    fontSize: '2rem',
    fontFamily: 'Space Grotesk, sans-serif',
    textTransform: 'uppercase',
  },
  titles: {
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: theme.spacing(2),
    fontSize: '1rem',
    fontFamily: 'Space Grotesk, sans-serif',
    textTransform: 'uppercase',
  },
  gridContainer: {
    maxWidth: '1200px',
    width: '100%',
    padding: '0 16px',
    margin: '0 auto',
  },
  cardContainer: {
    padding: '8px',
    textAlign: 'center',
  },
  icon: {
    fontSize: '3rem',
    color: '#007ACC', // Azul eléctrico para iconos
    marginBottom: '1rem',
  },
  description: {
    fontSize: '1rem',
    lineHeight: '1.5',
    color: '#E0E0E0', // Descripción en gris claro
    fontFamily: 'Space Grotesk, sans-serif',
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.6rem', // Reduce el tamaño de fuente para pantallas pequeñas
    },
  },
  dialog: {
    '& .MuiDialog-paper': {
      padding: theme.spacing(2),
      backgroundColor: '#000000', // Fondo del diálogo
      color: '#FFFFFF', // Texto del diálogo
    },
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
  },
}));

// Define styled components
const CardStyled = styled(Card)(({ theme }) => ({
  backgroundColor: '#1E2A38', // Fondo de la tarjeta
  color: '#FFFFFF', // Texto blanco
  borderRadius: '16px',
  boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: '0 12px 24px rgba(0, 0, 0, 0.4)',
    border: `2px solid #FF6F30`, // Naranja brillante en hover
  },
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  height: '100%',
  padding: '16px',
  fontFamily: 'Space Grotesk, sans-serif',
}));

const IconStyled = styled('div')(({ theme }) => ({
  fontSize: '3rem',
  color: "#007ACC", // Color del icono
  marginBottom: '1rem',
}));

const Description = styled(Typography)(({ theme }) => ({
  fontSize: '1rem',
  lineHeight: '1.5',
  color: '#E0E0E0', // Descripción en gris claro
  textAlign: 'center',
}));

const services = [
  { 
    title: 'Desarrollo de Aplicaciones Web', 
    description: 'Desarrollo aplicaciones web innovadoras y dinámicas que proporcionan una experiencia de usuario excepcional y soluciones eficientes a tus necesidades digitales.', 
    icon: <FaDesktop /> 
  },
  { 
    title: 'Desarrollo de E-Commerce', 
    description: 'Diseño y desarrollo tiendas en línea completas que maximizan las ventas y facilitan una experiencia de compra intuitiva y segura para tus clientes.', 
    icon: <FaShoppingCart /> 
  },
  { 
    title: 'Desarrollo de Landing Pages', 
    description: 'Creo landing pages optimizadas que capturan leads y convierten visitantes en clientes, ayudando a alcanzar tus objetivos de marketing y ventas.', 
    icon: <FaDesktop /> 
  },
  { 
    title: 'Desarrollo de Software a Medida', 
    description: 'Realizo software a medida que se adapta perfectamente a tus requerimientos específicos, ofreciendo soluciones personalizadas que optimizan tus procesos y mejoran la eficiencia de tu negocio.', 
    icon: <FaCode /> 
  },

  { 
    title: 'Actualización y Optimización de Sistemas', 
    description: 'Realizo actualizaciones y optimizaciones para mejorar el rendimiento de tus sistemas, garantizando que estén al día con las últimas características y correcciones de seguridad.', 
    icon: <SiTypescript /> 
  },
  { 
    title: 'Consultoría en Arquitectura de Software', 
    description: 'Ofrezco asesoramiento experto para diseñar arquitecturas de software robustas y escalables que satisfagan tus necesidades actuales y futuras.', 
    icon: <FaDatabase /> 
  },
];

export const Services = ({ title, id }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [selectedService, setSelectedService] = React.useState(null);

  const handleOpen = (service) => {
    setSelectedService(service);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedService(null);
  };

  return (
    <div className={classes.section} id={id}>
      <Typography variant="h5" className={classes.title}>
        {title || 'SERVICIOS'}
      </Typography>
      <div className={classes.gridContainer}>
        <Grid container spacing={3}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={3} key={index} className={classes.cardContainer}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <CardStyled>
                  <CardContent>
                    <IconStyled>{service.icon}</IconStyled>
                    <Typography variant="h5" className={classes.titles}>
                      {service.title}
                    </Typography>
                    <Description>
                      {service.description}
                    </Description>
                  </CardContent>
                </CardStyled>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </div>
      {selectedService && (
        <Dialog
          open={open}
          onClose={handleClose}
          fullWidth
          maxWidth="md"
          className={classes.dialog}
        >
          <DialogContent>
            <IconButton edge="end" color="inherit" onClick={handleClose} className={classes.closeButton}>
              <CloseIcon />
            </IconButton>
            <Typography variant="h4" className={classes.title}>
              {selectedService.title}
            </Typography>
            <Typography className={classes.description}>
              {selectedService.description}
            </Typography>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};
