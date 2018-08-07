import {GET_DATA, START_GET_DATA, STOP_GET_DATA} from './actionType';

export const getData = ()=>{
    return (dispatch)=>{
        dispatch({type:START_GET_DATA});
        fetch('http://localhost:3004/invoices')
            .then(resp=>resp.json())
            .then(data=>{
                dispatch({type:GET_DATA,data:data});
                dispatch({type:STOP_GET_DATA});
            })
            .catch(err=>{
                console.error(err);
                dispatch({type:STOP_GET_DATA});
            });
    }
};