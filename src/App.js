import React, { useState } from 'react';
import './app.css';
import TaskInput from './Components/TaskInput';
import TaskCard from './Components/TaskCard';
import { v4 as uuid } from "uuid";

function App() {

  const [task, setTask] = useState([]);

  const markComplete = (pos) => {
    setTask(
      task.map((task) => {
        if (task.pos === pos) task.completed = !task.completed;
        return task;
      })
    );
  };

  const delTask = (pos) => setTask(task.filter((task) => task.pos !== pos));
  const addTask = (title) => {
    const newTask = {
      pos: uuid(),// generate ID (firebase)
      title,
      completed: false,
    };
    setTask([...task, newTask]);
  };

  return (
    <>
      <TaskInput 
        addTask = {addTask}
      />
      <TaskCard 
        task = {task}
        setTask = {setTask}
        markComplete = {markComplete}
        delTask = {delTask}

      />
    </>
  );
}

export default App;
