import React, { useEffect, useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { getTodos, addTodo, updateTodo, deleteTodo }

 from "./api";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getTodos().then((res) => setTodos(res.data));
  }, []);

  const handleAddTodo = async (todo) => {
    const res = await addTodo(todo);
    setTodos([...todos, res.data]);
  };

  const handleUpdateTodo = async (id, updated) => {
    const res = await updateTodo(id, updated);
    setTodos(todos.map((t) => (t.id === id ? res.data : t)));
  };

  const handleDeleteTodo = async (id) => {
    await deleteTodo(id);
    setTodos(todos.filter((t) => t.id !== id));
  };

  return (
    <div className="container">
      <h1>My Stylish Todo App ✨</h1>
      <TodoForm addTodo={handleAddTodo} />
      <TodoList
        todos={todos}
        updateTodo={handleUpdateTodo}
        deleteTodo={handleDeleteTodo}
      />
    </div>
  );
}

export default App;
