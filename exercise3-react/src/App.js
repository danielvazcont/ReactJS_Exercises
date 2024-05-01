import './App.css';
import Buttons from './components/Buttons.js';
import Display from './components/Display.js'
import ButtonC from './components/ButtonC.js';
import { useState } from 'react';
import { evaluate } from 'mathjs';
function App() {

  const [input, setInput] = useState('');

  const updateinput = val =>{
    setInput( input + val );
  }
  const calculate = () => {
    const rule= /[\+\-\*\/]/;
    const endwith = /[\+\-\*\/]$/;
    if(input && rule.test(input) && !endwith.test(input))
      setInput( evaluate(input));
    else
      alert("Empty Operation");
    
  }
  return (
    <div className="App">
      <div className='Container-C'>
        <Display input={input}/>
        <div className='row'>
          <Buttons click={updateinput}>1</Buttons>
          <Buttons click={updateinput}>2</Buttons>
          <Buttons click={updateinput}>3</Buttons>
          <Buttons click={updateinput}>+</Buttons>
        </div>
        <div className='row'>
          <Buttons click={updateinput}>4</Buttons>
          <Buttons click={updateinput}>5</Buttons>
          <Buttons click={updateinput}>6</Buttons>
          <Buttons click={updateinput}>-</Buttons>
        </div>
        <div className='row'>
          <Buttons click={updateinput}>7</Buttons>
          <Buttons click={updateinput}>8</Buttons>
          <Buttons click={updateinput}>9</Buttons>
          <Buttons click={updateinput}>*</Buttons>
        </div>
        <div className='row'>
          <Buttons click={calculate}>=</Buttons>
          <Buttons click={updateinput}>0</Buttons>
          <Buttons click={updateinput}>.</Buttons>
          <Buttons click={updateinput}>/</Buttons>
        </div>
        <div className='row'>
          <ButtonC clear={ ()=>setInput('') }>Clear</ButtonC>
        </div>
      </div>
    </div>
  );
}

export default App;
