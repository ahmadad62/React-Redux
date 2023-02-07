import { combineReducers } from "redux";
import { calcReducer } from "./calc/calcReducer";


const rootReducer = combineReducers({
    calc: calcReducer
})


export default rootReducer