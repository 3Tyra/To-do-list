import React, { useState } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Finish React assignment"},
    { id: 2, text: "Clean my room" },
    { id: 3, text: "Watch class recordings" },
    { id: 4, text: "Play Volleyball"},
    { id: 5, text: "Walk for 1hr"}
  ]);

  const [taskToEdit, setTaskToEdit] = useState(null);

  const addTask = (task) => {
    setTasks([...tasks, { id: Date.now(), text: task, completed: false }]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const editTask = (id, updatedText) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, text: updatedText } : task
    ));
    setTaskToEdit(null);
  };

  const toggleTaskCompletion = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  return (
    <div className="app-wrapper">
      <h1 className="app-heading">My To-do List </h1>
      <TaskForm addTask={addTask} taskToEdit={taskToEdit} editTask={editTask} />
      <TaskList
        tasks={tasks}
        onDelete={deleteTask}
        onEdit={setTaskToEdit}
        onToggle={toggleTaskCompletion}
      />
    </div>
  );
}

export default App;
