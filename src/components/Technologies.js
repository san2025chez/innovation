import React, { useEffect } from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { motion, useAnimation } from 'framer-motion';
import { CardMedia } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import Typography from '@mui/material/Typography';
import { useInView } from 'react-intersection-observer';

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
import n8n from "../img/n8n.webp"
import aws from "../img/aws.webp"

const technologies = [
  { img: javascript, name: 'JavaScript', level: 90 },
  { img: react, name: 'React', level: 85 },
  { img: node, name: 'Node.js', level: 85 },
  { img: ts, name: 'TypeScript', level: 80 },
  { img: mongo, name: 'MongoDB', level: 85 },
  { img: mysql, name: 'MySQL', level: 80 },
  { img: html, name: 'HTML', level: 90 },
  { img: css, name: 'CSS', level: 85 },
  { img: git, name: 'Git', level: 85 },
  { img: pg, name: 'PostgreSQL', level: 80 },
  { img: express, name: 'Express', level: 85 },
  { img: nest, name: 'NestJS', level: 80 },
/*   {img: n8n , name:'N8N', level: 80},
  {img: aws , name :'AWS', level: 85 },
  {img: aws , name :'AWS', level: 85 } */
];

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: 'rgba(255, 255, 255, 0.02)',
  backdropFilter: 'blur(10px)',
  background: 'linear-gradient(135deg, rgba(30, 42, 56, 0.4) 0%, rgba(30, 42, 56, 0.1) 100%)',
  border: '1px solid rgba(255, 255, 255, 0.05)',
  borderRadius: '15px',
  padding: theme.spacing(2),
  color: '#E0E0E0',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  overflow: 'hidden',
  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  '&:hover': {
    transform: 'translateY(-5px)',
    background: 'linear-gradient(135deg, rgba(255, 0, 255, 0.1) 0%, rgba(255, 111, 48, 0.1) 100%)',
    boxShadow: '0 15px 30px rgba(0, 0, 0, 0.3)',
    '& .skill-level': {
      opacity: 1,
      transform: 'translateY(0)',
    },
  },
  '&:before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'radial-gradient(circle at center, rgba(255, 255, 255, 0.1) 0%, transparent 70%)',
    opacity: 0,
    transition: 'opacity 0.3s ease',
  },
  '&:hover:before': {
    opacity: 1,
  },
}));

const useStyles = makeStyles((theme) => ({
  section: {
    padding: theme.spacing(8, 4),
    background: '#000000',
    minHeight: '90vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
    overflow: 'hidden',
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(6, 2),
      minHeight: '90vh',
    },
  },
  container: {
    maxWidth: '1400px',
    width: '100%',
    margin: '0 auto',
    position: 'relative',
    zIndex: 1,
    padding: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(1),
    },
  },
  titleContainer: {
    textAlign: 'center',
    marginBottom: theme.spacing(6),
    [theme.breakpoints.down('sm')]: {
      marginBottom: theme.spacing(4),
    },
  },
  title: {
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
    fontSize: '1.1rem',
    opacity: 0.8,
    maxWidth: '600px',
    margin: '0 auto',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1rem',
      padding: '0 16px',
    },
  },
  image: {
    width: 50,
    height: 50,
    objectFit: 'contain',
    transition: 'all 0.3s ease',
    filter: 'brightness(0.9) contrast(1.1)',
    marginBottom: theme.spacing(1.5),
    [theme.breakpoints.down('sm')]: {
      width: 40,
      height: 40,
      marginBottom: theme.spacing(1),
    },
    [theme.breakpoints.down('xs')]: {
      width: 35,
      height: 35,
    },
  },
  techName: {
    fontSize: '1rem',
    marginTop: theme.spacing(1),
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.9rem',
    },
  },
  gridContainer: {
    margin: 0,
    width: '100%',
    '& .MuiGrid-item': {
      display: 'flex',
      justifyContent: 'center',
      padding: theme.spacing(1.5),
      [theme.breakpoints.down('sm')]: {
        padding: theme.spacing(1),
      },
    },
  },
}));

export default function Technologies() {
  const classes = useStyles();
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.43, 0.13, 0.23, 0.96],
      },
    },
  };

  return (
    <section className={classes.section} ref={ref}>
      <div className={classes.container}>
        <div className={classes.titleContainer}>
          <motion.h2
            className={classes.title}
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            Tecnologías & Habilidades
          </motion.h2>
          <motion.p
            className={classes.subtitle}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Dominio de tecnologías modernas para crear soluciones innovadoras y eficientes
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          <Grid container spacing={{ xs: 1, sm: 2, md: 3 }} className={classes.gridContainer}>
            {technologies.map((tech, index) => (
              <Grid item xs={6} sm={4} md={3} lg={2} key={index}>
                <motion.div
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  style={{ width: '100%' }}
                >
                  <Item>
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 1, type: "spring" }}
                    >
                      <CardMedia
                        component="img"
                        image={tech.img}
                        className={classes.image}
                        alt={tech.name}
                      />
                    </motion.div>
                    <Typography variant="body2" className={classes.techName}>
                      {tech.name}
                    </Typography>
                    <div className={`${classes.skillLevel} skill-level`}>
                      <motion.div
                        className={classes.skillBar}
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${tech.level}%` } : {}}
                        transition={{ duration: 1, delay: index * 0.1 }}
                      />
                    </div>
                  </Item>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </div>
    </section>
  );
}
