import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import DesktopAbout from './DesktopAbout'; // Importa el componente de escritorio
import MobileAbout from './MobileAbout'; // Importa el componente móvil

const About = ({ id }) => {
  const classes = useStyles();
  const [isMobile, setIsMobile] = useState(false);

  const checkIfMobile = () => {
    setIsMobile(window.innerWidth < 600);
  };

  useEffect(() => {
    checkIfMobile(); // Verificar al cargar el componente
    window.addEventListener('resize', checkIfMobile); // Escuchar cambios en el tamaño de la ventana

    return () => window.removeEventListener('resize', checkIfMobile); // Limpiar el evento al desmontar
  }, []);

  return (
    <div className={`${classes.section} ${isMobile ? classes.mobileSection : ''}`} id={id}>
      {isMobile ? <MobileAbout /> : <DesktopAbout />}
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  section: {
    paddingTop: '50px',
    textAlign: 'center',
    padding: theme.spacing(5),
    backgroundColor: "#000000", // Negro
    [theme.breakpoints.down('sm')]: { // Para pantallas pequeñas (menor a 600px)
      padding: theme.spacing(2), 
   
    },
    mobileSection: { // Additional class for mobile-specific styling (optional)
      height: '100vh', // Optional: Set full height for mobile
    }
  },
}));

export default About;
