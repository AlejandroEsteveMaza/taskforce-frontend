import { useState } from 'react'
import { Task as TaskType} from './types/types';
import TaskList from './assets/TaskList';
import './App.css'

function App() {

  const [tasks, setTasks] = useState<TaskType[]>([
    { id: 1, title: 'Tarea 1', dueDate: new Date() },
    { id: 2, title: 'Tarea 2', dueDate: new Date() },
    { id: 3, title: 'Tarea 3', dueDate: new Date() }
  ]);

  return (
    <>
      <div>
        <h1>Lista de Tareas</h1>
        <TaskList tasks={tasks} />
      </div>
    </>
  )
}

export default App
