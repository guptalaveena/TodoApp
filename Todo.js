import React from "react";

export default function Todo({
  todo,
  toggleTodo,
  handleDeleteTodo,
  handleEditTodo,
}) {
  function handleTodoClick() {
    toggleTodo(todo.id);
  }

  function handleDeleteClick() {
    handleDeleteTodo(todo.id);
  }

  function handleEditClick(e) {
    handleEditTodo(e.target.value, todo.id);
  }
  return (
    <>
      <input
        type='checkbox'
        checked={todo.complete}
        onChange={handleTodoClick}
        className='checkbox-style'
      />
      <input
        type='text'
        id={todo.id}
        value={todo.name}
        onChange={handleEditClick}
        className='todo-style'
      />
      <button onClick={handleDeleteClick} className='delete-style'>
        Delete
      </button>
      {/* <button onClick={handleEditClick}>Edit</button> */}
      <br />
    </>
  );
}
