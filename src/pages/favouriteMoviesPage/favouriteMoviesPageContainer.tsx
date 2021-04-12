import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {FavouriteMoviePage} from "./components/favouriteMoviesPage/favouriteMoviesPage";
import {movieList} from "../../api";
import {CombinedStateType} from "../../redux-store/rootReducer";
import {MovieBySearch} from "../../types/shared.type";
import useLocalStorage from '../../hooks/useLocalStorage';
import { FMactions } from '../../redux-store/favouriteMoviesReducer/actions';
import {EmptyListSC, WrapperSC} from "./favouriteMoviesPageContainer.styles";

export const LIST_KEY = 'Favourite Movies list id';

export const FavouriteMoviesPageContainer: React.FC = () => {

    const dispatch = useDispatch();

    const favouritesMovies = useSelector((state: CombinedStateType) => state.FavouriteMoviesReducer.favouritesMovies);
    const searchedMovie = useSelector((state: CombinedStateType) => state.FavouriteMoviesReducer.searchedMovie);

    const createFavouriteMoviesList = (listId: number) => dispatch(FMactions.createFavouriteMoviesList(listId));
    const setFavouriteMoviesList = (moviesData: Array<MovieBySearch>) => dispatch(FMactions.setFavouriteMoviesList(moviesData));
    const searchMovie = (searchedMovie: string) => dispatch(FMactions.searchFavouriteMovie(searchedMovie));

    const listId = +useLocalStorage(LIST_KEY, '')[0];

    useEffect(() => {
            (async () => {
                createFavouriteMoviesList(listId);
                const listData = await movieList.getList(listId);
                setFavouriteMoviesList(listData.results);
            })();
        },
        []
    );

    const removeFromFavourite = async (flag: boolean, id: number) => {
        await movieList[flag ? `removeItems` : `updateList`](favouritesMovies.listId!, id)
    };

    return (
        favouritesMovies.listData.length ?
            (<WrapperSC>
                <FavouriteMoviePage removeFromFavourite={removeFromFavourite}
                                    favouritesMovies={favouritesMovies}
                                    searchedMovie={searchedMovie}
                                    searchMovie={searchMovie}
                />
            </WrapperSC>) :
            (<EmptyListSC>You haven't added anything to your favorite movies list</EmptyListSC>)

    )
};
