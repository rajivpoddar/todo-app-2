import React from 'react';

// Define the task type
type Task = {
  name: string;
  completed: boolean;
};

// Update the TodoListProps interface
interface TodoListProps {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

const TodoList: React.FC<TodoListProps> = ({ tasks, setTasks }) => {
  const handleTaskClick = (index: number) => {
    const newTasks = [...tasks]; // copy the current list of tasks
    newTasks[index].completed = !newTasks[index].completed; // flip the completed status of the clicked task
    setTasks(newTasks); // update the tasks
  };

  return (
    <ul>
      {tasks.map((task, index) => (
        <li
          key={index}
          onClick={() => handleTaskClick(index)}
          style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
        >
          {task.name}
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
