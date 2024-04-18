import React, { useReducer } from 'react'
import { addFunction, delFunction } from './actions/squereObject';
import { squeresReducer } from './reducers/squeresReduser'

const ReducerSq = () => {
  const [squeres, dispatchSqueres] = useReducer(squeresReducer, [])
  let id = 0

  return (
    <div>
      <button onClick={()=>dispatchSqueres(addFunction())}>add Squere</button>
      <button onClick={()=>dispatchSqueres(delFunction())}>Delete Squere</button>
      <div>
        {squeres.map((sq)=>(
          <div className='squere' key={id+=1}></div>
        ))
        }
      </div>
    </div>
  )
}

export default ReducerSq