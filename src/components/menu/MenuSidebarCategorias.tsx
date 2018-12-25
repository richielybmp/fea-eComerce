import React, { Component } from 'react';
import {Menu, Sidebar} from "semantic-ui-react";
import MenuItemCategoria from "./MenuItemCategoria";

interface SidebarProps {
    visibleSidebar: boolean,
    showSidebar: () => void
}

const MenuSidebarCategorias = (props: SidebarProps) => {


    return (
        <Sidebar
            as={Menu}
            animation='overlay'
            icon='labeled'
            inverted
            vertical
            visible={props.visibleSidebar}
            onHide={props.showSidebar}
            width='thin'
            className={'menu-mobile'}
        >
            <MenuItemCategoria mostrarModal={() => props.showSidebar} />
        </Sidebar>
    )
}

export default  MenuSidebarCategorias;