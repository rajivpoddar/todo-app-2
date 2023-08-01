import React, { useState } from 'react';

// Define the task type
type Task = {
  name: string;
  completed: boolean;
};

// Update the TodoFormProps interface
interface TodoFormProps {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

const TodoForm: React.FC<TodoFormProps> = ({ tasks, setTasks }) => {
  const [value, setValue] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!value) return;
    addTask(value);
    setValue('');
  };

  const addTask = (name: string) => {
    const newTask: Task = { name: name, completed: false };
    setTasks(prevTasks => [...prevTasks, newTask]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        onChange={e => setValue(e.target.value)}
        className="border-2 border-gray-600 h-10"
      />
      <button 
          type="submit"
          className="ml-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded h-10"
          >
          Add task
      </button>
    </form>
  );
};

export default TodoForm;
