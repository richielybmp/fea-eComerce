import React, { Component } from 'react';
import { DataSet } from "../../mock";
import { Produto } from '../produto';
import { Container } from 'semantic-ui-react';
import Slider from "react-slick";

export default class ProductContainer extends Component {

    render() {
        const settings = {
            dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 3,
            autoplay: true,
            autoplaySpeed: 2000,
        };

        const produtos = DataSet.getIDataSet();

        return (
            <Container>
                <Slider {...settings} className="my_slider">
                    {produtos.map(produto => {
                        return (
                            <Produto
                                key={produto.id}
                                {...produto}
                            />
                        );
                    })}
                </Slider>
            </Container >
        );
    }
}