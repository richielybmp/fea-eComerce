import * as React from "react";
import ProductContainer from "../container/productContainer";
import { Switch, Route } from "react-router-dom";
import CarrinhoContainer from "../container/CarrinhoContainer";
import NotFound from "../notFound/NotFound";
import {Footer} from "../footer";
import {Sidebar} from "semantic-ui-react";

interface SidebarPusherProps {
    dimmedSidebar: boolean
}

const MainContents = (props: SidebarPusherProps) => {
    return (
        <Sidebar.Pusher dimmed={props.dimmedSidebar}>
            <main className={'container-main pusher'}>
                <Switch>
                    <Route exact path={["/", "/fea-eCommerce"]} component={ProductContainer} />
                    <Route path='/carrinho' component={CarrinhoContainer} />
                    <Route path='*' component={NotFound} />
                </Switch>
            </main>
            <Footer />
        </Sidebar.Pusher>

    );
}

export default MainContents;