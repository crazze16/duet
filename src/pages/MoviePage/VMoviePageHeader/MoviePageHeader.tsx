import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {actions} from "../../../redux-store/MoviePageReducer";
import {CombinedStateType} from "../../../redux-store/RootReducer";
import {MovieBySearch} from "../../../types/types";
import {movie} from "../../../API";
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import * as queryString from "querystring";

type QueryParamsType = { search?: string, page?: string };


export const MoviePageHeader: React.FC = (props) => {

    const dispatch = useDispatch();
    const history = useHistory();
    const [isSearched, setIsSearched] = useState(false);

    const searchedMovie = useSelector((state: CombinedStateType) => state.MoviePageReducer.searchedMovie);
    const currentPage = useSelector((state: CombinedStateType) => state.MoviePageReducer.currentPage);

    const searchMovie = (searchedMovie: string) => dispatch(actions.searchMovie(searchedMovie));
    const setMovieData = (movieData: Array<MovieBySearch>) => dispatch(actions.setMovieData(movieData));
    const setTotalPages = (totalPages: number) => dispatch(actions.setTotalPages(totalPages));
    const setCurrentPage = (page: number) => dispatch(actions.setCurrentPage(page));

    const onSearch = () => {
        setCurrentPage(1);
        setIsSearched(!isSearched);
        movie.getFilmsBySearch(searchedMovie, 1)
            .then(response => {
                setMovieData(response.results);
                setTotalPages(response['total_pages']);
            });

    };

    useEffect(() => {

        const query: QueryParamsType = {};

        if(searchedMovie.length > 0) query.search = searchedMovie;
        if(currentPage !== null) query.page = String(currentPage);

        history.push({
            pathname: '/Vapi',
            search: queryString.stringify(query)
        })
    }, [isSearched, currentPage]);

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