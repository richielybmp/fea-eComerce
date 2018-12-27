import React, { useContext, useState } from 'react'
import { AppContext } from '../../AppContext';
import { ActionType } from '../enums/EnumActionTypes';
import { Button } from 'semantic-ui-react';
import { Produto } from '../reducer/reducer';

const ProdutoDetalhes = ({ match }: any) => {

    const [quantidade, setQuantidade] = useState(1);

    const id = match.params.id;

    const contexto = useContext(AppContext);
    const { state, dispatch } = contexto;
    const { descricao, imageSrc, nome, preco, qtdEstoque }: Produto = state.produtoEmDetalhe;

    const onAddToCartClicked = () => { dispatch({ type: ActionType.ADD_TO_CART, payload: { id: id, qtd: 1 } }) };

    const onRemoveToCartClicked = () => { dispatch({ type: ActionType.REMOVE_TO_CART, payload: { id: id, qtd: 1 } }) };

    return (
        <div>
            <h1>{nome}</h1>
            <h2>{descricao}</h2>
            <img src={imageSrc} alt={nome} className="imagemProduto" />

            <Button onClick={() => onAddToCartClicked()}>Add to cart</Button>
            {/* Apenas para teste aqui */}
            <Button onClick={() => onRemoveToCartClicked()}>Remover to cart</Button>
        </div>
    )
}

export default ProdutoDetalhes;