import React, { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodo] = useState([]);
  return (
    <div className="App">
      <header className="App-header">
        <h1> My TodoApp {inputText}</h1>
      </header>
      <Form
        td={todos}
        std={setTodo}
        inputText={inputText}
        sett={setInputText}
      />
      <TodoList std={setTodo} td={todos} />
    </div>
  );
}

export default App;
