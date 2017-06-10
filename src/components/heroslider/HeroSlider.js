import React, { Component } from 'react';

import Slide from './Slide';

class HeroSlider extends Component {

  render(){
    return (
      <div className='hero-slider'>
        <Slide text={"slide1"}/>
        <Slide text={"slide222222"}/>
      </div>
    );
  }
}

export default HeroSlider;
