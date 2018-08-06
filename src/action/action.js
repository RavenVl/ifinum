import {GET_DATA, START_GET_DATA, STOP_GET_DATA} from "./actionType";

export const getData = ()=>{
    console.log('getData');
    return (dispatch)=>{
        dispatch(START_GET_DATA);
        setTimeout(dispatch(STOP_GET_DATA), 5000);
    }
};