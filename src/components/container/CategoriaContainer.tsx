import React, { useState } from 'react';
import { DataSet } from '../../mock';
import { Container, Placeholder, Loader } from 'semantic-ui-react';
import { Produto } from '../produto';

import './categoriasContainer.sass';
import EcommerContext from '../../AppContext';

const CategoriasContainer = ({ match }: any) => {
    const [isLoading, setIsloading] = useState(false);

    const tag = match.params.tag;
    return (
        <EcommerContext.Consumer>
            {
                value => value && (
                    <Container>
                        <div className="categorias-grid">
                            {DataSet.getProdutosByCategoria(value.state.produtos, tag).map(produto => {
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
        </EcommerContext.Consumer>
    )
}

export default CategoriasContainer;