import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { motion } from 'framer-motion';
import { CardMedia } from '@material-ui/core';
import { makeStyles } from "@material-ui/core";
import Typography from '@mui/material/Typography';

// Imágenes
import node from "../img/node10.png";
import css from "../img/icons8.png";
import javascript from "../img/js8.png";
import mongo from "../img/mongo8.png";
import mysql from "../img/mysql8.png";
import html from "../img/html8.png";
import react from '../img/react8.png';
import git from '../img/git9.png';
import ts from '../img/ts9.png';
import pg from '../img/postgres8.png';
import express from '../img/ex8.png';
import nest from '../img/nest8.png';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#000000', // Cambiado a negro
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: '#E0E0E0', // Cambiado a gris claro
    fontFamily: 'Space Grotesk, sans-serif',
}));

export default function Technologies() {
    const classes = useStyles();

    return (
        <Box sx={{ flexGrow: 1 }} className={classes.box1}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography 
                        style={{ 
                            fontSize: window.innerWidth > 600 ? '18px' : '16px',
                            color: '#FFFFFF', 
                            textAlign: 'justify', 
                            lineHeight: '1.6',
                            fontFamily: 'Space Grotesk, sans-serif',
                            fontWeight: window.innerWidth > 600 ? '200' : '150'
                        }}
                    >
                        Ingeniera en Informática y Desarrolladora Full-Stack con más de 4 años de experiencia en el desarrollo de sistemas y aplicaciones...
                    </Typography>
                    <br /><br />
                </Grid>

                {/* Grid de iconos */}
                <Grid container spacing={2}>
                    {[
                        { img: node }, { img: css }, { img: javascript },
                        { img: mongo }, { img: mysql }, { img: html },
                        { img: react }, { img: git }, { img: ts },
                        { img: pg }, { img: express }, { img: nest }
                    ].map((tech, index) => (
                        <Grid item xs={4} sm={3} md={2} key={index}>
                            <motion.div
                                initial={{ rotateY: 0 }} 
                                animate={{ rotateY: 360 }} 
                                transition={{ duration: 5, repeat: Infinity }}
                                style={{ transformOrigin: 'center' }}
                            >
                                <CardMedia image={tech.img} className={classes.image} />
                            </motion.div>
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </Box>
    );
}

const useStyles = makeStyles((theme) => ({
    box1: {
        backgroundColor: '#000000', // Cambiado a negro
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: theme.spacing(4),
        [theme.breakpoints.down('sm')]: {
            padding: theme.spacing(1),
        },
    },
    image: {
        width: 50,
        height: 50,
        margin: 'auto',
    },
}));
