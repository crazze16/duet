import React from 'react';
import {VMoviePageHeaderContainer} from "./VMoviePageHeader/VMoviePageHeaderContainer";
import {VMoviePageBodyContainer} from "./VMoviePageBodyContainer/VMoviePageBody";
import {VWrapperSC} from "./styles";

export const VMoviePage = (props) => {
    return (
        <VWrapperSC>
            <VMoviePageHeaderContainer/>
            <VMoviePageBodyContainer/>
        </VWrapperSC>
    )
};