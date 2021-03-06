import { useState } from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import { makeStyles, List, ListItem, ListItemAvatar, Avatar, ListItemText, CircularProgress } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
// import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
// import Container from '@material-ui/core/Container';
import { Icon } from '@material-ui/core';
import Copyright from '../Copyrigth';

// import { Category } from '../../../__generated__/lib/type-defs.graphqls'
import menuItems from '../../../mocks/menuItems'

const drawerWidth = 240,
    useStyles = makeStyles((theme) => ({
        root: {
            display: 'flex',
        },
        noColor: {
            color: 'inherit',
            backgroundColor: '#556cd6',
        },
        toolbar: {
            paddingRight: 24, // keep right padding when drawer closed
        },
        toolbarIcon: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            padding: '0 8px',
            ...theme.mixins.toolbar,
        },
        appBar: {
            zIndex: theme.zIndex.drawer + 1,
            transition: theme.transitions.create(['width', 'margin'], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
        },
        appBarShift: {
            marginLeft: drawerWidth,
            width: `calc(100% - ${drawerWidth}px)`,
            transition: theme.transitions.create(['width', 'margin'], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
        },
        menuButton: {
            marginRight: 36,
        },
        menuButtonHidden: {
            display: 'none',
        },
        title: {
            flexGrow: 1,
        },
        drawerPaper: {
            position: 'relative',
            whiteSpace: 'nowrap',
            width: drawerWidth,
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
        },
        drawerPaperClose: {
            overflowX: 'hidden',
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
            width: theme.spacing(7),
            [theme.breakpoints.up('sm')]: {
                width: theme.spacing(9),
            },
        },
        appBarSpacer: theme.mixins.toolbar,
        content: {
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
        },
        container: {
            paddingTop: theme.spacing(4),
            paddingBottom: theme.spacing(4),
        },
        paper: {
            padding: theme.spacing(2),
            display: 'flex',
            overflow: 'auto',
            flexDirection: 'column',
        },
        fixedHeight: {
            height: 240,
        },
        list: {
            width: '100%',
            maxWidth: 360,
            backgroundColor: theme.palette.background.paper
        },
        labelItem: {
            paddingLeft: '2em'
        }
    }));

function Layout({ children }: any): JSX.Element {
    const classes = useStyles();
    const [open, setOpen] = useState(true);
    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    }

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
                <Toolbar className={classes.toolbar}>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
                    >
                        <Icon>menu</Icon>
                    </IconButton>
                    <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                        Dashboard
          </Typography>
                    <IconButton color="inherit">
                        <Badge badgeContent={4} color="secondary">
                            <Icon>notifications</Icon>
                        </Badge>
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                classes={{
                    paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
                }}
                open={open}
            >
                <div className={classes.toolbarIcon}>
                    <Link href="/" passHref>
                        <ListItem button component="a">
                            <Avatar alt="Logo" src="/img/logo.jpg" />
                            <ListItemText primary="Inicio" className={classes.labelItem} />
                        </ListItem>
                    </Link>
                    <IconButton onClick={handleDrawerClose}>
                        <Icon>chevron_left</Icon>
                    </IconButton>
                </div>
                <Divider />
                <List className={classes.list}>
                    {
                        menuItems ? menuItems.map(({ name, icon, href }: any, k: number) =>
                            <Link href={href} passHref key={k}>
                                <ListItemAvatar>
                                    <ListItem button component="a">
                                        <Avatar className={classes.noColor}>
                                            <Icon className={icon} style={{ fontSize: 20 }} />
                                        </Avatar>
                                        <ListItemText primary={name} className={classes.labelItem} />
                                    </ListItem>
                                </ListItemAvatar>
                            </Link>) : <CircularProgress color="secondary" />
                    }
                </List>
            </Drawer>
            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                {children}
                <Box pt={4}>
                    <Copyright />
                </Box>
            </main>
        </div>
    );
}

export default Layout