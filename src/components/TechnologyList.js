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
  { img: node, name: 'Node.js', category: 'Backend' },
  { img: css, name: 'CSS', category: 'Frontend' },
  { img: javascript, name: 'JavaScript', category: 'Frontend' },
  { img: mongo, name: 'MongoDB', category: 'Database' },
  { img: mysql, name: 'MySQL', category: 'Database' },
  { img: html, name: 'HTML', category: 'Frontend' },
  { img: react, name: 'React', category: 'Frontend' },
  { img: git, name: 'Git', category: 'Tools' },
  { img: ts, name: 'TypeScript', category: 'Frontend' },
  { img: pg, name: 'PostgreSQL', category: 'Database' },
  { img: express, name: 'Express', category: 'Backend' },
  { img: nest, name: 'Nest.js', category: 'Backend' },
];

const useStyles = makeStyles((theme) => ({
  gridContainer: {
    marginBottom: theme.spacing(6),
    [theme.breakpoints.down('sm')]: {
      marginBottom: theme.spacing(4),
    },
  },
  gridItem: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'stretch',
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(1),
    },
  },
  categorySection: {
    marginBottom: theme.spacing(4),
    '& > h3': {
      color: '#fff',
      fontFamily: 'Space Grotesk, sans-serif',
      marginBottom: theme.spacing(2),
      background: 'linear-gradient(135deg, rgb(255, 0, 255), #FF6F30)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    },
  },
}));

export const TechnologyList = ({ controls, isMobile }) => {
  const classes = useStyles();

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  // Group technologies by category
  const groupedTechnologies = technologies.reduce((acc, tech) => {
    if (!acc[tech.category]) {
      acc[tech.category] = [];
    }
    acc[tech.category].push(tech);
    return acc;
  }, {});

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate={controls}
    >
      {Object.entries(groupedTechnologies).map(([category, techs]) => (
        <div key={category} className={classes.categorySection}>
          <h3>{category}</h3>
          <Grid container spacing={3} className={classes.gridContainer}>
            {techs.map((tech, index) => (
              <Grid 
                item 
                xs={6} 
                sm={4} 
                md={3} 
                lg={2} 
                key={index}
                className={classes.gridItem}
              >
                <TechnologyCard
                  technology={tech}
                  isMobile={isMobile}
                />
              </Grid>
            ))}
          </Grid>
        </div>
      ))}
    </motion.div>
  );
};
