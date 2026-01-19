import React from 'react';
import { makeStyles, Grid, Typography } from '@material-ui/core';
import { motion } from 'framer-motion';
import { SectionTitle } from './common/SectionTitle';
import { useAppTheme } from '../hooks/useAppTheme';

const AboutMe = ({ id = 'aboutme' }) => {
  const appTheme = useAppTheme();
  const classes = useStyles();

  return (
    <section 
      id={id} 
      className={classes.section}
      style={{
        background: appTheme.colors.gradientBackground,
        transition: 'background 0.3s ease',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className={classes.container}
      >
        <SectionTitle title="Acerca de mí" />

        <Typography 
          variant="body1" 
          className={classes.lead}
          style={{
            color: appTheme.colors.textSecondary,
            transition: 'color 0.3s ease',
          }}
        >
          Como <strong>Ingeniera Informática con especialización en desarrollo Full-Stack</strong>,
          combino expertise técnico con comprensión de negocio para crear productos digitales que
          resuelven problemas reales.
        </Typography>
      {/*   <Typography variant="h6" className={classes.sectionTitle}>
          Más que código: soluciones con propósito
        </Typography>
        <Typography variant="body2" className={classes.paragraph}>
          Encuentro mi mayor satisfacción en transformar ideas complejas en aplicaciones elegantes y funcionales.
          Mi journey técnico comenzó con la curiosidad de entender qué sucede detrás de la pantalla, y hoy se ha
          convertido en la pasión por crear productos que mejoran la vida de las personas.
        </Typography> */}

        <div className={classes.approachBlocks}>
          <motion.div 
            className={classes.approachCard}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.995 }}
            transition={{ duration: 0.3 }}
            style={{
              background: appTheme.darkMode
                ? 'linear-gradient(180deg, rgba(255,0,255,0.06) 0%, rgba(10,10,10,0.5) 100%)'
                : 'linear-gradient(180deg, rgba(99, 102, 241, 0.06) 0%, rgba(248, 250, 252, 0.5) 100%)',
              border: `1px solid ${appTheme.darkMode ? 'rgba(255, 0, 255, 0.16)' : 'rgba(99, 102, 241, 0.16)'}`,
              transition: 'all 0.3s ease',
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: 8,
                bottom: 8,
                left: 6,
                width: 3,
                borderRadius: 3,
                background: appTheme.colors.gradient,
                transition: 'background 0.3s ease',
              }}
            />
            <Typography 
              variant="subtitle1" 
              className={classes.approachTitle}
              style={{
                color: appTheme.colors.textPrimary,
                transition: 'color 0.3s ease',
              }}
            >
              💻 Excelencia técnica con propósito
            </Typography>
            <ul 
              className={classes.bulletList}
              style={{
                color: appTheme.colors.textSecondary,
                transition: 'color 0.3s ease',
              }}
            >
              <li>2+ años desarrollando con React y Node.js</li>
              <li>Arquitectura y escalabilidad como pilares</li>
              <li>Código limpio y mejores prácticas</li>
            </ul>
          </motion.div>
          <motion.div 
            className={classes.approachCard}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.995 }}
            transition={{ duration: 0.3, delay: 0.05 }}
            style={{
              background: appTheme.darkMode
                ? 'linear-gradient(180deg, rgba(255,0,255,0.06) 0%, rgba(10,10,10,0.5) 100%)'
                : 'linear-gradient(180deg, rgba(99, 102, 241, 0.06) 0%, rgba(248, 250, 252, 0.5) 100%)',
              border: `1px solid ${appTheme.darkMode ? 'rgba(255, 0, 255, 0.16)' : 'rgba(99, 102, 241, 0.16)'}`,
              transition: 'all 0.3s ease',
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: 8,
                bottom: 8,
                left: 6,
                width: 3,
                borderRadius: 3,
                background: appTheme.colors.gradient,
                transition: 'background 0.3s ease',
              }}
            />
            <Typography 
              variant="subtitle1" 
              className={classes.approachTitle}
              style={{
                color: appTheme.colors.textPrimary,
                transition: 'color 0.3s ease',
              }}
            >
              🎨 Experiencia de usuario como prioridad
            </Typography>
            <ul 
              className={classes.bulletList}
              style={{
                color: appTheme.colors.textSecondary,
                transition: 'color 0.3s ease',
              }}
            >
              <li>Diseño y desarrollo centrado en el usuario</li>
              <li>Performance optimizada en cada entrega</li>
              <li>Trabajo conjunto y fluido con equipos de diseño</li>
            </ul>
          </motion.div>
          <motion.div 
            className={classes.approachCard}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.995 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            style={{
              background: appTheme.darkMode
                ? 'linear-gradient(180deg, rgba(255,0,255,0.06) 0%, rgba(10,10,10,0.5) 100%)'
                : 'linear-gradient(180deg, rgba(99, 102, 241, 0.06) 0%, rgba(248, 250, 252, 0.5) 100%)',
              border: `1px solid ${appTheme.darkMode ? 'rgba(255, 0, 255, 0.16)' : 'rgba(99, 102, 241, 0.16)'}`,
              transition: 'all 0.3s ease',
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: 8,
                bottom: 8,
                left: 6,
                width: 3,
                borderRadius: 3,
                background: appTheme.colors.gradient,
                transition: 'background 0.3s ease',
              }}
            />
            <Typography 
              variant="subtitle1" 
              className={classes.approachTitle}
              style={{
                color: appTheme.colors.textPrimary,
                transition: 'color 0.3s ease',
              }}
            >
              🤝 Colaboración y crecimiento continuo
            </Typography>
            <ul 
              className={classes.bulletList}
              style={{
                color: appTheme.colors.textSecondary,
                transition: 'color 0.3s ease',
              }}
            >
              <li>Experiencia en metodologías ágiles</li>
              <li>Mentalidad abierta al feedback y aprendizaje</li>
              <li>Comunicación clara con equipos multidisciplinares</li>
            </ul>
          </motion.div>
        </div>

     {/*    <Typography variant="subtitle1" className={classes.sectionTitle}>
          Stack técnico principal
        </Typography>
        <div className={classes.tagList}>
          {['React','TypeScript','Node.js','MongoDB','Git','AWS','Docker'].map((tag) => (
            <span key={tag} className={classes.tag}>{tag}</span>
          ))}
        </div> */}

        <Typography 
          variant="body1" 
          className={classes.objective}
          style={{
            color: appTheme.colors.textSecondary,
            transition: 'color 0.3s ease',
          }}
        >
          <strong>Mi objetivo:</strong> Unirme a un equipo innovador donde pueda contribuir con mis habilidades técnicas
          mientras continúo mi crecimiento profesional.
        </Typography>
      </motion.div>
    </section>
  );
};

const useStyles = makeStyles((theme) => ({
  section: {
    padding: theme.spacing(8, 2),
    display: 'flex',
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(4, 4),
    },
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(3, 4.5),
    },
  },
  container: {
    width: '100%',
    maxWidth: 1100,
    textAlign: 'center',
  },
  title: {
    color: '#FFFFFF',
    fontFamily: 'Space Grotesk, sans-serif',
    fontWeight: 800,
    fontSize: 'clamp(1.2rem, 4vw, 1.8rem)',
    marginBottom: theme.spacing(2),
    position: 'relative',
    '&:after': {
      content: '""',
      position: 'absolute',
      bottom: -8,
      left: '50%',
      transform: 'translateX(-50%)',
      width: 70,
      height: 3,
      background: 'linear-gradient(90deg, rgb(255, 0, 255), #FF6F30)',
      borderRadius: 2,
    },
  },
  lead: {
    color: '#E0E0E0',
    margin: theme.spacing(2, 'auto', 3),
    maxWidth: 850,
    lineHeight: 1.6,
    fontWeight: 300,
    fontFamily: 'Space Grotesk, sans-serif',
    fontSize: 'clamp(0.9rem, 2.2vw, 1.1rem)',
  },
  expertiseGrid: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(2),
  },
  card: {
    height: '100%',
    borderRadius: 12,
    background: 'linear-gradient(180deg, rgba(255,0,255,0.06) 0%, rgba(10,10,10,0.45) 100%)',
    border: '1px solid rgba(255, 0, 255, 0.14)',
    padding: theme.spacing(1.5, 2),
    textAlign: 'left',
    transition: 'transform .25s ease, box-shadow .25s ease',
    '&:hover': {
      transform: 'translateY(-2px)',
      boxShadow: '0 10px 20px rgba(255, 0, 255, 0.12)',
    },
  },
  cardTitle: {
    color: '#ffffff',
    fontWeight: 700,
    fontSize: 'clamp(0.95rem, 3.2vw, 1.05rem)',
    marginBottom: 6,
    fontFamily: 'Space Grotesk, sans-serif',
  },
  cardText: {
    color: '#cfcfcf',
    fontSize: 'clamp(0.85rem, 2.8vw, 0.95rem)',
    lineHeight: 1.5,
    fontWeight: 300,
    fontFamily: 'Space Grotesk, sans-serif',
  },
  sectionTitle: {
    color: '#ffffff',
    fontFamily: 'Space Grotesk, sans-serif',
    fontWeight: 700,
    textAlign: 'center',
    marginTop: theme.spacing(2.5),
    marginBottom: theme.spacing(1),
    fontSize: 'clamp(1rem, 3.2vw, 1.2rem)'
  },
  paragraph: {
    color: '#E0E0E0',
    fontFamily: 'Space Grotesk, sans-serif',
    fontWeight: 300,
    textAlign: 'center',
    maxWidth: 900,
    margin: theme.spacing(1, 'auto', 2),
    fontSize: 'clamp(0.9rem, 2.2vw, 1.05rem)',
    lineHeight: 1.6,
  },
  approachBlocks: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: theme.spacing(3),
    marginTop: theme.spacing(2.5),
    [theme.breakpoints.up('md')]: {
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: theme.spacing(4),
    }
  },
  approachCard: {
    position: 'relative',
    borderRadius: 14,
    padding: theme.spacing(2, 2, 2, 2.5),
    backdropFilter: 'blur(4px)',
    boxShadow: '0 6px 18px rgba(0,0,0,0.25)',
    overflow: 'hidden',
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(2.5, 2.5, 2.5, 3),
    },
  },
  approachTitle: {
    color: '#ffffff',
    fontFamily: 'Space Grotesk, sans-serif',
    fontWeight: 700,
    marginBottom: theme.spacing(1.5),
    fontSize: 'clamp(0.95rem, 3.2vw, 1.05rem)',
    [theme.breakpoints.up('md')]: {
      marginBottom: theme.spacing(2),
    }
  },
  bulletList: {
    margin: 0,
    paddingLeft: theme.spacing(2.5),
    color: '#cfcfcf',
    fontFamily: 'Space Grotesk, sans-serif',
    fontSize: 'clamp(0.85rem, 2.6vw, 0.95rem)',
    lineHeight: 1.6,
    '& li': {
      marginBottom: theme.spacing(0.5)
    },
    '& li:last-child': {
      marginBottom: 0
    }
  },
  tagList: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: theme.spacing(1),
    justifyContent: 'center',
    marginBottom: theme.spacing(1.5),
  },
  tag: {
    display: 'inline-block',
    padding: theme.spacing(0.5, 1),
    borderRadius: 20,
    background: 'rgba(255, 0, 255, 0.12)',
    border: '1px solid rgba(255, 0, 255, 0.25)',
    color: '#fff',
    fontSize: 'clamp(0.8rem, 2.2vw, 0.9rem)',
  },
  objective: {
    color: '#E0E0E0',
    marginTop: theme.spacing(1.5),
    fontFamily: 'Space Grotesk, sans-serif',
    fontSize: 'clamp(0.9rem, 2.5vw, 1rem)',
  },
}));

export default AboutMe;
