import React from 'react'
import ProductContainer from "../container/productContainer"
import { DataSet } from '../../mock';

const MainContainer = () => {
    return (
        <div>
            <ProductContainer {...DataSet.getIDataSet().jogos}/>
            <ProductContainer {...DataSet.getIDataSet().impressoras}/>
        </div>
    )
}

export default MainContainer;