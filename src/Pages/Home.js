import React from 'react';
import clsx from 'clsx';
import {makeStyles} from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import HomeSlider from "../Componets/Slider";
import Container from "@material-ui/core/Container";
import Header from "../Componets/Header"
import {grey} from "@material-ui/core/colors";
import {Link} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import GridItemList from "../Componets/GridItemList";
import Box from "@material-ui/core/Box";


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1, //
        display: 'flex',
        boxSizing: 'borderBox',
        margin: '0',
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(1),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    contentMain: {
        padding: '10px',
    },
    sliderContent: {
        margin: '0 auto 50px auto',
        width: '250px',

        [theme.breakpoints.up('sm')]: {
            width: '400px',
        },
    },
    text:{
        padding:'8px'
    },
}));

export default function Home(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Header/>
            <main
                className={clsx(classes.content)}
            >
                <div className={classes.drawerHeader}/>
                <div className={classes.contentMain}>
                    <div className={classes.sliderContent}>
                        <HomeSlider/>
                    </div>
                </div>
                <Divider/>
                <Typography className={classes.text} variant="h6">
                    <Box fontFamily="fontFamily" fontWeight="fontWeightBold">
                        少年雑誌
                    </Box>
                </Typography>
                    <GridItemList/>
            </main>

        </div>

    );
}
