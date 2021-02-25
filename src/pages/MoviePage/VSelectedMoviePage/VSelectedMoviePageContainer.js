import React from 'react'
import {withRouter} from "react-router-dom";
import {movie} from "../../../VMoviePageApi";
import {connect} from "react-redux";
import {setCurrentMovie, setSimilarMovieData} from "../../../redux-store/MoviePageReducer";
import {VSelectedMoviePage} from "./VSelectedMoviePage";

class VSelectedMoviePageAPI extends React.Component {
    componentDidMount() {
        let movieId = +this.props.match.params.movieId;
        movie.getSelectedFilm(movieId)
            .then(response => this.props.setCurrentMovie(response.data))
            .then(() => {
                movie.getSimilarMovies(movieId)
                    .then(similar => this.props.setSimilarMovieData((similar.data.results).splice(0,14)))
            })
    }

    render() {
        return (
            <div>
                <VSelectedMoviePage {...this.props} />
            </div>

        )
    }
}

const VSelectedMoviePageWithRouter = withRouter(VSelectedMoviePageAPI);

const mapStateToProps = (state) => ({
    selectedMovieData: state.MoviePageReducer.selectedMovieData,
    similarMoviesData: state.MoviePageReducer.similarMoviesData,
});


export const VSelectedMoviePageContainer = connect(mapStateToProps, {setCurrentMovie, setSimilarMovieData})(VSelectedMoviePageWithRouter);
