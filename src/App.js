import React, {useState, useEffect} from "react";
import './App.css';

import Form from "./components/form"
import TodoList from "./components/toDoList"

function App() {

  const [inputText, setInputText] = useState("");
  const [toDos, setToDos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filterdToDos, setFilterdToDos] = useState([]);


  useEffect(() => {
    filerHandler();
    console.log('hey');
  }, [toDos, status]);


  const filerHandler = () => {
    switch(status){
      case 'completed':
        setFilterdToDos(toDos.filter((todo) => todo.completed === true));
        break;
        case 'uncompleted':
          setFilterdToDos(toDos.filter((todo) => todo.completed === false));
          break;
        default:
        setFilterdToDos(toDos);
        break;
    }
  }

  return (
    <div className="App">
      <header>
        <h1> To Do List </h1>
      </header>
      <Form toDos={toDos} setToDos={setToDos} setInputText={setInputText} inputText={inputText} setStatus={setStatus} />
      <TodoList setToDos={setToDos} toDos={toDos} filterdToDos={filterdToDos}/>
    </div>
  );
}

export default App;
