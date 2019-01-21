import React, { Component } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";

const Banner = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 8000
    };

    return (
        <div>
            <Slider {...settings} className="banner-slider">
                <Link to={`${process.env.PUBLIC_URL}/categoria/smartphones`} >
                    <div>
                        <img src={`${process.env.PUBLIC_URL}/img/smartphones-banner.jpg`} />
                    </div>
                </Link>
                <Link to={`${process.env.PUBLIC_URL}/categoria/jogos`} >
                    <div>
                        <img src={`${process.env.PUBLIC_URL}/img/jogos-banner.jpg`} />
                    </div>
                </Link>
                <Link to={`${process.env.PUBLIC_URL}/categoria/livros`} >
                    <div>
                        <img src={`${process.env.PUBLIC_URL}/img/livros-banner.jpg`} />
                    </div>
                </Link>
            </Slider>
        </div>
    );
}

export default Banner;