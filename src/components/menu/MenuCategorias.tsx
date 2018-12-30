import React from 'react';
import { Menu, Button, Icon, Container } from 'semantic-ui-react';
import MenuItemCategoria from './MenuItemCategoria';
import SearchCategorias from "../search/SearchCategorias";
import './menuCategorias.css';

interface MenuCategoriasProps {
    showSidebar: () => void;
}

const MenuCategorias = (props: MenuCategoriasProps) => {
    return (
        <Menu className={'bg-menu-categorias large-menu'} inverted>
            <Container className={'menu-categorias'}>

                <div className={'btn-menu-mobile'}>
                    <Button.Group>
                        <Button className={'icon-menu-mobile'} onClick={props.showSidebar}>
                            <Icon name='bars' />
                        </Button>
                    </Button.Group>
                </div>
                <div className='search-sidebar'>
                    <SearchCategorias />
                </div>
                <MenuItemCategoria mostrarModal={() => props.showSidebar} />
            </Container>
        </Menu>
    )
}

export default MenuCategorias;