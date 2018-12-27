import React, { useState, useContext } from 'react';
import { Menu, Icon, Label } from 'semantic-ui-react';
import { Link } from "react-router-dom";
import { MenuCategorias } from '../menu';
import { AppContext } from '../../AppContext';

export interface HeaderProps {
    showSidebar: () => void
}

const Header = (props: HeaderProps) => {

    const [activeItem, setActiveItem] = useState(undefined);

    const contexto = useContext(AppContext);
    const { state } = contexto;

    const handleItemClick = () => {
        // console.log(name);
        // setActiveItem(name);
    }

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
                                    {state.carrinho.length}
                                </Label>
                            </Link >
                        </Icon.Group>
                    </Menu.Item>
                </Menu.Menu>
            </Menu>

            <MenuCategorias showSidebar={props.showSidebar} />
        </nav>
    )
}

export default Header;