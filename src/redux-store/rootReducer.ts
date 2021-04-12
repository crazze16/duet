import { combineReducers, createStore } from "redux";
import MoviePageReducer from "./moviePageReducer/moviePageReducer";
import FavouriteMoviesReducer from "./favouriteMoviesReducer/favouriteMoviesReducer";

type RootReducerType = typeof rootReducer;
export type CombinedStateType = ReturnType<RootReducerType>


const rootReducer = combineReducers({
    MoviePageReducer,
    FavouriteMoviesReducer
});

//explanation
// type actionsType = ReturnType<SomeType<typeof actions>>;
// type SomeType<T extends {[key: string]: (...args: any[]) => any}> = T extends {[key: string]: infer U} ? U : never
export type InferActionsTypes<T> = T extends { [key: string]: (...args: any[]) => infer U} ? U : never

export const store = createStore(rootReducer);
// @ts-ignore
window.store = store;
