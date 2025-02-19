import React, { useState, useEffect, useCallback } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import DesktopAbout from './DesktopAbout';
import MobileAbout from './MobileAbout';

const About = ({ id }) => {
  const classes = useStyles();
  const [isMobile, setIsMobile] = useState(checkIfMobile());

  const handleResize = useCallback(() => {
    setIsMobile(checkIfMobile());
  }, []);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [handleResize]);

  return (
    <div className={`${classes.section} ${isMobile ? classes.mobileSection : ''}`} id={id}>
      {isMobile ? <MobileAbout /> : <DesktopAbout />}
    </div>
  );
};

const checkIfMobile = () => window.innerWidth < 860;

const useStyles = makeStyles((theme) => ({
  section: {
    textAlign: 'center',
    padding: theme.spacing(1),
    height: '100vh',
    backgroundColor: "#000000",
    [theme.breakpoints.down('sm')]: {
      height: '90vh',
    },
  },
}));

export default About;

