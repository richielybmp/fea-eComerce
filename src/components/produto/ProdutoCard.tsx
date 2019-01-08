import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { Produto } from '../../model/Produto';

import "./produto.sass";


const ProdutoCard = ({ id, nome, imagem, preco, ehMaisPedido }: Produto) => {
    return (
        <>
            <Card
                as={Link}
                to={`${process.env.PUBLIC_URL}/produto/${id}`}
                className="prod"
            >
                {ehMaisPedido &&
                    <span className="ui corner red label">
                        <i className="heart icon"></i>
                    </span>
                }

                <Image src={imagem[0]} className="imagemProduto" alt={name} />
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

export default ProdutoCard;


