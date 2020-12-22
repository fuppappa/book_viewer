import React, {useEffect, useRef} from "react";
import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import SlickSlider from 'react-slick'
import {makeStyles, withStyles} from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";
import Input from "@material-ui/core/Input";
import {GlobalSettings} from '../Componets/Settings';
import {grey} from "@material-ui/core/colors";
import BackDrop from "../Componets/BackDrop";
import PageBar from "../Componets/PageBar";


const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: grey[400],
        flexGrow: 1, //
        boxSizing: 'borderBox',
        margin: 'auto',
    },
    SlickSlider: {
        margin: 'auto',
    },

    sliderWrapper: {
        width: '100%',
        margin: 'auto auto auto auto',
        textAlign: 'center',
    },
    sliderHeader: {
        height: '0px'
    },

}));


export default function BookViewer() {
    const classes = useStyles();
    const [BackDropOpen, setBackDropOpen] = React.useState(true);
    const [PageIndex, setPageIndex] = React.useState(1);
    const [MaxIndex, setMaxIndex] = React.useState(1);
    const [Pages, setPages] = React.useState([]);
    const sliderRef = useRef();
    const [Height, setHeight] = React.useState(0);

    const settings = {
        className: clsx(classes.slickSlider),
        infinite: false,
        centerPadding: "60px",
        focusOnSelect: false,
        slidesToShow: 1,
        swipeToSlide: true,
        arrows: false,
        beforeChange: (current, next) => setPageIndex(next)
    };

    const handleGoto = index => {
        sliderRef.current.slickGoTo(index);

    };


    const handleImgLoad = ({target: img}) => {
        setHeight(`${window.innerHeight}` - img.offsetHeight);

    };

    useEffect(() => {
        fetch(GlobalSettings.serverUrl + '/test')
            .then(response => response.json())
            .then(books => {
                setPages(books.Bookvalue);
                setMaxIndex(books.valuelen);
                setBackDropOpen(false);
                console.log(books);

            })
            .catch(err => console.error(err));

    }, []);

    return (
        <div className={classes.root}>
            <BackDrop open={BackDropOpen}/>
            <div className={classes.sliderHeader}/>
            <div className={clsx(classes.sliderWrapper)}>
                <SlickSlider {...settings} ref={sliderRef}>
                    {Pages &&
                    Pages.map((elem, index) => {
                        return (

                            <div key={index}>
                                <img key={index.toString()} src={elem} onLoad={handleImgLoad}
                                     width="100%"/>
                            </div>);

                    })}
                </SlickSlider>
            </div>
            <PageBar goto={handleGoto} setindex={setPageIndex} index={PageIndex} max={MaxIndex}/>

        </div>
    );
}