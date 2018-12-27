import React from 'react'
import ProductContainer from "../container/productContainer"
import { DataSet } from '../../mock';


const MainContainer = () => {
    let itens = DataSet.groupByCategoria();
    return (
        <div>
            {itens.map((categoria:any) => {
               return <ProductContainer {...categoria}/>
            })}
        </div>
    )
}

export default MainContainer;