import React from 'react';
import { Grid, makeStyles, useTheme, useMediaQuery } from '@material-ui/core';
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
import n8n from "../img/n8n.webp"
import aws from "../img/aws.webp"
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
  { img: n8n, name: 'n8n' },
  { img: aws, name: 'AWS' },
];

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(1),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(4),
    },
    background: 'rgba(255, 255, 255, 0.03)',
    borderRadius: theme.spacing(2),
    backdropFilter: 'blur(10px)',
    boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)',
    transition: 'all 0.3s ease-in-out',
    '&:hover': {
      transform: 'scale(1.01)',
      boxShadow: '0 12px 40px 0 rgba(31, 38, 135, 0.25)',
    },
  },
  gridContainer: {
    width: '100%',
    margin: 0,
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
    gap: theme.spacing(3),
    rowGap: theme.spacing(4),
    justifyContent: 'center',
    alignItems: 'stretch',
    [theme.breakpoints.down('xs')]: {
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: theme.spacing(2),
      rowGap: theme.spacing(2),
      paddingBottom: theme.spacing(4),
    },
    [theme.breakpoints.up('sm')]: {
      paddingBottom: theme.spacing(4),
    },
    [theme.breakpoints.up('md')]: {
      gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
    },
  },
  gridItem: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'stretch',
    width: '100%',
    height: '100%',
  },
}));

export const TechnologyList = ({ controls }) => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'));

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
          <motion.div
            key={tech.name}
            className={classes.gridItem}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            <TechnologyCard 
              technology={tech} 
              isMobile={isMobile}
            />
          </motion.div>
        ))}
      </Grid>
    </motion.div>
  );
};
