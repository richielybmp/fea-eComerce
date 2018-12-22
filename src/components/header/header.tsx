import React, { Component } from 'react';
import { Menu, Icon, Button, Label } from 'semantic-ui-react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import CarrinhoContainer from '../container/CarrinhoContainer';
import NotFound from '../notFound/NotFound';
import { MenuCategorias } from '../menu-categorias';
import App from '../../App';

interface HeaderState {
    activeItem: string | undefined;
}

export default class Header extends Component<{}, HeaderState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            activeItem: undefined
        }
    }

    handleItemClick = (name: string) => this.setState({ activeItem: name })

    render() {
        //const { activeItem } = this.state

        return (
            <nav className={'menu-horizontal'}>
                <Menu inverted size={'massive'} className={'menu-principal'}>
                    <Menu.Item header>
                        <Link to="/">eCommerce</Link>
                    </Menu.Item>
                    <Menu.Menu position='right'>
                        <Menu.Item name="carrinho">
                            <Icon.Group>
                                <Link to="/carrinho" >
                                    <Icon className="cart" name='cart' circular>
                                    </Icon>
                                    <Label color='red' floating circular>
                                        0
                                    </Label>
                                </Link >
                            </Icon.Group>
                        </Menu.Item>
                    </Menu.Menu>
                </Menu>

                {/* <Route exact path="/" component={App} /> */}

                <MenuCategorias />
            </nav>
        )
    }
}
