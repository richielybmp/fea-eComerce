import React from 'react';
import { Container } from 'semantic-ui-react';
import ProdutoCard from '../produto/ProdutoCard';
import DataSet from '../../mock/dataset';
import { EcommerceContext } from '../../AppStore';

import './categoriasContainer.sass';

const CategoriasContainer = ({ match }: any) => {
    const tag = match.params.tag;
    return (
        <EcommerceContext.Consumer>
            {
                value => value && (
                    <Container>
                        <div className="categorias-grid">
                            {DataSet.getProdutosByCategoria(value.state.produtos, tag).map(produto => {
                                return (
                                    <ProdutoCard
                                        key={produto.id}
                                        {...produto}
                                    />
                                );
                            })}
                        </div>
                    </Container>
                )
            }
        </EcommerceContext.Consumer>
    )
}

export default CategoriasContainer;