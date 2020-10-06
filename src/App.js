import React, {useState} from 'react';
import './App.css';
//Importing Components
import Form from './components/Form' 
import TodoList from './components/TodoList'

function App() {
  const [inputText, setInputText] = useState('');
  const [toDos, setToDos] = useState([]);
  return (
    <div className="App">
      <header>
        <h1>To Do List</h1>
      </header>
      <Form toDos={toDos} setToDos={setToDos} inputText={inputText} setInputText={setInputText} />
      <TodoList toDos={toDos} />
    </div>
  );
}

export default App;
