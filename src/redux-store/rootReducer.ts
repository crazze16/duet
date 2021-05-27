import {applyMiddleware, combineReducers, createStore} from "redux";
import MoviePageReducer from "./moviePageReducer/moviePageReducer";
import FavouriteMoviesReducer from "./favouriteMoviesReducer/favouriteMoviesReducer";
import PeoplePageReducer from "./peoplePageReducer/peoplePageReducer";
import HomePageReducer from "./homePageReducer/homePageReducer";
import createSagaMiddleware from "redux-saga";
import {rootWatcher} from "../redux-saga/rootWatcher";
import ChatReducer from "./chatReducer/chatReducer";

type RootReducerType = typeof rootReducer;
export type CombinedStateType = ReturnType<RootReducerType>

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
    MoviePageReducer,
    FavouriteMoviesReducer,
    PeoplePageReducer,
    HomePageReducer,
    ChatReducer
});


//explanation
// type actionsType = ReturnType<SomeType<typeof actions>>;
// type SomeType<T extends {[key: string]: (...args: any[]) => any}> = T extends {[key: string]: infer U} ? U : never
export type InferActionsTypes<T> = T extends { [key: string]: (...args: any[]) => infer U} ? U : never

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootWatcher);
// @ts-ignore
window.store = store;
