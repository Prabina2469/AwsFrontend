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
    <div className="min-h-screen flex justify-center items-center bg-gray-100 p-6">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-xl p-6">
        <h1 className="text-2xl font-semibold text-center mb-4">
          My Todo App
        </h1>

        <TodoForm onAdd={handleAdd} />
        <TodoList todos={todos} onToggle={handleToggle} onDelete={handleDelete} />
      </div>
    </div>
  );
}

export default App;
