import React, { Component } from 'react'
import { DataSet } from "../../mock";
import { Produto } from '../produto';
import { Grid, Container } from 'semantic-ui-react';
import Slider from "react-slick";



export default class ProductContainer extends Component {

    state = {
        produtos: DataSet.getIDataSet()
    }

    render() {
        var settings = {
            dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 3,
            autoplay: true,
            autoplaySpeed: 2000,
        };
        return (
            <Container>
                <Slider {...settings} className="my_slider">
                    {this.state.produtos.map(produto => {
                        return (
                            <Produto
                                key={produto.id}
                                nome={produto.nome}
                                imageSrc={produto.imageSrc}
                                preco={produto.preco}
                                qtdEstoque={produto.qtdEstoque}
                            />
                        );
                    })}
                </Slider>
            </Container>
        )
    }
}