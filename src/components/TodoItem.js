import React from "react";

function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <li className="todo-item">
      <div
        className="todo-left"
        onClick={() =>
          onToggle(todo.id, { ...todo, completed: !todo.completed })
        }
      >
        <div
          className={`todo-checkbox ${todo.completed ? "checked" : ""}`}
        ></div>

        <span className={`todo-text ${todo.completed ? "done" : ""}`}>
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
