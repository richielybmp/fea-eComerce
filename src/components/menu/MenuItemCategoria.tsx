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
        console.log(name)
        setActiveItem(name);

    };

    return (
        <>
            {/* Aqui podemos fazer um MAP para renderizar os Menu.Item de acordo com 
                os itens do EnumItemMenu ao invés de escrever vários Menu.Item
            }*/}
            <Menu.Item
                as={Link}
                to="/"
                active={activeItem === EnumItemMenu.HOME}
                onClick={e => handleItemClick(EnumItemMenu.HOME)}>{EnumItemMenu.HOME}
            </Menu.Item>
            <Menu.Item
                as={Link}
                to="/hardware"
                active={activeItem === EnumItemMenu.HARDWARE}
                onClick={e => handleItemClick(EnumItemMenu.HARDWARE)}>{EnumItemMenu.HARDWARE}
            </Menu.Item>
            <Menu.Item
                as={Link}
                to="/smartphones"
                active={activeItem === EnumItemMenu.SMARTPHONES}
                onClick={e => handleItemClick(EnumItemMenu.SMARTPHONES)}>{EnumItemMenu.SMARTPHONES}
            </Menu.Item>
            <Menu.Item
                as={Link}
                to="/perifericos"
                active={activeItem === EnumItemMenu.PERIFERICOS}
                onClick={e => handleItemClick(EnumItemMenu.PERIFERICOS)}>{EnumItemMenu.PERIFERICOS}
            </Menu.Item>
            <Menu.Item
                as={Link}
                to="/computadores"
                active={activeItem === EnumItemMenu.COMPUTADORES}
                onClick={e => handleItemClick(EnumItemMenu.COMPUTADORES)}>{EnumItemMenu.COMPUTADORES}
            </Menu.Item>
            <Menu.Item
                as={Link}
                to="/placas-de-video"
                active={activeItem === EnumItemMenu.PLACASDEVIDEO}
                onClick={e => handleItemClick(EnumItemMenu.PLACASDEVIDEO)}>{EnumItemMenu.PLACASDEVIDEO}
            </Menu.Item>
            <Menu.Item
                as={Link}
                to="/gamer"
                active={activeItem === EnumItemMenu.GAMER}
                onClick={e => handleItemClick(EnumItemMenu.GAMER)}>{EnumItemMenu.GAMER}
            </Menu.Item>
        </>
    )
}

export default MenuItemCategoria;