import React, { Component } from 'react';

import Slide from './Slide';
import LeftControl from './LeftControl';
import RightControl from './RightControl';

class HeroSlider extends Component {

  render(){
    return (
      <div className='hero-slider'>
        <LeftControl />
        <Slide text={"slide1"} size="2x"/>
        <Slide text={"slide222222"}/>
        <RightControl />
      </div>
    );
  }
}

export default HeroSlider;
