import React, { useEffect, useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { getTodos, addTodo, updateTodo, deleteTodo } from "./api";
import "./index.css";

function App() {
  const [todos, setTodos] = useState([]);

  const loadTodos = async () => {
    try {
      const res = await getTodos();
      setTodos(res.data);
    } catch (err) {
      console.error("Error loading todos:", err);
    }
  };

  useEffect(() => {
    loadTodos();
  }, []);

  const handleAdd = async (todo) => {
    await addTodo(todo);
    loadTodos();
  };

  const handleToggle = async (id, updated) => {
    await updateTodo(id, updated);
    loadTodos();
  };

  const handleDelete = async (id) => {
    await deleteTodo(id);
    loadTodos();
  };

  return (
    <div className="app-center">
      <div className="todo-card">
        <h1 className="todo-title">My Todo App</h1>
        <p className="todo-sub">Manage your tasks easily</p>

        <TodoForm onAdd={handleAdd} />
        <TodoList todos={todos} onToggle={handleToggle} onDelete={handleDelete} />
      </div>
    </div>
  );
}

export default App;
