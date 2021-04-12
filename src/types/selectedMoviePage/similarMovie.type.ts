import {MovieBySearch, SelectedMovieType} from "../shared.type";

export type PropsType = {
    poster: string
    movieId: number
    setSimilarMovieData: (similarMovieData: Array<MovieBySearch>) => void
    setCurrentMovie: (selectedMovie: SelectedMovieType) => void
}