import React from'react';
import './TodosLoading.css';

function TodosLoading()
{
    return (
      <ul className="TodoList">
        <li className="SkeletonItem">
          <span className="SkeletonIcon"></span>
          <p className="SkeletonText"></p>
        </li>
      </ul>
    );
}

  export { TodosLoading }