import * as React from "react";
import ProductContainer from "../container/productContainer";
import { Switch, Route } from "react-router-dom";
import CarrinhoContainer from "../container/CarrinhoContainer";
import NotFound from "../notFound/NotFound";

export default function MainContents() {
    return (
        <main className={'container-main pusher'}>
            <Switch>
                <Route exact path={["/", "/fea-eCommerce"]} component={ProductContainer} />
                <Route path='/carrinho' component={CarrinhoContainer} />
                <Route path='*' component={NotFound} />
            </Switch>
        </main>
    );
}