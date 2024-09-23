import React from 'react'
import { makeStyles, Grid, Card, CardContent, CardMedia, Typography, Link } from "@material-ui/core";
import mockData from '../mock/mockDataTechnology';
import { } from '@mui/material/Grid';
import { minHeight } from '@mui/system';
import Technology from './Technologies';
import Technologies from './Technologies';
import { useTheme } from '@mui/styles';

const Skills = ({ title, dark, id }) => {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <div className={`${classes.section} ${classes.sectiondark}`}>
      <div className={classes.sectioncontent} id={id}>
      <Typography variant="h5" style={{ textAlign: 'center' ,fontWeight: 'bold' , color:'#FFFFFF', fontSize:'2rem', fontFamily: 'Space Grotesk, sans-serif', textTransform: 'uppercase'}}>{title}</Typography>
      <br/> 
      
  
          
             
                 <Technologies/>
                 
               
       
                 <br/>
 
      </div>

    </div>
  )
}
const useStyles = makeStyles((theme) => ({
  section: {
    minHeight: "70vh",
    backgroundColor:"#1E2A38"
  },
  sectiondark: {
    backgroundColor:'#1E2A38',
    color: "#FFFFFF",
   
  },

  sectioncontent:{
    maxWidth:"100vw",
    margin: "0 auto",
    padding: theme.spacing(5),
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(2), // Ajusta el padding para dispositivos móviles
    }
  }
  ,
  grid: {
    marginTop: theme.spacing(5),
 

  },
  card: {
    margin: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      margin: theme.spacing(1), // Ajusta el margen para dispositivos móviles
    }
  }
  ,
  miitem:{
    marginBottom:"20px",
    [theme.breakpoints.down('sm')]: {
      marginBottom: "10px", // Ajusta el margen inferior para dispositivos móviles
    }
  }



}))

export default Skills