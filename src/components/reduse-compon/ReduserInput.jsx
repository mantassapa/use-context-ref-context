import React, { useReducer, useState } from 'react'
import { addSquere } from './actions/actionObject'
import { customNrSquereReduser } from './reducers/squereSdReduser'

const ReduserInput = () => {
    const [number, setNumber] = useState(0)
    const [squeres, dispatchSqueres] = useReducer(customNrSquereReduser,[])
  return (
    <div>
        <input type="text" value={number} onChange={(e)=>setNumber(e.target.value)} />
        <button onClick={()=>dispatchSqueres(addSquere(number))}>addSquere</button>
        {console.log(squeres)}
        {squeres.map((sq)=>(
            <div className='squere'></div>
        ))}
    </div>
  )
}

export default ReduserInput