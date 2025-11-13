import React from "react";

function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <li>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id, { ...todo, completed: !todo.completed })}
      />
      {todo.title}
      <button onClick={() => onDelete(todo.id)}>Delete</button>
    </li>
  );
}

export default TodoItem;
