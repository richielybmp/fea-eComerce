import React, { useState } from 'react';
import { Sidebar, Segment } from 'semantic-ui-react';
import MenuSidebarCategorias from "./components/menu/MenuSidebarCategorias";
import Header from './components/header/Header';
import MainContent from './components/main-content/MainContent';

import './App.css';

const App = () => {
    const [isHamburgerVisible, setVisibility] = useState(false);

    const mostraModal = () => {
        setVisibility(!isHamburgerVisible);
    }

    return (
        <>
            <Header showSidebar={() => mostraModal()} />
            <Sidebar.Pushable as={Segment}>
                <MenuSidebarCategorias showSidebar={() => mostraModal()} visibleSidebar={isHamburgerVisible} />
                <MainContent dimmedSidebar={isHamburgerVisible} />
            </Sidebar.Pushable>
        </>
    );
}

export default App;