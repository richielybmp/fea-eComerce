import React from 'react'
import PropTypes from 'prop-types'
import { Button, Segment, Icon, GridColumn } from 'semantic-ui-react';
import "../../css/App.css"

type ProdutoType = {
    nome: string,
    imageSrc: string,
    preco: string,
    qtdEstoque: number,
};

const Produto = ({ nome, imageSrc, preco, qtdEstoque }: ProdutoType) => {
    return (
        <GridColumn>
            <img src={imageSrc} className="imagemProduto" alt={name} />
            <h1 className="nomeProduto">{nome}</h1>
            <div>
                <span className="precoProduto">R${preco}</span>
            </div>

            {/* OU DEIXAMOS O BOTÃO DE ADD NO CARRINHO APENAS NA TELA DE DETALHE DO PRODUTO ????? */}
            <Button compact primary
                disabled={qtdEstoque > 0 ? false : true}
                onClick={() => alert('ADD NO CARRINHO')}>
                <Button.Content
                    visible>
                    <Icon name='shop' />
                    {qtdEstoque > 0 ? 'Adicionar no carrinho' : 'Sem estoque'}
                </Button.Content>
            </Button>
        </GridColumn>
    )
}

Produto.prototype = {
    nome: PropTypes.string,
    imageSrc: PropTypes.string,
    preco: PropTypes.string,
    qtdEstoque: PropTypes.number,
}

export default Produto
