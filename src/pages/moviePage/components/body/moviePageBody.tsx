import React, {ReactElement, useEffect} from 'react'
import {Movie} from "../../../../shared/components/movie/movie";
import {useDispatch, useSelector} from "react-redux";
import {MoviesListSC} from "./moviePageBody.styles";
import {search} from "api";
import {CombinedStateType} from "redux-store/rootReducer";
import {MovieBySearch} from 'types/shared.type';
import {NavLink, useHistory} from 'react-router-dom';
import * as queryString from "querystring";
import {MPactions} from 'redux-store/moviePageReducer/actions';
import {Pagination} from 'shared/components/pagination/pagination';

export const MoviePageBody: React.FC = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const searchedMovie = useSelector((state: CombinedStateType) => state.MoviePageReducer.searchedMovie);
    const currentPage = useSelector((state: CombinedStateType) => state.MoviePageReducer.currentPage);
    const totalPages = useSelector((state: CombinedStateType) => state.MoviePageReducer.totalPages);
    const resultMoviesData = useSelector((state: CombinedStateType) => state.MoviePageReducer.resultMoviesData);

    const searchMovie = (searchedMovie: string) => dispatch(MPactions.searchMovie(searchedMovie));
    const setCurrentPage = (page: number) => dispatch(MPactions.setCurrentPage(page));
    const setMovieData = (MovieData: Array<MovieBySearch>) => dispatch(MPactions.setMovieData(MovieData));
    const setTotalPages = (totalPages: number) => dispatch(MPactions.setTotalPages(totalPages));

    const parsed = queryString.parse(history.location.search.substr(1)) as { search: string, page: string };

    useEffect(() => {
        if (parsed.search && parsed.page) {
            setCurrentPage(+parsed.page);
            searchMovie(parsed.search);
            search.movieSearch(parsed.search, +parsed.page)
                .then((response) => {
                    setMovieData(response.results);
                    setTotalPages(response['total_pages']);
                });
            history.push({
                pathname: '/movies',
                search: `?search=${parsed.search}&page=${parsed.page}`
            })
        }
    }, []);

    const resultMoviesDataArr = resultMoviesData.map((item, index): ReactElement => <NavLink to={`/movie/${item.id}`}>
        <Movie poster={item.poster_path}
               title={item.title}
               key={index}
               posterWidth={342}
               height={380}
        />
    </NavLink>);

    const selectPage = (item: number) => {
        setCurrentPage(item);
        search.movieSearch(searchedMovie, item)
            .then((response) => {
                setMovieData(response.results);
            })
    };

    return (
        <>
            {
                <Pagination options={{range: 9, currentPage: currentPage, selectPage, totalPages}}/>
            }
            <MoviesListSC>
                {resultMoviesDataArr}
            </MoviesListSC>
        </>
    )
};

