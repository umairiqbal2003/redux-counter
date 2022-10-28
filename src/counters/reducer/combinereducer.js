import { combineReducers } from "redux";
import { addCounterReducer } from ".";
const combineReducer = combineReducers({
    addCounterReducer: addCounterReducer,
})

export { combineReducer };