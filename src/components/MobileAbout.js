import React, { useState, useEffect, Suspense } from 'react';
import { Typography, Card, CardContent } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress'; // Ejemplo de indicador de carga
import portada from "../img/original-ana.png";
import { motion } from 'framer-motion';

const MobileAbout = () => {
    const [fullStackText, setFullStackText] = React.useState('');
    const [developerText, setDeveloperText] = React.useState('');
    const [isTypingDeveloper, setIsTypingDeveloper] = React.useState(true);
    const [typingTimeout, setTypingTimeout] = React.useState(null);

    const fullStack = "Software";
    const developer = "Engineer";
    const whatsappLink = "https://wa.link/cns6bw"; // Cambia este enlace por el tuyo

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
        <div>
            <Suspense fallback={<div className="loading"><CircularProgress color="secondary" size={50} /></div>}>
            <Card className={classes.card}>
                <CardContent className={classes.cardContent}>
                    <Typography variant="h5" className={classes.title}>Soy Vanesa Sanchez</Typography>
                    <div className={classes.typingText}>
                        <span>
                            {fullStackText} {developerText}
                        </span>
                    </div>
                    <br/>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, ease: 'easeInOut' }}
                    >
                        <Typography variant="h7" className={classes.description}>
                            Soy Ingeniera de Software, especialista en crear soluciones tecnológicas usando nuevas tecnologías.
                            Me gusta transformar ideas en productos digitales innovadores y eficientes.
                            ¡Juntos, podemos impulsar tu proyecto!
                        </Typography>
                    </motion.div>
                    <div className={classes.imageContainer}>
                        <img src={portada} alt="Vanesa Sanchez" className={classes.roundedImage} />
                    </div>
                    <div className={classes.buttonContainer}>
                        <motion.button
                            className={classes.contactButton}
                            onClick={handleClick}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            CONTACTARME
                        </motion.button>
                    </div>
                </CardContent>
            </Card>
            </Suspense>
        </div>
    );
};

const useStyles = makeStyles((theme) => ({
    card: {
        backgroundColor: "#000000",
        boxShadow: 'none',
        border: 'none',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    roundedImage: {
        width: '50%',
        borderRadius: '50%',
        marginTop: '20px',
        marginBottom: '20px',
    },
    title: {
        color: '#FFFFFF',
        fontSize: '1.5rem',
        fontWeight: '700',
        marginBottom: '10px',
        textAlign: 'center',
    },
    typingText: {
        fontSize: "1.5rem",
        fontWeight: "600",
        color: '#007ACC',
        textTransform: 'uppercase',
        textAlign: 'center',
        marginBottom: '10px',
        fontFamily: 'Space Grotesk, sans-serif',
    },
    buttonContainer: {
        marginTop: '30px',
        textAlign: 'center',
    },
    contactButton: {
        color: '#FFFFFF',
        backgroundColor: '#007ACC',
        borderRadius: '20px',
        padding: '10px 20px',
        textDecoration: 'none',
        transition: 'background-color 0.3s',
        '&:hover': {
            backgroundColor: '#FF6F30',
            boxShadow: 'none',
        },
    },
    imageContainer: {
        paddingBottom: '30px',
    },
    description: {
        paddingBottom: '10px',
        color: '#FFFFFF',
        fontSize: '0.9rem',
        lineHeight: '1.8',
        fontWeight: '100',
        fontFamily: 'Space Grotesk, sans-serif',
        textAlign: 'center',
    },
    cardContent: {
        paddingTop: '10px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '85vh',
    },
}));

export default MobileAbout;

