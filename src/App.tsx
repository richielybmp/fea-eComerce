import React, { Component } from 'react';
import './App.css';
import { Header } from './components/header';
import { MainContent } from './components/main-content';

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <MainContent />
      </>
    );
  }
}

export default App;
