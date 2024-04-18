import React, { useReducer, useState } from 'react'
import { decrementFunction, incrementFunction } from './actions/actionObject'
import { counterReducer } from './reducers/counterReducer'

const Reduser = () => {
    // const [count, setCount] = useState(0)
    const [counter, dispatchCounter] = useReducer(counterReducer, 0)

  return (
    <div>
        <button onClick={()=>dispatchCounter(incrementFunction())}>increse</button>
        <p>{counter}</p>
        <button onClick={()=>dispatchCounter(decrementFunction())}>decrese</button>
    </div>
  )
}

export default Reduser