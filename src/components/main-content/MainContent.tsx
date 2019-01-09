import * as React from "react";
import { Switch, Route } from "react-router-dom";
import CarrinhoContainer from "../container/CarrinhoContainer";
import NotFound from "../notFound/NotFound";
import { Container, Sidebar } from "semantic-ui-react";
import MainContainer from "../container/MainContainer";
import CategoriasContainer from "../container/CategoriaContainer";
import CheckoutContainer from "../container/CheckoutContainer";
import CheckoutDoneContainer from "../container/CheckoutDoneContainer";
import ProdutoDetalhes from "../produto/ProdutoDetalhes";
import Footer from "../footer/Footer";

interface SidebarPusherProps {
    dimmedSidebar: boolean
}

const MainContent = (props: SidebarPusherProps) => {
    return (
        <Sidebar.Pusher dimmed={props.dimmedSidebar}>
            <Container>
                <main className={'container-main pusher'}>
                    <Switch>
                        <Route exact path={`${process.env.PUBLIC_URL}/`} component={MainContainer} />
                        <Route path={`${process.env.PUBLIC_URL}/carrinho`} component={CarrinhoContainer} />
                        <Route path={`${process.env.PUBLIC_URL}/checkout`} component={CheckoutContainer} />
                        <Route path={`${process.env.PUBLIC_URL}/checkoutDone`} component={CheckoutDoneContainer} />
                        <Route path={`${process.env.PUBLIC_URL}/produto/:id`} component={ProdutoDetalhes} />
                        <Route path={`${process.env.PUBLIC_URL}/categoria/:tag`} component={CategoriasContainer} />
                        <Route path='*' component={NotFound} />
                    </Switch>
                </main>
            </Container>
            <Footer />
        </Sidebar.Pusher>
    );
}

export default MainContent;