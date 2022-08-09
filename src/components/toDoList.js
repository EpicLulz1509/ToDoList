import React, { useState } from "react";

import Todo from "./toDo";

function TodoList({toDos, setToDos, filterdToDos}){
        
    return(
        <div className="todo-container">
            <ul className="todo-list">
                {filterdToDos.map((todo) => (
                    <Todo text={todo.text} key={todo.id} setToDos={setToDos} toDos={toDos} todo={todo} />
                ))}
            </ul>
        </div>  
    )
}

export default TodoList;