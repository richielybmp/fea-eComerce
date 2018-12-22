import React, { Component } from 'react';
import { Header } from './components/header';
import { MainContent } from './components/main-content';
import { Footer } from "./components/footer/";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import './css/App.css';
import CarrinhoContainer from './components/container/CarrinhoContainer';

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <MainContent />
        <Footer />
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