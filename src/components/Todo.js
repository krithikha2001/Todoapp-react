import react from "react";
import { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } from "react-dom";

const Todo = ({ text, td, std, x }) => {
  //events
  const deleteHandler = () => {
    //td.filter iterates throuh eavh
    std(td.filter((el) => el.id !== x.id));
  };
  const doneHandler = () => {
    std(
      td.map((item) => {
        if (item.id === x.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };
  return (
    <div className="todo">
      <li className={`todo-item ${x.completed ? "completed" : ""}`}>{text}</li>
      <button className="complete-btn" onClick={doneHandler}>
        <i className="fas fa-check"></i>
      </button>
      <button className="trash-btn" onClick={deleteHandler}>
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default Todo;
