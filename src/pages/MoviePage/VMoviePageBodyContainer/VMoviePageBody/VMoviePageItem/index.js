import React from 'react'
import {VMovieItemSC, VTitleSC} from "./styles";
import {NavLink} from "react-router-dom";

export const VMoviePageItem = (props) => {
    let src = `https://image.tmdb.org/t/p/w300/${props.poster}`;
    return (
        <NavLink to={props.url + '/movie/' + props.id}>
                <VMovieItemSC src={src}>
                    <img
                        src={props.poster ? src : 'https://prikolnye-kartinki.ru/img/picture/Sep/23/9d857169c84422fdaa28df62667a1467/8.jpg'}
                        alt="" height='100%' width='300'/>
                    <VTitleSC>{props.title}</VTitleSC>
                </VMovieItemSC>
        </NavLink>
    )
};