import React from 'react'
import { MoviePropsType } from 'types/shared.type';
import {MovieSC, TitleSC} from "./movie.styles";

export const Movie: React.FC<MoviePropsType> = (props) => {
    const {poster, title, posterWidth, height} = props;

    const src = `https://image.tmdb.org/t/p/w${posterWidth}/${poster}`;

    return (
                <MovieSC src={src} height={height}>
                    <img
                        src={poster ? src : 'https://prikolnye-kartinki.ru/img/picture/Sep/23/9d857169c84422fdaa28df62667a1467/8.jpg'}
                        alt="" height='100%' width={posterWidth}/>
                    <TitleSC>{title && title.length > 48 ? `${title.slice(0,48)}..` : title}</TitleSC>
                </MovieSC>
    )
};