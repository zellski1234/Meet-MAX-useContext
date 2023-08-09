import React, { useReducer } from 'react'
import './App.css';
import ComponentC from './components/ComponentA';
import ComponentA from './components/ComponentA';
import ComponentB from './components/ComponentB';

const intialState = 0
const reducer = (state, action) =>{
    switch (action) {
        case 'increment':
            return state + 1            
        case 'decrement':
            return state - 1            
        case 'reset':
            return intialState         
        default:
            return state
    }
    

}


function App() {
  const [count, dispatch] = useReducer(reducer, intialState)
  return (
    <div className="App">
      Count: {count}
      <ComponentA />
      <ComponentB />
      <ComponentC />
    </div>
  );
}

export default App;
