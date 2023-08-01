import React, { useState } from 'react';

interface TodoListProps {
  tasks: string[];
  completedTasks: string[];
  setCompletedTasks: React.Dispatch<React.SetStateAction<string[]>>;
}

const TodoList: React.FC<TodoListProps> = ({ tasks, completedTasks, setCompletedTasks }) => {
  const handleTaskClick = (index: number) => {
    const newCompletedTasks = [...completedTasks];
    newCompletedTasks[index] = !newCompletedTasks[index];
    setCompletedTasks(newCompletedTasks);
  };

  return (
    <ul>
      {tasks.map((task, index) => (
        <li
          key={index}
          onClick={() => handleTaskClick(index)}
          style={{ textDecoration: completedTasks[index] ? 'line-through' : 'none' }}
        >
          {task}
        </li>
      ))}
    </ul>
  );
};

export default TodoList;