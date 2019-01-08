import React, { useState } from 'react'
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { EnumItemMenu } from '../enums/EnumItemMenu';

interface MenuItemCategoriaProps {
    mostrarModal: () => void
}

const MenuItemCategoria = (props: MenuItemCategoriaProps) => {

    const [activeItem, setActiveItem] = useState(EnumItemMenu.HOME);

    const handleItemClick = (name: EnumItemMenu) => {
        setActiveItem(name);
    };

    return (
        <>
            {/* Aqui podemos fazer um MAP para renderizar os Menu.Item de acordo com 
                os itens do EnumItemMenu ao invés de escrever vários Menu.Item
            }*/}
            <Menu.Item
                as={Link}
                to={`${process.env.PUBLIC_URL}/`}
                active={activeItem === EnumItemMenu.HOME}
                onClick={e => handleItemClick(EnumItemMenu.HOME)}>{EnumItemMenu.HOME}
            </Menu.Item>
            <Menu.Item
                as={Link}
                to={`${process.env.PUBLIC_URL}/categoria/livros`}
                active={activeItem === EnumItemMenu.LIVROS}
                onClick={e => handleItemClick(EnumItemMenu.LIVROS)}>{EnumItemMenu.LIVROS}
            </Menu.Item>
            <Menu.Item
                as={Link}
                to={`${process.env.PUBLIC_URL}/categoria/smartphones`}
                active={activeItem === EnumItemMenu.SMARTPHONES}
                onClick={e => handleItemClick(EnumItemMenu.SMARTPHONES)}>{EnumItemMenu.SMARTPHONES}
            </Menu.Item>
            <Menu.Item
                as={Link}
                to={`${process.env.PUBLIC_URL}/categoria/perifericos`}
                active={activeItem === EnumItemMenu.PERIFERICOS}
                onClick={e => handleItemClick(EnumItemMenu.PERIFERICOS)}>{EnumItemMenu.PERIFERICOS}
            </Menu.Item>
            <Menu.Item
                as={Link}
                to={`${process.env.PUBLIC_URL}/categoria/impressoras`}
                active={activeItem === EnumItemMenu.IMPRESSORAS}
                onClick={e => handleItemClick(EnumItemMenu.IMPRESSORAS)}>{EnumItemMenu.IMPRESSORAS}
            </Menu.Item>
            <Menu.Item
                as={Link}
                to={`${process.env.PUBLIC_URL}/categoria/placas-de-video`}
                active={activeItem === EnumItemMenu.PLACASDEVIDEO}
                onClick={e => handleItemClick(EnumItemMenu.PLACASDEVIDEO)}>{EnumItemMenu.PLACASDEVIDEO}
            </Menu.Item>
            <Menu.Item
                as={Link}
                to={`${process.env.PUBLIC_URL}/categoria/jogos`}
                active={activeItem === EnumItemMenu.JOGOS}
                onClick={e => handleItemClick(EnumItemMenu.JOGOS)}>{EnumItemMenu.JOGOS}
            </Menu.Item>
        </>
    )
}

export default MenuItemCategoria;