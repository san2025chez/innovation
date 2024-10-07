import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import DesktopAbout from './DesktopAbout'; // Importa el componente de escritorio
import MobileAbout from './MobileAbout'; // Importa el componente móvil
import Navbar from './Navbar';

const About = ({ id }) => {
  const classes = useStyles();
  const [isMobile, setIsMobile] = useState(false);

  const checkIfMobile = () => {
    setIsMobile(window.innerWidth < 860);
  };

  useEffect(() => {
    checkIfMobile(); // Verificar al cargar el componente
    window.addEventListener('resize', checkIfMobile); // Escuchar cambios en el tamaño de la ventana

    return () => window.removeEventListener('resize', checkIfMobile); // Limpiar el evento al desmontar
  }, []);

  return (
    <div> 
    <Navbar className={classes.navbar} /> 
    <div className={`${classes.section} ${isMobile ? classes.mobileSection : ''}`} id={id}>
    
      {isMobile ? <MobileAbout /> : <DesktopAbout />}
    </div>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  navbar: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    zIndex: 10, //
    backgroundColor: 'transparent',
    // ... otros estilos para el Navbar
  },
  section: {
  
    textAlign: 'center',
 padding: theme.spacing(1),
    height: '100vh',
    backgroundColor: "#000000", // Negro
    [theme.breakpoints.down('sm')]: { // Para pantallas pequeñas (menor a 600px)
   
      height: '100vh',
   
   
    },
 
  },
}));

export default About;
