import React from 'react';
import TaskItem from './TaskItem';

function TaskList({ tasks, onDelete, onEdit }) {
  return (
    <ul>
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          onDelete={() => onDelete(task.id)}
          onEdit={() => onEdit(task)}
        />
      ))}
    </ul>
  );
}

export default TaskList;
