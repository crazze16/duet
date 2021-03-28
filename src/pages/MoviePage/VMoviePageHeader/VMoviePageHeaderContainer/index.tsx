import React from 'react';
import {connect} from "react-redux";
import {VMoviePageHeader} from "../index";
import {searchMovie, setCurrentPage, setMovieData, setTotalPages} from "../../../../redux-store/MoviePageReducer";
import {movie} from "../../../../VMoviePageApi";
import {CombinedStateType} from '../../../../redux-store';
import {compose} from "redux";

type MapStatePropsType = {
    searchedMovie: string
}

type MapDispatchPropsType = {
    setMovieData: (movieData: {}) => void
    setTotalPages: (totalPages: number) => void
    setCurrentPage: (page: number) => void
    searchMovie: (searchedMovie: string) => void
}

type PropsType = MapDispatchPropsType & MapStatePropsType

const VMoviePageHeaderAPI: React.FC<PropsType> = (props) => {

    const {searchedMovie, setMovieData, setTotalPages, setCurrentPage} = props;

   let onSearch = () => {
        movie.getFilmsBySearch(searchedMovie, 1)
            .then(response => {
                setCurrentPage(1);
                setMovieData(response.results);
                setTotalPages(response['total_pages']);
            });
    };
        return (
            <div>
                <VMoviePageHeader {...props} onSearch={onSearch}/>
            </div>
        )
};

let mapStateToProps = (state: CombinedStateType):MapStatePropsType => ({
    searchedMovie: state.MoviePageReducer.searchedMovie,
});

export default compose(
    connect(mapStateToProps, {searchMovie, setMovieData, setTotalPages, setCurrentPage}))
(VMoviePageHeaderAPI as React.FC)

