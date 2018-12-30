import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import "./produto.sass";

export class ProdutoType {
    id: number = 0
    nome: string = ""
    descricao: string = ""
    imagem: string = ""
    preco: number = 0
    categoria: string = ""
    qtdEstoque: number = 0
    rating: number = 0
};

const Produto = ({ id, nome, descricao, imagem, preco, qtdEstoque, rating }: ProdutoType) => {
    return (
        <>
            <Card
                as={Link}
                to={`${process.env.PUBLIC_URL}/produto/${id}`}
            >
                <span className="ui corner red label">
                    <i className="heart icon"></i>
                </span>
                <Image src={imagem} className="imagemProduto" alt={name} />
                <Card.Content>
                    <div>
                        <h1 className="infoProduto">{nome}</h1>
                    </div>
                    <div>
                        <span className="precoProduto">{preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
                    </div>
                </Card.Content>
            </Card>
        </>
    )
}

export default Produto;


