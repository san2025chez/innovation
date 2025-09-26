import React from 'react';
import { makeStyles, CssBaseline } from "@material-ui/core";
import Navbar from "./components/Navbar";
import MyWork from './components/MyWork';
import Contact from './components/Contact';
import About from './components/About';
import SkillsAndTechnologies from './components/SkillsAndTechnologies';
import ContactForm from './components/ContactForm';
import AboutMe from './components/AboutMe';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Services from './components/Services'
import Profile from './components/Profile';

const theme = createTheme({
  typography: {
    fontFamily: 'Space Grotesk, sans-serif',
  },
  palette: {
    background: {
      default: '#000000',
      paper: '#000000',
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#FFFFFF',
    },
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
        <AboutMe id="aboutme" />
       {/*  <Profile id="skill"/> */}
        <SkillsAndTechnologies title="Sobre Mi" id="technology" />
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
