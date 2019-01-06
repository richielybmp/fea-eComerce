import React from 'react'
import ProductContainer from "../container/productContainer"
import { DataSet } from '../../mock';
import EcommerContext from '../../AppContext';


const MainContainer = () => {
    return (
        <EcommerContext.Consumer>
            {
                value => value && (
                <div>
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