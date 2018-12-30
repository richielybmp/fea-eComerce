import React from 'react';
import { DataSet } from '../../mock';
import { Container } from 'semantic-ui-react';
import { Produto } from '../produto';

const CategoriasContainer = ({ match }: any) => {

    const tag = match.params.tag;

    const produtos = DataSet.getProdutosByCategoria(tag);

    return (
        <Container>
            {produtos.map(produto => {
                return (
                    <Produto
                        key={produto.id}
                        {...produto}
                    />
                );
            })}
        </Container>
    )
}

export default CategoriasContainer;