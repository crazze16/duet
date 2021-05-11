import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {CombinedStateType} from "redux-store/rootReducer";
import {MovieBySearch} from "types/shared.type";
import {search} from "api";
import {useHistory} from 'react-router-dom';
import * as queryString from "querystring";
import {MPactions} from 'redux-store/moviePageReducer/actions';
import {QueryParamsType} from 'types/moviePage/header.type';
import {onEnterHandler} from "../../../../helpers/functions";


export const Header: React.FC = () => {

    const dispatch = useDispatch();
    const history = useHistory();
    const [isSearched, setIsSearched] = useState(false);

    const searchedMovie = useSelector((state: CombinedStateType) => state.MoviePageReducer.searchedMovie);
    const currentPage = useSelector((state: CombinedStateType) => state.MoviePageReducer.currentPage);

    const searchMovie = (searchedMovie: string) => dispatch(MPactions.searchMovie(searchedMovie));
    const setMovieData = (movieData: Array<MovieBySearch>) => dispatch(MPactions.setMovieData(movieData));
    const setTotalPages = (totalPages: number) => dispatch(MPactions.setTotalPages(totalPages));
    const setCurrentPage = (page: number) => dispatch(MPactions.setCurrentPage(page));

    useEffect(() => {
        const query: QueryParamsType = {};

        if(searchedMovie.length > 0) query.search = searchedMovie;
        if(currentPage !== null) query.page = String(currentPage);

        history.push({
            pathname: '/movies',
            search: queryString.stringify(query)
        })
    }, [isSearched, currentPage]);

    const onSearch = () => {
        setCurrentPage(1);
        setIsSearched(!isSearched);
        search.movieSearch(searchedMovie, 1)
            .then(response => {
                setMovieData(response.results);
                setTotalPages(response['total_pages']);
            });
    };

    const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        searchMovie(event.target.value)
    };


    return (
        <div>
            <input type="text" onChange={onInputChange} onKeyPress={(evenKeyboardEvent) => onEnterHandler(evenKeyboardEvent, onSearch)} value={searchedMovie}/>
            <button onClick={onSearch}>search</button>
        </div>
    )
};