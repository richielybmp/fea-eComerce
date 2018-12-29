import React from 'react';
import { Produto } from '../produto';
import { Container, Icon, Segment, Header } from 'semantic-ui-react';
import Slider from "react-slick";
import { ProdutoType } from '../produto/produto';

function NextArrow(props: any) {
    const { onClick } = props;
    return (
        <div
            className="arrow-next"
            onClick={onClick}
        ><Icon link name='chevron right' size="big" color="violet" /></div>
    );
}

function PrevArrow(props: any) {
    const { onClick } = props;
    return (
        <div
            className="arrow-prev"
            onClick={onClick}
        ><Icon link name='chevron left' size="big" color="violet" /></div>
    );
}

export interface ProductContainerProps {
    nome: string
    produtos: Array<ProdutoType>
}

const ProductContainer = (props: ProductContainerProps) => {
    const settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    };

    return (
        <Segment>
            <Container>
                <Header>{props.nome}</Header>
                <Slider {...settings} className="my-slider">
                    {props.produtos.map(produto => {
                        return (
                            <Produto
                                key={produto.id}
                                {...produto}
                            />
                        );
                    })}
                </Slider>
            </Container>
        </Segment>
    );
}

export default ProductContainer;