import React from 'react'
import { MdCheck, MdDeleteForever } from "react-icons/md";

export const TodoList = ({data,onHandleDeleteTodo,onHandleCheckdTodo,checked}) => {
  return (
    <li className="todo-item">
      <span className={checked ? "checkList" : "notCheckList"}>{data}</span>
      <button className="check-btn"
      onClick={()=>onHandleCheckdTodo(data)}
      >
        <MdCheck />
      </button>
      <button className="delete-btn" onClick={() => onHandleDeleteTodo(data)}>
        <MdDeleteForever />
      </button>
    </li>
  )
}
