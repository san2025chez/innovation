import { AppBar, Toolbar, makeStyles, List, IconButton, Drawer, Divider, ListItem, ListItemIcon } from '@material-ui/core';
import React, { useState } from 'react';
import { Link } from "react-scroll";
import InfoIcon from '@mui/icons-material/Info';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import BuildTwoToneIcon from '@mui/icons-material/BuildTwoTone';
import ContactMailTwoToneIcon from "@mui/icons-material/ContactMailTwoTone";
import MenuIcon from "@mui/icons-material/Menu";
import CancelIcon from "@mui/icons-material/Cancel";

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
];

const Navbar = () => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);

    return (
        <>
            <AppBar position='sticky' className={classes.root}>
                <Toolbar className='toolbar'>
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
                                    {text}
                                </Link>
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
                <div className={classes.sidebarWrapper}>
                    <IconButton onClick={() => setOpen(false)}>
                        <CancelIcon fontSize="medium" className={classes.cancelicon} />
                    </IconButton>
                    <Divider style={{ marginBottom: '1rem'}}/>
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
                                <ListItem  className={classes.listItem}>
                                    <span>
                                        <ListItemIcon className={classes.listIcon}>
                                            {icon}
                                        </ListItemIcon>
                                    </span>{text}
                                </ListItem>
                            </Link>
                        ))
                    }
                </div>
            </Drawer>
        </>
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: 'transparent', // Color de fondo del Navbar
        boxShadow: 'none',
        borderBottom: 'none',
    },
    menu: {
        [theme.breakpoints.down("sm")]: {
            display: "none",
        },
        "& a": {
            color: '#FFFFFF', // Color de los enlaces
            fontSize: "1.0rem",
            fontWeight: 500,
            marginLeft: theme.spacing(3),
            fontFamily: 'Space Grotesk, sans-serif',
            textTransform: "uppercase",
        },
        "& a:hover": {
            cursor: "pointer",
            color: "#FF6F30", // Color en hover
        },
        "& a.active": {
            color: "#007ACC", // Color de los enlaces activos
        }
    },
    menubutton: {
        display: "none",
        [theme.breakpoints.down("sm")]: {
            display: "block",
            color: "#007ACC", // Color del botón de menú
            position: "absolute",
            top: 0,
            right: 10,
        }
    },
    cancelicon: {
        color: "#FFFFFF", // Blanco
        position: "absolute",
        top: 0
    },
    sidebar: {
        width: "40vh",
        [theme.breakpoints.down("sm")]: {
            width: "60vw",
            backgroundColor: '#000000' // Fondo oscuro para la sidebar
        },
        "& h5": {
            margin: theme.spacing(2, 1, 0, 2),
            fontSize: "1rem",
            color: "#E0E0E0", // Gris claro
            fontWeight: "bold",
            fontFamily: 'Space Grotesk, sans-serif',
            textTransform: "uppercase",
        },
        "& h5:hover": {
            color: "#FF6F30", // Color en hover
            cursor: "pointer"
        },
    },
    sidebarWrapper: {
        background: '#000000', // Fondo oscuro de la sidebar
        minHeight: '100vh',
    },
    listItem: {
        color: '#E0E0E0', // Color de los elementos de la lista
        textTransform: "uppercase",
        fontSize: '0.7rem'
    },
    listIcon: {
        color: '#E0E0E0', // Color de los iconos
        fontSize: '5px' // Tamaño de los iconos
    }
}));

export default Navbar;
