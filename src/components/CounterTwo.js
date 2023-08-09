import React, { useReducer } from 'react'
import './CounterTwo.css'; // Import your CSS file


const intialState = {
    firstCounter: 0,
    secondCounter: 10
}
const reducer = (state, action) =>{
    switch (action.type) {
        case 'increment':
            return { ...state, firstCounter: state.firstCounter + action.value}            
        case 'decrement':
            return { ...state, firstCounter: state.firstCounter - action.value}                
        case 'increment2':
            return {...state, secondCounter: state.secondCounter + action.value}            
        case 'decrement2':
            return {...state, secondCounter: state.secondCounter - action.value}                
        case 'reset':
            return intialState         
        default:
            return state
    }
    

}

function CounterTwo() {
    const [count, dispatch] = useReducer(reducer, intialState)
  return (
    <div className="counter-container">
        <div className="counter">
            <div className="counter-label"> First Counter: </div>
            <div className='counter-value'> {count.firstCounter} </div>
           
            <button className="increment-button" onClick={()=> dispatch({type: 'increment', value: 1 })}>Increment</button>
            <button className="decrement-button" onClick={()=> dispatch({type: 'decrement', value: 1})}>Decrement</button>
            <button className="increment-button" onClick={()=> dispatch({type: 'increment', value: 5 })}>Increment - 5</button>
            <button className="decrement-button" onClick={()=> dispatch({type: 'decrement', value: 5})}>Decrement- 5</button>
        <div>
            <div className="counter-label"> Second Counter: </div>
            <div className="counter-value"> {count.secondCounter} </div>

            <button className="increment-button" onClick={()=> dispatch({type: 'increment2', value: 1 })}>Increment Counter 2</button>
            <button className="decrement-button" onClick={()=> dispatch({type: 'decrement2', value: 1})}>Decrement Counter 2</button>
        </div>
        </div>



      
        <button className="reset-button"onClick={()=> dispatch({type: 'reset'})}>Reset</button>
    </div>
  )
}

export default CounterTwo