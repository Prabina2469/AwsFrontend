import React, { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import "./index.css"; // your CSS with .app-root .todo-card etc.

export default function App() {
  const [todos, setTodos] = useState([]);

  // Add new todo (client-side)
  const handleAdd = (todo) => {
    const newTodo = { ...todo, id: Date.now() + Math.floor(Math.random() * 1000) };
    setTodos((prev) => [newTodo, ...prev]);
    console.log("Added:", newTodo);
  };

  // Toggle completed
  const handleToggle = (id) => {
    setTodos((prev) => prev.map(t => (t.id === id ? { ...t, completed: !t.completed } : t)));
    console.log("Toggled:", id);
  };

  // Delete
  const handleDelete = (id) => {
    setTodos((prev) => prev.filter(t => t.id !== id));
    console.log("Deleted:", id);
  };

  return (
    <div className="app-root">
      <div className="todo-card" role="main">
        <h1 className="todo-title">My To-Do List</h1>
        <p className="todo-subtitle">Manage your tasks easily</p>

        <TodoForm onAdd={handleAdd} />
        <TodoList todos={todos} onToggle={handleToggle} onDelete={handleDelete} />
      </div>
    </div>
  );
}
