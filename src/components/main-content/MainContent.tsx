import React, { Suspense, lazy } from "react";
import { Switch, Route } from "react-router-dom";
import { Container, Sidebar, Loader, Dimmer } from "semantic-ui-react";
const MainContainer = lazy(() => import("../container/MainContainer"));
const CarrinhoContainer = lazy(() => import("../container/CarrinhoContainer"));
const CategoriasContainer = lazy(() => import('../container/CategoriaContainer'));
const CheckoutContainer = lazy(() => import("../container/CheckoutContainer"));
const CheckoutDoneContainer = lazy(() => import("../container/CheckoutDoneContainer"));
const ProdutoDetalhes = lazy(() => import("../produto/ProdutoDetalhes"));
const NotFound = lazy(() => import("../notFound/NotFound"));
import Footer from "../footer/Footer";
import './mainContent.scss'

interface SidebarPusherProps {
    dimmedSidebar: boolean
}

const MainContent = (props: SidebarPusherProps) => {
    return (
        <Sidebar.Pusher dimmed={props.dimmedSidebar} className={'main-content'}>
            <Container className={''}>
                <main className={'container-main pusher'}>
                    <Suspense fallback={
                        <Dimmer active inverted>
                            <Loader inverted content='Loading' />
                        </Dimmer>
                    }>
                        <Switch>
                            <Route exact path={`${process.env.PUBLIC_URL}/`} component={MainContainer} />
                            <Route path={`${process.env.PUBLIC_URL}/carrinho`} component={CarrinhoContainer} />
                            <Route path={`${process.env.PUBLIC_URL}/checkout`} component={CheckoutContainer} />
                            <Route path={`${process.env.PUBLIC_URL}/checkoutDone`} component={CheckoutDoneContainer} />
                            <Route path={`${process.env.PUBLIC_URL}/produto/:id`} component={ProdutoDetalhes} />
                            <Route path={`${process.env.PUBLIC_URL}/categoria/:tag`} component={CategoriasContainer} />
                            <Route path='*' component={NotFound} />
                        </Switch>
                    </Suspense>
                </main>
            </Container>
            <Footer />
        </Sidebar.Pusher>
    );
}

export default MainContent;