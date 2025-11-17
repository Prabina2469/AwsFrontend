import React from "react";

function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <li className="flex items-center justify-between bg-gray-50 p-3 rounded-lg shadow-sm">
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() =>
            onToggle(todo.id, { ...todo, completed: !todo.completed })
          }
          className="w-5 h-5"
        />

        <span
          className={`${
            todo.completed ? "line-through text-gray-400" : ""
          } text-lg`}
        >
          {todo.title}
        </span>
      </div>

      <button
        className="text-red-600 hover:text-red-800 transition"
        onClick={() => onDelete(todo.id)}
      >
        Delete
      </button>
    </li>
  );
}

export default TodoItem;
