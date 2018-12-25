import React, { useState } from 'react';
import { Header } from './components/header';
import { MainContent } from './components/main-content';
import { Footer } from "./components/footer/";
import MenuItemCategoria from './components/menu/MenuItemCategoria';
import { Menu, Sidebar, Segment } from 'semantic-ui-react';

import './css/App.css';

const App = () => {

    const [isHamburgerVisible, setVisibility] = useState(false);

    const mostraModal = () => {
        setVisibility(!isHamburgerVisible);
    }

    return (
        <>
            <Header showSidebar={() => mostraModal()} />

            <Sidebar.Pushable as={Segment}>
                <Sidebar
                    as={Menu}
                    animation='overlay'
                    icon='labeled'
                    inverted
                    vertical
                    visible={isHamburgerVisible}
                    width='thin'
                    className={'menu-mobile'}
                >
                    <MenuItemCategoria />
                </Sidebar>

                <Sidebar.Pusher dimmed={isHamburgerVisible}>
                    <MainContent />
                    <Footer />
                </Sidebar.Pusher>
            </Sidebar.Pushable>
        </>
    );
}

export default App;