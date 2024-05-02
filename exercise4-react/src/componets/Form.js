import React, { useState } from 'react'
import '../App.css';
import {v4 as uuidv4} from 'uuid';

function Form (props){

    const [input, setInput]=useState('');

    const handlechange=e=>{
        setInput(e.target.value);
    };

    const handlesend= e =>{
        e.preventDefault();
        const newtask={
            id: uuidv4(),
            text: input,
            completed: false
        }
        props.onSubmit(newtask);
    };
    
  return (
    <form className='task-f'
    onSubmit={handlesend}>
        <input
            className='task-input'
            type='text'
            placeholder='Write you task'
            name='text'
            onChange={handlechange}
        />
        <button className='task-botton'>Add Task</button>
    </form>
  );
}
export default Form;
