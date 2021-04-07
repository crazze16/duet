import { combineReducers, createStore } from "redux";
import MoviePageReducer from "./MoviePageReducer";
import AuthPageReducer from "./AuthPageReducer"
import FavouriteMoviesReducer from "./FavouriteMoviesReducer";

type RootReducerType = typeof rootReducer;
export type CombinedStateType = ReturnType<RootReducerType>


const rootReducer = combineReducers({
    MoviePageReducer,
    AuthPageReducer,
    FavouriteMoviesReducer
});
export type InferActionsTypes<T> = T extends { [key: string]: (...args: any[]) => infer U} ? U : never

export const store = createStore(rootReducer);
// @ts-ignore
window.store = store;
