import axios from 'axios'
import React, { useState, useEffect } from 'react';
import TaskItem from './components/TaskItem'

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, description: 'Task 1', IsCompleted: false },
    { id: 2, description: 'Task 2', description: true },
  ])

  const fetchTasks = async () => {
    try {
     const { data } = await axios.get('https://task-manager-backend-clqi.onrender.com/tasks')
      setTasks(data)
    } catch (error) {
      console.log(error);
      
    }
  }
 
  useEffect(() => {
    fetchTasks()
  }, []); 
  

  return (
    <>
      <h2>Minhas Tarefas</h2>
      <h3>Ultimas Tarefas</h3>
      {tasks.map( task => 
        <TaskItem key={task.id} task={task}/>
      )} 
      <h3>Tarefas Concluidas</h3>
    </>
  )
}

export default App
