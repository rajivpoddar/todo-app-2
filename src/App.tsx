import React, { useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  const [tasks, setTasks] = useState<string[]>([]);
  const [completedTasks, setCompletedTasks] = useState<string[]>([]);

  return (
    <div className='p-10'>
      <h1 className='text-4xl mb-5'>Todo App</h1>
      <TodoForm tasks={tasks} setTasks={setTasks} />
      <TodoList tasks={tasks} completedTasks={completedTasks} setCompletedTasks={setCompletedTasks} />
    </div>
  );
}

export default App;