import React, {useEffect} from 'react'
import {movie} from "../../../VMoviePageApi";
import {useDispatch} from "react-redux";
import {actions} from "../../../redux-store/MoviePageReducer";
import {FMactions} from "../../../redux-store/FavouriteMoviesReducer";
import {VSelectedMoviePage} from "./VSelectedMoviePage";
import {useParams} from "react-router";
import {CollectionType, MovieBySearch, SelectedMovieType} from "../../../types/types";


export const VSelectedMoviePageContainer: React.FC = () => {



    const dispatch = useDispatch();

    const setCurrentMovie = (selectedMovie: SelectedMovieType) => dispatch(actions.setCurrentMovie(selectedMovie));
    const setCollectionId = (collectionId: number | null) => dispatch(actions.setCollectionId(collectionId));
    const setCollectionData = (collectionData: CollectionType) => dispatch(actions.setCollectionData(collectionData));
    const setSimilarMovieData = (similarMovieData: Array<MovieBySearch>) => dispatch(actions.setSimilarMovieData(similarMovieData));
    const setFavouriteMoviesList = (listData: Array<MovieBySearch>) => dispatch(FMactions.setFavouriteMoviesList(listData));
    const setFavouriteMovie = (isFavourite: boolean) => dispatch(FMactions.setFavouriteMovie(isFavourite));
    const createFavouriteMoviesList = (listId: number) => dispatch(FMactions.createFavouriteMoviesList(listId));



    //!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    // @ts-ignore
    const { movieId } = useParams();
    //!!!!!!!!!!!!!!!!!!!!!!!!!!!!

    useEffect(() => {
        const listId = +localStorage.getItem('Favourite Movies list id')!;

            (async () => {
                //set selected data
                const selectedFilm = await movie.getSelectedFilm(movieId);
                setCurrentMovie(selectedFilm);

                //set similar data
                const similar = await movie.getSimilarMovies(movieId);
                setSimilarMovieData((similar.results).splice(0, 8));

                //set favourite data
                await createFavouriteMoviesList(listId);
                const listData = await movie.getList(listId);
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
            <VSelectedMoviePage movieId={+movieId}/>
        </div>
    )
};


