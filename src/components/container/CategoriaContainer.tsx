import React from 'react';
import { Container, Button, Pagination, Grid } from 'semantic-ui-react';
import ProdutoCard from '../produto/ProdutoCard';
import DataSet from '../../mock/dataset';
import { EcommerceContext } from '../../AppStore';

import './categoriasContainer.sass';

import PropTypes from "prop-types";

interface MyProps {
    match: any,
    location: any
}

interface CategoriasState {
    tag: string,
    activePage: number,
}

class CategoriasContainer extends React.Component<MyProps, CategoriasState> {
    constructor(props: MyProps) {
        super(props);

        const { match } = this.props;

        this.state = {
            activePage: 1,
            tag: match.params.tag,
        };
    }

    componentDidUpdate(prevProps: any) {
        if (this.props.location !== prevProps.location) {
            this.setState({ tag: this.props.match.params.tag, activePage: 1 })
        }
    }

    handlePaginationChange = (e: React.SyntheticEvent, data: any) => this.setState({ activePage: data.activePage })

    render() {
        var produtos = [];
        return (
            <EcommerceContext.Consumer>
                {value => {
                    const produtos = DataSet.getProdutosByCategoria(value!.state.produtos, this.state.tag);
                    const { activePage } = this.state;
                    const itensPerPage = 9;
                    const totalPages = Math.ceil(produtos.length / itensPerPage)

                    const backward = activePage > 1 ? undefined : null
                    const forward = activePage < totalPages ? undefined : null
                    return (
                        <Container textAlign="center">

                            <div className="categorias-grid">
                                {
                                    produtos.slice((activePage - 1) * itensPerPage, itensPerPage * activePage).map(produto => {
                                        return (
                                            <ProdutoCard
                                                key={produto.id}
                                                {...produto}
                                            />
                                        );
                                    })
                                }
                            </div>
                            { totalPages > 1 ?
                            <Pagination
                                activePage={activePage}
                                boundaryRange={1}
                                onPageChange={this.handlePaginationChange}
                                size='medium'
                                siblingRange={1}
                                totalPages={totalPages}
                                firstItem={backward}
                                lastItem={forward}
                                prevItem={backward}
                                nextItem={forward} />
                                : <></>
                            }
                        </Container>
                    )
                }}
            </EcommerceContext.Consumer>
        )

    }
}

export default CategoriasContainer;