import React from 'react'
import {SimilarMoviesItemSC} from "./styles";
import {movie} from "../../../VMoviePageApi";

export const VSimilarMovieItem = (props) => {
    const {poster, movieId, setSimilarMovieData, setCurrentMovie} = props;

    const src = `https://image.tmdb.org/t/p/w300/${poster}`;

    let func = () => {
        movie.getSelectedFilm(movieId)
            .then(response => setCurrentMovie(response.data))
            .then(() => {
                movie.getSimilarMovies(movieId)
                    .then(similar => setSimilarMovieData((similar.data.results).splice(0,8)))
            })
};

    return (
        <SimilarMoviesItemSC to={`${movieId}`} poster={src} onClick={() => func()}>
        </SimilarMoviesItemSC>
    )
};
