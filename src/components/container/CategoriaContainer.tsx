import React from 'react';
import { Container, Button } from 'semantic-ui-react';
import ProdutoCard from '../produto/ProdutoCard';
import DataSet from '../../mock/dataset';
import { EcommerceContext } from '../../AppStore';

import './categoriasContainer.sass';

interface MyProps {
    match: any,
    location: any,
    history: any
}

interface CategoriasState {
    qtdItens: number,
    tag: string
}

class CategoriasContainer extends React.Component<MyProps, CategoriasState> {

    constructor(props: MyProps) {
        super(props);

        const { match } = this.props;

        this.state = {
            qtdItens: 6,
            tag: match.params.tag,
        };
    }

    carregarMaisProdutos() {
        this.setState({ qtdItens: this.state.qtdItens + 3 })
    }

    componentDidUpdate(prevProps: any) {
        if (this.props.location !== prevProps.location) {
            this.setState({ qtdItens: 6, tag: this.props.match.params.tag })
        }
    }

    render() {
        var produtos = [];
        return (
            <EcommerceContext.Consumer>
                {value => {
                    produtos = DataSet.getProdutosByCategoria(value!.state.produtos, this.state.tag);
                    return (
                        <Container>
                            <div className="categorias-grid">
                                {
                                    produtos.slice(0, this.state.qtdItens).map(produto => {
                                        return (
                                            <ProdutoCard
                                                key={produto.id}
                                                {...produto}
                                            />
                                        );
                                    })
                                }
                            </div>
                            {this.state.qtdItens < produtos.length &&
                                <Button className="centerButton" onClick={() => this.carregarMaisProdutos()}>Carregar +</Button>
                            }
                        </Container>
                    )
                }}
            </EcommerceContext.Consumer>
        )

    }
}

export default CategoriasContainer;