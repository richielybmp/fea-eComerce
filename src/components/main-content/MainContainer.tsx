import React from 'react'
import ProductContainer from "../container/productContainer"
import { DataSet } from '../../mock';
import Banner from './Banner';
import EcommerContext from '../../AppContext';
import { EcommerceState } from '../../AppStore';
import { ProdutoType } from '../produto/produto';

const getMaisVendidos = (state: EcommerceState) => {
    const { produtos, maisPedidos } = state;

    const produtosMaisPedidos = Array<ProdutoType>();
    const mais = new Map([...maisPedidos.entries()].sort((a, b) => b[1] - a[1])); // ordena

    mais.forEach((key: number, valor: number) => {
        const produto = DataSet.getProdutoById(produtos, valor);
        if (produto && produtosMaisPedidos.length < 6) { // exibe apenas o 6 mais pedidos
            produto.ehMaisPedido = true;
            produtosMaisPedidos.push(produto);
        }
    })

    return { nome: "Mais Pedidos", produtos: produtosMaisPedidos };
}

const MainContainer = () => {
    return (
        <EcommerContext.Consumer>
            {
                value => value && (
                    <div>
                        <Banner />

                        {value.state.maisPedidos.size > 0 &&
                            <ProductContainer
                                key="Mais-Pedidos"
                                {...getMaisVendidos(value.state)}
                            />
                        }

                        {DataSet.groupByCategoria(value.state.produtos).map((categoria: any) => {
                            return <ProductContainer
                                key={categoria.nome}
                                {...categoria}
                            />
                        })}
                    </div>
                )
            }
        </EcommerContext.Consumer>
    )
}

export default MainContainer;