import './App.css';
import logo from './img/freecodecamp-logo.png';
import Button from './components/Button';
import Cont from './components/Cont';
import { useState } from 'react';

function App() {

  const [number, setNumber] = useState(0);
  const increase = () => {
    setNumber(number+1);
  };
  const decrease = () => {
    setNumber(number-1);
  };
  const resetcont = () => {
    setNumber(0);
  };

  return (
    <div className="App">
      <div className='freecodecamp-logo-c'>
        <img className='freecodecamp-logo' src={logo} alt='logo' />
      </div>
      <div className='cont-main'>
        <Cont number={number} />
        <Button text="Increase" type={true} click={increase}/>
        <Button text="Decrease" type={true} click={decrease}/>
        <Button text="Reset" type={false} click={resetcont}/>
      </div>
    </div>
  );
}

export default App;
