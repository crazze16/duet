import React from 'react';
import {VMoviePageHeaderContainer} from "./VMoviePageHeader/VMoviePageHeaderContainer";
import {VMoviePageBodyContainer} from "./VMoviePageBodyContainer/VMoviePageBody";
import {VWrapperSC} from "./styles";
import {Route, withRouter} from "react-router-dom";
import {VSelectedMoviePageContainer} from "./VSelectedMoviePage/VSelectedMoviePageContainer";


class VMoviePage extends React.Component{



    render() {
        return (
            <VWrapperSC>
                <VMoviePageHeaderContainer/>
                <VMoviePageBodyContainer url={this.props.match.url}/>
            </VWrapperSC>
        )
    }
};


export const VMoviePageContainer = withRouter(VMoviePage);