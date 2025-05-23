import React from 'react';
import TaskItem from './TaskItem';

function TaskList({ tasks, onDelete, onEdit, onToggle }) {
  return (
    <ul>
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          onDelete={() => onDelete(task.id)}
          onEdit={() => onEdit(task)}
          onToggle={() => onToggle(task.id)}
        />
      ))}
    </ul>
  );
}

export default TaskList;
