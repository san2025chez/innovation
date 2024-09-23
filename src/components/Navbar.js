import { AppBar, Toolbar, makeStyles, List, IconButton, Drawer, Divider, ListItem, ListItemIcon } from '@material-ui/core'
import React from 'react'
import { useState } from 'react';
import logo from "../img/logo.png";
import { Link, animateScroll as scroll } from "react-scroll"
import InfoIcon from '@mui/icons-material/Info';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import BuildTwoToneIcon from '@mui/icons-material/BuildTwoTone'
import ContactMailTwoToneIcon from "@mui/icons-material/ContactMailTwoTone";
import MenuIcon from "@mui/icons-material/Menu"
import CancelIcon from "@mui/icons-material/Cancel"
const links = [

    {
        id: "about",
        text: "Inicio",
        icon: <InfoIcon fontSize="medium" />
    },
    {
        id: "skill",
        text: "Acerca de Mi",
        icon: <EmojiObjectsIcon fontSize="medium" />
    },
    {
        id: "work",
        text: "Trabajos",
        icon: <BuildTwoToneIcon fontSize="medium" />
    },
    {
        id: "servic",
        text: "Servicios",
        icon: <BuildTwoToneIcon fontSize="medium" />
    },
    {
        id: "contact",
        text: "Contactos",
        icon: <ContactMailTwoToneIcon fontSize="medium" />
    },

]

const Navbar = () => {
    const classes = useStyles();
    const [open, setOpen] = useState(false)
    return (
        <>
            <AppBar position='sticky' className={classes.root}>
                <Toolbar className='toolbar'>
                    {/*     <img src={logo} className={classes.logo} alt="logo" /> */}
                    <List className={classes.menu}>
                        {
                            links.map(({ id, text }, index) => (
                                <Link key={index}
                                    to={id}
                                    spy={true}
                                    activeClass="active"
                                    smooth={true}
                                    duration={500}
                                    offset={-70}>
                                    {text}</Link>
                            ))
                        }
                    </List>
                    <IconButton edge="end"
                        className={classes.menubutton}
                        onClick={() => setOpen(!open)}>
                        <MenuIcon fontSize="large" />

                    </IconButton>

                </Toolbar>

            </AppBar>
            <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
                <div className={classes.sidebarWrapper} style={{ backgroundColor: '#1E2A38' }}>
                    <IconButton onClick={() => setOpen(false)}>
                        <CancelIcon fontSize="medium" className={classes.cancelicon}></CancelIcon>
                    </IconButton>
                    <Divider />
                    {
                        links.map(({ id, text, icon }, index) => (
                            <Link key={index}
                                className={classes.sidebar}
                                to={id}
                                spy={true}
                                onClick={() => setOpen(false)}
                                activeClass="active"
                                smooth={true}
                                duration={500}
                                offset={70}>
                                <ListItem component="h5" className={classes.listItem}>
                                    <span>
                                        <ListItemIcon className={classes.listIcon}>
                                            {icon}
                                        </ListItemIcon>
                                    </span>{text}</ListItem>
                            </Link>
                        ))
                    }
                </div>
            </Drawer>
        </>
    )
}
const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: '#1E2A38', // Color de fondo del Navbar
      
        boxShadow: 'none', // Elimina la sombra
        borderBottom: 'none', // Elimina el borde inferior
 

    },

    logo: {
        height: "4rem",
        objectFit: "contain",
        "&: hover": {
            cursor: "pointer"
        }
    }
    ,
    menu: {
        [theme.breakpoints.down("sm")]: {
            display: "none",
        },
        "& a": {
            color: '#FFFFFF', // Color de los enlaces y letras del menú
            fontSize: "1.0rem",
            fontWeight: 500, // Cambio de peso de la fuente a 600 para hacerla más delgada
            marginLeft: theme.spacing(3),
            fontFamily: 'Space Grotesk, sans-serif', // Cambio de fuente a Space Grotesk, sans-serif
            textTransform: "uppercase", // Añadido para cumplir con las instrucciones
        },
        "& a:hover": {
            cursor: "pointer",
            color: "#FFD700", // Color de los enlaces o elementos activos/seleccionados
            borderBottom: "3px solid #252a5c",
        },
        "& a.active": {
            color: "#00BFA5", // Color de los enlaces o elementos activos/seleccionados
        }
    },
    menubutton: {
        display: "none",
        [theme.breakpoints.down("sm")]: {
            display: "block",
            color: "#00BFA5", // Color de los enlaces o elementos activos/seleccionados
            position: "absolute",
            top: 0,
            right: 10,
        }
    },
    cancelicon: {
        color: "#9297b3",
        position: "absolute",
        top: 0

    },
    sidebar: {
        width: "40vh",

        [theme.breakpoints.down("sm")]: {
            width: "60vw",
            backgroundColor: '#00BFA5' // Color de los enlaces o elementos activos/seleccionados
        },

        " & h5": {
            margin: theme.spacing(2, 1, 0, 2),
            fontSize: "1rem",
            color: "white",
            fontWeight: "bold",
            fontFamily: 'Space Grotesk, sans-serif', // Cambio de fuente a Space Grotesk, sans-serif
            textTransform: "uppercase", // Añadido para cumplir con las instrucciones
        },

        "& h5:hover": {
            color: "white",
            cursor: "pointer"
        },
        listItem:{
            color:'white'
        },
    },
    sidebarWrapper: {
        background: '#8fd3ba', // Set your desired background color (green in this case)
        minHeight: '100vh', // Ensure the sidebar has at least the height of the viewport


    },
    listItem:{
        color:'white'
    },
    listIcon:{
        color:'white'
    }


}))

export default Navbar