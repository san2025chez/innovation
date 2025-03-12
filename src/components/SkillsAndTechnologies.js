import React from 'react';
import { makeStyles } from '@material-ui/core';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { TechnologyList } from './TechnologyList';
import { SkillsList } from './SkillsList';
import { SectionTitle } from './common/SectionTitle';
import { useResponsiveStyles } from '../hooks/useResponsiveStyles';

const useStyles = makeStyles((theme) => ({
  container: {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)',
    padding: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(4, 2),
    },
  },
  content: {
    width: '100%',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  sectionWrapper: {
    marginBottom: theme.spacing(8),
    [theme.breakpoints.down('sm')]: {
      marginBottom: theme.spacing(4),
    },
  },
}));

const SkillsAndTechnologies = ({ id }) => {
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  return (
    <section id={id} className={classes.container} ref={ref} >
      <motion.div
        className={classes.content}
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        <div className={classes.sectionWrapper}>
          <SectionTitle
            title="Skills & Technologies"
            subtitle="Mi experiencia técnica y mi conjunto de herramientas profesionales"
          />
        </div>

        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <TechnologyList controls={controls} isMobile={isMobile} />
        </motion.div>
{/* 
        <motion.div
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
