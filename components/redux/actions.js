import {CONST_INCREMENT,CONST_DECREMENT} from './constants'
export function incrementAction(counter){
    return{
        type:CONST_INCREMENT,
        data:counter
    }
}

export function decrementAction(counter){
    return{
        type:CONST_DECREMENT,
        data:counter
    }
}