import React, { useContext } from 'react';
import { AppContext } from "../../AppContext";
import { ProdutoType } from "../produto/produto";
import { Link } from "react-router-dom";
import { Button, Header, Item, Icon } from "semantic-ui-react";


interface ModalCarrinhoProps {
    clickIconCar: () => void;
    stateModalCar: boolean;
}

const ModalCarrinho = (props: ModalCarrinhoProps) => {

    const contexto = useContext(AppContext);
    const { state } = contexto;
    const carrinho: ProdutoType[] = state.carrinho;

    if (carrinho.length === 0) {
        return (
            <Item.Group divided>
                <Item>
                    <Item.Content verticalAlign='middle'>Carrinho Vazio!</Item.Content>
                </Item>
            </Item.Group>
        );
    }
    const totalCarrinho = () => {
        let valor: number = 0;
        carrinho.map((produto) => {
            valor += produto.preco;
        })
        return valor;
    }
    return (
        <Item.Group divided>
            <Item>
                <Header textAlign='center' as='h3'>
                    Meu Carrinho
                </Header>
            </Item>
            {
                carrinho.map(produto => (
                    <Item className='popup-item'>
                        <Item.Image size='tiny' src={produto.imagem} />
                        <Item.Content verticalAlign='middle'>
                            {produto.nome}
                            <Item.Meta>
                                R$: {produto.preco}
                            </Item.Meta>
                        </Item.Content>

                    </Item>
                ))
            }
            <Item className='footer-popup-car'>
                <Item.Content verticalAlign='middle'>
                    <Item as='h4'>
                        Total (valor sem frete): <span className='bold'>R$ {totalCarrinho()}</span>
                    </Item>
                    <div className='modal-carrinho-footer'>
                        <Link to={'/carrinho'} onClick={props.clickIconCar}>
                            Abrir carrinho
                        </Link>
                        <Link to={'/'} onClick={props.clickIconCar}>
                            <Button color='green'>Fechar Pedido</Button>
                        </Link>
                    </div>
                </Item.Content>
            </Item>
        </Item.Group>

    )
};
export default ModalCarrinho;