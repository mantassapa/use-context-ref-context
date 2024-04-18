import { ADD_USER, DECENDING, SORT_POST } from "../constants/constants"
import { ACCENDING } from "../constants/constants"

export const userReducer =(state, action)=>{
    let stateCopy = [...state]

    switch(action.type){
        case ADD_USER:
            stateCopy = action.payload
            break
        case ACCENDING:
            stateCopy.sort((a,b)=>{
                if(a.name>b.name){
                    return 1;
                }else if(a.name<b.name){
                    return -1;
                }
                return 0
            })
            break
        case DECENDING:
            stateCopy.sort((a,b)=>(a.name<b.name?1:-1))
            break
        case SORT_POST:
            action.payload==="a-z"
            ?stateCopy.sort((a,b)=>a.address.zipcode>b.address.zipcode?1:-1)
            :stateCopy.sort((a,b)=>a.address.zipcode<b.address.zipcode?1:-1)
            // stateCopy.sort((a,b)=>{
            //     if(action.payload==="a-z"){
            //         if(a.address.zipcode>b.address.zipcode){
            //             return 1;
            //         }else if(a.address.zipcode<b.address.zipcode){
            //             return -1;
            //         }
            //         return 0
            //     }
            //     if(action.payload==="z-a"){
            //         if(a.address.zipcode>b.address.zipcode){
            //             return -1;
            //         }else if(a.address.zipcode<b.address.zipcode){
            //             return 1;
            //         }
            //         return 0
            //     }
            // })
            break
        default:
            break
    }
    return stateCopy
}

