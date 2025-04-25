import React from 'react';

function TaskItem({ task, onDelete, onEdit, onToggle }) {
  return (
    <li className={`task-item ${task.completed ? 'completed' : ''}`}>
      <span>{task.text}</span>
      <div className="task-buttons">
        <button onClick={() => onEdit(task)}>Edit</button>
        <button onClick={() => onDelete(task.id)}>Delete</button>
        <button onClick={() => onToggle(task.id)}>
          {task.completed ? 'Undo' : 'Done'}
        </button>
      </div>
    </li>
  );
}

export default TaskItem;
