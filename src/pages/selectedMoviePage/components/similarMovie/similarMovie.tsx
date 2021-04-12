import React from 'react'
import {movie} from "api";
import {PropsType} from 'types/selectedMoviePage/similarMovie.type';
import {SimilarMoviesItemSC} from './similarMovies.styles';


export const SimilarMovie: React.FC<PropsType> = (props) => {
    const {poster, movieId, setSimilarMovieData, setCurrentMovie} = props;

    const src: string = `https://image.tmdb.org/t/p/w300/${poster}`;

    const selectMovie = () => {
        movie.getSelectedFilm(movieId)
            .then((response: any) => setCurrentMovie(response))
            .then(() => {
                movie.getSimilarMovies(movieId)
                    .then((similar: any) => setSimilarMovieData((similar.results).splice(0, 8)))
            })
    };

    return (
        <SimilarMoviesItemSC to={`${movieId}`}
                             poster={poster ? src : 'https://prikolnye-kartinki.ru/img/picture/Sep/23/9d857169c84422fdaa28df62667a1467/8.jpg'}
                             onClick={() => selectMovie()}/>
    )
};
