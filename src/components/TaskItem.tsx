import React from "react";
import "./TaskItem.scss";
import ButtonDelete from "./ButtonDelete";



function TaskItem({ task }) { 
    return (
      <>  
        <div className="task-item-container">
          <div className="task-description">
           <label className={
            task.isCompleted 
            ? 'checkbox-container-completed'
            : 'checkbox-container'
            }>
            <input type="checkbox" 
              defaultChecked={task.isCompleted}
            />
            <span className={task.isCompleted ? 'checkmark completed' : 'checkmark' } >

            </span>
            {task.description}
            </label>
          </div>
          <ButtonDelete />
        </div>
      </>
    )
}

export default TaskItem;