import { useState } from "react";
import React from "react";
import "../Style/ToDoStyle.css";

export default function ToDoList() {
  const [value, setValue] = useState("");
  const [todolist, setTodolist] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editValue, setEditValue] = useState("");

  function handleDelete(item) {
    const filteredList = todolist.filter((val) => val !== item);
    setTodolist(filteredList);
  }

  function handleEdit(index, item) {
    setEditIndex(index);
    setEditValue(item);
  }

  function handleSave(index) {
    const updatedList = [...todolist];
    updatedList[index] = editValue;
    setTodolist(updatedList);
    setEditIndex(null);
    setEditValue("");
  }

  return (
    <div className="content">
      <div className="container">
        <div className="content-wrapper">
          <h1>ToDo - List</h1>
          <input value={value} onChange={(e) => setValue(e.target.value)} />
          <button
            onClick={() => {
              if (value.trim() !== "") {
                setTodolist([...todolist, value]);
                setValue("");
              }
            }}
          >
            Add
          </button>
          <ul>
            {todolist.map((val, index) => (
              <li key={index}>
                {editIndex === index ? (
                  <input
                    value={editValue}
                    onChange={(e) => setEditValue(e.target.value)}
                  />
                ) : (
                  val
                )}
                {editIndex === index ? (
                  <button onClick={() => handleSave(index)}>Save</button>
                ) : (
                  <>
                    <button onClick={() => handleDelete(val)}>Delete</button>
                    <button onClick={() => handleEdit(index, val)}>Edit</button>
                  </>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
