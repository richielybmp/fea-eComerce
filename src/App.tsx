import React, { Component } from 'react';
import './css/App.css';
import { Header } from './components/header';
import { MainContent } from './components/main-content';
import {Footer } from "./components/footer/";
import { MenuCategorias } from "./components/menu-categorias";

class App extends Component {
  render() {
    return (
      <>
          <nav className={'menu-horizontal'}>
              <Header />
              <MenuCategorias/>
          </nav>

          <MainContent />
        <Footer/>
      </>
    );
  }
}

export default App;
