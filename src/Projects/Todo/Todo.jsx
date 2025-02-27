import React, {useState } from "react";
import "./Todo.css";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";
import { TodoDate } from "./TodoDate";
import {
  getLocalStorageTodoData,
  setLocalStorageTodoData,
} from "./LocalStorage"
const Todo = () => {

  const [task, setTask] = useState(() => getLocalStorageTodoData());
  const handleFormSubmit = (inputValue) => {
  const{id,content,checked} = inputValue;


  //  to check whether input field is empty or not 
    if (!inputValue) return;

    // to check if data is existing or not
    // if (task.includes(inputValue)) return;
    
    const ifTodoContentMatched = task.find((curTask)=>curTask.content === content);
    if(ifTodoContentMatched) return;

    setTask((prevTask) => [...prevTask, {id,content,checked}]);
  };
//   For Delete a todo item
const handleDeleteTodo=(value)=>{
  const updatedTodos = task.filter((curTask)=>curTask.content !== value);
  setTask(updatedTodos)
}
//   For Delete All a todo items
const handleClearAll=()=>{
  setTask([]);
}

//todo add data to localStorage
setLocalStorageTodoData(task);

const handleCheckdTodo=(content)=>{
 const updatedTask = task.map((curTask)=>{
  if(curTask.content === content){
    return{...curTask,checked:!curTask.checked}
  }
  else{
    return curTask;
  }
 });
 setTask(updatedTask)

}

  return (
    <section className="todo-container">
      <header>
        <h1>Patients List</h1>
        <TodoDate/>
      </header>
      <TodoForm onAddTodo={handleFormSubmit} />
      <section className="myUnOrderedList">
        <ul>
          {task.map((curTask) => {
            return (
             <TodoList 
             key={curTask.id}
             data={curTask.content}
             checked={curTask.checked}
             onHandleDeleteTodo={handleDeleteTodo}
             onHandleCheckdTodo={handleCheckdTodo}
             />
            );
          })}
        </ul>
      </section>
      <section>
      <button className="clear-btn" onClick={handleClearAll}>Clear All</button>
      </section>
    </section>
  );
};

export default Todo;
