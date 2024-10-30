import React, { useState, useEffect , Suspense } from 'react';
import { Typography, Card, CardContent } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress'; // Ejemplo de indicador de carga
import portada from "../img/original-ana.png";

const MobileAbout = () => {
    const [fullStackText, setFullStackText] = useState('');
    const [developerText, setDeveloperText] = useState('');
    const [isTypingDeveloper, setIsTypingDeveloper] = useState(true);
    const [typingTimeout, setTypingTimeout] = useState(null);

    const fullStack = "Software";
    const developer = "Engineer";
    const whatsappLink = "https://wa.link/cns6bw"; // Cambia este enlace por el tuyo

    useEffect(() => {
        if (!typingTimeout) {
            setTypingTimeout(
                setTimeout(() => {
                    setFullStackText(fullStack.substring(0, fullStackText.length + 1));
                }, 100)
            );
        }

        return () => {
            if (typingTimeout) {
                clearTimeout(typingTimeout);
                setTypingTimeout(null);
            }
        };
    }, [fullStackText, typingTimeout]);

    useEffect(() => {
        if (developerText === developer) {
            setIsTypingDeveloper(false);
        } else if (developerText === '') {
            setIsTypingDeveloper(true);
        }
    }, [developerText]);

    const handleClick = () => {
        window.open(whatsappLink, '_blank');
    };

    const classes = useStyles();

    return (
        <div>
            <Suspense fallback={<div className="loading"><CircularProgress   color="secondary" size={50} /></div>}>
            <Card className={classes.card}>
                <CardContent className={classes.cardContent}>
                    <Typography variant="h5" className={classes.title}>Soy Vanesa Sanchez</Typography>
                    <div className={classes.typingText}>
                        <span>
                            {fullStackText} {developerText}
                        </span>
                    </div>
                    <br/>
                    <Typography variant="h7" className={classes.description}>
                        Soy Ingeniera de Software, especialista en crear soluciones tecnológicas usando nuevas tecnologías.
                        Me gusta transformar ideas en productos digitales innovadores y eficientes.
                        ¡Juntos, podemos impulsar tu proyecto!
                    </Typography>
                    <div className={classes.imageContainer}>
                        <img src={portada} alt="Vanesa Sanchez" className={classes.roundedImage} />
                    </div>
                    <div className={classes.buttonContainer}>
                        <a href={whatsappLink} className={classes.contactButton}>
                            CONTÁCTAME
                        </a>
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
        flexDirection: 'column', // Maintain vertical layout
        justifyContent: 'center',
        alignItems: 'center',
 
    },
    roundedImage: {
        width: '50%',
        borderRadius: '50%',
        marginTop:'20px',
        marginBottom: '20px',
    },
    title: {
        color: '#FFFFFF', // Blanco
        fontSize: '1.5rem',
        fontWeight: '700',

        marginBottom: '10px',
        textAlign: 'center', // Centra el título
    },
    typingText: {
        fontSize: "1.5rem",
        fontWeight: "600",
        color: '#007ACC', // Azul Eléctrico
        textTransform: 'uppercase',
        textAlign: 'center', // Centra el texto
        marginBottom: '10px', // Espacio entre el texto y la imagen
      
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
     paddingBottom:'30px'
    },
    description: {
       /*  marginTop: '40px',
        paddingTop:'10px', */
        paddingBottom:'10px',
        color: '#FFFFFF',  // Gris Claro
        fontSize: '0.9rem',
        lineHeight: '1.8',
        fontWeight: '100',
        fontFamily: 'Space Grotesk, sans-serif',
        textAlign: 'center', // Center description text
    },
   
    cardContent: {
   paddingTop:'10px',
  
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center', // Center content vertically
      alignItems: 'center', // Center content horizontally   
      height:'85vh',
  
  
  },

}));

export default MobileAbout
