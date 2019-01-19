import React, { useState, useContext } from 'react'
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { ItemMenu } from '../../enum/ItemMenu';
import { EcommerceContext } from '../../AppStore';

interface MenuItemCategoriaProps {
    mostrarModal: () => void
}

const MenuItemCategoria = (props: MenuItemCategoriaProps) => {

    const context = useContext(EcommerceContext);

    return (
        <>
            {/* Aqui podemos fazer um MAP para renderizar os Menu.Item de acordo com 
                os itens do ItemMenu ao invés de escrever vários Menu.Item
            }*/}
            <Menu.Item
                as={Link}
                to={`${process.env.PUBLIC_URL}/`}
                active={context!.state.menuSelecionado === ItemMenu.HOME}
                onClick={e => context!.dispatch.clickMenuItem(ItemMenu.HOME)}>{ItemMenu.HOME}
            </Menu.Item>
            <Menu.Item
                as={Link}
                to={`${process.env.PUBLIC_URL}/categoria/livros`}
                active={context!.state.menuSelecionado === ItemMenu.LIVROS}
                onClick={e => context!.dispatch.clickMenuItem(ItemMenu.LIVROS)}>{ItemMenu.LIVROS}
            </Menu.Item>
            <Menu.Item
                as={Link}
                to={`${process.env.PUBLIC_URL}/categoria/notebooks`}
                active={context!.state.menuSelecionado === ItemMenu.NOTEBOOKS}
                onClick={e => context!.dispatch.clickMenuItem(ItemMenu.NOTEBOOKS)}>{ItemMenu.NOTEBOOKS}
            </Menu.Item>
            <Menu.Item
                as={Link}
                to={`${process.env.PUBLIC_URL}/categoria/smartphones`}
                active={context!.state.menuSelecionado === ItemMenu.SMARTPHONES}
                onClick={e => context!.dispatch.clickMenuItem(ItemMenu.SMARTPHONES)}>{ItemMenu.SMARTPHONES}
            </Menu.Item>
            <Menu.Item
                as={Link}
                to={`${process.env.PUBLIC_URL}/categoria/perifericos`}
                active={context!.state.menuSelecionado === ItemMenu.PERIFERICOS}
                onClick={e => context!.dispatch.clickMenuItem(ItemMenu.PERIFERICOS)}>{ItemMenu.PERIFERICOS}
            </Menu.Item>
            <Menu.Item
                as={Link}
                to={`${process.env.PUBLIC_URL}/categoria/impressoras`}
                active={context!.state.menuSelecionado === ItemMenu.IMPRESSORAS}
                onClick={e => context!.dispatch.clickMenuItem(ItemMenu.IMPRESSORAS)}>{ItemMenu.IMPRESSORAS}
            </Menu.Item>
            <Menu.Item
                as={Link}
                to={`${process.env.PUBLIC_URL}/categoria/placas-de-video`}
                active={context!.state.menuSelecionado === ItemMenu.PLACASDEVIDEO}
                onClick={e => context!.dispatch.clickMenuItem(ItemMenu.PLACASDEVIDEO)}>{ItemMenu.PLACASDEVIDEO}
            </Menu.Item>
            <Menu.Item
                as={Link}
                to={`${process.env.PUBLIC_URL}/categoria/jogos`}
                active={context!.state.menuSelecionado === ItemMenu.JOGOS}
                onClick={e => context!.dispatch.clickMenuItem(ItemMenu.JOGOS)}>{ItemMenu.JOGOS}
            </Menu.Item>
        </>
    )
}

export default MenuItemCategoria;