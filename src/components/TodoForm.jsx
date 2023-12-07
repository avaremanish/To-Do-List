import { useState } from "react"


export const TodoForm = () => {

  const [value, setValue] = useState("") 
  return (
    <form className="TodoForm" onSubmit={(e) => { 
      e.preventDefault();
      console.log(value);
    }}>
      
     <input className="todo-input" placeholder="what id the task today?" onClick={(e) => setValue(e.target.value)}/>
     <button type="submit" className="todo-btn"> Add Task</button>
      
      </form>
  )
}
