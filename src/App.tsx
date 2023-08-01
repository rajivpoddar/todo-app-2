import React, { useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

// Define the task type
type Task = {
  name: string;
  completed: boolean;
};

function App() {
  // Use the Task type for the tasks state
  const [tasks, setTasks] = useState<Task[]>([]);

  return (
    <div className='p-10'>
      <h1 className='text-4xl mb-5'>Todo App</h1>
      <TodoForm tasks={tasks} setTasks={setTasks} />
      <TodoList tasks={tasks} setTasks={setTasks} />
    </div>
  );
}

export default App;
