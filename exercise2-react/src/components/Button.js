import React from 'react';
import '../Buttons.css';
function Button( {text, type, click} ){
  return (
    <button className={ type ? 'button-c' : 'button-r' } onClick={click}>
        {text}
    </button>
  )
}

export default Button;
