import React, { useState } from 'react'
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { ItemMenu } from '../../enum/ItemMenu';

interface MenuItemCategoriaProps {
    mostrarModal: () => void
}

const MenuItemCategoria = (props: MenuItemCategoriaProps) => {

    const [activeItem, setActiveItem] = useState(ItemMenu.HOME);

    const handleItemClick = (name: ItemMenu) => {
        setActiveItem(name);
    };

    return (
        <>
            {/* Aqui podemos fazer um MAP para renderizar os Menu.Item de acordo com 
                os itens do ItemMenu ao invés de escrever vários Menu.Item
            }*/}
            <Menu.Item
                as={Link}
                to={`${process.env.PUBLIC_URL}/`}
                active={activeItem === ItemMenu.HOME}
                onClick={e => handleItemClick(ItemMenu.HOME)}>{ItemMenu.HOME}
            </Menu.Item>
            <Menu.Item
                as={Link}
                to={`${process.env.PUBLIC_URL}/categoria/livros`}
                active={activeItem === ItemMenu.LIVROS}
                onClick={e => handleItemClick(ItemMenu.LIVROS)}>{ItemMenu.LIVROS}
            </Menu.Item>
            <Menu.Item
                as={Link}
                to={`${process.env.PUBLIC_URL}/categoria/notebooks`}
                active={activeItem === ItemMenu.NOTEBOOKS}
                onClick={e => handleItemClick(ItemMenu.NOTEBOOKS)}>{ItemMenu.NOTEBOOKS}
            </Menu.Item>
            <Menu.Item
                as={Link}
                to={`${process.env.PUBLIC_URL}/categoria/smartphones`}
                active={activeItem === ItemMenu.SMARTPHONES}
                onClick={e => handleItemClick(ItemMenu.SMARTPHONES)}>{ItemMenu.SMARTPHONES}
            </Menu.Item>
            <Menu.Item
                as={Link}
                to={`${process.env.PUBLIC_URL}/categoria/perifericos`}
                active={activeItem === ItemMenu.PERIFERICOS}
                onClick={e => handleItemClick(ItemMenu.PERIFERICOS)}>{ItemMenu.PERIFERICOS}
            </Menu.Item>
            <Menu.Item
                as={Link}
                to={`${process.env.PUBLIC_URL}/categoria/impressoras`}
                active={activeItem === ItemMenu.IMPRESSORAS}
                onClick={e => handleItemClick(ItemMenu.IMPRESSORAS)}>{ItemMenu.IMPRESSORAS}
            </Menu.Item>
            <Menu.Item
                as={Link}
                to={`${process.env.PUBLIC_URL}/categoria/placas-de-video`}
                active={activeItem === ItemMenu.PLACASDEVIDEO}
                onClick={e => handleItemClick(ItemMenu.PLACASDEVIDEO)}>{ItemMenu.PLACASDEVIDEO}
            </Menu.Item>
            <Menu.Item
                as={Link}
                to={`${process.env.PUBLIC_URL}/categoria/jogos`}
                active={activeItem === ItemMenu.JOGOS}
                onClick={e => handleItemClick(ItemMenu.JOGOS)}>{ItemMenu.JOGOS}
            </Menu.Item>
        </>
    )
}

export default MenuItemCategoria;