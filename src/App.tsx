import React, { useState, useReducer } from 'react';
import { Header } from './components/header';
import { MainContent } from './components/main-content';
import { Sidebar, Segment } from 'semantic-ui-react';
import { AppContext } from './AppContext';
import MenuSidebarCategorias from "./components/menu/MenuSidebarCategorias";
import reducer, { initialState } from './components/reducer/reducer';

import './css/App.css';
import { ActionType } from './components/enums/EnumActionTypes';

const App = () => {

    const [isHamburgerVisible, setVisibility] = useState(false);

    const [state, dispatch] = useReducer(reducer, initialState);

    const mostraModal = () => {
        setVisibility(!isHamburgerVisible);
    }

    return (
        <AppContext.Provider value={{ state, dispatch }}>

            <Header showSidebar={() => mostraModal()} />

            <Sidebar.Pushable as={Segment}>

                <MenuSidebarCategorias showSidebar={() => mostraModal()} visibleSidebar={isHamburgerVisible} />

                <MainContent dimmedSidebar={isHamburgerVisible} />

            </Sidebar.Pushable>

        </AppContext.Provider>
    );
}

export default App;