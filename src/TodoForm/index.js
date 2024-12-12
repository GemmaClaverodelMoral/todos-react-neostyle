import './TodoForm.css';
import { TodoContext } from '../TodoContext';
import React from'react';

function TodoForm( ) {
  const {
    setOpenModal,
    addItem,
  }= React.useContext(TodoContext);
  const onSubmit = (event) => {
    event.preventDefault();
    setOpenModal(false);
    addItem(newTodoValue);
  }
  const onCancel = (event) => {
    event.preventDefault();
    setOpenModal(false);
  }
  const [newTodoValue, setNewTodoValue] = React.useState('');
  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  }
return (
    <form onSubmit={(onSubmit)}
      className='Modal-content'>
      <label className="todoform-title">
        Agrega Descripción de Nuevo ToDo
      </label>
      <textarea 
        placeholder="Escribe en este espacio la descripción de tu nuevo To Do"
        value={newTodoValue}
        onChange={(onChange)}>
      </textarea>
      <div className='todoform-btn-area'>
        <button className='TodoForm-button TodoForm-button--cancel'
          type='button'
          onClick= {(onCancel)}>
          Cancelar
        </button> 
        <button className='TodoForm-button TodoForm-button--add'
          type='submit'>
                Agregar a mi lista
        </button> 
      </div>  
    </form>
    );
}

export { TodoForm}

