import React from "react";
import Todo from "./Todo";

const TodoList = ({ td, std, fstat }) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {
          //write js between this bracket
          fstat.map((x) => (
            <Todo std={std} x={x} td={td} text={x.text} key={x.id} />
          ))
        }
      </ul>
    </div>
  );
};
export default TodoList;
