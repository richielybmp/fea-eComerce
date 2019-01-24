import React, { useState, useContext } from 'react';
import { Menu, Icon, Label, Popup, Container, Button } from 'semantic-ui-react';
import { Link } from "react-router-dom";
import SearchCategorias from '../common/SearchCategorias';
import ModalCarrinho from '../common/ModalCarrinho';
import './header.sass';
import MenuCategorias from '../menu/MenuCategorias';
import { EcommerceContext, EcommerceType, EcommerceState, Dispatch } from '../../AppStore';
import { ItemMenu } from '../../enum/ItemMenu';

export interface HeaderProps {
    showSidebar: () => void
}

const Header = (props: HeaderProps) => {
    const [showItensCar, setShowItensCar] = useState(false);

    const context = useContext(EcommerceContext);

    const onClickItemCar = () => {
        setShowItensCar(!showItensCar);
        context!.dispatch.clickMenuItem(ItemMenu.CART);
    };

    return (
        <EcommerceContext.Consumer>
            {value => value && (
                <nav className={'menu-horizontal'}>
                    <Menu inverted size={'massive'} className={'menu-principal square no-margin'}>
                        <Container>
                            <Menu.Item header>
                                <Link to={`${process.env.PUBLIC_URL}/`} onClick={() => context!.dispatch.clickMenuItem(ItemMenu.HOME)}>Ching-Ling</Link>
                            </Menu.Item>
                            <Menu.Menu position="right">
                                <Menu.Item className='search-header'>
                                    <SearchCategorias />
                                </Menu.Item>
                                <Menu.Item active={value!.state.menuSelecionado === ItemMenu.CART} name="carrinho">
                                    <Popup trigger={
                                        <Icon.Group onClick={onClickItemCar} className='content-icon-cart'>
                                            <Icon className="cart" name='cart' fitted >
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
        </EcommerceContext.Consumer>
    )
}

export default Header;