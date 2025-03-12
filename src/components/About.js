import React from 'react';
import { makeStyles, useTheme, useMediaQuery } from '@material-ui/core';
import DesktopAbout from './DesktopAbout';
import MobileAbout from './MobileAbout';

const About = ({ id }) => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <div className={classes.section} id={id}>
      {isMobile ? <MobileAbout /> : <DesktopAbout />}
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  section: {
    textAlign: 'center',
    padding: theme.spacing(1),
    minHeight: '100vh',
    backgroundColor: "#000000",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    overflow: 'hidden',
    [theme.breakpoints.down('sm')]: {
      minHeight: '100vh',
      padding: theme.spacing(2, 1),
    },
  },
}));

export default About;
