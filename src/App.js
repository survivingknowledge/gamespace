import React, { Component } from 'react';
import './App.css';

import Networkbar from './components/networkbar/Networkbar';
import HeroSlider from './components/heroslider/HeroSlider';

class App extends Component {
  render() {
    return (
      <div className="gamespace-container">
        <Networkbar />
        <HeroSlider />
      </div>
    );
  }
}

export default App;
