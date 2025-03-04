import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Tasks.scss";
import TaskItem from "./TaskItem";

interface TaskProps {
    id: number;
    description: string;
    isCompleted: boolean;
}

function Tasks(props: TaskProps) {
    const [tasks, setTasks] = useState<TaskProps[]>([]);
    

      const fetchTasks = async () => {
        try {
         const { data } = await axios.get('https://task-manager-backend-clqi.onrender.com/tasks')
         
         const formatedTasks = data.map((task: any) => ({
              id: task.id,
              description: task.description,
              isCompleted: task.is_completed,
         }));

         setTasks(formatedTasks);
        } catch (error) {
          console.log(error);
          
        }
      }
     
      useEffect(() => {
        fetchTasks()
      }, []); 
    return (
      <div className="tasks-container">
        <h2>Minhas Tarefas</h2>
        <div className="last-tasks">
            <h3>Últimas Tarefas</h3>
            <div className="tasks-list">
            {tasks.filter((task) => task.isCompleted === false).map((lastTask) => ( 
            <TaskItem key={lastTask.id} task={lastTask} />))}
            </div>
        </div>
        
        <div className="completed-tasks">
            <h3>Tarefas Concluídas</h3>
            <div className="tasks-list">
            {tasks.filter((task) => task.isCompleted === true).map((completedTask) => ( 
            <TaskItem key={completedTask.id} task={completedTask} />))}
            </div>
        </div>
      </div>
    )
}

export default Tasks; 