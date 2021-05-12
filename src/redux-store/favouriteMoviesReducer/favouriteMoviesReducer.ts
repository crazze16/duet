import {MovieBySearch} from "../../types/shared.type";
import { InferActionsTypes} from "../rootReducer";
import {FMactions} from "./actions";

type InitialStateType = typeof initialState
const initialState = {
    favouritesMovies: {
        listId: null as number | null,
        listData: [] as Array<MovieBySearch>,
        isFavourite: false,
        isCreated: false,
    },
    isFetching: false,
    searchedMovie: ''
};

 const FavouriteMoviesReducer = (state = initialState, action: InferActionsTypes<typeof FMactions>): InitialStateType => {
    switch (action.type) {
        case 'CREATE_FAVOURITE_MOVIES_LIST':
            return {
                ...state,
                favouritesMovies: {
                    ...state.favouritesMovies,
                    listId: action.listId,
                    isCreated: true
                }
            };
        case 'SET_FAVOURITE_MOVIES_LIST':
            return {
                ...state,
                favouritesMovies: {
                    ...state.favouritesMovies,
                    listData: action.listData,
                }
            };
        case 'SET_AS_FAVOURITE':
            return {
                ...state,
                favouritesMovies: {
                    ...state.favouritesMovies,
                    isFavourite: action.isFavourite,
                }
            };
        case 'TOGGLE_FETCH':
            return {
                ...state,
                isFetching: action.isFetching
            };
        case 'SEARCH_FAVOURITE':
            return {
                ...state,
                searchedMovie: action.searchedMovie
            };
        default: return {...state}
    }
};





export default FavouriteMoviesReducer