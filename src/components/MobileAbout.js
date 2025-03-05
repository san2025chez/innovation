import React, { useState, useEffect, Suspense } from 'react';
import { Typography, Card, CardContent } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import portada from "../img/original-ana.png";
import { motion } from 'framer-motion';

const MobileAbout = () => {
    const [fullStackText, setFullStackText] = React.useState('');
    const [developerText, setDeveloperText] = React.useState('');
    const [isTypingDeveloper, setIsTypingDeveloper] = React.useState(true);

    const fullStack = "Software";
    const developer = "Engineer";
    const whatsappLink = "https://wa.link/cns6bw";

    const handleClick = React.useCallback(() => {
        window.open(whatsappLink, '_blank');
    }, [whatsappLink]);

    React.useEffect(() => {
        const typeFullStack = () => {
            setFullStackText(fullStack.substring(0, fullStackText.length + 1));
        };

        if (fullStackText !== fullStack) {
            const timerId = setTimeout(typeFullStack, 100);
            return () => clearTimeout(timerId);
        }
    }, [fullStackText]);

    React.useEffect(() => {
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

        const typingTimeoutId = setTimeout(typeDeveloper, 100);
        return () => clearTimeout(typingTimeoutId);
    }, [developerText, isTypingDeveloper]);

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Suspense fallback={
                <div className={classes.loading}>
                    <CircularProgress style={{ color: 'rgb(255, 0, 255)' }} size={40} />
                </div>
            }>
                <Card className={classes.card}>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        className={classes.backgroundGradient}
                    />
                    <CardContent className={classes.cardContent}>
                        <motion.div 
                            className={classes.imageContainer}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <motion.img 
                                src={portada} 
                                alt="Ana" 
                                className={classes.roundedImage}
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.3 }}
                            />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <Typography variant="h5" className={classes.title}>
                                Soy Ana
                            </Typography>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className={classes.typingText}
                        >
                            <span>
                                {fullStackText} {developerText}
                            </span>
                        </motion.div>

                        <motion.div
                            className={classes.descriptionContainer}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                        >
                            <Typography variant="body1" className={classes.description}>
                                Ingeniera de Software, especialista en crear soluciones tecnológicas usando nuevas tecnologías.
                                Me gusta transformar ideas en productos digitales innovadores y eficientes.
                                ¡Juntos, podemos impulsar tu proyecto!
                            </Typography>
                        </motion.div>
                   
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
                                    boxShadow: "0 0 25px rgba(255, 0, 255, 0.5)"
                                }}
                                whileTap={{ scale: 0.95 }}
                            >
                                CONTÁCTAME
                            </motion.button>
                        </motion.div>
                    </CardContent>
                </Card>
            </Suspense>
        </div>
    );
};

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    loading: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
    },
    card: {
        position: 'relative',
        backgroundColor: 'transparent',
        boxShadow: 'none',
        border: 'none',
        minHeight: '100vh',
        overflow: 'hidden',
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
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
        height: '100vh',
        boxSizing: 'border-box',
    },
    imageContainer: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '20px',
    },
    roundedImage: {
        width: '200px',
        height: '200px',
        borderRadius: '50%',
        objectFit: 'cover',
        boxShadow: '0 0 30px rgba(255, 0, 255, 0.2)',
    },
    title: {
        color: '#FFFFFF',
        fontSize: '2rem',
        fontWeight: '900',
        marginBottom: '0.5rem',
        textTransform: 'uppercase',
        textAlign: 'center',
        fontFamily: 'Space Grotesk, sans-serif',
        position: 'relative',
        '&:after': {
            content: '""',
            position: 'absolute',
            bottom: '-8px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '40px',
            height: '3px',
            background: 'linear-gradient(90deg, rgb(255, 0, 255), #FF6F30)',
            borderRadius: '2px',
        },
    },
    typingText: {
        fontSize: "1.5rem",
        fontWeight: "700",
        color: 'rgb(255, 0, 255)',
        textTransform: 'uppercase',
        textAlign: 'center',
        marginTop: '1rem',
        marginBottom: '1.5rem',
        fontFamily: 'Space Grotesk, sans-serif',
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
        width: '90%',
        padding: '1.2rem',
        marginTop: '0.5rem',
        marginBottom: '1rem',
        borderRadius: '10px',
        background: 'rgba(255, 0, 255, 0.05)',
        backdropFilter: 'blur(5px)',
        border: '2px solid rgba(255, 0, 255, 0.1)',
    },
    description: {
        color: '#E0E0E0',
        fontSize: '0.95rem',
        lineHeight: '1.6',
        fontWeight: '300',
        fontFamily: 'Space Grotesk, sans-serif',
        textAlign: 'center',
    },
    buttonContainer: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        marginTop: '1.5rem',
    },
    contactButton: {
        color: '#FFFFFF',
        background: 'linear-gradient(45deg, rgb(255, 0, 255), #FF6F30)',
        borderRadius: '25px',
        padding: '12px 35px',
        fontSize: '0.9rem',
        border: 'none',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        fontFamily: 'Space Grotesk, sans-serif',
        fontWeight: '500',
        letterSpacing: '1px',
        boxShadow: '0 4px 15px rgba(255, 0, 255, 0.3)',
        '&:hover': {
            background: 'linear-gradient(45deg, #FF6F30, rgb(255, 0, 255))',
            transform: 'translateY(-2px)',
            boxShadow: '0 6px 20px rgba(255, 0, 255, 0.4)',
        },
        '&:active': {
            transform: 'translateY(1px)',
        },
    },
}));

export default MobileAbout;
