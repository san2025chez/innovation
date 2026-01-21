import React from 'react';
import { makeStyles } from "@material-ui/core";
import Navbar from "./components/Navbar";
import MyWork from './components/MyWork';
import Contact from './components/Contact';
import About from './components/About';
import SkillsAndTechnologies from './components/SkillsAndTechnologies';
import ContactForm from './components/ContactForm';
import AboutMe from './components/AboutMe';
import ExperienciaLaboral from './components/ExperienciaLaboral';
import Profile from './components/Profile';
import ThemeToggle from './components/ThemeToggle';
import { useTheme } from './context/ThemeContext';

function App() {
  const classes = useStyles();
  const { theme } = useTheme();

  return (
    <div 
      style={{ 
        padding: 0, 
        margin: 0,
        backgroundColor: theme.palette.background.default,
        minHeight: '100vh',
        transition: 'background-color 0.3s ease, color 0.3s ease',
      }} 
      className={classes.root}
    >
      {/* SEO: Header semántico para navegación */}
      <header role="banner">
        <Navbar />
      </header>
      
      {/* SEO: Contenido principal con estructura semántica */}
      <main role="main">
        <About title="Inicio" id="about" />
        <AboutMe id="aboutme" />
        {/* <Profile id="skill"/> */}
        <SkillsAndTechnologies title="Sobre Mi" id="technology" />
        <MyWork title="Trabajos" id="work" dark={false} />
        <ExperienciaLaboral title="Experiencia Laboral" id="servic" />
        <ContactForm title="Contáctame" id="contact" dark={true} />
        <Contact />
      </main>
      
      <ThemeToggle />
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    margin: 0,
    padding: 0,
    width: '100%',
    overflowX: 'hidden',
  },
}));

export default App;
