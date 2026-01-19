import React, { useState } from 'react';
import { 
  makeStyles, 
  Typography, 
  Chip, 
  Accordion, 
  AccordionSummary, 
  AccordionDetails,
  useTheme, 
  useMediaQuery,
  Box,
  Divider
} from '@material-ui/core';
import { motion, AnimatePresence } from 'framer-motion';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import WorkIcon from '@material-ui/icons/Work';
import CodeIcon from '@material-ui/icons/Code';
import CloudIcon from '@material-ui/icons/Cloud';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { SectionTitle } from './common/SectionTitle';
import { useAppTheme } from '../hooks/useAppTheme';

const useStyles = makeStyles((theme) => ({
  section: {
    minHeight: '100vh',
    padding: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(4, 2),
    },
    '@media (max-height: 667px)': {
      padding: theme.spacing(3, 2),
      minHeight: 'auto',
    },
  },
  container: {
    width: '100%',
    maxWidth: '1200px',
    margin: '0 auto',
    position: 'relative',
  },
  // Timeline Desktop Styles
  timelineContainer: {
    position: 'relative',
    padding: theme.spacing(4, 0),
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
  timelineLine: {
    position: 'absolute',
    left: '50%',
    top: 0,
    bottom: 0,
    width: '3px',
    transform: 'translateX(-50%)',
    zIndex: 0,
  },
  timelineItem: {
    position: 'relative',
    marginBottom: theme.spacing(6),
    display: 'flex',
    alignItems: 'center',
    '&:nth-child(odd)': {
      flexDirection: 'row',
    },
    '&:nth-child(even)': {
      flexDirection: 'row-reverse',
    },
  },
  timelineDot: {
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '20px',
    height: '20px',
    borderRadius: '50%',
    zIndex: 2,
    border: '4px solid',
    transition: 'all 0.3s ease',
  },
  timelineContent: {
    width: '45%',
    padding: theme.spacing(3),
    borderRadius: '16px',
    position: 'relative',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    cursor: 'pointer',
    '&:hover': {
      transform: 'translateY(-8px)',
    },
  },
  // Accordion Mobile Styles
  accordionContainer: {
    width: '100%',
    display: 'none',
    [theme.breakpoints.down('md')]: {
      display: 'block',
    },
  },
  accordion: {
    marginBottom: theme.spacing(2),
    borderRadius: '16px !important',
    overflow: 'hidden',
    transition: 'all 0.3s ease',
    '&:before': {
      display: 'none',
    },
    '&.Mui-expanded': {
      marginBottom: theme.spacing(2),
    },
  },
  accordionSummary: {
    padding: theme.spacing(2.5, 3),
    minHeight: '72px !important',
    '&.Mui-expanded': {
      minHeight: '72px !important',
    },
    '& .MuiAccordionSummary-content': {
      margin: 0,
    },
  },
  accordionDetails: {
    padding: theme.spacing(0, 3, 3, 3),
    flexDirection: 'column',
    color: 'inherit',
  },
  // Card Styles
  cardHeader: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: theme.spacing(2),
  },
  cardTitle: {
    fontFamily: 'Space Grotesk, sans-serif',
    fontWeight: 700,
    fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)',
    marginBottom: theme.spacing(0.5),
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(1),
    '&.MuiTypography-root': {
      color: 'inherit !important',
    },
  },
  cardCompany: {
    fontFamily: 'Space Grotesk, sans-serif',
    fontWeight: 500,
    fontSize: 'clamp(0.95rem, 2vw, 1.1rem)',
    opacity: 0.9,
    marginBottom: theme.spacing(1),
    '&.MuiTypography-root': {
      color: 'inherit !important',
    },
  },
  cardPeriod: {
    fontFamily: 'Space Grotesk, sans-serif',
    fontSize: 'clamp(0.85rem, 1.8vw, 0.95rem)',
    opacity: 0.7,
    fontStyle: 'italic',
    '&.MuiTypography-root': {
      color: 'inherit !important',
    },
  },
  badgesContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: theme.spacing(1),
    marginBottom: theme.spacing(2),
  },
  badge: {
    fontFamily: 'Space Grotesk, sans-serif',
    fontWeight: 600,
    fontSize: '0.75rem',
    height: '24px',
    padding: theme.spacing(0, 1.5),
  },
  achievementsList: {
    marginTop: theme.spacing(2),
    paddingLeft: theme.spacing(2),
  },
  achievementItem: {
    display: 'flex',
    alignItems: 'flex-start',
    marginBottom: theme.spacing(1.5),
    fontFamily: 'Space Grotesk, sans-serif',
    fontSize: 'clamp(0.85rem, 1.8vw, 0.95rem)',
    lineHeight: 1.6,
    '& span, & p, & div': {
      color: 'inherit !important',
    },
  },
  achievementIcon: {
    marginRight: theme.spacing(1.5),
    marginTop: theme.spacing(0.25),
    fontSize: '1.2rem',
  },
  techStackContainer: {
    marginTop: theme.spacing(2.5),
    display: 'flex',
    flexWrap: 'wrap',
    gap: theme.spacing(1),
  },
  techChip: {
    fontFamily: 'Space Grotesk, sans-serif',
    fontWeight: 500,
    fontSize: '0.8rem',
    height: '28px',
    transition: 'all 0.3s ease',
    '&:hover': {
      transform: 'scale(1.05)',
    },
  },
  metricCard: {
    display: 'inline-flex',
    alignItems: 'center',
    padding: theme.spacing(0.5, 1.5),
    borderRadius: '8px',
    marginLeft: theme.spacing(1),
    fontWeight: 700,
    fontSize: '0.85rem',
  },
  iconWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '48px',
    height: '48px',
    borderRadius: '12px',
    marginBottom: theme.spacing(2),
    fontSize: '1.8rem',
  },
}));

const experiencias = [
  {
    id: 1,
    titulo: 'Desarrolladora FullStack Freelance',
    empresa: 'Freelance',
    periodo: 'Abr 2023 - Presente',
    tipo: 'freelance',
    actual: true,
    icon: <CodeIcon />,
    logros: [
      { texto: 'Proyectos con IA: Chatbot DeepSeek, automatizaciones n8n con OpenAI/Groq', icon: <TrendingUpIcon /> },
      { texto: 'Desarrollo e-commerce completo con microservicios', icon: <CodeIcon /> },
      { texto: 'Mejora 100% usabilidad en proyectos cliente', icon: <CheckCircleIcon /> },
    ],
    stack: ['React', 'Node.js', 'Docker', 'MongoDB', 'AWS', 'Material-UI', 'n8n', 'OpenAI', 'Groq'],
    destacado: true,
  },
  {
    id: 2,
    titulo: 'Especialista en Infraestructura DevOps',
    empresa: 'Instituciones Educativas',
    periodo: '2025',
    tipo: 'devops',
    actual: false,
    icon: <CloudIcon />,
    logros: [
      { texto: 'Gestión de redes y servidores institucionales', icon: <CloudIcon /> },
      { texto: 'Seguridad informática y políticas de backup', icon: <CheckCircleIcon /> },
      { texto: 'Coordinación programas tecnológicos educativos', icon: <WorkIcon /> },
    ],
    stack: ['DevOps', 'Seguridad', 'Infraestructura Cloud', 'Networking'],
  },
  {
    id: 3,
    titulo: 'FullStack Developer',
    empresa: 'Vortex IT',
    periodo: 'Abr 2022 - Ene 2023',
    tipo: 'fulltime',
    actual: false,
    icon: <WorkIcon />,
    logros: [
      { texto: 'Reducción 90% bugs en módulos registro', icon: <CheckCircleIcon /> },
      { texto: 'Desarrollo fintech con microservicios', icon: <CodeIcon /> },
    ],
    stack: ['React', 'Node.js', 'AWS', 'PostgreSQL', 'Microservicios'],
  },
  {
    id: 4,
    titulo: 'FullStack Developer',
    empresa: 'Ministerio de Educación',
    periodo: 'Ene 2021 - Ago 2022',
    tipo: 'fulltime',
    actual: false,
    icon: <WorkIcon />,
    logros: [
      { texto: 'Chatbot automatizado (reducción 90% carga)', icon: <TrendingUpIcon /> },
      { texto: 'Soporte plataforma Moodle', icon: <CodeIcon /> },
    ],
    stack: ['React', 'Node.js', 'PHP', 'DialogFlow', 'Moodle'],
  },
  {
    id: 5,
    titulo: 'FullStack Developer',
    empresa: 'Cadygo',
    periodo: 'Jun 2019 - Abr 2021',
    tipo: 'fulltime',
    actual: false,
    icon: <WorkIcon />,
    logros: [
      { texto: 'APIs sistema e-commerce (100% operatividad)', icon: <CheckCircleIcon /> },
      { texto: 'Mejora 20% rendimiento frontend', icon: <TrendingUpIcon /> },
    ],
    stack: ['React', 'Node.js', 'E-commerce', 'APIs'],
  },
];

const ExperienciaCard = ({ experiencia, appTheme, classes, isMobile }) => {
  const getBadgeColor = (tipo, actual) => {
    if (actual) return appTheme.colors.orange;
    if (tipo === 'freelance') return appTheme.colors.magenta;
    if (tipo === 'devops') return '#10B981';
    return appTheme.colors.primary;
  };

  const getBadgeLabel = (tipo, actual) => {
    if (actual) return 'ACTUAL';
    if (tipo === 'freelance') return 'FREELANCE';
    if (tipo === 'devops') return 'DEVOPS';
    return 'FULLTIME';
  };

  return (
    <Box
      style={{
        background: appTheme.darkMode
          ? 'linear-gradient(135deg, rgba(30, 42, 56, 0.6) 0%, rgba(30, 42, 56, 0.2) 100%)'
          : 'linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.7) 100%)',
        backdropFilter: 'blur(10px)',
        border: `1px solid ${appTheme.darkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}`,
        boxShadow: appTheme.darkMode
          ? `0 8px 32px rgba(0, 0, 0, 0.3), 0 0 0 1px ${appTheme.colors.magenta}20`
          : `0 8px 32px rgba(91, 33, 182, 0.15), 0 0 0 1px rgba(245, 158, 11, 0.1)`,
        color: appTheme.colors.textPrimary,
      }}
      className={classes.timelineContent}
    >
      <Box
        className={classes.iconWrapper}
        style={{
          background: appTheme.colors.gradient,
          color: '#FFFFFF',
        }}
      >
        {experiencia.icon}
      </Box>
      
      <Box className={classes.cardHeader}>
        <Typography
          className={classes.cardTitle}
          style={{
            color: appTheme.colors.textPrimary,
            transition: 'color 0.3s ease',
          }}
        >
          {experiencia.titulo}
          {experiencia.destacado && (
            <Box
              className={classes.metricCard}
              style={{
                background: appTheme.colors.gradient,
                color: '#FFFFFF',
              }}
            >
              ⭐
            </Box>
          )}
        </Typography>
        <Typography
          className={classes.cardCompany}
          style={{
            color: appTheme.colors.textSecondary,
            transition: 'color 0.3s ease',
          }}
        >
          {experiencia.empresa}
        </Typography>
        <Typography
          className={classes.cardPeriod}
          style={{
            color: appTheme.colors.textSecondary,
            transition: 'color 0.3s ease',
          }}
        >
          {experiencia.periodo}
        </Typography>
      </Box>

      <Box className={classes.badgesContainer}>
        <Chip
          label={getBadgeLabel(experiencia.tipo, experiencia.actual)}
          className={classes.badge}
          style={{
            backgroundColor: getBadgeColor(experiencia.tipo, experiencia.actual),
            color: '#FFFFFF',
          }}
        />
        {experiencia.actual && (
          <Chip
            label="ACTUAL"
            className={classes.badge}
            style={{
              backgroundColor: appTheme.colors.orange,
              color: '#FFFFFF',
            }}
          />
        )}
      </Box>

      <Box className={classes.achievementsList}>
        {experiencia.logros.map((logro, index) => (
          <Box
            key={index}
            className={classes.achievementItem}
            style={{
              color: appTheme.colors.textSecondary,
              transition: 'color 0.3s ease',
            }}
          >
            <Box
              style={{
                color: appTheme.colors.magenta,
                transition: 'color 0.3s ease',
              }}
              className={classes.achievementIcon}
            >
              {logro.icon}
            </Box>
            <Typography 
              component="span"
              style={{
                color: appTheme.colors.textSecondary,
                transition: 'color 0.3s ease',
              }}
            >
              {logro.texto}
            </Typography>
          </Box>
        ))}
      </Box>

      <Box className={classes.techStackContainer}>
        {experiencia.stack.map((tech, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.1, y: -2 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Chip
              label={tech}
              className={classes.techChip}
              style={{
                backgroundColor: appTheme.darkMode
                  ? 'rgba(255, 0, 255, 0.15)'
                  : 'rgba(91, 33, 182, 0.1)',
                color: appTheme.colors.textPrimary,
                border: `1px solid ${appTheme.darkMode ? 'rgba(255, 0, 255, 0.3)' : 'rgba(91, 33, 182, 0.3)'}`,
              }}
            />
          </motion.div>
        ))}
      </Box>
    </Box>
  );
};

const ExperienciaLaboral = ({ title, id }) => {
  const appTheme = useAppTheme();
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const cardVariants = {
    hidden: { 
      opacity: 0,
      y: 50,
      scale: 0.95
    },
    visible: { 
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        duration: 0.6
      }
    }
  };

  return (
    <section 
      className={classes.section} 
      id={id}
      style={{
        background: appTheme.colors.gradientBackground,
        color: appTheme.colors.textPrimary,
        transition: 'background 0.3s ease, color 0.3s ease',
      }}
    >
      <SectionTitle
        title={title}
        subtitle="Mi trayectoria profesional en tecnología e innovación"
      />
      
      <div className={classes.container}>
        {/* Timeline Desktop */}
        <div className={classes.timelineContainer}>
          <Box
            className={classes.timelineLine}
            style={{
              background: appTheme.colors.gradient,
              opacity: 0.3,
            }}
          />
          {experiencias.map((experiencia, index) => (
            <motion.div
              key={experiencia.id}
              className={classes.timelineItem}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <Box
                className={classes.timelineDot}
                style={{
                  background: appTheme.colors.gradient,
                  borderColor: appTheme.darkMode ? '#000000' : '#FFFFFF',
                }}
              />
              <ExperienciaCard
                experiencia={experiencia}
                appTheme={appTheme}
                classes={classes}
                isMobile={false}
              />
            </motion.div>
          ))}
        </div>

        {/* Accordion Mobile/Tablet */}
        <div className={classes.accordionContainer}>
          {experiencias.map((experiencia, index) => (
            <motion.div
              key={experiencia.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Accordion
                expanded={expanded === `panel${index}`}
                onChange={handleChange(`panel${index}`)}
                className={classes.accordion}
                style={{
                  background: appTheme.darkMode
                    ? 'linear-gradient(135deg, rgba(30, 42, 56, 0.6) 0%, rgba(30, 42, 56, 0.2) 100%)'
                    : 'linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.7) 100%)',
                  backdropFilter: 'blur(10px)',
                  border: `1px solid ${appTheme.darkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}`,
                  boxShadow: appTheme.darkMode
                    ? `0 4px 20px rgba(0, 0, 0, 0.2)`
                    : `0 4px 20px rgba(91, 33, 182, 0.1)`,
                }}
              >
                <AccordionSummary
                  expandIcon={
                    <ExpandMoreIcon
                      style={{
                        color: appTheme.colors.magenta,
                        transition: 'color 0.3s ease',
                      }}
                    />
                  }
                  className={classes.accordionSummary}
                  style={{
                    color: appTheme.colors.textPrimary,
                  }}
                >
                  <Box style={{ width: '100%' }}>
                    <Box
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: theme.spacing(1.5),
                        marginBottom: theme.spacing(1),
                      }}
                    >
                      <Box
                        className={classes.iconWrapper}
                        style={{
                          background: appTheme.colors.gradient,
                          color: '#FFFFFF',
                          width: '40px',
                          height: '40px',
                          marginBottom: 0,
                        }}
                      >
                        {experiencia.icon}
                      </Box>
                      <Box style={{ flex: 1 }}>
                        <Typography
                          className={classes.cardTitle}
                          style={{
                            color: appTheme.colors.textPrimary,
                            fontSize: '1rem',
                            marginBottom: theme.spacing(0.5),
                            transition: 'color 0.3s ease',
                          }}
                        >
                          {experiencia.titulo}
                          {experiencia.destacado && (
                            <Box
                              className={classes.metricCard}
                              style={{
                                background: appTheme.colors.gradient,
                                color: '#FFFFFF',
                                fontSize: '0.7rem',
                                padding: theme.spacing(0.25, 1),
                              }}
                            >
                              ⭐
                            </Box>
                          )}
                        </Typography>
                        <Typography
                          className={classes.cardCompany}
                          style={{
                            color: appTheme.colors.textSecondary,
                            fontSize: '0.9rem',
                            marginBottom: theme.spacing(0.5),
                            transition: 'color 0.3s ease',
                          }}
                        >
                          {experiencia.empresa}
                        </Typography>
                        <Typography
                          className={classes.cardPeriod}
                          style={{
                            color: appTheme.colors.textSecondary,
                            fontSize: '0.8rem',
                            transition: 'color 0.3s ease',
                          }}
                        >
                          {experiencia.periodo}
                        </Typography>
                      </Box>
                    </Box>
                    <Box className={classes.badgesContainer}>
                      <Chip
                        label={experiencia.actual ? 'ACTUAL' : experiencia.tipo === 'freelance' ? 'FREELANCE' : experiencia.tipo === 'devops' ? 'DEVOPS' : 'FULLTIME'}
                        className={classes.badge}
                        style={{
                          backgroundColor: experiencia.actual
                            ? appTheme.colors.orange
                            : experiencia.tipo === 'freelance'
                            ? appTheme.colors.magenta
                            : experiencia.tipo === 'devops'
                            ? '#10B981'
                            : appTheme.colors.primary,
                          color: '#FFFFFF',
                        }}
                      />
                    </Box>
                  </Box>
                </AccordionSummary>
                <AccordionDetails 
                  className={classes.accordionDetails}
                  style={{
                    color: appTheme.colors.textPrimary,
                  }}
                >
                  <Box className={classes.achievementsList}>
                    {experiencia.logros.map((logro, idx) => (
                      <Box
                        key={idx}
                        className={classes.achievementItem}
                        style={{
                          color: appTheme.colors.textSecondary,
                          transition: 'color 0.3s ease',
                        }}
                      >
                        <Box
                          style={{
                            color: appTheme.colors.magenta,
                            transition: 'color 0.3s ease',
                          }}
                          className={classes.achievementIcon}
                        >
                          {logro.icon}
                        </Box>
                        <Typography 
                          component="span"
                          style={{
                            color: appTheme.colors.textSecondary,
                            transition: 'color 0.3s ease',
                          }}
                        >
                          {logro.texto}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                  <Box className={classes.techStackContainer}>
                    {experiencia.stack.map((tech, idx) => (
                      <motion.div
                        key={idx}
                        whileHover={{ scale: 1.1, y: -2 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        <Chip
                          label={tech}
                          className={classes.techChip}
                          style={{
                            backgroundColor: appTheme.darkMode
                              ? 'rgba(255, 0, 255, 0.15)'
                              : 'rgba(91, 33, 182, 0.1)',
                            color: appTheme.colors.textPrimary,
                            border: `1px solid ${appTheme.darkMode ? 'rgba(255, 0, 255, 0.3)' : 'rgba(91, 33, 182, 0.3)'}`,
                          }}
                        />
                      </motion.div>
                    ))}
                  </Box>
                </AccordionDetails>
              </Accordion>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienciaLaboral;
