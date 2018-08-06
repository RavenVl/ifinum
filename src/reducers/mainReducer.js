import {START_GET_DATA, STOP_GET_DATA, GET_DATA} from "../action/actionType";
import{getData} from "../action/action";

const initStore = {
    loadData: false,

};
const reducer =(store=initStore, action)=>{
    switch (action.type) {
        case START_GET_DATA:
            console.log("Start");
            return {
                ...store,
                loadData:true
            };
        case STOP_GET_DATA:
            console.log("Stop");
            return {
                ...store,
                loadData:false
            };
        case GET_DATA: return getData();
        default: return store;
    }
};
export default reducer;