import {START_GET_DATA, STOP_GET_DATA, GET_DATA} from "../action/actionType";
import{getData} from "../action/action";

const initStore = {
    data:[{
        "id": "",
        "direction": "",
        "number": 0,
        "date_created": "",
        "date_due": "",
        "date_supply": "",
        "comment": ""
    },],
    loadData: false,

};
const reducer =(store=initStore, action)=>{
    switch (action.type) {
        case START_GET_DATA:
            return {
                ...store,
                loadData:true
            };
        case STOP_GET_DATA:
            return {
                ...store,
                loadData:false
            };
        case GET_DATA: return {
                ...store,
                data: action.data
            };
        default: return store;
    }
};
export default reducer;