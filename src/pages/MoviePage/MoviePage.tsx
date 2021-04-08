import React from 'react';
import {MoviePageBody} from "./MoviePageBody/MoviePageBody";
import {WrapperSC} from "./MoviePageSC";
import { MoviePageHeader } from './VMoviePageHeader/MoviePageHeader';

type PropsType = {}


export const MoviePage: React.FC<PropsType> = (props) => {
    return (
        <WrapperSC>
            <MoviePageHeader/>
            <MoviePageBody/>
        </WrapperSC>
    )
};
