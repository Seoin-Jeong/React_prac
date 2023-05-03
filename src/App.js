import React, {useState} from "react";
import TodoBoard from "./components/TodoBoard";

export default function App(){
  const [inputValue, setInputValue] = useState("");

  const [todoList, setTodoList] = useState([]);
  
  const addItem = () =>{
    console.log(inputValue);
    setTodoList([...todoList, inputValue]);
  };
  return (
    <div className="App">
      <h1>todoList</h1>
      <input type="text" placeholder="입력" onChange={(e)=> setInputValue(e.target.value)}/>
      <button onClick={addItem}>등록</button>
      <TodoBoard todoList={todoList} />
    </div>
  )
}