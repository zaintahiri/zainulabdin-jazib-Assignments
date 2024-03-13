import { Alert } from 'react-native';
import {CONST_INCREMENT,CONST_DECREMENT} from './constants'
const initialState=1
export const reducer=(state=initialState,action)=>{
    switch(action.type){

        case CONST_INCREMENT:{
            //Alert.alert("data : "+action.data)
            //state=state+action.data
            return state+1;

        }
        
        case CONST_DECREMENT:{
            //state=state-action.data
            return state-1;
        }
        default:{
           return initialState;
        }

    }

}