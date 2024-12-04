import React from 'react';

const TodoItem = ({ task, onDelete }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', margin: '5px 0' }}>
      <span>{task}</span>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
};

export default TodoItem;
