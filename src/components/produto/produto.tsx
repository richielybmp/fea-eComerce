import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Button, Card, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import "../../css/App.css";
import { AppContext } from '../../AppContext';
import { ActionType } from '../enums/EnumActionTypes';

export type ProdutoType = {
    id: number,
    nome: string,
    descricao: string,
    imageSrc: string,
    preco: string,
    qtdEstoque: number,
};

const Produto = ({ id, nome, descricao, imageSrc, preco, qtdEstoque }: ProdutoType) => {
    const contexto = useContext(AppContext);
    const { dispatch } = contexto;

    const onCardClicekd = () => { dispatch({ type: ActionType.SET_ON_DETAIL, payload: { id: id } }) };

    return (
        <Card
            as={Link}
            to={`/produto/${id}`}
            onClick={() => onCardClicekd()}
        >
            <Image src={imageSrc} className="imagemProduto" alt={name} />
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

Produto.prototype = {
    id: PropTypes.number,
    nome: PropTypes.string,
    descricao: PropTypes.string,
    imageSrc: PropTypes.string,
    preco: PropTypes.string,
    qtdEstoque: PropTypes.number,
}

export default Produto;
