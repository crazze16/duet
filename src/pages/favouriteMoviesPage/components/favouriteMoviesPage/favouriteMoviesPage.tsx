import React, {ReactNode, useEffect, useState} from 'react'
import {
    ClearInputSC,
    EmptyListSC,
    InputWrapper,
    ListSC,
    ListWrapperSC,
    PageTitleSC,
    SearchInputSC,
    SortSC,
} from "./favouriteMoviesPage.styles";
import {MovieBySearch} from 'types/shared.type';
import {FavouriteMovie} from '../favouriteMovie/favouriteMovie';
import * as queryString from "querystring";
import {useHistory} from "react-router-dom";
import {PropsType, QueryParamsType} from 'types/favouriteMoviesPage/favouriteMoviePage.type';

export const FavouriteMoviePage: React.FC<PropsType> = (props) => {

    const {favouritesMovies, removeFromFavourite, searchedMovie, searchMovie} = props;

    const history = useHistory();

    const [filter, setFilter] = useState('');

    const stringFilter = (str: string) => str.toLowerCase().replace(/[\s.\-\:,%]/gi, '');

    let listData = [...favouritesMovies.listData];
    listData = listData.filter(value => stringFilter(value.title).includes(stringFilter(searchedMovie)));

    const parsed = queryString.parse(history.location.search.substr(1)) as { search: string, filter: string };

    useEffect(() => {
        const query: QueryParamsType = {};
        if (filter) query.filter = filter;
        if (searchedMovie.length > 0) query.search = searchedMovie;
        history.push({
            pathname: '/favourite',
            search: queryString.stringify(query)
        })
    }, [filter, searchedMovie]);

    useEffect(() => {
        let actualSearch = searchedMovie;
        let actualFilter = filter;
        if (parsed.search) {
            actualSearch = parsed.search;
            searchMovie(actualSearch);
        }
        if (parsed.filter) {
            actualFilter = parsed.filter;
            setFilter(actualFilter);
        }
        if (parsed.search && parsed.filter) {
            history.push({
                pathname: '/favourite',
                search: `?search=${parsed.search}&filter=${parsed.filter}`
            })
        }
    }, [parsed.filter]);


    const sort = (): Array<MovieBySearch> => {
        switch (filter) {
            case "popularity":
                return listData.sort((a: MovieBySearch, b: MovieBySearch) => b.popularity - a.popularity);
            case "vote":
                return listData.sort((a: MovieBySearch, b: MovieBySearch) => b.vote_average - a.vote_average);
            case "reverse":
                return listData.reverse();
            default:
                return listData
        }
    };

    const FavouriteMoviesList: Array<ReactNode> = sort().map(item => <FavouriteMovie key={`key_${item.id}`}
                                                                                     id={item.id}
                                                                                     title={item.title}
                                                                                     poster={item.backdrop_path}
                                                                                     removeFromFavourite={removeFromFavourite}
    />);

    return (
        <ListWrapperSC>
            <div>
                <PageTitleSC>Your Picked Movies:</PageTitleSC>
                <InputWrapper>
                    <SearchInputSC
                        onChange={(event: React.FormEvent<HTMLInputElement>) => searchMovie(event.currentTarget.value)}
                        value={searchedMovie}
                        placeholder={'Search'}
                    />
                    {searchedMovie && <ClearInputSC onClick={() => searchMovie('')}/>}
                </InputWrapper>
                <SortSC>Sorted by:
                    <select
                        onChange={(event: React.FormEvent<HTMLSelectElement>) => setFilter(event.currentTarget.value)}
                        value={filter}>
                        <option value='default'>Newest</option>
                        <option value='reverse'>Oldest</option>
                        <option value='popularity'>Most popular</option>
                        <option value='vote'>Votes</option>
                    </select>
                </SortSC>
            </div>
            <ListSC>
                {listData.length ? (FavouriteMoviesList) : (<EmptyListSC>No match</EmptyListSC>)}
            </ListSC>
        </ListWrapperSC>
    )
};