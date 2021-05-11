import React from 'react';
import {MoviePageBody} from "./components/body/moviePageBody";
import {WrapperSC} from "./moviePage.styles";
import { Header } from './components/header/header';

export const MoviePage: React.FC = () => {
    return (
        <WrapperSC>
            <Header/>
            <MoviePageBody/>
        </WrapperSC>
    )
};
