import React, { Component } from 'react';

import HeroNav from './HeroNav';

class Networkbar extends Component {

  render(){
    return (
      <div className='networkbar'>
        <div className='gamespace-container'>
          <HeroNav loggedIn={false}/>
        </div>
      </div>
    );
  }
}

export default Networkbar;
