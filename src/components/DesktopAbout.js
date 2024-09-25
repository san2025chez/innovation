import React,{useState, useEffect} from 'react';
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
      <CardContent className={classes.cardcontent}>
        <Grid container spacing={3} style={{ minHeight: "100vh", paddingTop:'50px' }}>
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
        backgroundColor: "transparent",
        boxShadow: 'none',
        border: 'none',
        display: "flex",
      
        flexDirection: "column",
        [theme.breakpoints.down('sm')]: {
          flexDirection: "column",
        },
      },
      cardcontent: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        [theme.breakpoints.down('sm')]: {
          padding: '20px',
          textAlign: 'left',
        },
      },
      title: {
        marginBottom: '15px',
        color: '#FFFFFF',
        fontSize: '2.5rem',
        justifyContent:'center',
        alignItems: 'center',
        fontWeight: '700',
        textTransform: 'uppercase',
        fontFamily: 'Space Grotesk, sans-serif',
        [theme.breakpoints.down('sm')]: {
          fontSize: '2.0rem',
          textAlign: 'left',
        },
      },
      typingText: {
        fontSize: "3rem",
        fontWeight: "700",
        color: '#FFD700',
        textTransform: 'uppercase',
        marginBottom: '15px',
        fontFamily: 'Space Grotesk, sans-serif',
        [theme.breakpoints.down('sm')]: {
          fontSize: '2rem',
          textAlign: 'left',
          fontWeight: '500',
        },
      },
      description: {
        marginTop: '20px',
        color: '#FFFFFF',
        fontSize: '1.1rem',
        lineHeight: '1.6',
        fontWeight: '200', 
        fontFamily: 'Space Grotesk, sans-serif',
            },
      buttonContainer: {
        marginTop: '70px',
        textAlign: 'center',
        marginBottom:'10px',
     
      },
      contactButton: {
        color: '#FFFFFF',
        backgroundColor: '#00BFA5',
        borderRadius: '20px',
        padding: '10px 20px',
        fontSize: '16px',
        border: 'none',
        cursor: 'pointer',
        transition: 'background-color 0.3s, transform 0.2s',
      
        '&:hover': {
          backgroundColor: '#007ACC',
        },
      },
      imageContainer: {
    
        width: '100%',
        display: 'flex',
        marginTop: '-50px', // Eleva la imagen
        justifyContent: 'center',
       
      
      },
      media: {
        width: '85%',
        height: 'auto',
        maxHeight: '600px',
        objectFit: 'cover',
        borderRadius: "10px",
       
      },

      textContainer:{
        display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start', // Cambiado a flex-start para ajustar la posición
   
    padding: '60px 30px 0',// Añade margen superior para bajar el texto
    alignItems: 'center', // Centrar horizontalmente
    height: '100%', // Asegura que el contenedor ocupe toda la altura del Grid
      }
    
  // Estilos del componente (similar a tu original)
}));

export default DesktopAbout;
