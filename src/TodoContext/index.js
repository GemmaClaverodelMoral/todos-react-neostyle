import React from 'react';
import { useLocalStorage } from './useLocalStorage.js';

const TodoContext = React.createContext();

function TodoProvider ({ children }) {
    const {
        item: todos, 
        saveItem: saveTodos,
        loadState,
        errorState,
    } = useLocalStorage('TODOS_V1', []) // mi hook personal
      
    const [searchValue, setSearchValue] = React.useState('');
    const [openModal, setOpenModal] = React.useState(false);

    const completedTodos = todos.filter(todo => !!todo.completed).length; 
    const totalTodos = todos.length;

    const filteredTodos = todos.filter(
    todo => {
        const todoText = todo.text.toLowerCase();
        const filterText = searchValue.toLowerCase();
        return todoText.includes(filterText)
    }
    );

    const toggleItemStatus = (text) => {
    const updatedTodos = todos.map((todo) =>
        todo.text === text ? { ...todo, completed: !todo.completed } : todo
    );
    saveTodos(updatedTodos);
    };
    
    const addItem = (text) => {
    const updatedTodos = [...todos, { text, completed: false }];
    saveTodos(updatedTodos);
    };

    const removeItem = (text) => {
    const updatedTodos = todos.filter((todo) => todo.text !== text);
    saveTodos(updatedTodos);
    };

    return (
        <TodoContext.Provider value={{
            loadState,
            errorState,
            completedTodos,
            totalTodos,
            searchValue,
            setSearchValue,
            filteredTodos, 
            toggleItemStatus,
            addItem,
            removeItem,
            openModal,
            setOpenModal,
        }}>
            { children }
        </TodoContext.Provider>
    )
}

export { TodoContext, TodoProvider };