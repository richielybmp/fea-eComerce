import React from 'react'
import ProductContainer from "../container/productContainer"
import { DataSet } from '../../mock';
import Banner from './Banner';


const MainContainer = () => {
    let itens = DataSet.groupByCategoria();
    return (
        <div>
            <Banner />
            {itens.map((categoria: any) => {
                return <ProductContainer
                    key={categoria.nome}
                    {...categoria}
                />
            })}
        </div>
    )
}

export default MainContainer;