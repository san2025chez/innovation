import React from 'react';
import { makeStyles, Grid, Typography, Dialog, DialogContent, IconButton } from '@material-ui/core';
import { Card, CardContent } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import { FaDesktop, FaShoppingCart, FaCode, FaDatabase } from 'react-icons/fa';
import { SiTypescript } from 'react-icons/si';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles((theme) => ({
  section: {
    padding: theme.spacing(3),
    backgroundColor: '#000000',
    color: '#FFFFFF',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: '500px',
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(1),
      minHeight: '250px',
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
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.9rem',
    },
  },
  gridContainer: {
    maxWidth: '1200px',
    width: '100%',
    padding: '0 8px',
    margin: '0 auto',
    [theme.breakpoints.down('sm')]: {
      padding: '0 25px',
      paddingTop: '0px',
    },
    '& .MuiGrid-spacing-xs-3 > .MuiGrid-item': {
      paddingTop: '0px',
      paddinbgBottom: '0px',
    },
  },
  cardContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    height: '300px',
    [theme.breakpoints.down('sm')]: {
      height: '300px',
      marginBottom: theme.spacing(1),
      padding: '20px',
    },
  },
  icon: {
    fontSize: '3rem',
    color: '#007ACC',
    marginBottom: '1rem',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.5rem',
    },
  },
  description: {
    fontSize: '0.9rem',
    lineHeight: '1.5',
    color: '#E0E0E0',
    fontFamily: 'Space Grotesk, sans-serif',
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.6rem',
    },
  },
  dialog: {
    '& .MuiDialog-paper': {
      padding: theme.spacing(2),
      backgroundColor: '#000000',
      color: '#FFFFFF',
    },
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
  },
}));

const CardStyled = styled(Card)(({ theme }) => ({
  backgroundColor: '#1E2A38',
  color: '#FFFFFF',
  borderRadius: '16px',
  boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    boxShadow: '0 12px 24px rgba(0, 0, 0, 0.4)',
    border: `2px solid #FF6F30`,
  },
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  height: '100%',
  padding: '14px',
  fontFamily: 'Space Grotesk, sans-serif',
  [theme.breakpoints.down('sm')]: {
    paddingRight: '15px',
    paddingLeft: '15px',
    width: '100%',
  },
}));

const IconStyled = styled('div')(({ theme }) => ({
  fontSize: '2.3rem',
  color: "#007ACC",
  marginBottom: '1rem',
  [theme.breakpoints.down('sm')]: {
    fontSize: '2.0rem',
  },
}));

const Description = styled(Typography)(({ theme }) => ({
  fontSize: '0.9rem',
  lineHeight: '1.5',
  color: '#E0E0E0',
  textAlign: 'center',
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.8rem',
  },
}));

const services = [
  { 
    title: 'Aplicaciones Web', 
    description: 'Diseño y desarrollo de aplicaciones web personalizadas que simplifican tus procesos, aumentan tu eficiencia y te ayudan a destacar en tu sector.', 
    icon: <FaDesktop /> 
  },
  { 
    title: 'E-Commerce', 
    description: 'Diseño y desarrollo tiendas en línea completas que maximizan las ventas y facilitan una experiencia de compra intuitiva y segura para tus clientes.', 
    icon: <FaShoppingCart /> 
  },
  { 
    title: 'Landing Pages', 
    description: 'Creo landing pages optimizadas que capturan leads y convierten visitantes en clientes, ayudando a alcanzar tus objetivos de marketing y ventas.', 
    icon: <FaDesktop /> 
  },
  { 
    title: 'Software a Medida', 
    description: 'Realizo software a medida que se adapta a tus requerimientos, ofreciendo soluciones personalizadas que optimizan tus procesos y mejoran la eficiencia de tu negocio.', 
    icon: <FaCode /> 
  },
  { 
    title: 'Actualización y Optimización', 
    description: 'Realizo actualizaciones y optimizaciones para mejorar el rendimiento de tus sistemas, garantizando que estén al día con las últimas características y correcciones de seguridad.', 
    icon: <SiTypescript /> 
  },
  { 
    title: 'Consultoría en Arquitectura', 
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
            <Grid item xs={12} sm={6} md={4} key={index} className={classes.cardContainer}>
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: 'easeInOut' }}
                viewport={{ once: true, amount: 0.2 + (index * 0.1) }}
                whileHover={{ scale: 1.05 }}
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
    </div>
  );
};


