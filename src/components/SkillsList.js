import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import { motion } from 'framer-motion';
import { SkillCard } from './SkillCard';

const skills = [
  {
    category: 'Frontend Development',
    items: ['React.js', 'HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'Responsive Design'],
    icon: '🎨',
  },
  {
    category: 'Backend Development',
    items: ['Node.js', 'Express.js', 'Nest.js', 'RESTful APIs', 'GraphQL'],
    icon: '⚙️',
  },
  {
    category: 'Database Management',
    items: ['MongoDB', 'MySQL', 'PostgreSQL', 'Database Design', 'Data Modeling'],
    icon: '🗄️',
  },
  {
    category: 'DevOps & Tools',
    items: ['Git', 'Docker', 'CI/CD', 'AWS', 'Linux'],
    icon: '🛠️',
  },
];

const useStyles = makeStyles((theme) => ({
  gridContainer: {
    marginTop: theme.spacing(4),
  },
}));

export const SkillsList = ({ controls, isMobile }) => {
  const classes = useStyles();

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate={controls}
    >
      <Grid container spacing={4} className={classes.gridContainer}>
        {skills.map((skill, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <SkillCard
              skill={skill}
              isMobile={isMobile}
            />
          </Grid>
        ))}
      </Grid>
    </motion.div>
  );
};
