import React, { useState } from 'react';
import { Header } from './components/header';
import { MainContent } from './components/main-content';
import { Menu, Sidebar, Segment } from 'semantic-ui-react';

import './css/App.css';
import MenuSidebarCategorias from "./components/menu/MenuSidebarCategorias";

const App = () => {

    const [isHamburgerVisible, setVisibility] = useState(false);

    const mostraModal = () => {
        setVisibility(!isHamburgerVisible);
    }

    return (
        <>
            <Header showSidebar={() => mostraModal()} />

            <Sidebar.Pushable as={Segment}>

                <MenuSidebarCategorias showSidebar={() => mostraModal()} visibleSidebar={isHamburgerVisible}/>

                <MainContent dimmedSidebar={isHamburgerVisible} />

            </Sidebar.Pushable>
        </>
    );
}

export default App;