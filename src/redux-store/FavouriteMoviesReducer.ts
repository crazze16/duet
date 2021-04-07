import {MovieBySearch} from "../types/types";
import { InferActionsTypes} from "./index";

type InitialStateType = typeof initialState
const initialState = {
    favouritesMovies: {
        listId: null as number | null,
        listData: [] as Array<MovieBySearch>,
        isFavourite: false,
        isCreated: false,
    },
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
        default: return {...state}
    }
};

// type actionsType = ReturnType<SomeType<typeof actions>>;
// type SomeType<T extends {[key: string]: (...args: any[]) => any}> = T extends {[key: string]: infer U} ? U : never

export const FMactions = {
    createFavouriteMoviesList: (listId: number) => ({type: 'CREATE_FAVOURITE_MOVIES_LIST', listId} as const),
    setFavouriteMoviesList: (listData: Array<MovieBySearch>) => ({type: 'SET_FAVOURITE_MOVIES_LIST', listData}  as const),
    setFavouriteMovie: (isFavourite: boolean) => ({type: 'SET_AS_FAVOURITE', isFavourite}  as const),
};

export default FavouriteMoviesReducer