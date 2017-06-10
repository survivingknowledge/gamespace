import React, { Component } from 'react';

import Slide from './Slide';
import LeftControl from './LeftControl';
import RightControl from './RightControl';

class HeroSlider extends Component {

  constructor(props){
    super(props);

    this.state = {
      slides: [],
      currentSlide: 0
    }

    this.fetchSlides = this.fetchSlides.bind(this);
  }

  fetchSlides(){
    //fetch slides in json format
    const slides = [
      {
        title: 'ARMS Review',
        content: 'some awesome content',
        img_url: 'img/heroslider/arms1-1170x450.jpg',
        href_url: '/'
      }
    ];

    this.setState({
      slides: slides
    });
  }

  componentWillMount(){
    this.fetchSlides();
  }

  render(){
    const { slides, currentSlide } = this.state;

    return (
      <div className='hero-slider'>
        <div className='hero-slider-overlay'></div>
        <LeftControl />
        <Slide slide={slides[currentSlide]}/>
        <RightControl />
      </div>
    );
  }
}

export default HeroSlider;
