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
        overflowY: 'auto',
        padding: '15px 0',
        '@media (max-height: 667px)': {
            padding: '10px 0',
        },
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
        minHeight: '100%',
        overflow: 'visible',
    },
    backgroundGradient: {
        position: 'fixed',
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
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: '15px',
        minHeight: '100%',
        boxSizing: 'border-box',
        '@media (max-height: 667px)': {
            padding: '10px',
        },
    },
    imageContainer: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '15px',
        '@media (max-height: 667px)': {
            marginBottom: '10px',
        },
        '@media (max-height: 568px)': {
            marginBottom: '8px',
        },
    },
    roundedImage: {
        width: '150px',
        height: '150px',
        borderRadius: '50%',
        objectFit: 'cover',
        boxShadow: '0 0 30px rgba(255, 0, 255, 0.2)',
        transition: 'all 0.3s ease',
        '@media (max-height: 667px)': {
            width: '130px',
            height: '130px',
        },
        '@media (max-height: 568px)': {
            width: '110px',
            height: '110px',
        },
        '@media (max-height: 480px)': {
            width: '90px',
            height: '90px',
        },
    },
    title: {
        color: '#FFFFFF',
        fontSize: 'clamp(1.2rem, 4vw, 1.8rem)',
        fontWeight: '900',
        marginBottom: '0.5rem',
        textTransform: 'uppercase',
        textAlign: 'center',
        fontFamily: 'Space Grotesk, sans-serif',
        position: 'relative',
        '@media (max-height: 667px)': {
            marginBottom: '0.4rem',
        },
        '@media (max-height: 568px)': {
            marginBottom: '0.3rem',
        },
        '&:after': {
            content: '""',
            position: 'absolute',
            bottom: '-6px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '40px',
            height: '3px',
            background: 'linear-gradient(90deg, rgb(255, 0, 255), #FF6F30)',
            borderRadius: '2px',
            '@media (max-height: 568px)': {
                width: '30px',
                height: '2px',
                bottom: '-4px',
            },
        },
    },
    typingText: {
        fontSize: 'clamp(0.9rem, 3vw, 1.3rem)',
        fontWeight: "700",
        color: 'rgb(255, 0, 255)',
        textTransform: 'uppercase',
        textAlign: 'center',
        marginTop: '0.8rem',
        marginBottom: '1.2rem',
        fontFamily: 'Space Grotesk, sans-serif',
        textShadow: '0 0 15px rgba(255, 0, 255, 0.5)',
        animation: '$glowPulse 2s infinite',
        '@media (max-height: 667px)': {
            marginTop: '0.6rem',
            marginBottom: '1rem',
        },
        '@media (max-height: 568px)': {
            marginTop: '0.4rem',
            marginBottom: '0.8rem',
        },
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
        padding: '1rem',
        marginTop: '0.5rem',
        marginBottom: '1rem',
        borderRadius: '10px',
        background: 'rgba(255, 0, 255, 0.05)',
        backdropFilter: 'blur(5px)',
        border: '2px solid rgba(255, 0, 255, 0.1)',
        '@media (max-height: 667px)': {
            padding: '0.8rem',
            marginTop: '0.4rem',
            marginBottom: '0.8rem',
        },
        '@media (max-height: 568px)': {
            padding: '0.6rem',
            marginTop: '0.3rem',
            marginBottom: '0.6rem',
        },
    },
    description: {
        color: '#E0E0E0',
        fontSize: 'clamp(0.75rem, 2.5vw, 0.9rem)',
        lineHeight: '1.5',
        fontWeight: '300',
        fontFamily: 'Space Grotesk, sans-serif',
        textAlign: 'center',
        '@media (max-height: 667px)': {
            lineHeight: '1.4',
        },
        '@media (max-height: 568px)': {
            lineHeight: '1.3',
        },
    },
    buttonContainer: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        marginTop: '1.2rem',
        marginBottom: '1rem',
        '@media (max-height: 667px)': {
            marginTop: '1rem',
            marginBottom: '0.8rem',
        },
        '@media (max-height: 568px)': {
            marginTop: '0.8rem',
            marginBottom: '0.6rem',
        },
    },
    contactButton: {
        color: '#FFFFFF',
        background: 'linear-gradient(45deg, rgb(255, 0, 255), #FF6F30)',
        borderRadius: '25px',
        padding: 'clamp(8px, 2vw, 12px) clamp(20px, 4vw, 35px)',
        fontSize: 'clamp(0.8rem, 2.5vw, 0.9rem)',
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
