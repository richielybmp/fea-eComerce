import React, { Component } from 'react';
import './App.css';
import { Card, Icon, Image } from 'semantic-ui-react'
import { Header } from './components/header';
import { MainContent } from './components/main-content';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <MainContent />
      </div>
    );
  }
}

export default App;
