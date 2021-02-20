import React from 'react'
import {withRouter} from "react-router-dom";
import {search} from "../../../VMoviePageApi";
import {connect} from "react-redux";
import {setCurrentMovie} from "../../../redux-store/MoviePageReducer";
import {VSelectedMoviePage} from "./VSelectedMoviePage";

class VSelectedMoviePageAPI extends React.Component {
    componentDidMount() {
        let movieId = +this.props.match.params.movieId;
        console.log(movieId);
        search.getSelectedFilm(movieId)
            .then(response => this.props.setCurrentMovie(response.data))
    }

    render() {
        return (
                <VSelectedMoviePage {...this.props}/>
        )
    }
}

const VSelectedMoviePageWithRouter = withRouter(VSelectedMoviePageAPI);

const mapStateToProps = (state) => ({
    selectedMovieData: state.MoviePageReducer.selectedMovieData
});


export const VSelectedMoviePageContainer = connect(mapStateToProps, {setCurrentMovie})(VSelectedMoviePageWithRouter);
