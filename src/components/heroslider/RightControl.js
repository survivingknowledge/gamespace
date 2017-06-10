import React from 'react';

import FontAwesome from 'react-fontawesome';

const RightControl = (props) => {
  return (
    <div className='heroslider-controls heroslider-controls-right'>
      <FontAwesome name='angle-right' onClick={props.onClick}/>
    </div>
  );
}

export default RightControl;
