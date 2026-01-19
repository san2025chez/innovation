import { AppBar, Toolbar, makeStyles, List, IconButton, Drawer, Divider, ListItem, ListItemIcon } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from "react-scroll";
import { motion, AnimatePresence } from 'framer-motion';
import InfoIcon from '@mui/icons-material/Info';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import BuildTwoToneIcon from '@mui/icons-material/BuildTwoTone';
import WorkRoundedIcon from '@material-ui/icons/WorkRounded';
import ContactsRoundedIcon from '@material-ui/icons/ContactsRounded';
import MenuIcon from "@mui/icons-material/Menu";
import CancelIcon from "@mui/icons-material/Cancel";
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import { useAppTheme } from '../hooks/useAppTheme';

const links = [
    {
        id: "about",
        text: "Inicio",
        icon: <InfoIcon fontSize="medium" />
    },
    {
        id: "aboutme",
        text: "Acerca de mí",
        icon: <EmojiObjectsIcon fontSize="medium" />
    },
    {
        id: "technology",
        text: "Tecnologías",
        icon: <EmojiObjectsIcon fontSize="medium" />
    },
    {
        id: "work",
        text: "Trabajos",
        icon: <WorkRoundedIcon fontSize="medium" />
    },
    {
        id: "servic",
        text: "Experiencia",
        icon: <WorkRoundedIcon fontSize="medium" />
    },
    {
        id: "contact",
        text: "Contactos",
        icon: <ContactsRoundedIcon fontSize="medium" />
    },
    {
        id: "download",
        text: "CV",
        link: "https://cvdesignr.com/p/674630e02f2e9",
        icon: <FileDownloadIcon fontSize="medium" />
    },
];

const Navbar = () => {
    const appTheme = useAppTheme();
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 50;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrolled]);

    const navVariants = {
        hidden: { y: -100 },
        visible: { 
            y: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 20
            }
        }
    };

    const menuItemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: { 
            opacity: 1, 
            x: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 20
            }
        }
    };

    return (
        <>
            <motion.div
                initial="hidden"
                animate="visible"
                variants={navVariants}
            >
                <AppBar 
                    position='fixed' 
                    className={`${classes.root} ${scrolled ? classes.scrolled : ''}`}
                    style={{
                        background: scrolled 
                            ? (appTheme.darkMode 
                                ? 'rgba(10, 10, 10, 0.95)' 
                                : 'linear-gradient(135deg, rgba(91, 33, 182, 0.85) 0%, rgba(245, 158, 11, 0.75) 100%)')
                            : 'transparent',
                        backdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'none',
                        boxShadow: scrolled 
                            ? (appTheme.darkMode 
                                ? '0 4px 30px rgba(0, 0, 0, 0.3)' 
                                : '0 8px 32px rgba(91, 33, 182, 0.2), 0 0 0 1px rgba(245, 158, 11, 0.1)')
                            : 'none',
                        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    }}
                >
                    <Toolbar className={classes.toolbar}>
                        <motion.div
                            className={classes.logo}
                            style={{
                                background: appTheme.colors.gradient,
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                transition: 'all 0.3s ease',
                            }}
                            whileHover={{ scale: 1.05, rotate: [0, -5, 5, 0] }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <ScrollLink to="about" smooth={true} duration={500} offset={-70}>
                                AS
                            </ScrollLink>
                        </motion.div>
                        <List className={classes.menu}>
                            {links.map(({ id, text, link }, index) => (
                                <motion.div
                                    key={index}
                                    variants={menuItemVariants}
                                    initial="hidden"
                                    animate="visible"
                                    custom={index}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {id === "download" ? (
                                        <a 
                                            href={link} 
                                            target="_blank" 
                                            rel="noopener noreferrer" 
                                            className={classes.navLink}
                                            style={{
                                                color: appTheme.colors.textPrimary,
                                                transition: 'color 0.3s ease',
                                                '--gradient': appTheme.colors.gradient,
                                                '--hover-color': appTheme.colors.orange,
                                            }}
                                            onMouseEnter={(e) => {
                                                e.currentTarget.style.color = appTheme.colors.orange;
                                            }}
                                            onMouseLeave={(e) => {
                                                e.currentTarget.style.color = appTheme.colors.textPrimary;
                                            }}
                                        >
                                            {text}
                                        </a>
                                    ) : (
                                        <ScrollLink
                                            to={id}
                                            spy={true}
                                            activeClass="active"
                                            smooth={true}
                                            duration={500}
                                            offset={-70}
                                            className={classes.navLink}
                                            style={{
                                                color: appTheme.colors.textPrimary,
                                                transition: 'color 0.3s ease',
                                                '--gradient': appTheme.colors.gradient,
                                                '--hover-color': appTheme.colors.orange,
                                            }}
                                            onMouseEnter={(e) => {
                                                e.currentTarget.style.color = appTheme.colors.orange;
                                            }}
                                            onMouseLeave={(e) => {
                                                if (!e.currentTarget.classList.contains('active')) {
                                                    e.currentTarget.style.color = appTheme.colors.textPrimary;
                                                }
                                            }}
                                        >
                                            {text}
                                        </ScrollLink>
                                    )}
                                </motion.div>
                            ))}
                        </List>
                        <IconButton
                            edge="end"
                            className={classes.menuIcon}
                            onClick={() => setOpen(!open)}
                            style={{
                                color: appTheme.darkMode 
                                    ? 'rgba(255, 0, 255, 0.7)' 
                                    : appTheme.colors.primary,
                                transition: 'color 0.3s ease',
                            }}
                        >
                            <MenuIcon />
                        </IconButton>
                    </Toolbar>
                </AppBar>
            </motion.div>

            <AnimatePresence>
                {open && (
                    <Drawer
                        anchor="right"
                        open={open}
                        onClose={() => setOpen(false)}
                        classes={{ paper: classes.drawerPaper }}
                        PaperProps={{
                            style: {
                                background: appTheme.darkMode
                                    ? 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)'
                                    : 'linear-gradient(135deg, rgba(91, 33, 182, 0.98) 0%, rgba(245, 158, 11, 0.95) 100%)',
                                backdropFilter: 'blur(20px)',
                                transition: 'background 0.3s ease',
                            }
                        }}
                    >
                        <motion.div
                            className={classes.sidebarWrapper}
                            initial={{ x: 300 }}
                            animate={{ x: 0 }}
                            exit={{ x: 300 }}
                            transition={{ type: "spring", stiffness: 100, damping: 20 }}
                        >
                            <IconButton 
                                onClick={() => setOpen(false)} 
                                className={classes.closeButton}
                                style={{
                                    color: appTheme.darkMode 
                                        ? 'rgba(255, 0, 255, 0.7)' 
                                        : appTheme.colors.textPrimary,
                                    transition: 'color 0.3s ease',
                                }}
                            >
                                <CancelIcon fontSize="medium" />
                            </IconButton>
                            <Divider 
                                className={classes.divider}
                                style={{
                                    background: appTheme.darkMode
                                        ? 'rgba(255, 255, 255, 0.1)'
                                        : 'rgba(255, 255, 255, 0.2)',
                                    transition: 'background 0.3s ease',
                                }}
                            />
                            {links.map(({ id, text, icon, link }, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ x: 50, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    {id === "download" ? (
                                        <a
                                            href={link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={classes.drawerLink}
                                        >
                                            <ListItem className={classes.listItem}>
                                                <ListItemIcon className={classes.drawerIcon}>
                                                    {icon}
                                                </ListItemIcon>
                                                {text}
                                            </ListItem>
                                        </a>
                                    ) : (
                                        <ScrollLink
                                            className={classes.drawerLink}
                                            to={id}
                                            spy={true}
                                            onClick={() => setOpen(false)}
                                            activeClass="active"
                                            smooth={true}
                                            duration={500}
                                            offset={-70}
                                        >
                                            <ListItem className={classes.listItem}>
                                                <ListItemIcon className={classes.drawerIcon}>
                                                    {icon}
                                                </ListItemIcon>
                                                {text}
                                            </ListItem>
                                        </ScrollLink>
                                    )}
                                </motion.div>
                            ))}
                        </motion.div>
                    </Drawer>
                )}
            </AnimatePresence>
        </>
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
        background: 'transparent',
        boxShadow: 'none',
    },
    scrolled: {
        // Los estilos se aplican dinámicamente via style prop
    },
    toolbar: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: theme.spacing(2, 4),
        [theme.breakpoints.down('sm')]: {
            padding: theme.spacing(1, 2),
        },
    },
    logo: {
        fontFamily: 'Space Grotesk, sans-serif',
        fontSize: '1.5rem',
        fontWeight: 700,
        cursor: 'pointer',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        '& a': {
            textDecoration: 'none',
            color: 'inherit',
        },
    },
    menu: {
        display: 'flex',
        alignItems: 'center',
        [theme.breakpoints.down("sm")]: {
            display: "none",
        },
    },
    navLink: {
        fontSize: "0.9rem",
        fontWeight: 500,
        marginLeft: theme.spacing(4),
        fontFamily: 'Space Grotesk, sans-serif',
        textTransform: "uppercase",
        textDecoration: 'none',
        position: 'relative',
        padding: theme.spacing(0.5, 0),
        transition: 'color 0.3s ease',
        display: 'block',
        '&::after': {
            content: '""',
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '0%',
            height: '2px',
            background: 'var(--gradient)',
            transition: 'width 0.3s ease',
        },
        '&:hover::after, &.active::after': {
            width: '100%',
        },
        '&.active': {
            color: 'var(--hover-color)',
        },
    },
    menuIcon: {
        fontSize: '2rem',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    menubutton: {
        display: "none",
        [theme.breakpoints.down("sm")]: {
            display: "block",
            color: "rgba(255, 0, 255, 0.5)",
        },
    },
    drawerPaper: {
        width: 280,
    },
    sidebarWrapper: {
        padding: theme.spacing(2),
        height: '100%',
    },
    closeButton: {
        marginBottom: theme.spacing(2),
        transition: 'color 0.3s ease, transform 0.2s ease',
        '&:hover': {
            transform: 'rotate(90deg)',
        },
    },
    divider: {
        margin: theme.spacing(2, 0),
    },
    drawerLink: {
        textDecoration: 'none',
        color: 'inherit',
        display: 'block',
        marginBottom: theme.spacing(2),
    },
    listItem: {
        padding: theme.spacing(1.5, 2),
        borderRadius: theme.spacing(1),
        transition: 'all 0.3s ease',
        fontFamily: 'Space Grotesk, sans-serif',
        fontSize: '0.9rem',
        fontWeight: 500,
        textTransform: 'uppercase',
        '&:hover': {
            transform: 'translateX(5px)',
        },
    },
    drawerIcon: {
        fontSize: '1.5rem',
        marginRight: theme.spacing(1),
        transition: 'color 0.3s ease, transform 0.3s ease',
        '&:hover': {
            transform: 'scale(1.2)',
        },
    },
    listIcon: {
        minWidth: 40,
        color: 'rgba(255, 0, 255, 0.5)',
    },
}));

export default Navbar;
