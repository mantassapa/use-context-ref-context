import { ADDSQUERES, DELSQUERES } from "../constants/squeres"


export const addFunction = ()=>{
    return{
        type:ADDSQUERES
    }
}
export const delFunction = ()=>{
    return{
        type:DELSQUERES
    }
}