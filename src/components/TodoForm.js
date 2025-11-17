import React, { useState } from "react";

function TodoForm({ onAdd }) {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    onAdd({ title, completed: false });
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        type="text"
        placeholder="Add new todo..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="todo-input"
      />

      <button className="add-btn" type="submit">
        Add
      </button>
    </form>
  );
}

export default TodoForm;
