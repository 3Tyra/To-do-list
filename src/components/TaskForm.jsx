import React, { useState, useEffect } from 'react';

function TaskForm({ addTask, taskToEdit, editTask }) {
  const [text, setText] = useState('');

  useEffect(() => {
    if (taskToEdit) {
      setText(taskToEdit.text);
    }
  }, [taskToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;

    if (taskToEdit) {
      editTask(taskToEdit.id, text);
    } else {
      addTask(text);
    }

    setText('');
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        type="text"
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Enter task..."
        className="task-input"
      />
      <button type="submit" className="task-button">
        {taskToEdit ? 'Update' : 'Add'}
      </button>
    </form>
  );
}

export default TaskForm;
