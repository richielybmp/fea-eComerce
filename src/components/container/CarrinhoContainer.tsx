import React, { useContext } from 'react';
import { AppContext } from '../../AppContext';
import { Produto } from '../reducer/reducer';

export default function CarrinhoContainer() {
    const contexto = useContext(AppContext);
    const { state } = contexto;

    const carrinho: Produto[] = state.carrinho;

    console.table(carrinho);

    return (
        <>
            CARRINHO CONTAINER
        </>
    )
}
