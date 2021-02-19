import {combineReducers, createStore} from "redux";
import MoviePageReducer from "./MoviePageReducer";


let reducers = combineReducers({
    MoviePageReducer
});
export let store = createStore(reducers);
window.store = store;
