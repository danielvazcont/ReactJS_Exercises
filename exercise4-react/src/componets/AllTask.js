import React, {useState} from 'react'
import '../App.css';
import Form from './Form';
import Task from './Task';

function AllTask () {
  const [todo, setTodo] =useState([]);

  const addtask= task =>{
    if(task.text.trim()){
        task.text=task.text.trim();
        const updatedtasks=[task, ...todo];
        setTodo(updatedtasks);
    }
  };

  const deletetask = id =>{
    const updatedtasks = todo.filter(task=> task.id !== id);
    setTodo(updatedtasks);
  };

  const taskC = id =>{
    const updatedtasks = todo.map(task => {
        if(task.id===id)
            task.completed = !task.completed;
        return task;
    });
    setTodo(updatedtasks);
  };

  return (
    <>
        <Form onSubmit={addtask} />
        <div className='Alltask-c'>
            {
                todo.map((list) =>
                    <Task 
                    key={list.id}
                    id={list.id}
                    text={list.text} 
                    completed={list.completed}
                    deletetask={deletetask}
                    taskC={taskC}
                    />
                )
            }
        </div>
    </>
  );
}
export default AllTask;
