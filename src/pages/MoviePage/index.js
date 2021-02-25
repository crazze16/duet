import React from 'react';
import {VMoviePageHeaderContainer} from "./VMoviePageHeader/VMoviePageHeaderContainer";
import {VMoviePageBodyContainer} from "./VMoviePageBodyContainer/VMoviePageBody";
import {VWrapperSC} from "./styles";
import {withRouter} from "react-router-dom";


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