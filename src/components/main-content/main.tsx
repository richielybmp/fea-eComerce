import * as React from "react";
import { VerticalCategoriesMenu } from "../menu-categorias";
import { ProductContainer } from "../container";
import MenuCategorias from "../menu-categorias/MenuCategorias";

export default function MainContents() {
    return (
        <main className={'container-main pusher'}>
            <>
                <ProductContainer />
            </>
        </main>
    );
}