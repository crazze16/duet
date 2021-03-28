import React, {useEffect, useState} from 'react'
import {compose} from "redux";
import {connect} from "react-redux";
import {FavouriteMoviePage} from "./FavouriteMoviesPage";
import {movie} from "../../VMoviePageApi";
import {createFavouriteMoviesList, setFavouriteMoviesList} from "../../redux-store/FavouriteMoviesReducer";
import {CombinedStateType} from "../../redux-store";
import {FavouriteMoviesType, MovieBySearch} from "../../types/types";
import {Loader} from '../../components/Loader/Loader';
import {EmptyListSC, WrapperSC } from '../../styles/FavouriteMoviesSC';

type MapState = {
    favouritesMovies: FavouriteMoviesType
}
type MapDispatch = {
    setFavouriteMoviesList: (moviesData: Array<MovieBySearch>) => void
    createFavouriteMoviesList: (listId: number) => void
}
type PropsType = MapState & MapDispatch

const FavouriteMoviesPageContainer: React.FC<PropsType> = (props) => {

    const {createFavouriteMoviesList, setFavouriteMoviesList, favouritesMovies} = props;

    const [fetching, setFetching] = useState(false);

    useEffect(() => {
            if (+localStorage.getItem('Favourite Movies list id')!) {
                setFetching(true);
                const listId: number = +localStorage.getItem('Favourite Movies list id')!;
                (async () => {
                    createFavouriteMoviesList(listId);
                    const listData = await movie.getList(listId);
                    setFavouriteMoviesList(listData.results);
                    setFetching(false);
                })();
            }
        },
        //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        []
        //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    );

    const removeFromFavourite = (flag: boolean, id: number):void => {
        flag ?
        (async () => {
           await movie.removeItems(favouritesMovies.listId!, id);
        })() :
            (async () => {
                await movie.updateList(favouritesMovies.listId!, id);
            })()
    };

    return (
        fetching ?
            <Loader/> :
            favouritesMovies.listData.length > 0 ?
                <WrapperSC>
                    <FavouriteMoviePage {...props} removeFromFavourite={removeFromFavourite}/>
                </WrapperSC> : <EmptyListSC>you haven't added anything to your favorite movies list</EmptyListSC>

    )
};

const mapStateToProps = (state: CombinedStateType): MapState => ({
    favouritesMovies: state.FavouriteMoviesReducer.favouritesMovies
});

export default compose(
    connect(mapStateToProps, {setFavouriteMoviesList, createFavouriteMoviesList}),
)(FavouriteMoviesPageContainer)