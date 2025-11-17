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
    <form onSubmit={handleSubmit} className="flex gap-3 mb-4">
      <input
        type="text"
        placeholder="Add new todo..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="flex-1 border rounded-lg px-3 py-2 focus:ring focus:ring-blue-200"
      />

      <button
        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        type="submit"
      >
        Add
      </button>
    </form>
  );
}

export default TodoForm;
