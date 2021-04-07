import React from 'react';
import {VMoviePageHeaderAPI} from "./VMoviePageHeader/VMoviePageHeaderContainer";
import {VMoviePageBody} from "./VMoviePageBodyContainer/VMoviePageBody";
import {VWrapperSC} from "./styles";

type PropsType = {}


export const VMoviePage: React.FC<PropsType> = (props) => {
    return (
        <VWrapperSC>
            <VMoviePageHeaderAPI/>
            <VMoviePageBody/>
        </VWrapperSC>
    )
};
