
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { combineReducer } from "./reducer/combinereducer";


const store = createStore(combineReducer, {}, applyMiddleware(thunk));

export default store;