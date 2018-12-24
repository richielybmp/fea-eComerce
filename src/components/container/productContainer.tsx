import React, { Component } from 'react';
import { DataSet } from "../../mock";
import { Produto } from '../produto';
import { Container, Icon } from 'semantic-ui-react';
import Slider from "react-slick";

function NextArrow(props: any) {
    const { onClick } = props;
    return (
        <div
            className="arrow-next"
            onClick={onClick}
        ><Icon link name='chevron right' size="big" color="violet"/></div>
    );
}

function PrevArrow(props: any) {
    const { onClick } = props;
    return (
        <div
            className="arrow-prev"
            onClick={onClick}
        ><Icon link name='chevron left' size="big" color="violet"/></div>
    );
}

export default class ProductContainer extends Component {

    render() {
        const settings = {
            infinite: false,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 3,
            nextArrow: <NextArrow />,
            prevArrow: <PrevArrow />
        };

        const produtos = DataSet.getIDataSet();

        return (
            <Container>
                <Slider {...settings} className="my-slider">
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