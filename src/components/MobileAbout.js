import React, { useState, useEffect } from 'react';
import { Typography, Card, CardContent } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import portada from "../img/original-ana.png";

const MobileAbout = () => {
    const [fullStackText, setFullStackText] = useState('');
    const [developerText, setDeveloperText] = useState('');
    const [isTypingDeveloper, setIsTypingDeveloper] = useState(true);

    const fullStack = "Software";
    const developer = "Engineer";
    const whatsappLink = "https://wa.link/2ogmx1"; // Cambia este enlace por el tuyo

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
            <CardContent className={classes.cardContent}>
            <div className={classes.contentContainer}> 
                <Typography variant="h5" className={classes.title}>Soy Vanesa Sanchez</Typography>
                <span className={classes.typingText}>
                    {fullStackText} {developerText}
                </span><br/>
              
                <div className={classes.imageContainer}>
                    <img src={portada} alt="Vanesa Sanchez" className={classes.roundedImage} />
                </div>
                <div className={classes.buttonContainer}>
                    <a href={whatsappLink} className={classes.contactButton}>
                        CONTÁCTAME
                    </a>
                </div>
                </div>
            </CardContent>
        </Card>
    );
};

const useStyles = makeStyles((theme) => ({
    card: {
        backgroundColor: "transparent",
        boxShadow: 'none',
        border: 'none',
       
        height: '100vh', // Asegúrate de que el card ocupe toda la altura de la vista
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center', // Centra el contenido verticalmente
        alignItems: 'center', // Centra el contenido horizontalmente
    },
    roundedImage: {
        width: '70%',
        borderRadius: '50%',
        marginTop:'20px',
        marginBottom: '30px',
    },
    title: {
        color: '#FFFFFF', // Blanco
        fontSize: '2rem',
        fontWeight: '700',
        marginBottom: '20px',
        textAlign: 'center', // Centra el título
    },
    typingText: {
        fontSize: "1.5rem",
        fontWeight: "600",
        color: '#007ACC', // Azul Eléctrico
        textTransform: 'uppercase',
        textAlign: 'center', // Centra el texto
        marginBottom: '30px', // Espacio entre el texto y la imagen
        fontFamily: 'Space Grotesk, sans-serif',
    },
    buttonContainer: {
        marginTop: '30px',
        textAlign: 'center',
    },
    contactButton: {
        color: '#FFFFFF', // Blanco
        backgroundColor: '#007ACC', // Azul Eléctrico
        borderRadius: '20px',
        padding: '10px 20px',
        textDecoration: 'none',
        transition: 'background-color 0.3s',
        '&:hover': {
            backgroundColor: '#FF6F30', // Naranja Brillante en hover
        },
    },
    imageContainer: {
        marginTop: '40px',
    },
    description: {
        marginTop: '10px',
        color: '#E0E0E0', // Gris Claro
        fontSize: '1.0rem',
        lineHeight: '1.6',
        fontWeight: '150',
        fontFamily: 'Space Grotesk, sans-serif',
    },
   
    cardContent: {
      padding: theme.spacing(1), // Ajusta el padding según tus necesidades
  },
  contentContainer: {
    marginTop: -theme.spacing(2),
   
},
}));

export default MobileAbout;
