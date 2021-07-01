import react from "react";
const Form = ({ sett, td, std, inputText }) => {
  const inputTextHandler = (e) => {
    console.log(e.target.value);
    sett(e.target.value);
  };
  const TodoHandler = (e) => {
    e.preventDefault(); //doesnt refresh page on button click
    //setTodo(e.target.value);
    //append to array
    std([
      ...td,
      { text: inputText, completed: false, id: Math.random() * 1000 },
    ]);
    sett("");
  };
  return (
    <form>
      <input
        onChange={inputTextHandler}
        type="text"
        value={inputText}
        className="todo-input"
      />
      <button onClick={TodoHandler} className="todo-but ton" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
