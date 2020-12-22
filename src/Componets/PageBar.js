import React from 'react';
import {withStyles, makeStyles} from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import Input from '@material-ui/core/Input';

const useStyles = makeStyles((theme) => ({
    root: {
        width: 300 + theme.spacing(3) * 2,
    },
    margin: {
        height: theme.spacing(3),
    },
}));


const PrettoSlider = withStyles({
    root: {
        color: '#52af77',
        height: 8,
    },
    thumb: {
        height: 24,
        width: 24,
        backgroundColor: '#fff',
        border: '2px solid currentColor',
        marginTop: -8,
        marginLeft: -12,
        '&:focus, &:hover, &$active': {
            boxShadow: 'inherit',
        },
    },
    active: {},
    valueLabel: {
        left: 'calc(-50% + 4px)',
    },
    track: {
        height: 8,
        borderRadius: 4,
    },
    rail: {
        height: 8,
        borderRadius: 4,
    },
})(Slider);


export default function PageBar(props) {
    const classes = useStyles();

    const handleSliderChangeCommit = (event, newValue) => {
        if (newValue <= props.max) {
            console.log(newValue);
            props.goto(newValue)

        } else {

        }
    };

    const handleSliderChange = (event, newValue) => {
        props.setindex(newValue);
    };

    return (
        <PrettoSlider width='90%' valueLabelDisplay="auto" aria-label="pretto slider" defaultValue={1} max={props.max}
                      value={props.index}
                      onChangeCommitted={handleSliderChangeCommit} onChange={handleSliderChange}/>
    );
}