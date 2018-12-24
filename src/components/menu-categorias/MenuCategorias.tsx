import React, { Component } from 'react';
import { Menu, Button } from 'semantic-ui-react';

import '../../css/MenuCategorias.css';
import { Link } from 'react-router-dom';

interface MenuCategoriasProps {
    showSidebar: () => void;
}

interface MenuCategoriaState {
    activeItem: string | undefined
}

enum ItemMenu {
    HOME = 'Home',
    HARDWARE = 'Hardware',
    SMARTPHONES = 'Smartphones',
    PERIFERICOS = 'Periféricos',
    COMPUTADORES = 'Computadores',
    PLACASDEVIDEO = 'Placas de Vídeo',
    GAMER = 'Gamer',
    MONITORES = 'Monitores',
}

class ItensMenu {
    static itensMenu = ItemMenu;
}

export default class MenuCategorias extends Component<MenuCategoriasProps, MenuCategoriaState>{

    constructor(props: MenuCategoriasProps) {
        super(props);
        this.state = {
            activeItem: ItemMenu.HOME,
        }
    }
    handleItemClick = (name: string) => {
        console.log(name)
        this.setState({activeItem: name})
    }

    render() {
        const { activeItem } = this.state

        return (
            <Menu className={'menu-categorias large-menu'}>
                <div className={'btn-menu-mobile'}>
                    <Button.Group>
                        <Button className={'icon-menu-mobile'} onClick={this.props.showSidebar}>
                            <i className="fas fa-bars">MENU</i>
                        </Button>
                    </Button.Group>
                </div>
                <Menu.Item 
                    as={Link}
                    to="/"
                    active={activeItem === ItemMenu.HOME}
                    onClick={e=>this.handleItemClick(ItemMenu.HOME)}>{ItemMenu.HOME}</Menu.Item>
                <Menu.Item
                    as={Link}
                    to="/hardware"
                    active={activeItem === ItemMenu.HARDWARE}
                    onClick={e=>this.handleItemClick(ItemMenu.HARDWARE)}>{ItemMenu.HARDWARE}</Menu.Item>
                <Menu.Item
                    as={Link}
                    to="/smartphones"
                    active={activeItem === ItemMenu.SMARTPHONES}
                    onClick={e => this.handleItemClick(ItemMenu.SMARTPHONES)}>{ItemMenu.SMARTPHONES}</Menu.Item>
                <Menu.Item
                    as={Link}
                    to="/perifericos"
                    active={activeItem === ItemMenu.PERIFERICOS}
                    onClick={e => this.handleItemClick(ItemMenu.PERIFERICOS)}>{ItemMenu.PERIFERICOS}</Menu.Item>
                <Menu.Item
                    as={Link}
                    to="/computadores"
                    active={activeItem === ItemMenu.COMPUTADORES}
                    onClick={e => this.handleItemClick(ItemMenu.COMPUTADORES)}>{ItemMenu.COMPUTADORES}</Menu.Item>
                <Menu.Item
                    as={Link}
                    to="/placas-de-video"
                    active={activeItem === ItemMenu.PLACASDEVIDEO}
                    onClick={e => this.handleItemClick(ItemMenu.PLACASDEVIDEO)}>{ItemMenu.PLACASDEVIDEO}</Menu.Item>
                <Menu.Item
                    as={Link}
                    to="/gamer"
                    active={activeItem === ItemMenu.GAMER}
                    onClick={e => this.handleItemClick(ItemMenu.GAMER)}>{ItemMenu.GAMER}</Menu.Item>
            </Menu>
        )
    }
}