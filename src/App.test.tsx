import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

test('renders add task form', () => {
  const { getByPlaceholderText } = render(<App />);
  const inputElement = getByPlaceholderText(/Enter a new task.../i);
  expect(inputElement).toBeInTheDocument();
});

test('allows users to add tasks', () => {
  const { getByPlaceholderText, getByText } = render(<App />);
  const inputElement = getByPlaceholderText(/Enter a new task.../i);
  fireEvent.change(inputElement, { target: { value: 'Test task' } });
  fireEvent.click(getByText(/add/i));
  const taskElement = getByText(/test task/i);
  expect(taskElement).toBeInTheDocument();
});

test('allows users to check off a completed task', () => {
  const { getByPlaceholderText, getByText } = render(<App />);
  const inputElement = getByPlaceholderText(/Enter a new task.../i);
  fireEvent.change(inputElement, { target: { value: 'Test task' } });
  fireEvent.click(getByText(/add/i));
  const taskElement = getByText(/test task/i);
  fireEvent.click(taskElement);
  expect(taskElement).toHaveStyle('text-decoration: line-through');
});