import React, { useState } from "react";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const handleAddTodo = () => {
    if (newTodo) {
      setTodos([...todos, newTodo]);
      setNewTodo("");
    }
  };

  const handleDeleteTodo = (index) => {
    setTodos(todos.filter((todo, i) => i !== index));
  };

  return (
    <div className="container todo_list">
      <div className="todo_input">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Please input a Task"
        />
        <button onClick={handleAddTodo} className="btn btn-danger">
          Add Todo
        </button>
      </div>
      <div className="todo_list_result">
        <h1>Todo List</h1>
        <ul>
          {todos.map((todo, index) => (
            <li
              key={index}
              style={{ listStyleType: "none", display: "flex", gap: "10px" }}
            >
              {todo}{" "}
              <button
                onClick={() => handleDeleteTodo(index)}
                className="btn btn-danger"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TodoList;
