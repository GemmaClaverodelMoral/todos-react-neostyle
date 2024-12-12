import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoCreateButton.css';

function TodoCreateButton() {
    const { setOpenModal } = React.useContext(TodoContext);

    return (
        <button 
            className = 'TodoCreateButton'
            onClick={() => setOpenModal(true)}>+
        </button>
    );
  }

  export { TodoCreateButton }