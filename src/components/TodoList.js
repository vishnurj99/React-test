import React from 'react';
//Importing Components
import Todo from './Todo'
const TodoList = ({toDos}) => {
    return(
        <div className="todo-container">
            <ul className="todo-list">
                {toDos.map(toDo => (
                    <Todo key={toDo.id} text={toDo.text} />
                ))}
            </ul>
        </div>
    );
};

export default TodoList;