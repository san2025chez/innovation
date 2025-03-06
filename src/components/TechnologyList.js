import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import { motion } from 'framer-motion';
import { TechnologyCard } from './TechnologyCard';

// Import your technology icons
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
  { img: nest, name: 'Nest.js' },
];

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(4),
    },
    background: 'rgba(255, 255, 255, 0.03)',
    borderRadius: theme.spacing(2),
    backdropFilter: 'blur(10px)',
    boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)',
  },
  gridContainer: {
    width: '100%',
    margin: 0,
  },
  gridItem: {
    padding: theme.spacing(1),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(1.5),
    },
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

export const TechnologyList = ({ controls }) => {
  const classes = useStyles();

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        duration: 0.6,
        ease: "easeOut"
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate={controls}
      className={classes.container}
    >
      <Grid 
        container 
        spacing={0} 
        className={classes.gridContainer}
      >
        {technologies.map((tech, index) => (
          <Grid 
            item 
            xs={6}  // 3 items per row on mobile
            sm={4}  
            md={2}  // 6 items per row on desktop
            key={tech.name} 
            className={classes.gridItem}
          >
            <TechnologyCard technology={tech} />
          </Grid>
        ))}
      </Grid>
    </motion.div>
  );
};
