import { ADDSQUERES, DELSQUERES } from "../constants/squeres"

export const squeresReducer =(state, action)=>{
    let stateCopy = [...state]

    switch(action.type){
        case ADDSQUERES:
            stateCopy.push("1")
            break
        case DELSQUERES:
            stateCopy.pop()
            break
        default:
            break

    }
    return stateCopy
}