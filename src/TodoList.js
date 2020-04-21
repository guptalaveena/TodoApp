import React from "react";
import Todo from "./Todo";

export default function TodoList({
  todos,
  toggleTodo,
  handleDeleteTodo,
  handleEditTodo,
}) {
  return todos.map((todo) => {
    return (
      <Todo
        key={todo.id}
        toggleTodo={toggleTodo}
        handleDeleteTodo={handleDeleteTodo}
        todo={todo}
        handleEditTodo={handleEditTodo}
      />
    );
  });
}
