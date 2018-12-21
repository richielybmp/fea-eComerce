import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react'

import '../../css/MenuCategorias.css'

interface MenuCategoriaState {
    activeItem: string | undefined
}

export default class MenuCategorias extends Component<{}, MenuCategoriaState>{

    constructor(props: {}){
        super(props);
        this.state = {
            activeItem: 'home',
        }
    }
    handleItemClick = (name: string) => this.setState({ activeItem: name })

    render(){
        const { activeItem } = this.state

        return (
            <Menu className={'menu-categorias'}>
                <Menu.Item name='home' active={activeItem === 'home'} onClick={e => this.handleItemClick} />
                <Menu.Item
                    name='hardware'
                    active={activeItem === 'hardware'}
                    onClick={e => this.handleItemClick}
                />
                <Menu.Item
                    name='smartphones'
                    active={activeItem === 'smartphones'}
                    onClick={e => this.handleItemClick}
                />
                <Menu.Item
                    name='periféricos'
                    active={activeItem === 'periféricos'}
                    onClick={e => this.handleItemClick}
                />
                <Menu.Item
                    name='computadores'
                    active={activeItem === 'computadores'}
                    onClick={e => this.handleItemClick}
                />
                <Menu.Item
                    name='placas de video'
                    active={activeItem === 'placas de video'}
                    onClick={e => this.handleItemClick}
                />
                <Menu.Item
                    name='gamer'
                    active={activeItem === 'gamer'}
                    onClick={e => this.handleItemClick}
                />
            </Menu>
        )
    }

}