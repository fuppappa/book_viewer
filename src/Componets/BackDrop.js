import React from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";


const useStyles = makeStyles((theme) => ({
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },
    TypeFont:{
      fontFamily: 'sans-serif',
    },
}));

export default function BackDrop(props) {
    const classes = useStyles();

    return (
        <div>
            <Backdrop className={classes.backdrop} open={props.open}>
                <CircularProgress color="inherit" />
                <Typography>
                    本をロード中
                </Typography>
            </Backdrop>
        </div>
    );
}