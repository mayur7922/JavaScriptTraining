import React, { useState, ChangeEvent, FC } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {ITask} from './Interfaces'
import TodoTask from './Components/todoTask'

const App = () => {
  const [task, setTask] = useState<string>("");
  const [todoList, setTodoList] = useState<ITask[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if(event.target.name === "task"){
      setTask(event.target.value)
    }
  }

  const addTask = (): void => {
    const newTask = { taskName: task};
    setTodoList([...todoList, newTask]);
    setTask("");
    // console.log(todoList);
  }

  const completeTask = (taskNameToDelete: string): void => {
    setTodoList(todoList.filter((task) => {
      return task.taskName != taskNameToDelete;
    }))
  }
  
  return <div className='App'>
    <h2>ToDo App</h2>
    <div className='header'>
      {/* <div className='inputContainer'></div> */}
      <input type="text" placeholder='Enter the task....' name='task' value={task} onChange={handleChange} />
      {/* add date automatically using new Date method of javascript */}
      <button onClick={addTask}>Add task</button>
    </div>
    <div className='todoList'>
      {todoList.map((task: ITask, key: number) => {
        return <TodoTask key={key} task={task} completeTask={completeTask} />
      })}
    </div>
    </div>
}

export default App
