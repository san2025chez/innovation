import React, { useState, useEffect, Suspense } from 'react';
import { Typography, Card, CardContent } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import portada from "../img/original-ana.png";
import { motion } from 'framer-motion';
import { useAppTheme } from '../hooks/useAppTheme';

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

    const appTheme = useAppTheme();
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Suspense fallback={
                <div className={classes.loading}>
                    <CircularProgress 
                        style={{ 
                            color: appTheme.colors.magenta,
                            transition: 'color 0.3s ease',
                        }} 
                        size={40} 
                    />
                </div>
            }>
                <Card className={classes.card}>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        className={classes.backgroundGradient}
                        style={{
                            background: appTheme.colors.gradientBackground,
                            transition: 'background 0.3s ease',
                        }}
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
                                style={{
                                    boxShadow: appTheme.darkMode
                                        ? '0 0 30px rgba(223, 33, 255, 0.2)'
                                        : '0 0 30px rgba(91, 33, 182, 0.3)',
                                    transition: 'box-shadow 0.3s ease',
                                }}
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.3 }}
                            />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <Typography 
                                variant="h5" 
                                className={classes.title}
                                style={{
                                    color: appTheme.colors.textPrimary,
                                    transition: 'color 0.3s ease',
                                }}
                            >
                                Soy Ana
                                <span
                                    style={{
                                        position: 'absolute',
                                        bottom: '-6px',
                                        left: '50%',
                                        transform: 'translateX(-50%)',
                                        width: '40px',
                                        height: '3px',
                                        background: appTheme.colors.gradient,
                                        borderRadius: '2px',
                                        transition: 'background 0.3s ease',
                                    }}
                                />
                            </Typography>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className={classes.typingText}
                            style={{
                                color: appTheme.colors.magenta,
                                textShadow: appTheme.darkMode
                                    ? '0 0 15px rgba(255, 0, 255, 0.5)'
                                    : '0 0 15px rgba(147, 51, 234, 0.5)',
                                transition: 'color 0.3s ease, text-shadow 0.3s ease',
                            }}
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
                            style={{
                                background: appTheme.darkMode
                                    ? 'rgba(255, 0, 255, 0.05)'
                                    : 'rgba(91, 33, 182, 0.08)',
                                border: `2px solid ${appTheme.darkMode ? 'rgba(255, 0, 255, 0.1)' : 'rgba(91, 33, 182, 0.2)'}`,
                                transition: 'all 0.3s ease',
                            }}
                        >
                            <Typography 
                                variant="body1" 
                                className={classes.description}
                                style={{
                                    color: appTheme.colors.textSecondary,
                                    transition: 'color 0.3s ease',
                                }}
                            >
                                Soy Ingeniera de Software, especialista en crear soluciones tecnológicas usando nuevas tecnologías. Me gusta transformar ideas en productos digitales innovadores y eficientes. ¡Juntos, podemos impulsar tu proyecto!
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
                                style={{
                                    background: appTheme.colors.gradient,
                                    boxShadow: appTheme.darkMode
                                        ? '0 4px 15px rgba(255, 0, 255, 0.3)'
                                        : '0 4px 15px rgba(91, 33, 182, 0.3)',
                                    transition: 'all 0.3s ease',
                                }}
                                whileHover={{ 
                                    scale: 1.05,
                                    boxShadow: appTheme.darkMode
                                        ? "0 0 25px rgba(255, 0, 255, 0.5)"
                                        : "0 0 25px rgba(91, 33, 182, 0.5)"
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
        padding: '60px 0 15px 0',
        '@media (max-height: 667px)': {
            padding: '50px 0 10px 0',
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
        width: '100%',
        '@media (max-height: 667px)': {
            padding: '10px',
        },
        '@media (max-width: 360px)': {
            padding: '12px 8px',
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
        '@media (max-width: 360px)': {
            width: '120px',
            height: '120px',
        },
    },
    title: {
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
        '@media (max-width: 360px)': {
            fontSize: 'clamp(1rem, 3.5vw, 1.5rem)',
        },
    },
    typingText: {
        fontSize: 'clamp(0.9rem, 3vw, 1.3rem)',
        fontWeight: "700",
        textTransform: 'uppercase',
        textAlign: 'center',
        marginTop: '0.8rem',
        marginBottom: '1.2rem',
        fontFamily: 'Space Grotesk, sans-serif',
        animation: '$glowPulse 2s infinite',
        '@media (max-height: 667px)': {
            marginTop: '0.6rem',
            marginBottom: '1rem',
            fontSize: 'clamp(0.85rem, 2.8vw, 1.2rem)',
        },
        '@media (max-height: 568px)': {
            marginTop: '0.4rem',
            marginBottom: '0.8rem',
            fontSize: 'clamp(0.8rem, 2.5vw, 1.1rem)',
        },
        '@media (max-width: 360px)': {
            fontSize: 'clamp(0.75rem, 2.2vw, 1rem)',
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
        maxWidth: '600px',
        padding: '1rem',
        marginTop: '0.5rem',
        marginBottom: '1rem',
        borderRadius: '10px',
        backdropFilter: 'blur(5px)',
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
        '@media (max-width: 480px)': {
            width: '92%',
            padding: '0.85rem',
        },
        '@media (max-width: 360px)': {
            width: '95%',
            padding: '0.75rem',
        },
        '@media (max-width: 320px)': {
            width: '98%',
            padding: '0.65rem',
        },
    },
    description: {
        fontSize: 'clamp(0.9rem, 2.2vw, 1.2rem)',
        lineHeight: '1.6',
        fontWeight: '300',
        fontFamily: 'Space Grotesk, sans-serif',
        textAlign: 'center',
        wordWrap: 'break-word',
        overflowWrap: 'break-word',
        '@media (max-height: 667px)': {
            fontSize: 'clamp(0.85rem, 2vw, 1.1rem)',
            lineHeight: '1.5',
        },
        '@media (max-height: 568px)': {
            fontSize: 'clamp(0.8rem, 1.8vw, 1rem)',
            lineHeight: '1.4',
        },
        '@media (max-width: 480px)': {
            fontSize: 'clamp(0.8rem, 1.9vw, 1.05rem)',
            lineHeight: '1.5',
        },
        '@media (max-width: 360px)': {
            fontSize: 'clamp(0.75rem, 1.6vw, 0.95rem)',
            lineHeight: '1.4',
        },
        '@media (max-width: 320px)': {
            fontSize: 'clamp(0.7rem, 1.4vw, 0.85rem)',
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
        borderRadius: '25px',
        padding: 'clamp(10px, 2.5vw, 14px) clamp(24px, 5vw, 40px)',
        fontSize: 'clamp(0.85rem, 2.8vw, 1rem)',
        border: 'none',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        fontFamily: 'Space Grotesk, sans-serif',
        fontWeight: '500',
        letterSpacing: '1px',
        '@media (max-height: 667px)': {
            padding: 'clamp(8px, 2vw, 12px) clamp(20px, 4vw, 35px)',
            fontSize: 'clamp(0.8rem, 2.5vw, 0.9rem)',
        },
        '@media (max-height: 568px)': {
            padding: 'clamp(7px, 1.8vw, 10px) clamp(18px, 3.5vw, 30px)',
            fontSize: 'clamp(0.75rem, 2.2vw, 0.85rem)',
        },
        '@media (max-width: 360px)': {
            padding: 'clamp(8px, 2vw, 10px) clamp(16px, 3vw, 28px)',
            fontSize: 'clamp(0.7rem, 2vw, 0.8rem)',
        },
        '&:hover': {
            transform: 'translateY(-2px)',
        },
        '&:active': {
            transform: 'translateY(1px)',
        },
    },
}));

export default MobileAbout;
