import React, { useState, useEffect } from 'react';
import { Typography, Card, CardContent, Grid, CardMedia, Box } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import portada from "../img/original-ana.png";
import { motion } from 'framer-motion';
import { useAppTheme } from '../hooks/useAppTheme';

const DesktopAbout = () => {
    const [line1Text, setLine1Text] = useState(''); // "Ingeniera en Informática" - se escribe una vez y queda fijo
    const [line2Text, setLine2Text] = useState(''); // "FullStack Developer" - se borra y reescribe
    const [showCursor, setShowCursor] = useState(true);
    const [line1Complete, setLine1Complete] = useState(false); // Indica si línea 1 está completa

    const line1 = "Ingeniera en Informática";
    const line2 = "FullStack Developer";
    const whatsappLink = "https://wa.link/cns6bw";

    useEffect(() => {
        let typingTimeout;
        let cursorInterval;
        let currentIndex = 0;
        let isDeletingLocal = false;
        let isWritingLine1 = true; // Primero escribimos línea 1
        let pauseTimeout;

        const typeText = () => {
            if (isWritingLine1) {
                // Escribiendo línea 1 (una sola vez)
                if (currentIndex < line1.length) {
                    setLine1Text(line1.substring(0, currentIndex + 1));
                    currentIndex++;
                    typingTimeout = setTimeout(typeText, 50);
                } else {
                    // Línea 1 completa, ahora empezamos con línea 2
                    setLine1Complete(true);
                    isWritingLine1 = false;
                    currentIndex = 0;
                    pauseTimeout = setTimeout(() => {
                        typeText(); // Empezar con línea 2
                    }, 500);
                }
            } else {
                // Trabajando con línea 2 (borrar y reescribir)
                if (!isDeletingLocal) {
                    // Escribiendo línea 2
                    if (currentIndex < line2.length) {
                        setLine2Text(line2.substring(0, currentIndex + 1));
                        currentIndex++;
                        typingTimeout = setTimeout(typeText, 50);
                    } else {
                        // Completado, esperar antes de borrar
                        pauseTimeout = setTimeout(() => {
                            isDeletingLocal = true;
                            typingTimeout = setTimeout(typeText, 30);
                        }, 2000); // Esperar 2 segundos antes de borrar
                    }
                } else {
                    // Borrando línea 2
                    if (currentIndex > 0) {
                        setLine2Text(line2.substring(0, currentIndex - 1));
                        currentIndex--;
                        typingTimeout = setTimeout(typeText, 30);
                    } else {
                        // Borrado completo, volver a escribir
                        isDeletingLocal = false;
                        currentIndex = 0;
                        pauseTimeout = setTimeout(() => {
                            typeText(); // Volver a escribir línea 2
                        }, 500);
                    }
                }
            }
        };

        // Iniciar después de un pequeño delay
        const startDelay = setTimeout(() => {
            typeText();
        }, 300);

        // Cursor parpadeante
        cursorInterval = setInterval(() => {
            setShowCursor(prev => !prev);
        }, 530);

        return () => {
            clearTimeout(startDelay);
            clearTimeout(typingTimeout);
            clearTimeout(pauseTimeout);
            clearInterval(cursorInterval);
        };
    }, []);

    const handleClick = () => {
        window.open(whatsappLink, '_blank');
    };

    const appTheme = useAppTheme();
    const classes = useStyles();

    return (
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
                <Grid container spacing={0} className={classes.gridContainer}>
                    <Grid item xs={12} sm={6} className={classes.textContainer}>
                        <Box className={classes.contentBox}>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                <Typography 
                                    variant="h4" 
                                    className={classes.title}
                                    style={{
                                        color: appTheme.colors.textPrimary,
                                        transition: 'color 0.3s ease',
                                    }}
                                    component="h1"
                                >
                                    Soy Ana
                                    {/* SEO: Nombre completo para motores de búsqueda */}
                                    <span style={{ 
                                        position: 'absolute',
                                        width: '1px',
                                        height: '1px',
                                        padding: 0,
                                        margin: '-1px',
                                        overflow: 'hidden',
                                        clip: 'rect(0, 0, 0, 0)',
                                        whiteSpace: 'nowrap',
                                        border: 0
                                    }}>
                                        Ana María Vanesa Sánchez - Ingeniera en Informática | Ingeniera de Software
                                    </span>
                                </Typography>
                                <div 
                                    style={{
                                        position: 'absolute',
                                        bottom: '-8px',
                                        left: '50%',
                                        transform: 'translateX(-50%)',
                                        width: '60px',
                                        height: '3px',
                                        background: appTheme.colors.gradient,
                                        borderRadius: '2px',
                                        transition: 'background 0.3s ease',
                                    }}
                                />
                            </motion.div>
                           
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className={classes.typingContainer}
                            >
                                <div className={classes.typingLine}>
                                    <span 
                                        className={classes.typingText}
                                        style={{
                                            color: appTheme.colors.magenta,
                                            textShadow: appTheme.darkMode 
                                                ? '0 0 15px rgba(255, 0, 255, 0.5)'
                                                : '0 0 15px rgba(99, 102, 241, 0.5)',
                                            transition: 'color 0.3s ease, text-shadow 0.3s ease',
                                        }}
                                    >
                                        {line1Text || line1}
                                    </span>
                                </div>
                                <div className={classes.typingLine}>
                                    <span 
                                        className={classes.typingText}
                                        style={{
                                            color: appTheme.colors.magenta,
                                            textShadow: appTheme.darkMode 
                                                ? '0 0 15px rgba(255, 0, 255, 0.5)'
                                                : '0 0 15px rgba(99, 102, 241, 0.5)',
                                            transition: 'color 0.3s ease, text-shadow 0.3s ease',
                                        }}
                                    >
                                        {line2Text}
                                        {line1Complete && (
                                            <span 
                                                className={classes.cursor}
                                                style={{
                                                    opacity: showCursor ? 1 : 0,
                                                    color: appTheme.colors.magenta,
                                                    transition: 'opacity 0.1s ease',
                                                }}
                                            >
                                                |
                                            </span>
                                        )}
                                    </span>
                                </div>
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
                                    style={{
                                        background: appTheme.colors.gradient,
                                        boxShadow: appTheme.darkMode
                                            ? '0 4px 15px rgba(255, 0, 255, 0.3)'
                                            : '0 4px 15px rgba(99, 102, 241, 0.3)',
                                        transition: 'all 0.3s ease',
                                    }}
                                    whileHover={{ 
                                        scale: 1.05,
                                        boxShadow: appTheme.darkMode
                                            ? "0 6px 20px rgba(255, 0, 255, 0.4)"
                                            : "0 6px 20px rgba(99, 102, 241, 0.4)"
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
                            style={{
                                boxShadow: appTheme.darkMode
                                    ? '0 0 30px rgba(223, 33, 255, 0.2)'
                                    : '0 0 30px rgba(99, 102, 241, 0.3)',
                                transition: 'box-shadow 0.3s ease',
                            }}
                        >
                            <CardMedia
                                className={classes.media}
                                image={portada}
                                title="Ana Sanchez"
                            />
                            <div 
                                className={classes.imageGlow}
                                style={{
                                    background: appTheme.darkMode
                                        ? 'radial-gradient(circle at center, rgba(223, 33, 255, 0.2) 0%, rgba(0,0,0,0) 70%)'
                                        : 'radial-gradient(circle at center, rgba(99, 102, 241, 0.2) 0%, rgba(0,0,0,0) 70%)',
                                    transition: 'background 0.3s ease',
                                }}
                            />
                        </motion.div>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
};

const Description = () => {
    const appTheme = useAppTheme();
    const classes = useStyles();
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className={classes.descriptionContainer}
            style={{
                borderLeft: `3px solid ${appTheme.colors.magenta}`,
                borderRight: `3px solid ${appTheme.colors.magenta}`,
                background: appTheme.darkMode 
                    ? 'rgba(255, 0, 255, 0.05)'
                    : 'rgba(99, 102, 241, 0.05)',
                transition: 'all 0.3s ease',
            }}
        >
            <Typography 
                component="div"
                variant="body1" 
                className={classes.description}
                style={{
                    color: appTheme.colors.textSecondary,
                    transition: 'color 0.3s ease',
                }}
            >
                <p style={{ 
                    color: appTheme.colors.textSecondary, 
                    margin: 0,
                    padding: 0,
                    transition: 'color 0.3s ease',
                }}>
                    Profesional en tecnología con experiencia en desarrollo de software utilizando JavaScript, React y Node.js, y trayectoria en administración de redes y soporte informático.
                </p>
                <p style={{ 
                    color: appTheme.colors.textSecondary, 
                    margin: '0.5rem 0 0 0',
                    padding: 0,
                    transition: 'color 0.3s ease',
                }}>
                    Actualmente enfocada en reinsertarme en el sector IT, aportando una visión integral, capacidad de adaptación y fuerte compromiso con el trabajo técnico de calidad.
                </p>
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
        zIndex: -1,
    },
    imageWrapper: {
        position: 'relative',
        width: '450px',
        height: '450px',
        borderRadius: '50%',
        overflow: 'hidden',
        boxShadow: appTheme => appTheme.darkMode
            ? '0 0 30px rgba(223, 33, 255, 0.2)'
            : '0 0 30px rgba(99, 102, 241, 0.3)',
        transition: 'box-shadow 0.3s ease',
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
        position: 'relative',
        overflow: 'hidden', // Previene overflow que pueda mover elementos
    },
    contentBox: {
        padding: '0 4rem',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        width: '100%',
        maxWidth: '100%',
        position: 'relative',
        paddingTop: '2rem',
        paddingBottom: '2rem',
        [theme.breakpoints.down('md')]: {
            padding: '0 3rem',
            paddingTop: '1.5rem',
            paddingBottom: '1.5rem',
        },
        [theme.breakpoints.down('sm')]: {
            padding: '0 2rem',
            paddingTop: '1rem',
            paddingBottom: '1rem',
        },
    },
    title: {
        fontSize: '2.8rem',
        fontWeight: '900',
        textTransform: 'uppercase',
        fontFamily: 'Space Grotesk, sans-serif',
        marginBottom: '1.5rem',
        marginTop: '1rem',
        position: 'relative',
        [theme.breakpoints.down('md')]: {
            marginBottom: '1.2rem',
            marginTop: '0.5rem',
        },
        [theme.breakpoints.down('sm')]: {
            marginBottom: '1rem',
            marginTop: '0.3rem',
        },
    },
    typingContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        minHeight: '100px', // Altura fija para evitar movimiento
        maxHeight: '100px', // Altura máxima fija
        marginBottom: '1rem',
        marginTop: '0.5rem',
        textAlign: 'center',
        position: 'relative',
        [theme.breakpoints.down('md')]: {
            minHeight: '90px',
            maxHeight: '90px',
            marginBottom: '0.8rem',
        },
        [theme.breakpoints.down('sm')]: {
            minHeight: '80px',
            maxHeight: '80px',
            marginBottom: '0.6rem',
        },
    },
    typingLine: {
        display: 'block',
        width: '100%',
        height: '50px', // Altura fija por línea (reducida)
        lineHeight: '50px',
        textAlign: 'center',
        position: 'relative',
        [theme.breakpoints.down('md')]: {
            height: '45px',
            lineHeight: '45px',
        },
        [theme.breakpoints.down('sm')]: {
            height: '40px',
            lineHeight: '40px',
        },
    },
    typingText: {
        display: 'inline-block',
        fontSize: '1.6rem',
        fontWeight: '600',
        textTransform: 'uppercase',
        fontFamily: 'Space Grotesk, sans-serif',
        letterSpacing: '1px',
        whiteSpace: 'nowrap', // Evita que el texto se divida
        position: 'relative',
        minHeight: '1.2em', // Altura mínima para mantener espacio
        verticalAlign: 'middle',
        [theme.breakpoints.down('md')]: {
            fontSize: '1.3rem',
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '1.1rem',
        },
    },
    cursor: {
        display: 'inline-block',
        fontWeight: '300',
        animation: '$blink 1s infinite',
        marginLeft: '2px',
    },
    '@keyframes blink': {
        '0%, 50%': {
            opacity: 1,
        },
        '51%, 100%': {
            opacity: 0,
        },
    },
    descriptionContainer: {
        marginTop: '0.5rem',
        marginBottom: '0.5rem',
        position: 'relative',
        padding: '1.2rem',
        borderRadius: '10px',
        maxWidth: '90%',
        textAlign: 'center',
        backdropFilter: 'blur(5px)',
        [theme.breakpoints.down('md')]: {
            padding: '1rem',
            maxWidth: '95%',
            marginTop: '0.4rem',
            marginBottom: '0.4rem',
        },
        [theme.breakpoints.down('sm')]: {
            padding: '0.9rem',
            maxWidth: '98%',
            marginTop: '0.3rem',
            marginBottom: '0.3rem',
        },
    },
    description: {
        fontSize: 'clamp(0.9rem, 1.5vw, 1rem)',
        lineHeight: '1.6',
        fontWeight: '300',
        fontFamily: 'Space Grotesk, sans-serif',
        textAlign: 'center',
        maxWidth: '600px',
        margin: '0 auto',
        color: 'inherit',
        '@media (max-width: 768px)': {
            fontSize: 'clamp(0.85rem, 2vw, 0.95rem)',
            lineHeight: '1.5',
        },
        '@media (max-width: 480px)': {
            fontSize: 'clamp(0.8rem, 1.8vw, 0.9rem)',
            lineHeight: '1.4',
        },
    },
    buttonContainer: {
        marginTop: '1rem',
        marginBottom: '1rem',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        [theme.breakpoints.down('md')]: {
            marginTop: '0.8rem',
            marginBottom: '0.8rem',
        },
        [theme.breakpoints.down('sm')]: {
            marginTop: '0.6rem',
            marginBottom: '0.6rem',
        },
    },
    contactButton: {
        color: '#FFFFFF',
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
        '&:hover': {
            transform: 'translateY(-2px)',
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
        flexShrink: 0, // Evita que se comprima
    },
    imageWrapper: {
        position: 'relative',
        width: '450px',
        height: '450px',
        borderRadius: '50%',
        overflow: 'hidden',
        flexShrink: 0, // Evita que se comprima
        [theme.breakpoints.down('md')]: {
            width: '350px',
            height: '350px',
        },
        [theme.breakpoints.down('sm')]: {
            width: '280px',
            height: '280px',
        },
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
