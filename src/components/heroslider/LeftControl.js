import React from 'react';

import FontAwesome from 'react-fontawesome';

const LeftControl = (props) => {
  return (
    <div className='heroslider-controls heroslider-controls-left'>
      <FontAwesome name='angle-left' onClick={props.onClick}/>
    </div>
  );
}

export default LeftControl;
