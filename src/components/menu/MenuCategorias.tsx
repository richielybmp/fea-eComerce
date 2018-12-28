import React, { Component } from 'react';
import {Menu, Button, Icon, Container} from 'semantic-ui-react';
import MenuItemCategoria from './MenuItemCategoria';

import '../../css/MenuCategorias.css';
import SearchByCategories from "../search/SearchByCategories";
import {AppContext} from "../../AppContext";

interface MenuCategoriasProps {
    showSidebar: () => void;
}

const MenuCategorias = (props: MenuCategoriasProps) => {
    return (
        <Menu className={'bg-menu-categorias large-menu'} inverted>
            <Container content className={'menu-categorias'}>

            <div className={'btn-menu-mobile'}>
                <Button.Group>
                    <Button className={'icon-menu-mobile'} onClick={props.showSidebar}>
                        <Icon name='bars' />
                    </Button>
                </Button.Group>
            </div>
            <div className='search-sidebar'>
                <SearchByCategories/>
            </div>
            <MenuItemCategoria mostrarModal={() => props.showSidebar}/>
            </Container>
        </Menu>
    )
}

export default MenuCategorias;