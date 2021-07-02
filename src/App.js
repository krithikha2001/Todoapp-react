import React, { useState, useEffect } from "react";
import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodo] = useState([]);
  const [status, setStatus] = useState("all");
  const [fstat, setFstat] = useState([]);
  //runs only once when rendered and rerun by adding a value if u want...here submit
  useEffect(() => {
    //   console.log("sds");
    filterHandler();
  }, [todos, status]);
  //function
  const filterHandler = () => {
    //status variable name fixed
    switch (status) {
      case "completed":
        setFstat(todos.filter((x) => x.completed === true));
        break;
      case "uncompleted":
        setFstat(todos.filter((x) => x.completed === false));
        break;
      default:
        setFstat(todos);
        break;
    }
  };
  //filter happens when item added and in filter option wise too
  return (
    <div className="App">
      <header className="App-header">
        <h1> My TodoApp</h1>
      </header>
      <Form
        td={todos}
        std={setTodo}
        inputText={inputText}
        sett={setInputText}
        stat={setStatus}
      />
      <TodoList fstat={fstat} std={setTodo} td={todos} />
    </div>
  );
}

export default App;
