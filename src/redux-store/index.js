import { combineReducers, createStore } from "redux";
import MoviePageReducer from "./MoviePageReducer";
import AuthPageReducer from "./AuthPageReducer"
import NewsPageReducer from "./NewsReducer"


let reducers = combineReducers({
    MoviePageReducer,
    AuthPageReducer,
    NewsPageReducer
});
export let store = createStore(reducers);
window.store = store;
