import React from 'react';

const Slide = ({
  slide
}) => {
  const style = {
    background: `url('${slide.img_url}')`
  }

  return (
    <div className='slide' style={style}>
      <div className='slide-title'>
        <a href=''>{slide.title}</a>
      </div>
    </div>
  );
}

export default Slide;
