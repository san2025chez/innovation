import React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { motion } from 'framer-motion';
import { CardMedia } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import Typography from '@mui/material/Typography';

// Image imports
import node from '../img/node10.png';
import css from '../img/icons8.png';
import javascript from '../img/js8.png';
import mongo from '../img/mongo8.png';
import mysql from '../img/mysql8.png';
import html from '../img/html8.png';
import react from '../img/react8.png';
import git from '../img/git9.png';
import ts from '../img/ts9.png';
import pg from '../img/postgres8.png';
import express from '../img/ex8.png';
import nest from '../img/nest8.png';

const technologies = [
  { img: node, name: 'Node.js' },
  { img: css, name: 'CSS' },
  { img: javascript, name: 'JavaScript' },
  { img: mongo, name: 'MongoDB' },
  { img: mysql, name: 'MySQL' },
  { img: html, name: 'HTML' },
  { img: react, name: 'React' },
  { img: git, name: 'Git' },
  { img: ts, name: 'TypeScript' },
  { img: pg, name: 'PostgreSQL' },
  { img: express, name: 'Express' },
  { img: nest, name: 'Nest' },
];

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#000000',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  color: '#E0E0E0',
  fontFamily: 'Space Grotesk, sans-serif',
}));

const StyledGrid = styled(Grid)(({ theme }) => ({
  '.MuiGrid-item': {
    paddingLeft: 16,
    textAlign: 'justify',
  },
}));

const useStyles = makeStyles((theme) => ({
  box1: {
    backgroundColor: '#000000',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(4),
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(1),
    },
  },
  techName: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: '#FFFFFF',
    fontSize: window.innerWidth > 600 ? '1.0rem' : '0.9rem',
    lineHeight: '1.8',
    fontFamily: 'Space Grotesk, sans-serif',
    fontWeight: '150',
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.8rem',
    },
  },
  image: {
    width: 50,
    height: 50,
    margin: 'auto',
  },
  justifiedText: {
    textAlign: 'justify',
    fontFamily: 'Space Grotesk',
  },
}));

const TechnologyGrid = ({ technologies, classes }) => (
  <Grid container spacing={2}>
    {technologies.map((tech, index) => (
      <Grid item xs={4} sm={3} md={2} key={index}>
        <motion.div
          whileHover={{ scale: 1.1, rotateY: 360 }}
          whileTap={{ rotateY: 360 }}
          transition={{ duration: 2 }}
        >
          <CardMedia image={tech.img} className={classes.image} />
        </motion.div>
        <Typography variant="body2" className={classes.techName} align="center">
          {tech.name}
        </Typography>
      </Grid>
    ))}
  </Grid>
);

export default function Technologies() {
  const classes = useStyles();

  return (
    <Box sx={{ flexGrow: 1 }} className={classes.box1}>
      <StyledGrid container spacing={2}>
        <Grid item xs={12}>
          <Typography
            variant="h7"
            className={classes.justifiedText}
            style={{
              fontSize: window.innerWidth > 600 ? '1.0rem' : '0.9rem',
              color: '#FFFFFF',
              lineHeight: '1.8',
              fontFamily: 'Space Grotesk, sans-serif',
              fontWeight: window.innerWidth > 600 ? '150' : '100',
            }}
          >
            Ingeniera Informática y Desarrolladora Full-Stack con más de 3 años de experiencia en el desarrollo de sistemas y aplicaciones. Me especializo en crear soluciones innovadoras y eficientes utilizando nuevas tecnologías. Mi capacidad analítica me permite resolver problemas de manera efectiva, y siempre busco mejorar mis habilidades para enfrentar nuevos desafíos.
            
            Ofrezco Soluciones tecnologicas para digitalizar tu negocio o servicio, desarrollar un nuevo proyecto o mejorar tus procesos. Tambien estoy disponible para trabajar con empresas, proyectos personales o emprendimientos. ¡Estoy emocionada de colaborar contigo y hacer realidad tus ideas!
          </Typography>
          <br />
          <br />
        </Grid>
        <TechnologyGrid technologies={technologies} classes={classes} />
      </StyledGrid>
    </Box>
  );
}

