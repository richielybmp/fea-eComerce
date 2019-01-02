import React, { useState } from 'react';
import { DataSet } from '../../mock';
import { Container, Placeholder, Loader } from 'semantic-ui-react';
import { Produto } from '../produto';

import './categoriasContainer.sass';

const CategoriasContainer = ({ match }: any) => {

    const [isLoading, setIsloading] = useState(false);

    const tag = match.params.tag;

    const produtos = DataSet.getProdutosByCategoria(tag);

    return (
        <Container>
            <div className="categorias-grid">
                {produtos.map(produto => {
                    return (
                        <>
                            {isLoading ? (
                                <Loader active inline='centered' />
                            ) : (
                                    <Produto
                                        key={produto.id}
                                        {...produto}
                                    />
                                )}
                        </>
                    );
                })}
            </div>
        </Container>
    )
}

export default CategoriasContainer;