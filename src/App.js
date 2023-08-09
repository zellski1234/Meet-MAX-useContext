import React from 'react'
import './App.css';
import ComponentC from './components/ComponentA';
import ComponentA from './components/ComponentA';
import ComponentB from './components/ComponentB';

function App() {
  return (
    <div className="App">
      <ComponentA />
      <ComponentB />
      <ComponentC />
    </div>
  );
}

export default App;
