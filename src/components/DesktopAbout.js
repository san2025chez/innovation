import React, { useState, useEffect } from 'react';
import { Typography, Card, CardContent, Grid, CardMedia } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import portada from "../img/original-ana.png";
import { motion } from 'framer-motion';

const DesktopAbout = () => {
    const [fullStackText, setFullStackText] = useState('');
    const [developerText, setDeveloperText] = useState('');
    const [isTypingDeveloper, setIsTypingDeveloper] = useState(true);

    const fullStack = "Software";
    const developer = "Engineer";
    const whatsappLink = "https://wa.link/2ogmx1";

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
        <Card className={classes.card} style={{padding:0, margin:0}}>
            <CardContent className={classes.cardcontent}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6} className={classes.textContainer}>
                        <Typography variant="h4" className={classes.title}>Soy Vanesa Sanchez</Typography>
                        <span className={classes.typingText}>
                            {fullStackText} {developerText}
                        </span>
                        <Typography variant="h7" className={classes.description}>
                            Soy Ingeniera de Software, especialista en crear soluciones tecnológicas usando nuevas tecnologías. Me apasiona transformar ideas en productos digitales innovadores y eficientes. ¡Juntos, podemos impulsar tu proyecto!
                        </Typography>
                        <div className={classes.buttonContainer}>
                            <motion.button
                                className={classes.contactButton}
                                onClick={handleClick}
                            >
                                CONTACTARME
                            </motion.button>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6} className={classes.imageContainer}>
                        <CardMedia className={classes.media} image={portada} title="Vanesa Sanchez" />
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
};

const useStyles = makeStyles((theme) => ({
    card: {
        backgroundColor: "#000000",
        boxShadow: 'none',
        border: 'none',
        display: "flex",
        height:'100vh',
        padding:0,
        margin:0,
        flexDirection: "column",
        
    },
    cardcontent: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
    },
    title: {
        marginBottom: '15px',
        color: '#FFFFFF', // Blanco
        fontSize: '2.5rem',
        fontWeight: '700',
        textTransform: 'uppercase',
        fontFamily: 'Space Grotesk, sans-serif',
    },
    typingText: {
        fontSize: "3rem",
        fontWeight: "700",
        color: '#007ACC', // Azul Eléctrico
        textTransform: 'uppercase',
        marginBottom: '15px',
        fontFamily: 'Space Grotesk, sans-serif',
    },
    description: {
        marginTop: '20px',
        color: '#E0E0E0', // Gris Claro
        fontSize: '1.1rem',
        lineHeight: '1.6',
        fontWeight: '150',
        fontFamily: 'Space Grotesk, sans-serif',
    },
    buttonContainer: {
        marginTop: '70px',
        textAlign: 'center',
        marginBottom: '10px',
    },
    contactButton: {
        color: '#FFFFFF',
        backgroundColor: '#007ACC', // Azul Eléctrico
        borderRadius: '20px',
        padding: '10px 20px',
        fontSize: '16px',
        border: 'none',
        cursor: 'pointer',
        transition: 'background-color 0.3s, transform 0.2s',
        '&:hover': {
            backgroundColor: '#FF6F30', // Naranja Brillante en hover
        },
    },
    imageContainer: {
        width: '100%',
        display: 'flex',
     
        justifyContent: 'center',
  
        alignItems: 'center',

        height: '100vh'
    },
    media: {
        width: '80%',
        height: '100vh',
        maxHeight: '100vh',
        objectFit: 'cover',
       
    },
    textContainer: {
        display: 'flex',
        flexDirection: 'column',
     
        padding: '60px 30px 0',
        alignItems: 'center',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
    },
     container: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',

    }
}));

export default DesktopAbout;
