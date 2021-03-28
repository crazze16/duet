import {MovieBySearch} from "../types/types";

const CREATE_FAVOURITE_MOVIES_LIST = 'CREATE_FAVOURITE_MOVIES_LIST';
const SET_FAVOURITE_MOVIES_LIST = 'SET_FAVOURITE_MOVIES_LIST';
const SET_AS_FAVOURITE = 'SET_AS_FAVOURITE';


type InitialStateType = typeof initialState
const initialState = {
    favouritesMovies: {
        listId: null as number | null,
        listData: [] as Array<MovieBySearch>,
        isFavourite: false,
        isCreated: false,
    },
};

 const FavouriteMoviesReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case CREATE_FAVOURITE_MOVIES_LIST:
            return {
                ...state,
                favouritesMovies: {
                    ...state.favouritesMovies,
                    listId: action.listId,
                    isCreated: true
                }
            };
        case SET_FAVOURITE_MOVIES_LIST:
            return {
                ...state,
                favouritesMovies: {
                    ...state.favouritesMovies,
                    listData: action.listData,
                }
            };
        case SET_AS_FAVOURITE:
            return {
                ...state,
                favouritesMovies: {
                    ...state.favouritesMovies,
                    isFavourite: action.isFavourite,
                }
            };
        default: return {...state}
    }
};

type TCreateFavouriteMoviesList = {type: typeof CREATE_FAVOURITE_MOVIES_LIST, listId: number}
export const createFavouriteMoviesList = (listId: number): TCreateFavouriteMoviesList => ({type: CREATE_FAVOURITE_MOVIES_LIST, listId});
type TSetFavouriteMoviesList = {type: typeof SET_FAVOURITE_MOVIES_LIST, listData: Array<MovieBySearch>}
export const setFavouriteMoviesList = (listData: Array<MovieBySearch>): TSetFavouriteMoviesList => ({type: SET_FAVOURITE_MOVIES_LIST, listData});
type TSetFavouriteMovie = {type: typeof SET_AS_FAVOURITE, isFavourite: boolean}
export const setFavouriteMovie = (isFavourite: boolean): TSetFavouriteMovie => ({type: SET_AS_FAVOURITE, isFavourite});

type ActionsType = TCreateFavouriteMoviesList | TSetFavouriteMoviesList | TSetFavouriteMovie

export default FavouriteMoviesReducer