import React from 'react'
import {SimilarMoviesItemSC} from "./styles";
import {movie} from "../../../VMoviePageApi";

type PropsType = {
    poster: string
    movieId: number
    setSimilarMovieData: (data: Array<object>) => void
    setCurrentMovie: (data: Array<object>) => void
}

export const VSimilarMovieItem: React.FC<PropsType> = (props) => {
    const {poster, movieId, setSimilarMovieData, setCurrentMovie} = props;

    const src: string = `https://image.tmdb.org/t/p/w300/${poster}`;

    let func = () => {
        movie.getSelectedFilm(movieId)
            .then((response: any) => setCurrentMovie(response))
            .then(() => {
                movie.getSimilarMovies(movieId)
                    .then((similar: any) => setSimilarMovieData((similar.results).splice(0,8)))
            })
};
    return (
        <SimilarMoviesItemSC to={`${movieId}`} poster={src} onClick={() => func()}/>
    )
};
