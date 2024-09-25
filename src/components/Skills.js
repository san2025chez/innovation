import React from 'react';
import { makeStyles, Grid, Typography } from "@material-ui/core";
import Technologies from './Technologies';

const Skills = ({ title, id }) => {
  const classes = useStyles();

  return (
    <div className={classes.section} id={id}>
      <div className={classes.sectioncontent}>
        <Typography variant="h5" style={{ textAlign: 'center', fontWeight: 'bold', color: '#FFFFFF', fontSize: '2rem', fontFamily: 'Space Grotesk, sans-serif', textTransform: 'uppercase' }}>
          {title}
        </Typography>
        <br />
        <Technologies />
        <br />
      </div>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  section: {
    minHeight: "70vh",
    backgroundColor: "#000000", // Cambiado a negro
  },
  sectioncontent: {
    maxWidth: "100vw",
    margin: "0 auto",
    padding: theme.spacing(5),
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(2),
    },
  },
}));

export default Skills;
