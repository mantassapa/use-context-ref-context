import { ACCENDING, ADD_SQUERE, ADD_USER, DECENDING, DECREMENT, INCREMENT, SORT_POST } from "../constants/constants"

export const incrementFunction=()=>{
    return{
        type: INCREMENT,
    }
}
export const decrementFunction=()=>{
    return{
        type: DECREMENT,
    }
}

export const addSquere = (inputValue)=>{
    return{
        type:ADD_SQUERE,
        payload: inputValue,
    }
}

export const addUser = (userList)=>{
    return{
        type:ADD_USER,
        payload: userList
    }
}
export const accendUser = ()=>{
    return{
        type:ACCENDING
    }
}
export const decendUser = ()=>{
    return{
        type:DECENDING
    }
}
export const sortbypost = (type)=>{
    return{
        type:SORT_POST,
        payload:type
    }
}