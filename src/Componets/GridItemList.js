import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';
import Typography from "@material-ui/core/Typography";
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia';
import one from "../Temp/1.jpg";
import two from "../Temp/2.jpg";
import three from "../Temp/3.jpg"
import {CardActionArea} from "@material-ui/core";
import {useHistory} from "react-router-dom";
import 'fontsource-roboto';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        height: 'auto',
        width: 100,
        margin: '20px 0 10px 0',

    },
    paperImage: {
        height: 'auto',
        width: 100,
    },
    paperTitle: {
        margin: 'auto auto auto auto',
        align: 'center',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }

}));

export default function GridItemList() {
    const classes = useStyles();
    const history = useHistory();

    const handleClick = () => {
        history.push('/viewer');
    };

    return (
        <div>
            <Grid container className={classes.root} spacing={1}>
                <Grid item xs={12}>
                    <Grid container justify="center" spacing={2}>
                        {[0, 1, 2].map((value) => (
                            <Grid key={value} item>
                                <Card className={classes.paper} onClick={handleClick}>
                                    <CardActionArea>
                                        <CardMedia className={classes.paperImage} component="img"
                                                   alt="Contemplative Reptile" image={one}
                                                   title="Contemplative Reptile"/>
                                    </CardActionArea>
                                </Card>
                                <div className={classes.paperTitle}>
                                    <Typography  variant='h8'>
                                        NARUTO
                                    </Typography>
                                </div>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>

            </Grid>
        </div>
    );
}