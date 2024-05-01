import React from 'react'

function Buttons (props) {
  const ismath = value =>{
    return isNaN(value) && (value !== '.') && (value !== '='); 
  }
  return (
    <div className={`button-c ${ismath(props.children) ? 'math' : ''}`.trimEnd()} onClick={()=>props.click(props.children)} >
        {props.children}
    </div>
  )
}
export default Buttons;
