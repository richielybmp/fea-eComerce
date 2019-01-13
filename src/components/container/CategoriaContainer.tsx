import React from 'react';
import { Container, Button } from 'semantic-ui-react';
import ProdutoCard from '../produto/ProdutoCard';
import DataSet from '../../mock/dataset';
import { EcommerceContext } from '../../AppStore';

import './categoriasContainer.sass';


// const CategoriasContainer = ({ match }: any) => {
//     const tag = match.params.tag;
//     var produtos: Produto[] = [];
//     var qtdItens = 3;

//     const [a, setA] = useState(3);

//     const carregarMaisProdutos = () => {
//         qtdItens += 3;
//         setA(qtdItens);
//     }

//     return (
// <EcommerceContext.Consumer>
//     {value => {
//         produtos = DataSet.getProdutosByCategoria(value!.state.produtos, tag);
//         return (
//             <Container>
//                 <div className="categorias-grid">
//                     {
//                         produtos.slice(0, a).map(produto => {
//                             return (
//                                 <ProdutoCard
//                                     key={produto.id}
//                                     {...produto}
//                                 />
//                             );
//                         })
//                     }
//                 </div>
//                 {qtdItens < produtos.length &&
//                     <Button onClick={() => carregarMaisProdutos()}>Carregar +</Button>
//                 }
//             </Container>
//         )
//     }}
// </EcommerceContext.Consumer>
//     )
// }

// export default CategoriasContainer;

import PropTypes from "prop-types";
import { withRouter } from 'react-router';

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
    static propTypes = {
        match: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired
    };

    constructor(props: MyProps) {
        super(props);

        const { match, history } = this.props;

        this.state = {
            qtdItens: 3,
            tag: match.params.tag,
        };
    }

    carregarMaisProdutos() {
        this.setState({ qtdItens: this.state.qtdItens + 3 })
    }

    componentDidUpdate(prevProps: any) {
        if (this.props.location !== prevProps.location) {
            this.setState({ qtdItens: 3, tag: this.props.match.params.tag })
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
                                <Button onClick={() => this.carregarMaisProdutos()}>Carregar +</Button>
                            }
                        </Container>
                    )
                }}
            </EcommerceContext.Consumer>
        )

    }
}

const ShowTheLocationWithRouter = withRouter(CategoriasContainer);
export default CategoriasContainer;