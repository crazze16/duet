import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import {actions} from "../../../redux-store/MoviePageReducer";
import {CombinedStateType} from "../../../redux-store/RootReducer";
import {MovieBySearch} from "../../../types/types";
import {movie} from "../../../API";



export const MoviePageHeader: React.FC = (props) => {

    const dispatch = useDispatch();

    const searchedMovie = useSelector((state: CombinedStateType) => state.MoviePageReducer.searchedMovie);

    const searchMovie = (searchedMovie: string) => dispatch(actions.searchMovie(searchedMovie));
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

    const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        searchMovie(event.target.value)
    };

    const onKeyHandler = (event: React.KeyboardEvent) => {
        if(event.key === 'Enter') {
            onSearch();
        }
    };

    return (
        <div>
            <input type="text" onChange={onInputChange} onKeyPress={onKeyHandler} value={searchedMovie}/>
            <button onClick={onSearch}>search</button>
        </div>
    )
};