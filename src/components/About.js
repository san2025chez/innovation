import React from 'react';
import { makeStyles, useTheme, useMediaQuery } from '@material-ui/core';
import DesktopAbout from './DesktopAbout';
import MobileAbout from './MobileAbout';
import { useAppTheme } from '../hooks/useAppTheme';

const About = ({ id }) => {
  const appTheme = useAppTheme();
  const muiTheme = useTheme();
  const isMobile = useMediaQuery(muiTheme.breakpoints.down('sm'));
  const classes = useStyles();

  return (
    <div 
      className={classes.section} 
      id={id}
      style={{
        backgroundColor: appTheme.colors.background,
        transition: 'background-color 0.3s ease',
      }}
    >
      {isMobile ? <MobileAbout /> : <DesktopAbout />}
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  section: {
    textAlign: 'center',
    padding: theme.spacing(1),
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    overflow: 'hidden',
    [theme.breakpoints.down('sm')]: {
      minHeight: 'auto',
      padding: theme.spacing(2, 1, 0, 1),
    },
  },
}));

export default About;
