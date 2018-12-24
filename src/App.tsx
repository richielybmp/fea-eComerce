import React, { Component } from 'react';
import { Header } from './components/header';
import { MainContent } from './components/main-content';
import { Footer } from "./components/footer/";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { Menu, Grid, Sidebar, Segment, Button } from 'semantic-ui-react';


import './css/App.css';
import CarrinhoContainer from './components/container/CarrinhoContainer';

interface MenuCategoriaState {
    activeItem: string | undefined;
    visible: boolean;
}

enum ItemMenu {
    HOME = 'Home',
    HARDWARE = 'Hardware',
    SMARTPHONES = 'Smartphones',
    PERIFERICOS = 'Periféricos',
    COMPUTADORES = 'Computadores',
    PLACASDEVIDEO = 'Placas de Vídeo',
    GAMER = 'Gamer',
    MONITORES = 'Monitores',
}

class App extends Component<{}, MenuCategoriaState> {

    constructor(props: {}){
        super(props)
        this.state = {
            activeItem: ItemMenu.HOME,
            visible: false,
        }
    }

    handleSidebarHide = () => this.setState({ visible: false });

    handleItemClick = (name: string) => {
        console.log(name)
        this.setState({activeItem: name})
        this.mostraModal();
    }

    public mostraModal = () => {
        this.setState({
            visible: !this.state.visible
        })
        console.log(this.state.visible)
    }

  render() {
      const { activeItem } = this.state

    return (
        <>
            <Header showSidebar={() => this.mostraModal()} />

            <Sidebar.Pushable as={Segment}>

                <Sidebar
                    as={Menu}
                    animation='overlay'
                    icon='labeled'
                    inverted
                    // onHide={this.mostraModal}
                    vertical
                    visible={this.state.visible}
                    width='thin'
                    className={'menu-mobile'}
                >
                    <Menu.Item
                        as={Link}
                        to="/"
                        active={activeItem === ItemMenu.HOME}
                        onClick={e=>this.handleItemClick(ItemMenu.HOME)}>{ItemMenu.HOME}</Menu.Item>
                    <Menu.Item
                        as={Link}
                        to="/hardware"
                        active={activeItem === ItemMenu.HARDWARE}
                        onClick={e=>this.handleItemClick(ItemMenu.HARDWARE)}>{ItemMenu.HARDWARE}</Menu.Item>
                    <Menu.Item
                        as={Link}
                        to="/smartphones"
                        active={activeItem === ItemMenu.SMARTPHONES}
                        onClick={e => this.handleItemClick(ItemMenu.SMARTPHONES)}>{ItemMenu.SMARTPHONES}</Menu.Item>
                    <Menu.Item
                        as={Link}
                        to="/perifericos"
                        active={activeItem === ItemMenu.PERIFERICOS}
                        onClick={e => this.handleItemClick(ItemMenu.PERIFERICOS)}>{ItemMenu.PERIFERICOS}</Menu.Item>
                    <Menu.Item
                        as={Link}
                        to="/computadores"
                        active={activeItem === ItemMenu.COMPUTADORES}
                        onClick={e => this.handleItemClick(ItemMenu.COMPUTADORES)}>{ItemMenu.COMPUTADORES}</Menu.Item>
                    <Menu.Item
                        as={Link}
                        to="/placas-de-video"
                        active={activeItem === ItemMenu.PLACASDEVIDEO}
                        onClick={e => this.handleItemClick(ItemMenu.PLACASDEVIDEO)}>{ItemMenu.PLACASDEVIDEO}</Menu.Item>
                    <Menu.Item
                        as={Link}
                        to="/gamer"
                        active={activeItem === ItemMenu.GAMER}
                        onClick={e => this.handleItemClick(ItemMenu.GAMER)}>{ItemMenu.GAMER}</Menu.Item>
                </Sidebar>

                <Sidebar.Pusher dimmed={this.state.visible}>
                    <MainContent />
                    <Footer />
                </Sidebar.Pusher>
            </Sidebar.Pushable>
        </>
    );
  }
}

export default App;

{/* <BrowserRouter>
  <Switch>
    <Route path="/" exact={true} component={MainContent} />
    <Route path="/carrinho" component={CarrinhoContainer} />
    <Route path="*" component={NotFound} />
  </Switch>
</ BrowserRouter> */}