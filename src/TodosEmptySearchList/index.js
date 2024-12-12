import React from'react';
import './TodosEmptySearchList.css';

function TodosEmptySearchList()
{
    return (
        <p className='warning-message'>! No tienes To Do's con este criterio de busqueda !</p>
    );
}

  export { TodosEmptySearchList }