import React from "react";
import SlickSlider from "react-slick";
import Typography from "@material-ui/core/Typography";

function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
            <Typography className={className}
                        style={{ ...style, display: "block",right: "30px"}}
                        onClick={onClick}>
                >
            </Typography>
    );
}

function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", left: "30px"}}
            onClick={onClick}
        />
    );
}


export default function HomeSlider() {

    const settings = {
        className: 'center',
        centerMode: true,
        centerPadding: '60px',
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        nextArrow: <NextArrow/>,
        prevArrow: <PrevArrow/>,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    centerMode: true,
                    centerPadding: '60px',
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                    centerMode: true,
                    centerPadding: '60px',
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            }
        ]
    };

    return (
        <SlickSlider {...settings} width="100%">
            <div>
                <h3>4</h3>
            </div>
            <div>
                <h3>5</h3>
            </div>
            <div>
                <h3>6</h3>
            </div>
            <div>
                <h3>7</h3>
            </div>
            <div>
                <h3>8</h3>
            </div>
        </SlickSlider>
    );
}