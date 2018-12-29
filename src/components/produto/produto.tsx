import React, { useContext } from 'react';
import { Card, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { AppContext } from '../../AppContext';
import { ActionType } from '../enums/EnumActionTypes';

import "../../css/App.css";

export type ProdutoType = {
    id: number,
    nome: string,
    descricao: string,
    imagem: string,
    preco: number,
    categoria: string,
    qtdEstoque: number,
};

const Produto = ({ id, nome, descricao, imagem, preco, qtdEstoque }: ProdutoType) => {
    const contexto = useContext(AppContext);
    const { dispatch } = contexto;

    const onCardClicked = () => { dispatch({ type: ActionType.SET_ON_DETAIL, payload: { id: id } }) };

    return (
        <Card
            as={Link}
            to={`/produto/${id}`}
            onClick={() => onCardClicked()}
        >
            <Image src={imagem} className="imagemProduto" alt={name} />
            <Card.Content>
                <div >
                    <h1 className="infoProduto">{nome}</h1>
                    <h1 className="infoProduto">{descricao}</h1>
                </div>
                <div>
                    <span className="precoProduto">R${preco}</span>
                </div>
            </Card.Content>
        </Card>
    )
}

export default Produto;
