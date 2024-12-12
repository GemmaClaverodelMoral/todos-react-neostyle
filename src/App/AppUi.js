import React from 'react';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodoCreateButton } from '../TodoCreateButton';
import { TodosLoading } from '../TodosLoading';
import { TodosEmptyList } from '../TodosEmptyList';
import { TodosEmptySearchList } from '../TodosEmptySearchList';
import { TodosError } from '../TodosError';
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm';
import { TodoContext }  from '../TodoContext';

function AppUi() {
  const {
    loadState,
    errorState,
    totalTodos,
    filteredTodos, 
    toggleItemStatus,
    removeItem,
    openModal,
  } = React.useContext(TodoContext);

    return (
      <>
        <TodoCounter />
        <TodoSearch /> 
        <TodoList >
            {loadState && (
              <>
                <TodosLoading />
                <TodosLoading />
                <TodosLoading />
              </>
            )}  
            {errorState && <TodosError />}
            {(!loadState && totalTodos === 0) && <TodosEmptyList/>}
            {(!loadState && filteredTodos.length === 0 && totalTodos !== 0) && <TodosEmptySearchList/>}
 
            {filteredTodos.map(todo =>(
            <TodoItem 
                key ={todo.text} 
                text={todo.text} 
                completed={todo.completed}
                onToggle={toggleItemStatus}
                onRemove={removeItem}
            />
            ))}
        </TodoList>
        <TodoCreateButton/>
        {openModal && (
          <Modal>
            <TodoForm/>
          </Modal>)}
      </>
    )
} 

export { AppUi }
