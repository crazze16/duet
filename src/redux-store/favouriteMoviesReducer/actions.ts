import {MovieBySearch} from "../../types/shared.type";

export const FMactions = {
    createFavouriteMoviesList: (listId: number) => ({type: 'CREATE_FAVOURITE_MOVIES_LIST', listId} as const),
    setFavouriteMoviesList: (listData: Array<MovieBySearch>) => ({type: 'SET_FAVOURITE_MOVIES_LIST', listData}  as const),
    setFavouriteMovie: (isFavourite: boolean) => ({type: 'SET_AS_FAVOURITE', isFavourite}  as const),
    toggleFetch: (isFetching: boolean) => ({type: 'TOGGLE_FETCH', isFetching}  as const),
    searchFavouriteMovie: (searchedMovie: string) => ({type: 'SEARCH_FAVOURITE', searchedMovie}  as const),
};