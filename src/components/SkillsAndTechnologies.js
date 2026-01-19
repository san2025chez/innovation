import React from 'react';
import { makeStyles } from '@material-ui/core';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { TechnologyList } from './TechnologyList';
import { SkillsList } from './SkillsList';
import { SectionTitle } from './common/SectionTitle';
import { useResponsiveStyles } from '../hooks/useResponsiveStyles';
import { useAppTheme } from '../hooks/useAppTheme';

const useStyles = makeStyles((theme) => ({
  container: {
    minHeight: '100vh',
    padding: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(4, 2),
    },
    '@media (max-height: 667px)': {
      padding: theme.spacing(3, 2),
      minHeight: 'auto',
    },
  },
  content: {
    width: '100%',
    maxWidth: '1200px',
    margin: '0 auto',
    fontFamily: 'Space Grotesk, sans-serif',
    '@media (max-height: 667px)': {
      transform: 'scale(0.92)',
      transformOrigin: 'top center',
    },
    '@media (max-height: 568px)': {
      transform: 'scale(0.85)',
    },
  },
  skillItem: {
    fontSize: 'clamp(0.85rem, 2vw, 1rem)',
    padding: theme.spacing(1.5),
    margin: theme.spacing(1),
    borderRadius: '12px',
    background: 'rgba(255, 255, 255, 0.05)',
    backdropFilter: 'blur(5px)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    transition: 'all 0.3s ease',
    '@media (max-height: 667px)': {
      padding: theme.spacing(1.2),
      margin: theme.spacing(0.8),
      fontSize: 'clamp(0.8rem, 1.8vw, 0.9rem)',
    },
    '@media (max-height: 568px)': {
      padding: theme.spacing(1),
      margin: theme.spacing(0.6),
    },
  },
  techItem: {
    fontSize: 'clamp(0.85rem, 2vw, 1rem)',
    padding: theme.spacing(1.5),
    margin: theme.spacing(1),
    borderRadius: '12px',
    background: 'rgba(255, 255, 255, 0.05)',
    backdropFilter: 'blur(5px)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    transition: 'all 0.3s ease',
    '@media (max-height: 667px)': {
      padding: theme.spacing(1.2),
      margin: theme.spacing(0.8),
      fontSize: 'clamp(0.8rem, 1.8vw, 0.9rem)',
    },
    '@media (max-height: 568px)': {
      padding: theme.spacing(1),
      margin: theme.spacing(0.6),
    },
  },
}));

const SkillsAndTechnologies = ({ id }) => {
  const appTheme = useAppTheme();
  const classes = useStyles();
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  const { isMobile } = useResponsiveStyles();

  React.useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <section 
      id={id} 
      className={classes.container} 
      ref={ref}
      style={{
        background: appTheme.colors.gradientBackground,
        transition: 'background 0.3s ease',
      }}
    >
      <motion.div
        className={classes.content}
        initial="hidden"
        animate={controls}
      >
        <SectionTitle
          title="Skills & Technologies"
          subtitle="Mi experiencia técnica y conjunto de herramientas profesionales"
        />

        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <TechnologyList controls={controls} isMobile={isMobile} />
        </motion.div>

        {/* <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <SkillsList controls={controls} isMobile={isMobile} />
        </motion.div> */}
      </motion.div>
    </section>
  );
};

export default SkillsAndTechnologies;
