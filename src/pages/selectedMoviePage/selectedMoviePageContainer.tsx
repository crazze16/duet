import React, {useEffect} from 'react'
import {movie, movieList} from "api";
import {useDispatch} from "react-redux";

import {useParams} from "react-router";
import {CollectionType, MovieBySearch, SelectedMovieType} from "types/shared.type";
import useLocalStorage from "hooks/useLocalStorage";
import {LIST_KEY} from "pages/favouriteMoviesPage/favouriteMoviesPageContainer";
import { SelectedMoviePage } from './components/selectedMoviePage/selectedMoviePage';
import { FMactions } from 'redux-store/favouriteMoviesReducer/actions';
import { MPactions } from 'redux-store/moviePageReducer/actions';


export const SelectedMoviePageContainer: React.FC = () => {

    const dispatch = useDispatch();

    const setCurrentMovie = (selectedMovie: SelectedMovieType) => dispatch(MPactions.setCurrentMovie(selectedMovie));
    const setCollectionId = (collectionId: number | null) => dispatch(MPactions.setCollectionId(collectionId));
    const setCollectionData = (collectionData: CollectionType) => dispatch(MPactions.setCollectionData(collectionData));
    const setSimilarMovieData = (similarMovieData: Array<MovieBySearch>) => dispatch(MPactions.setSimilarMovieData(similarMovieData));
    const setFavouriteMoviesList = (listData: Array<MovieBySearch>) => dispatch(FMactions.setFavouriteMoviesList(listData));
    const setFavouriteMovie = (isFavourite: boolean) => dispatch(FMactions.setFavouriteMovie(isFavourite));
    const createFavouriteMoviesList = (listId: number) => dispatch(FMactions.createFavouriteMoviesList(listId));

    // @ts-ignore
    const { movieId } = useParams();

    const listId = +useLocalStorage(LIST_KEY, '')[0];

    useEffect(() => {

        (async () => {
                //set selected data
                const selectedFilm = await movie.getSelectedFilm(movieId);
                setCurrentMovie(selectedFilm);
                //set similar data
                const similar = await movie.getSimilarMovies(movieId);
                setSimilarMovieData((similar.results).splice(0, 8));

                //set favourite data
                await createFavouriteMoviesList(listId);
                const listData = await movieList.getList(listId);
                setFavouriteMoviesList(listData.results);

                if (listData.results.some(id => id.id === +movieId)) {
                    setFavouriteMovie(true);
                } else {
                    setFavouriteMovie(false);
                }
                //set collection
                if (selectedFilm['belongs_to_collection']) {
                    setCollectionId(selectedFilm['belongs_to_collection'].id);
                    const collection = await movie.getCollection(selectedFilm['belongs_to_collection'].id);
                    setCollectionData(collection);
                } else {
                    setCollectionId(null);
                    setCollectionData({} as CollectionType);
                }
            })();
        }, [movieId]
    );

    return (
        <div>
            <SelectedMoviePage movieId={+movieId}/>
        </div>
    )
};


