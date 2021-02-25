import React from 'react';
import {connect} from "react-redux";
import {VMoviePageHeader} from "../index";
import {searchMovie, setMovieData, setTotalPages} from "../../../../redux-store/MoviePageReducer";
import {movie} from "../../../../VMoviePageApi";

class VMoviePageHeaderAPI extends React.Component {

    componentDidMount() {

    }

    buttonSearch = () => {
        movie.getFilmsBySearch(this.props.searchedMovie, this.props.currentPage)
            .then(response => {
                this.props.setMovieData(response.data.results);
                this.props.setTotalPages(response.data['total_pages'])
            })


    };

    render() {
        return (
            <div>
                <VMoviePageHeader {...this.props} buttonSearch={this.buttonSearch}/>
            </div>
        )
    }
}

let mapStateToProps = (state) => ({
    searchedMovie: state.MoviePageReducer.searchedMovie,
    currentPage: state.MoviePageReducer.currentPage,
});

export let VMoviePageHeaderContainer = connect(mapStateToProps, {searchMovie, setMovieData, setTotalPages})(VMoviePageHeaderAPI);

