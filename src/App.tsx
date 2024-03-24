import { useEffect, useState } from 'react'
import { Task as TaskType} from './types/types';
import TaskList from './assets/TaskList';
import './App.css'
import { findAllTasks } from './services/TaskService';

function App() {
/*
  const [tasks, setTasks] = useState<TaskType[]>([
    { id: 1, title: 'Tarea 1', dueDate: new Date() },
    { id: 2, title: 'Tarea 2', dueDate: new Date() },
    { id: 3, title: 'Tarea 3', dueDate: new Date() }
  ]);

  const getTasks = async () => {
    const result = await findAllTasks();
    console.log('AAAAAAAAAAAAAAAAAAAAAAAAAAA');
    console.log(result);
    console.log('BBBBBBBBBBBBBBBBBBBBBBBBBBB');
  } */
  
  const [tasks, setTasks] = useState<TaskType[]>([]);

  const getTasks = async () => {
    try {
      const result = await findAllTasks();
      setTasks(result);
    } catch (error) {
      console.error('Error al obtener las tareas:', error);
    }
  };

  useEffect(() => {
    getTasks();
  }, []);

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