import React from 'react'
import { Button } from 'semantic-ui-react';
import { DataSet } from '../../mock';
import { Consumer } from '../../AppContext';

const ProdutoDetalhes = ({ match }: any) => {
    const id = match.params.id;
    const produto = DataSet.getProdutoById(id);

    if (produto) {
        return (
            <Consumer>
                {value => value && (
                    <>
                        <h1>{produto.nome}</h1>
                        <h2>{produto.descricao}</h2>
                        <img src={produto.imagem} alt={produto.nome} className="imagemProduto" />

                        <Button onClick={() => value.dispatch.addToCart(produto.id)}>Adicionar</Button>

                        <Button onClick={() => value.dispatch.removeFromCart(produto.id)}>Remover</Button>
                    </>
                )}
            </Consumer>
        )
    } else {
        return <>Produto não Encontrado</>
    }
}

export default ProdutoDetalhes;