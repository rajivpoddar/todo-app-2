import React, { useState } from 'react';

interface TodoItemProps {
  task: string;
  completedTasks: string[];
  setCompletedTasks: React.Dispatch<React.SetStateAction<string[]>>;
}

const TodoItem: React.FC<TodoItemProps> = ({ task, completedTasks, setCompletedTasks }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(task);

  const handleCheck = () => {
    setCompletedTasks((prev: string[]) => [...prev, task]);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
  };

  return (
    <li className='my-2'>
      {isEditing ? (
        <input type="text" value={editValue} onChange={e => setEditValue(e.target.value)} className='border-2 border-gray-300 p-2' />
      ) : (
        <span className={completedTasks.includes(task) ? 'line-through' : ''} onClick={handleEdit}>{task}</span>
      )}
      <button onClick={handleCheck} className='border-2 border-gray-300 p-2 ml-2'>Check</button>
      {isEditing && <button onClick={handleSave} className='border-2 border-gray-300 p-2 ml-2'>Save</button>}
    </li>
  );
};

export default TodoItem;