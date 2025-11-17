import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ todos = [], onToggle, onDelete }) {
  if (todos.length === 0) {
    return <p className="text-gray-500">No todos yet — add one above.</p>;
  }

  return (
    <ul className="space-y-3">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onToggle={() => onToggle(todo.id)} onDelete={() => onDelete(todo.id)} />
      ))}
    </ul>
  );
}

export default TodoList;
