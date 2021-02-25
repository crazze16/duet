import { combineReducers, createStore } from "redux";
import MoviePageReducer from "./MoviePageReducer";
import AuthPageReducer from "./AuthPageReducer"


let reducers = combineReducers({
    MoviePageReducer,
    AuthPageReducer,
});
export let store = createStore(reducers);
window.store = store;
