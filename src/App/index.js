import React from 'react';
import './App.css';
import { AppUi } from './AppUi'; // Fix the filename casing
import { TodoProvider } from '../TodoContext';


function App() {

  return (
    <TodoProvider>
       < AppUi className='App'/>
    </TodoProvider>
  );
}

export default App;

