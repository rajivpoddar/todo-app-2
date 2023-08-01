import React, { useState } from 'react';

interface TodoFormProps {
  setTasks: React.Dispatch<React.SetStateAction<string[]>>;
}

const TodoForm: React.FC<TodoFormProps> = ({ setTasks }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setTasks(prev => [...prev, input]);
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit} className='flex justify-center items-center mt-5'>
      <input type="text" value={input} onChange={e => setInput(e.target.value)} placeholder='Enter a new task...' className='border-2 border-gray-300 p-2 w-1/2' />
      <button type="submit" className='border-2 border-gray-300 p-2 ml-2'>Add</button>
    </form>
  );
};

export default TodoForm;