import React, { useContext } from 'react'
import { CountContext } from '../App'

function ComponentA() {
  const CountContext = useContext(CountContext)
  return (
    <div>
        ComponentA
        <button onClick={()=> CountContext.CountDispatch('increment')}>Increment</button>
        <button onClick={()=> CountContext.CountDispatch('decrement')}>Decrement</button>
        <button onClick={()=> CountContext.CountDispatch('reset')}>Reset</button>
    </div>
  )
}

export default ComponentA