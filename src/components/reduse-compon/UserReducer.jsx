import axios from 'axios'
import React, { useEffect, useReducer } from 'react'
import { accendUser, addUser, decendUser, sortbypost } from './actions/actionObject'
import { userReducer } from './reducers/userReducer'


const UserReducer = () => {
    const [users, dispatchUsers] = useReducer(userReducer, [])
    const li = []

    useEffect(()=>{
        axios
            .get("https://jsonplaceholder.typicode.com/users")
            .then((res)=>
            dispatchUsers(addUser(res.data)
            ))
    },[])
  return (
    <div>
        <button onClick={()=>dispatchUsers(accendUser())}>Accending</button>
        <button onClick={()=>dispatchUsers(decendUser())}>Decending</button>
        {/* 3.3 */}
        <button onClick={()=>dispatchUsers(sortbypost("a-z"))}>sort post a-z</button>
        <button onClick={()=>dispatchUsers(sortbypost("z-a"))}>sort post z-a</button>
        {
            users.map((user)=>(
                <div key={user.id}>
                    <p>
                        <span>{user.id}</span>{user.name}:{user.address.zipcode}
                    </p>
                </div>
            ))
        }
    </div>
  )
}

export default UserReducer