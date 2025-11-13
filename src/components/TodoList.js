import React from "react";

const TodoList = ({ todos, updateTodo, deleteTodo }) => {
  return (
    <div className="todo-list">
      {todos.map((todo) => (
        <div key={todo.id} className="todo-item">
          <span>{todo.text}</span>

          <button className="edit-btn" onClick={() => updateTodo(todo.id, { text: prompt("Edit:", todo.text) })}>
            Edit
          </button>

          <button className="delete-btn" onClick={() => deleteTodo(todo.id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
