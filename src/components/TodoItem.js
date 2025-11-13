import React from "react";

function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <li
      className={`todo-item ${todo.completed ? "completed" : ""}`}
      onClick={() =>
        onToggle(todo.id, { ...todo, completed: !todo.completed })
      }
    >
      <span>{todo.title}</span>
      <button className="delete-btn" onClick={(e) => {
        e.stopPropagation();
        onDelete(todo.id);
      }}>
        Delete
      </button>
    </li>
  );
}

export default TodoItem;
