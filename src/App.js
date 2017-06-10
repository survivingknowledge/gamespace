import React, { Component } from 'react';
import './App.css';

import Networkbar from './components/networkbar/Networkbar';

class App extends Component {
  render() {
    return (
      <div className="gamespace-container">
        <Networkbar />
      </div>
    );
  }
}

export default App;
