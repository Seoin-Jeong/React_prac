import React from "react";
import TodoItem from "./TodoItem";

function TodoBoard(props){
    
    return (
        <div>
            <h2>TodoBoard</h2>
            {props.todoList.map((item)=>(<TodoItem key="{item}" items={item}/>
            ))}
        </div>
    );
}
export default TodoBoard;