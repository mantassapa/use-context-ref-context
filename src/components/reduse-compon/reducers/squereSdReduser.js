import { ADD_SQUERE } from "../constants/constants"

export const customNrSquereReduser =(state,action)=>{  
    let stateCopy = [...state]

    switch(action.type){
        case ADD_SQUERE:
            for(let i = 0; i < action.payload; i++){
                stateCopy.push(0)
            }
            break
        default:
            break
    }
    console.log(stateCopy);
    return stateCopy
}