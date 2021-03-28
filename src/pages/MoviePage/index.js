import React from 'react';
import VMoviePageHeaderAPI from "./VMoviePageHeader/VMoviePageHeaderContainer";
import {VMoviePageBodyContainer} from "./VMoviePageBodyContainer/VMoviePageBody";
import {VWrapperSC} from "./styles";
import {withRouter} from "react-router-dom";


const VMoviePage = (props) => {
    return (
        <VWrapperSC>
            <VMoviePageHeaderAPI/>
            <VMoviePageBodyContainer url={props.match.url}/>
        </VWrapperSC>
    )
};


export const VMoviePageContainer = withRouter(VMoviePage);