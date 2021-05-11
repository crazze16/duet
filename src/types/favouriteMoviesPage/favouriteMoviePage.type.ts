import {FavouriteMoviesType} from "../shared.type";

export type PropsType = {
    favouritesMovies: FavouriteMoviesType
    removeFromFavourite: (flag: boolean, movieId: number) => void
    searchMovie: (searchedMovie: string) => void
    searchedMovie: string
}

export type QueryParamsType = { filter?: string, search?: string };