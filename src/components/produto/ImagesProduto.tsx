import React, { Component } from "react";
import Slider from "react-slick";

interface ImagesProdutoProps {
    images: string[]
}

const ImagesProduto = (props: ImagesProdutoProps) => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 8000,
    };

    return (
        <div className='container-banner-slider'>
            <Slider {...settings} className="banner-slider-produto" adaptiveHeight={true}>
                {
                    props.images.map(image => (
                    <div className='banner-img'>
                        <img src={image} />
                    </div>
                    ))
                }
            </Slider>
        </div>
    );
}

export default ImagesProduto;