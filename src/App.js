import React, { useEffect, useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { getTodos, addTodo, updateTodo, deleteTodo } from "./api";

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

  const handleAdd = async (newTodo) => {
    await addTodo(newTodo);
    loadTodos();
  };

  const handleToggle = async (id, updatedTodo) => {
    await updateTodo(id, updatedTodo);
    loadTodos();
  };

  const handleDelete = async (id) => {
    await deleteTodo(id);
    loadTodos();
  };

  return (
    <div className="App">
      <h1>My Todo App</h1>
      <TodoForm onAdd={handleAdd} />
      <TodoList todos={todos} onToggle={handleToggle} onDelete={handleDelete} />
    </div>
  );
}

export default App;
