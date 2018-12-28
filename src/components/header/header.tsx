import React, { useState, useContext } from 'react';
import { Menu, Icon, Label, Popup } from 'semantic-ui-react';
import { Link } from "react-router-dom";
import { MenuCategorias } from '../menu';
import { AppContext } from '../../AppContext';
import SearchByCategories from '../search/SearchByCategories';
import ModalCarrinho from './modalCarrinho';
import '../../css/header.css'

export interface HeaderProps {
    showSidebar: () => void
}

const Header = (props: HeaderProps) => {

    const [activeItem, setActiveItem] = useState(undefined);

    const [showItensCar, setShowItensCar] = useState(false);

    const onClickItemCar = () => {
        setShowItensCar(!showItensCar);
    };

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
                <Menu.Item className='search-header'>
                    <SearchByCategories/>
                </Menu.Item>
                <Menu.Menu position="right">

                    <Menu.Item name="carrinho">
                        <Popup trigger={
                            <Icon.Group onClick={onClickItemCar}>
                                <Icon className="cart" name='cart' circular>
                                </Icon>
                                <Label color='red' floating circular>
                                    {state.carrinho.length}
                                </Label>
                            </Icon.Group>
                        }
                               flowing
                               hoverable
                               className='popup-car'
                               position='bottom right'
                        >
                            <ModalCarrinho clickIconCar={onClickItemCar} stateModalCar={showItensCar}/>
                        </Popup>
                    </Menu.Item>
                </Menu.Menu>
            </Menu>

            <MenuCategorias showSidebar={props.showSidebar} />
        </nav>
    )
}

export default Header;