import React from 'react';
import { makeStyles, CssBaseline } from "@material-ui/core";
import Navbar from "./components/Navbar";
import MyWork from './components/MyWork';
import Contact from './components/Contact';
import About from './components/About';
import Skills from "./components/Skills";
import ContactForm from './components/ContactForm';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import {Services} from './components/Services'
const theme = createTheme({
  
    typography: {
      fontSize: 16,   
   // Tamaño de fuente base
    },

});

function App() {
  const classes = useStyles();

  return (
    <>
      <CssBaseline /> {/* Normaliza los estilos y asegura una base consistente */}
      <div style={{ padding:0, margin:0}} className={classes.root}>
        <Navbar />
        <About title="Inicio" id="about" />
        <Skills title="Sobre Mi" id="skill" dark={"#00BFA5"} />
        <MyWork title="Trabajos" id="work" dark={false} />
         <Services title="Servicios" id="servic" dark={false} />
   <ContactForm title="Contáctame" id="contact" dark={true} />
        <Contact />
      </div>
    </>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#000000',
  
    display: 'flex',
    flexDirection: 'column',
    margin: 0,
    padding: 0,
    [theme.breakpoints.down('xs')]: {
      // Estilos específicos para dispositivos móviles
      backgroundColor: '#000000',
      margin: 0,
      padding: 0,
    },
    [theme.breakpoints.up('md')]: {
      // Estilos específicos para dispositivos de escritorio
      backgroundColor: '#000000', // Elimina la capa de color azul marino
      margin: 0,
      padding: 0,
    },
  },
  navbar: {
    position: 'fixed', // Ensures the navbar stays fixed at the top
    top: 0,
    left: 0,
    width: '100%',

    zIndex: 1000, // Assigns a high z-index to position it above other elements
  },
}));

export default App;

