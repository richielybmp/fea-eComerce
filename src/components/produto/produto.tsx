import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card, Image } from 'semantic-ui-react';

import "../../css/App.css";

type ProdutoType = {
    nome: string,
    descricao: string,
    imageSrc: string,
    preco: string,
    qtdEstoque: number,
};

const Produto = ({ nome, descricao, imageSrc, preco, qtdEstoque }: ProdutoType) => {
    return (
        <Card>
            <Image src={imageSrc} className="imagemProduto" alt={name} />
            <Card.Content>
                <div >
                    <h1 className="infoProduto">{nome}</h1>
                    <h1 className="infoProduto">{descricao}</h1>
                </div>
                <div>
                    <span className="precoProduto">R${preco}</span>
                </div>

                {/* OU DEIXAMOS O BOTÃO DE ADD NO CARRINHO APENAS NA TELA DE DETALHE DO PRODUTO ????? */}
                {/* <Button compact primary
                    disabled={qtdEstoque > 0 ? false : true}
                    onClick={() => alert('ADD NO CARRINHO')}>
                    <Button.Content
                        visible>
                        <Icon name='shop' />
                        {qtdEstoque > 0 ? 'Adicionar no carrinho' : 'Sem estoque'}
                    </Button.Content>
                </Button> */}
            </Card.Content>
        </Card>
    )
}

Produto.prototype = {
    nome: PropTypes.string,
    descricao: PropTypes.string,
    imageSrc: PropTypes.string,
    preco: PropTypes.string,
    qtdEstoque: PropTypes.number,
}

export default Produto
