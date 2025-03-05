import React, { useState, useEffect } from 'react';
import { Typography, Card, CardContent, Grid, CardMedia, Box } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import portada from "../img/original-ana.png";
import { motion } from 'framer-motion';

const DesktopAbout = () => {
    const [fullStackText, setFullStackText] = useState('');
    const [developerText, setDeveloperText] = useState('');
    const [isTypingDeveloper, setIsTypingDeveloper] = useState(true);

    const fullStack = "Software";
    const developer = "Engineer";
    const whatsappLink = "https://wa.link/cns6bw";

    useEffect(() => {
        const typeFullStack = () => {
            setFullStackText(fullStack.substring(0, fullStackText.length + 1));
        };

        if (fullStackText !== fullStack) {
            setTimeout(typeFullStack, 100);
        }
    }, [fullStackText]);

    useEffect(() => {
        const typeDeveloper = () => {
            if (isTypingDeveloper) {
                setDeveloperText(developer.substring(0, developerText.length + 1));
                if (developerText === developer) {
                    setTimeout(() => setIsTypingDeveloper(false), 1000);
                }
            } else {
                setDeveloperText(developer.substring(0, developerText.length - 1));
                if (developerText === '') {
                    setTimeout(() => setIsTypingDeveloper(true), 1000);
                }
            }
        };

        const typingTimeout = setTimeout(typeDeveloper, 100);
        return () => clearTimeout(typingTimeout);
    }, [developerText, isTypingDeveloper]);

    const handleClick = () => {
        window.open(whatsappLink, '_blank');
    };

    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className={classes.backgroundGradient}
            />
            <CardContent className={classes.cardContent}>
                <Grid container spacing={0} className={classes.gridContainer}>
                    <Grid item xs={12} sm={6} className={classes.textContainer}>
                        <Box className={classes.contentBox}>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                <Typography variant="h4" className={classes.title}>
                                    Soy Ana
                                </Typography>
                            </motion.div>
                           
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                            >
                                <span className={classes.typingText}>
                                    {fullStackText} {developerText}
                                </span>
                            </motion.div>

                            <Description />
                            
                            <motion.div 
                                className={classes.buttonContainer}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.8 }}
                            >
                                <motion.button
                                    className={classes.contactButton}
                                    onClick={handleClick}
                                    whileHover={{ 
                                        scale: 1.05,
                                        boxShadow: "0 0 25px rgba(0, 122, 204, 0.5)"
                                    }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    CONTÁCTAME
                                </motion.button>
                            </motion.div>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} className={classes.imageContainer}>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className={classes.imageWrapper}
                        >
                            <CardMedia
                                className={classes.media}
                                image={portada}
                                title="Ana Sanchez"
                            />
                            <div className={classes.imageGlow} />
                        </motion.div>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
};

const Description = () => {
    const classes = useStyles();
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className={classes.descriptionContainer}
        >
            <Typography variant="body1" className={classes.description}>
                Soy Ingeniera de Software, especialista en crear soluciones 
                tecnológicas usando nuevas tecnologías.
                Me gusta transformar ideas en productos digitales innovadores y eficientes. ¡Juntos, podemos impulsar tu proyecto!
            </Typography>
        </motion.div>
    );
};

const useStyles = makeStyles((theme) => ({
    card: {
        position: 'relative',
        backgroundColor: 'transparent',
        boxShadow: 'none',
        border: 'none',
        height: '100vh',
        overflow: 'hidden',
        maxHeight: '100vh',
        paddingTop: '70px', // Espacio para el navbar
    },
    backgroundGradient: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)',
        zIndex: -1,
    },
    cardContent: {
        height: '100%',
        padding: '0 !important',
    },
    gridContainer: {
        height: 'calc(100vh - 70px)', // Ajustando la altura para compensar el padding-top
        margin: 0,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
    },
    contentBox: {
        padding: '0 4rem',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
    },
    title: {
        color: '#FFFFFF',
        fontSize: '2.8rem',
        fontWeight: '900',
        textTransform: 'uppercase',
        fontFamily: 'Space Grotesk, sans-serif',
        marginBottom: '0.8rem',
        position: 'relative',
        '&:after': {
            content: '""',
            position: 'absolute',
            bottom: '-8px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '60px',
            height: '3px',
            background: 'linear-gradient(90deg, rgb(255, 0, 255), #FF6F30)',
            borderRadius: '2px',
        },
    },
    typingText: {
        display: 'block',
        fontSize: '1.9rem',
        fontWeight: '700',
        color: 'rgb(255, 0, 255)',
        textTransform: 'uppercase',
        marginBottom: '1.5rem',
        fontFamily: 'Space Grotesk, sans-serif',
        letterSpacing: '1px',
        textShadow: '0 0 15px rgba(255, 0, 255, 0.5)',
        animation: '$glowPulse 2s infinite',
    },
    '@keyframes glowPulse': {
        '0%': {
            textShadow: '0 0 15px rgba(255, 0, 255, 0.5)',
        },
        '50%': {
            textShadow: '0 0 25px rgba(255, 0, 255, 0.8)',
        },
        '100%': {
            textShadow: '0 0 15px rgba(255, 0, 255, 0.5)',
        },
    },
    descriptionContainer: {
        marginTop: '0.8rem',
        position: 'relative',
        padding: '1.5rem',
        borderLeft: '3px solid rgb(255, 0, 255)',
        borderRight: '3px solid rgb(255, 0, 255)',
        background: 'rgba(255, 0, 255, 0.05)',
        borderRadius: '10px',
        maxWidth: '90%',
        textAlign: 'center',
        backdropFilter: 'blur(5px)',
    },
    description: {
        color: '#E0E0E0',
        fontSize: '1rem',
        lineHeight: '1.6',
        fontWeight: '300',
        fontFamily: 'Space Grotesk, sans-serif',
        textAlign: 'center',
        maxWidth: '600px',
        margin: '0 auto',
    },
    buttonContainer: {
        marginTop: '2rem',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    contactButton: {
        color: '#FFFFFF',
        background: 'linear-gradient(45deg, rgb(255, 0, 255), #FF6F30)',
        borderRadius: '25px',
        padding: '14px 40px',
        fontSize: '0.95rem',
        border: 'none',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        fontFamily: 'Space Grotesk, sans-serif',
        fontWeight: '500',
        letterSpacing: '1px',
        position: 'relative',
        overflow: 'hidden',
        boxShadow: '0 4px 15px rgba(255, 0, 255, 0.3)',
        '&:hover': {
            background: 'linear-gradient(45deg, #FF6F30, rgb(255, 0, 255))',
            transform: 'translateY(-2px)',
            boxShadow: '0 6px 20px rgba(255, 0, 255, 0.4)',
        },
        '&:after': {
            content: '""',
            position: 'absolute',
            top: '-50%',
            left: '-50%',
            width: '200%',
            height: '200%',
            background: 'linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.1), transparent)',
            transform: 'rotate(45deg)',
            animation: '$shimmer 3s infinite',
        },
    },
    '@keyframes shimmer': {
        '0%': {
            transform: 'translateX(-150%) rotate(45deg)',
        },
        '100%': {
            transform: 'translateX(150%) rotate(45deg)',
        },
    },
    imageContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        position: 'relative',
    },
    imageWrapper: {
        position: 'relative',
        width: '450px',
        height: '450px',
        borderRadius: '50%',
        overflow: 'hidden',
        boxShadow: '0 0 30px rgba(223, 33, 255, 0.2)',
    },
    media: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        transition: 'transform 0.3s ease',
        '&:hover': {
            transform: 'scale(1.03)',
        },
    },
    imageGlow: {
        position: 'absolute',
        top: '0',
        left: '0',
        right: '0',
        bottom: '0',
        background: 'radial-gradient(circle at center, rgba(223, 33, 255, 0.2) 0%, rgba(0,0,0,0) 70%)',
        pointerEvents: 'none',
    },
    textContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        height: '100%',
    },
}));

export default DesktopAbout;
