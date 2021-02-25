import React from 'react'
import {SimilarMoviesItemSC} from "./styles";

export const VSimilarMovieItem = (props) => {
    const {poster} = props;

    const src = `https://image.tmdb.org/t/p/w300/${poster}`;
    // const src = `https://image.tmdb.org/t/p/original/iiZZdoQBEYBv6id8su7ImL0oCbD.jpg`;

    return (
        <SimilarMoviesItemSC to='/' poster={src}>
            {/*<img src={src} alt="" width='180'/>*/}
        </SimilarMoviesItemSC>
    )
};