import React from 'react';
import {connect} from "react-redux";
import {VMoviePageHeader} from "../index";
import {searchMovie, setCurrentPage, setMovieData, setTotalPages} from "../../../../redux-store/MoviePageReducer";
import {movie} from "../../../../VMoviePageApi";

const VMoviePageHeaderAPI = (props) => {

    const {searchedMovie, setMovieData, setTotalPages, setCurrentPage} = props;

   let buttonSearch = () => {
        movie.getFilmsBySearch(searchedMovie, 1)
            .then(response => {
                setCurrentPage(1);
                setMovieData(response.data.results);
                setTotalPages(response.data['total_pages']);
            })


    };


        return (
            <div>
                <VMoviePageHeader {...props} buttonSearch={buttonSearch}/>
            </div>
        )

};

let mapStateToProps = (state) => ({
    searchedMovie: state.MoviePageReducer.searchedMovie,
    currentPage: state.MoviePageReducer.currentPage,
});

export let VMoviePageHeaderContainer = connect(mapStateToProps, {searchMovie, setMovieData, setTotalPages, setCurrentPage})(VMoviePageHeaderAPI);

