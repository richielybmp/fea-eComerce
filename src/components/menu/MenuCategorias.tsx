import React, { Component } from 'react';
import { Menu, Button, Icon } from 'semantic-ui-react';
import MenuItemCategoria from './MenuItemCategoria';

import '../../css/MenuCategorias.css';
import SearchCategorias from "../search/SearchCategorias";

interface MenuCategoriasProps {
    showSidebar: () => void;
}

const MenuCategorias = (props: MenuCategoriasProps) => {
    return (
        <Menu className={'menu-categorias large-menu'}>
            <div className={'btn-menu-mobile'}>
                <Button.Group>
                    <Button className={'icon-menu-mobile'} onClick={props.showSidebar}>
                        <Icon name='bars' />
                    </Button>
                </Button.Group>
            </div>
            <div className='search-sidebar'>
                <SearchCategorias/>
            </div>
            <MenuItemCategoria mostrarModal={() => props.showSidebar}/>
        </Menu>
    )
}

export default MenuCategorias;