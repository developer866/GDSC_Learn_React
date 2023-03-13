import React, { useState } from "react";
import "./index.css";

const Crud = () => {
  const [addTask, setAddTask] = useState([]);
  const [textInput, setTextInput] = useState(" ");

  const handleChange = (event) => {
    setTextInput(event.target.value);
  };

  const handleAdd = () => {
    const task = {
        id:addTask.length === 0?1: addTask[addTask.length - 1].id + 1,
        addTask :textInput,
    }
    const newTodoList = [...textInput, task];
    setAddTask(newTodoList);
  };
 const deleteTask = (id) =>{
    const newTodo = addTask.filter((task)=>{
        return task !== taskName
    })
    setAddTask(newTodo)
 }

  return (
    <div>
      <div>
        <input onChange={handleChange} />
        <button onClick={handleAdd}>Add me</button>
      </div>
      <div>
        {addTask.map((task) => {
          return <div>
              <h1>{task.addTask}</h1>
              <button onClick={()=>  deleteTask(task.id)}>X</button>
            </div>
        })}
      </div>
    </div>
  );
};

export default Crud;
