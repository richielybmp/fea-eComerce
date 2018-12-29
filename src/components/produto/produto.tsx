import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import "../../css/App.css";

import "../../css/App.css";

export class ProdutoType {
    id: number = 0
    nome: string = ""
    descricao: string = ""
    imagem: string = ""
    preco: number = 0
    categoria: string = ""
    qtdEstoque: number = 0
};

const Produto = ({ id, nome, descricao, imagem, preco, qtdEstoque }: ProdutoType) => {
    return (
        <Card
            as={Link}
            to={`/produto/${id}`}
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
