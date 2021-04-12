import React from 'react'
import {MovieSC, TitleSC} from "./movie.styles";
import {NavLink} from "react-router-dom";
import { PropsType } from 'types/moviePage/movie.type';



export const Movie: React.FC<PropsType> = (props) => {
    const {poster, url, id, title} = props;

    const src = `https://image.tmdb.org/t/p/w300/${poster}`;

    return (
        <NavLink to={url + '/movie/' + id}>
                <MovieSC src={src}>
                    <img
                        src={poster ? src : 'https://prikolnye-kartinki.ru/img/picture/Sep/23/9d857169c84422fdaa28df62667a1467/8.jpg'}
                        alt="" height='100%' width='300'/>
                    <TitleSC>{title}</TitleSC>
                </MovieSC>
        </NavLink>
    )
};