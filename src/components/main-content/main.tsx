import * as React from "react";
import { Switch, Route } from "react-router-dom";
import CarrinhoContainer from "../container/CarrinhoContainer";
import NotFound from "../notFound/NotFound";
import { Footer } from "../footer";
import { Container, Sidebar } from "semantic-ui-react";
import MainContainer from "./MainContainer";
import { ProdutoDetalhes } from "../produto";
import CategoriasContainer from "../container/CategoriaContainer";

interface SidebarPusherProps {
    dimmedSidebar: boolean
}

const MainContents = (props: SidebarPusherProps) => {
    return (
        <Sidebar.Pusher dimmed={props.dimmedSidebar}>
            <Container>
                <main className={'container-main pusher'}>
                    <Switch>
                        <Route exact path="/" component={MainContainer} />
                        <Route exact path="/fea-eCommerce" component={MainContainer} />
                        <Route path='/carrinho' component={CarrinhoContainer} />
                        <Route path='/produto/:id' component={ProdutoDetalhes} />
                        <Route path='/categoria/:tag' component={CategoriasContainer} />
                        <Route path='*' component={NotFound} />
                    </Switch>
                </main>
            </Container>
            <Footer />
        </Sidebar.Pusher>
    );
}

export default MainContents;