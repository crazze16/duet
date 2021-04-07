import React, {useEffect, useRef, useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {FavouriteMoviePage} from "./FavouriteMoviesPage";
import {movie} from "../../VMoviePageApi";
import {CombinedStateType} from "../../redux-store";
import { MovieBySearch} from "../../types/types";
import {Loader} from '../../components/Loader/Loader';
import {FMactions} from '../../redux-store/FavouriteMoviesReducer'
import {EmptyListSC, WrapperSC} from '../../styles/FavouriteMoviesSC';



export const FavouriteMoviesPageContainer: React.FC = () => {


    const dispatch = useDispatch();

    const favouritesMovies = useSelector((state: CombinedStateType) => state.FavouriteMoviesReducer.favouritesMovies);

    const createFavouriteMoviesList = (listId: number) => dispatch(FMactions.createFavouriteMoviesList(listId));
    const setFavouriteMoviesList = (moviesData: Array<MovieBySearch>) => dispatch(FMactions.setFavouriteMoviesList(moviesData));

    const LIST_ID = 'Favourite Movies list id';
    // const [fetching, setFetching] = useState(false);

    // const prevCountRef = useRef<any>();
    // prevCountRef.current = favouritesMovies.listData;
    // const prev = prevCountRef.current;
    // console.log('prev:', prev);
    // console.log('current:', favouritesMovies.listData);

    useEffect(() => {
            if (+localStorage.getItem(LIST_ID)!) {
                const listId: number = +localStorage.getItem(LIST_ID)!;
                (async () => {
                    // setFetching(true);
                    createFavouriteMoviesList(listId);
                    const listData = await movie.getList(listId);
                    setFavouriteMoviesList(listData.results);
                    // setFetching(false);
                })();
            }
        },
        //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        []
        //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    );
    const removeFromFavourite = (flag: boolean, id: number): void => {
        flag ?
            (async () => {
                await movie.removeItems(favouritesMovies.listId!, id);
            })() :
            (async () => {
                await movie.updateList(favouritesMovies.listId!, id);
            })()
    };

    return (
        // fetching ?
        //     <Loader/> :
            favouritesMovies.listData.length > 0 ?
                <WrapperSC>
                    <FavouriteMoviePage removeFromFavourite={removeFromFavourite} favouritesMovies={favouritesMovies}/>
                </WrapperSC> : <EmptyListSC>you haven't added anything to your favorite movies list</EmptyListSC>

    )
};
