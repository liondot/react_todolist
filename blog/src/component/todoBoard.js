import React from "react";
import TodoItem from "./TodoItem";

function TodoBoard(props) {
console.log("todoboard", props.todoList)
  return (
    <div className="todoBoard_con">
      <h1>Todo List</h1>
      {props.todoList.map((item) => <TodoItem item={item}/>)}
    </div>
  )
}

export default TodoBoard