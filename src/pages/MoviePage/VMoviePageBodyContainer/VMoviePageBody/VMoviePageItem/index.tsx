import React from 'react'
import {VMovieItemSC, VTitleSC} from "./styles";
import {NavLink} from "react-router-dom";

type PropsType = {
    poster: string
    url: string
    id: number
    title: string
}

export const VMoviePageItem: React.FC<PropsType> = (props) => {
    const {poster, url, id, title} = props;

    let src = `https://image.tmdb.org/t/p/w300/${poster}`;
    return (
        <NavLink to={url + '/movie/' + id}>
                <VMovieItemSC src={src}>
                    <img
                        src={poster ? src : 'https://prikolnye-kartinki.ru/img/picture/Sep/23/9d857169c84422fdaa28df62667a1467/8.jpg'}
                        alt="" height='100%' width='300'/>
                    <VTitleSC>{title}</VTitleSC>
                </VMovieItemSC>
        </NavLink>
    )
};