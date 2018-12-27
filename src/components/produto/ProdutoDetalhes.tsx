import React, { useContext, useState } from 'react'
import { AppContext } from '../../AppContext';
import { ActionType } from '../enums/EnumActionTypes';
import { Button } from 'semantic-ui-react';
import { ProdutoType } from './produto';

const ProdutoDetalhes = ({ match }: any) => {

    const [quantidade, setQuantidade] = useState(1);

    const id = match.params.id;

    const contexto = useContext(AppContext);
    const { state, dispatch } = contexto;
    const { descricao, imagem, nome, preco, qtdEstoque }: ProdutoType = state.produtoEmDetalhe;

    const onAddToCartClicked = () => { dispatch({ type: ActionType.ADD_TO_CART, payload: { id: id, qtd: 1 } }) };

    const onRemoveFromCartClicked = () => { dispatch({ type: ActionType.REMOVE_FROM_CART, payload: { id: id, qtd: 1 } }) };

    return (
        <div>
            <h1>{nome}</h1>
            <h2>{descricao}</h2>
            <img src={imagem} alt={nome} className="imagemProduto" />

            <Button onClick={() => onAddToCartClicked()}>Adicionar</Button>
            {/* Apenas para teste aqui */}
            <Button onClick={() => onRemoveFromCartClicked()}>Remover</Button>
        </div>
    )
}

export default ProdutoDetalhes;