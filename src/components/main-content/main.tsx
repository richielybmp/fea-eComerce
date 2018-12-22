import * as React from "react";
import { ProductContainer } from "../container";

export default function MainContents() {
    return (
        <main className={'container-main pusher'}>
            <>
                <ProductContainer />
            </>
        </main>
    );
}