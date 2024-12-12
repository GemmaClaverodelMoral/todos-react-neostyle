import './TodoCounter.css';
import { TodoContext } from '../TodoContext';
import React from'react';

function TodoCounter( 
) {
  const 
  {
    completedTodos,
    totalTodos,
    loadState,
  } = React.useContext(TodoContext);
    return (
      <h1 className="TodoCounter">
        {loadState ? 
         (<span>⏳ Cargando tus To Do's...</span>) 
         : 
         (completedTodos === totalTodos ? 
          (<span>🎈¡Completaste todos tus To Do's! 🎉</span>) 
          : 
          (<> Completados <span>{completedTodos}</span> de <span>{totalTodos}</span></>))
      }
      </h1>
    );
}

export { TodoCounter }