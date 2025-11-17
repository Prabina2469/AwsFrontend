import React, { useState } from "react";

function TodoForm({ onAdd, subtitle }) {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = title.trim();
    if (!trimmed) return;
    onAdd({ title: trimmed, completed: false });
    setTitle("");
  };

  return (
   <form onSubmit={handleSubmit} className="todo-form">
  <input
    className="todo-input"
    type="text"
    placeholder="Enter a task..."
    value={title}
    onChange={(e) => setTitle(e.target.value)}
  />

  <button className="add-circle">Add</button>
</form>
  );
}

export default TodoForm;
