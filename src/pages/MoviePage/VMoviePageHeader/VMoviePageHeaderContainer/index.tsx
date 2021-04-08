import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {VMoviePageHeader} from "../index";
import {movie} from "../../../../API";
import {CombinedStateType} from '../../../../redux-store';
import {actions} from "../../../../redux-store/MoviePageReducer";
import {MovieBySearch} from "../../../../types/types";



export const VMoviePageHeaderAPI: React.FC = () => {

    const dispatch = useDispatch();

    const searchedMovie = useSelector((state: CombinedStateType) => state.MoviePageReducer.searchedMovie);

    const setMovieData = (movieData: Array<MovieBySearch>) => dispatch(actions.setMovieData(movieData));
    const setTotalPages = (totalPages: number) => dispatch(actions.setTotalPages(totalPages));
    const setCurrentPage = (page: number) => dispatch(actions.setCurrentPage(page));

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
                <VMoviePageHeader searchedMovie={searchedMovie} onSearch={onSearch}/>
            </div>
        )
};

