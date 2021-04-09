import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {FavouriteMoviePage} from "./FavouriteMoviesPage";
import {movieList} from "../../API";
import {CombinedStateType} from "../../redux-store/RootReducer";
import {MovieBySearch} from "../../types/types";
import {FMactions} from '../../redux-store/FavouriteMoviesReducer'
import {EmptyListSC, WrapperSC} from '../../styles/FavouriteMoviesSC';
import useLocalStorage from '../../hooks/useLocalStorage';

export const LIST_KEY = 'Favourite Movies list id';

export const FavouriteMoviesPageContainer: React.FC = () => {

    const dispatch = useDispatch();

    const favouritesMovies = useSelector((state: CombinedStateType) => state.FavouriteMoviesReducer.favouritesMovies);

    const createFavouriteMoviesList = (listId: number) => dispatch(FMactions.createFavouriteMoviesList(listId));
    const setFavouriteMoviesList = (moviesData: Array<MovieBySearch>) => dispatch(FMactions.setFavouriteMoviesList(moviesData));

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
                <WrapperSC>
                    <FavouriteMoviePage removeFromFavourite={removeFromFavourite} favouritesMovies={favouritesMovies}/>
                </WrapperSC> :
                <EmptyListSC>you haven't added anything to your favorite movies list</EmptyListSC>

    )
};
