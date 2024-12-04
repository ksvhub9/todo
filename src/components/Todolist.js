import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ tasks, onDelete }) => {
  return (
    <div>
      {tasks.map((task, index) => (
        <TodoItem key={index} task={task} onDelete={() => onDelete(index)} />
      ))}
    </div>
  );
};

export default TodoList;
