import React from 'react'

const ButtonC = (props) => (
    <div className='button-clear' onClick={props.clear}>{props.children}</div>
);

export default ButtonC;

