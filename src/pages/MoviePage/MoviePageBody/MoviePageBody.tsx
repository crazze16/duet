import React, {useEffect} from 'react'
import {MoviePageItem} from "./MoviePageItem/MoviePageItem";
import {useDispatch, useSelector} from "react-redux";
import {MoviesListSC, MoviesPagesSC} from "./MoviePageBodySC";
import {movie} from "../../../API";
import {CombinedStateType} from "../../../redux-store/RootReducer";
import {MovieBySearch} from '../../../types/types';
import {actions} from "../../../redux-store/MoviePageReducer";
import {useHistory} from 'react-router-dom';
import * as queryString from "querystring";

export const MoviePageBody: React.FC = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const searchedMovie = useSelector((state: CombinedStateType) => state.MoviePageReducer.searchedMovie);
    const currentPage = useSelector((state: CombinedStateType) => state.MoviePageReducer.currentPage);
    const totalPages = useSelector((state: CombinedStateType) => state.MoviePageReducer.totalPages);
    const resultMoviesData = useSelector((state: CombinedStateType) => state.MoviePageReducer.resultMoviesData);

    const searchMovie = (searchedMovie: string) => dispatch(actions.searchMovie(searchedMovie));
    const setCurrentPage = (page: number) => dispatch(actions.setCurrentPage(page));
    const setMovieData = (MovieData: Array<MovieBySearch>) => dispatch(actions.setMovieData(MovieData));
    const setTotalPages = (totalPages: number) => dispatch(actions.setTotalPages(totalPages));

    const parsed = queryString.parse(history.location.search.substr(1)) as {search: string, page: string};

    useEffect(() => {
        if(parsed.search && parsed.page){
            setCurrentPage(+parsed.page);
            searchMovie(parsed.search);
            movie.getFilmsBySearch(parsed.search, +parsed.page)
                .then((response) => {
                    setMovieData(response.results);
                    setTotalPages(response['total_pages']);
                });
            history.push({
                pathname: '/Vapi',
                search: `?search=${parsed.search}&page=${parsed.page}`
            })
        }
    }, []);

    const resultMoviesDataArr = resultMoviesData.map((item, index) => <MoviePageItem poster={item.poster_path}
                                                                                   id={item.id}
                                                                                   url={history.location.pathname}
                                                                                   title={item.title}
                                                                                   key={index}
    /> );

    const pagination = (range: number) => {
        const totalPagesArr = [];
        if(totalPages !== null)
        for (let i = 1; i <= totalPages; i++) {
            totalPagesArr.push(i)
        }
        const mapping = (arr: Array<number>) => arr.map(
            (item, index) =>
                <MoviesPagesSC key={index} onClick={() => selectPage(item)} isActive={item === currentPage ? '800' : '500'}>
                    {item}
                </MoviesPagesSC>
        );
        const extremePages = (num: number) => <MoviesPagesSC onClick={() => selectPage(num)}>{num}</MoviesPagesSC>;
        const neighbours = (range - 1) / 2;
        const rightLimit = totalPagesArr.length - neighbours;
        if(currentPage !== null)
        if (currentPage >= neighbours + 1 && currentPage < rightLimit) {
            return (
                <div>
                    {
                         currentPage >= neighbours + 2 ? extremePages(1) : ''
                    }
                    {
                        mapping(totalPagesArr.filter(i => i >= currentPage - neighbours && i <= currentPage + neighbours))
                    }
                    {extremePages(totalPagesArr.length)}
                </div>
            )
        } else if (currentPage < neighbours + 1) {
            return (
                <div>
                    {
                        mapping(totalPagesArr.filter(i => i <= range))
                    }
                    {currentPage !== null && extremePages(totalPagesArr.length)}
                </div>
            )
        } else if (currentPage >= rightLimit) {
            return (
                <div>
                    {extremePages(1)}
                    {
                        mapping(totalPagesArr.filter(i => i >= (totalPagesArr.length - neighbours * 2) && i <= totalPagesArr.length))
                    }
                </div>
            )
        }
    };

    const selectPage = (item: number) => {
        setCurrentPage(item);
        movie.getFilmsBySearch(searchedMovie, item)
            .then((response) => {
                setMovieData(response.results);
            })
    };

    return (
        <>
            {
                totalPages && pagination(9)
            }
            <MoviesListSC>
                {resultMoviesDataArr}
            </MoviesListSC>
        </>
    )
};

