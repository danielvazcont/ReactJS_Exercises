import React from 'react'
import { AiOutlineCloseCircle } from 'react-icons/ai';

function Task ({id, text, completed, taskC, deletetask}) {
  return (
    <div className={completed ? 'Task-p completed': 'Task-p'}>
        <div className='task-text' onClick={ ()=>taskC(id) }>
            {text}
        </div>
        <div className='icon-t-e' onClick={()=>deletetask(id)}>
            <AiOutlineCloseCircle className='icon-t'/>
        </div>
    </div>
  );
}
export default Task;
