import React from 'react'
import './App.css';
import Focusinput from './components/Focusinput';
import ClassTimer from './components/ClassTimer';
import HookTimer from './components/HookTimer';


function App() {
  return (
    <div className="App">
      <Focusinput />
      <ClassTimer />
      <HookTimer />
    </div>
  );
}

export default App;
