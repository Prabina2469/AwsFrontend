import React from "react";

function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <li className="todo-item">
  <div className="todo-left">
    <input
      type="checkbox"
      checked={todo.completed}
      onChange={() => onToggle(todo.id)}
      className="todo-checkbox"
    />

    <span className={`todo-text ${todo.completed ? "completed" : ""}`}>
      {todo.title}
    </span>
  </div>

  <button className="delete-btn" onClick={() => onDelete(todo.id)}>
    Delete
  </button>
</li>
  );
}

export default TodoItem;
