import React from 'react';
import './TaskComponent.css';
import { Task as TaskType} from '../types/types';

interface TaskProps {
  task: TaskType;
}

const TaskComponent: React.FC<TaskProps> = ({ task }) => {
  const formattedDueDate = new Date(task.dueDate).toLocaleDateString();

  return (
    <div>
      <div className="task-container">
        <h2 className="task-title">{task.title}</h2>
        <p className="task-due-date">Finaliza el {formattedDueDate}</p>
      </div>
      <div className="task-border"></div>
    </div>
  );
};

export default TaskComponent;