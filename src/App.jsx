import { useState } from 'react'
import TaskItem from './components/TaskItem'

function App() {
  const [tasks, setTasks]  = useState([
    {
      id: '1', 
      description: 'Estudar programação',
      isCompleted: false
    },
    {
      id: '2', 
      description: 'Ler livros',
      isCompleted: false
    },
    { 
      id: '3',
      description: 'Assistir filmes',
      isCompleted: false
    },
    
  ]) 
  
  const handleChangeMessage = ()=> {
    setTasks(true)
    
  } 


  return (
    <>
      <div>{
          tasks.map( task => 
          <TaskItem key={task.id} task={task}
          />)} 
        </div>
    </>
  )
}

export default App
