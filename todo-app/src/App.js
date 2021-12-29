import React, { useEffect, useState, useCallback } from "react";
import ReactDOM from "react-dom";
import { Button } from "antd";
import { v4 as uuidv4 } from "uuid";
import "antd/dist/antd.css";
import "./App.css";

function App() {
  function ChangingInput() {}

  const [val, setVal] = useState("");
  const [listItems, setListItems] = useState([]);
  const userInput = (e) => {
    setVal(e.target.value);
  };

  const resetUserInput = () => {
    const id = uuidv4();
    setListItems([...listItems, { id: id, text: val }]);
    setVal("");
  };

  const deleteTodo = (id) => {
    setListItems(listItems.filter((item) => item.id !== id));
  };

  return (
    <div>
      <h1>React ToDo App</h1>
      <input className="input" value={val} onChange={userInput}></input>
      <Button
        type="primary"
        onClick={() => {
          resetUserInput();
        }}
      >
        Submit Task
      </Button>
      <ul>
        {listItems.map((li, key) => (
          <li {...{ key }}>
            {li.text}
            <Button type="primary" onClick={() => deleteTodo(li.id)}>
              Delete
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
