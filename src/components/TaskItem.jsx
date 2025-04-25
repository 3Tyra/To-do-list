import React from 'react';

function TaskItem({ task, onDelete, onEdit }) {
  return (
    <li className="flex justify-between items-center bg-gray-100 p-2 rounded mb-2">
      <span>{task.text}</span>
      <div>
        <button onClick={onEdit} className="text-yellow-500 mr-2">Edit</button>
        <button onClick={onDelete} className="text-red-500">Delete</button>
      </div>
    </li>
  );
}

export default TaskItem;
