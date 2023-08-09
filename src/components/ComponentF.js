import React, { useContext } from 'react'
import { CountContext } from '../App'

function ComponentF() {
  const CountContext = useContext(CountContext)
  return (
    <div>
        ComponentF
        <button onClick={()=> CountContext.CountDispatch('increment')}>Increment</button>
        <button onClick={()=> CountContext.CountDispatch('decrement')}>Decrement</button>
        <button onClick={()=> CountContext.CountDispatch('reset')}>Reset</button>
    </div>
  )
}

export default ComponentF