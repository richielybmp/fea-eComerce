import React, { useState } from 'react';
import { Menu, Icon, Label, Popup, Container } from 'semantic-ui-react';
import { Link } from "react-router-dom";
import { MenuCategorias } from '../menu';
import SearchCategorias from '../search/SearchCategorias';
import ModalCarrinho from './modalCarrinho';
import '../../css/header.css'
import { Consumer } from '../../AppContext';

export interface HeaderProps {
    showSidebar: () => void
}

const Header = (props: HeaderProps) => {
    const [showItensCar, setShowItensCar] = useState(false);

    const onClickItemCar = () => {
        setShowItensCar(!showItensCar);
    };

    return (
        <Consumer>
            {value => value && (
                <nav className={'menu-horizontal'}>
                    <Menu inverted size={'massive'} className={'menu-principal'}>
                        <Container>
                            <Menu.Item header>
                                <Link to="/">eCommerce</Link>

                            </Menu.Item>
                            <Menu.Menu position="right">
                                <Menu.Item className='search-header'>
                                    <SearchCategorias />
                                </Menu.Item>
                                <Menu.Item name="carrinho">
                                    <Popup trigger={
                                        <Icon.Group onClick={onClickItemCar}>
                                            <Icon className="cart" name='cart' circular>
                                            </Icon>
                                            <Label color='red' floating circular>
                                                {value.state.cart.totalItens}
                                            </Label>
                                        </Icon.Group>
                                    }
                                        flowing
                                        hoverable
                                        className='popup-car'
                                        position='bottom right'
                                    >
                                        <ModalCarrinho clickIconCar={onClickItemCar} stateModalCar={showItensCar} />
                                    </Popup>
                                </Menu.Item>
                            </Menu.Menu>
                        </Container>

                    </Menu>
                    <MenuCategorias showSidebar={props.showSidebar} />
                </nav>
            )}
        </Consumer>
    )
}

export default Header;