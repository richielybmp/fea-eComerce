import React, { useContext } from 'react';
import { AppContext } from '../../AppContext';
import { ProdutoType } from '../produto/produto';

export default function CarrinhoContainer() {
    const contexto = useContext(AppContext);
    const { state } = contexto;

    const carrinho: ProdutoType[] = state.carrinho;

    console.table(carrinho);

    return (
        <>
            CARRINHO CONTAINER
        </>
    )
}
