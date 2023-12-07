import { useState } from "react"
import { TodoForm } from "./TodoForm"
import (v4 as uuidv4) from "uuid";


export const TodoWrapper = () => {

  const[todos, setTodos] = useState("");
  const addTodo = todo => {
    setTodos([...todos, {id: uudiv4(), task: todo, complered: false , isEditing : false}])
  }
  return (
    <div className="TodoWrapper">
      <TodoForm/>
    </div>
  )
}
