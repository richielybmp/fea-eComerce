import React, { Component } from 'react'
import { DataSet } from "../../mock";
import { Produto } from '../produto';
import { Grid } from 'semantic-ui-react';

export default class ProductContainer extends Component {

    state = {
        produtos: DataSet.getIDataSet()
    }

    render() {
        return (
            <Grid>
                {this.state.produtos.map(produto => {
                    return (
                        <Produto
                            key={produto.id}
                            nome={produto.nome}
                            imageSrc={produto.imageSrc}
                            preco={produto.preco}
                            qtdEstoque={produto.qtdEstoque}
                        />
                    );
                })}
            </Grid>
        )
    }
}