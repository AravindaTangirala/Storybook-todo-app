import React, { useState } from "react";
import "./App.css";
import TodoContainer from "./TodoContainer";

function App() {
  const [input, setInput] = useState();
  const [todo, setTodo] = useState([]);
  const addTodo = (e) => {
    e.preventDefault();
    setTodo([...todo, input]);
    setInput("");
  };
  return (
    <div className="App">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit" onClick={addTodo}>
        addTodo
      </button>
      <TodoContainer todos={todo} />
    </div>
  );
}

export default App;
