import * as React from "react";
import { VerticalCategoriesMenu } from "../menu-categorias";
import { ProductContainer } from "../container";

export default function MainContents() {
    return (
        <main>
            <h1>TUDO QUE VOCÊ PRECISA ESTÁ AQUI!!!</h1>
            <>
                <VerticalCategoriesMenu />
            </>
            <>
                <ProductContainer />
            </>
        </main>
    );
}