import React from 'react';
import TaskComponent from './TaskComponent';
import './TaskList.css'; // Importar el archivo CSS
import { Task as TaskType} from '../types/types';


interface TaskListProps {
  tasks: TaskType[];
}

const TaskList: React.FC<TaskListProps> = ({ tasks }) => {
  return (
    <div className="task-list">
      {tasks.map(task => (
        <TaskComponent key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;
