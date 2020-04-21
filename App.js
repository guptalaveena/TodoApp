import React, { useState, useRef, useEffect } from "react";
import "./style.css";

import TodoList from "./TodoList";
import uuidv4 from "uuid/v4";
const LOCAL_STORAGE_KEY = "todoApp.todos";
export default function App() {
  const [todos, setTodos] = useState([]);
  const todoNameRef = useRef();

  function toggleTodo(id) {
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id === id);
    todo.complete = !todo.complete;
    setTodos(newTodos);
  }

  function handleDeleteTodo(id) {
    const tod_o = todos.filter((todo) => todo.id !== id);
    setTodos(tod_o);
  }
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedTodos) setTodos(storedTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);
  function handleAddTodo(e) {
    const name = todoNameRef.current.value;
    if (name === "") return;

    setTodos((prevTodos) => {
      return [...prevTodos, { id: uuidv4(), name: name, complete: false }];
    });
    todoNameRef.current.value = null;
  }

  function handleClearTodos() {
    const newTodos = [];
    setTodos(newTodos);
  }

  function handleEditTodo(editedTodo, id) {
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id === id);
    todo.name = editedTodo;
    setTodos(newTodos);
  }

  return (
    <>
      <TodoList
        todos={todos}
        toggleTodo={toggleTodo}
        handleDeleteTodo={handleDeleteTodo}
        handleEditTodo={handleEditTodo}
      />

      <input type='text' ref={todoNameRef} className='input-style' />
      <br />
      <button onClick={handleAddTodo} className='btn-style'>
        Add
      </button>

      <button onClick={handleClearTodos} className='btn2-style'>
        Clear Complete
      </button>
      <div className='left-todos'>
        {" "}
        {todos.filter((todo) => !todo.complete).length} left to do
      </div>
    </>
  );
}
