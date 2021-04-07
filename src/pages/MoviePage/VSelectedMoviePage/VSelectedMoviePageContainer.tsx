import React, {useEffect, useState} from 'react'
import {movie} from "../../../VMoviePageApi";
import {connect} from "react-redux";
import {actions} from "../../../redux-store/MoviePageReducer";
import {FMactions} from "../../../redux-store/FavouriteMoviesReducer";
import {VSelectedMoviePage} from "./VSelectedMoviePage";
import {compose} from "redux";
import {useParams} from "react-router";
import {
    CastPersonType,
    CollectionType,
    FavouriteMoviesType,
    MovieBySearch,
    ReviewDetails, ReviewsType,
    SelectedMovieType
} from "../../../types/types";
import {CombinedStateType} from "../../../redux-store";
import { Loader } from '../../../components/Loader/Loader';

type MapState = {
    selectedMovieData: SelectedMovieType
    similarMoviesData: Array<MovieBySearch>
    collection: {
        id: number | null,
        data: CollectionType
    },
    movieCast: Array<CastPersonType>
    reviews: ReviewsType
    favouritesMovies: FavouriteMoviesType
}

type MapDispatch = {
    setSimilarMovieData: (similarMovieData: Array<MovieBySearch>) => void
    openModuleVideo: () => void
    setCollectionId: (collectionId: number | null) => void
    setCollectionData: (collectionData: CollectionType | {}) => void
    setCast: (castData: Array<CastPersonType>) => void
    setReviews: (reviewsData: Array<ReviewDetails>, reviewsTotalPages: number) => void
    setCurrentReviewPage: (reviewPage: number) => void
    createFavouriteMoviesList: (listId: number) => void
    setFavouriteMoviesList: (listData: Array<MovieBySearch>) => void
    setFavouriteMovie: (isFavourite: boolean) => void
    setCurrentMovie: (selectedMovie: SelectedMovieType) => void
}

type PropsType = MapState & MapDispatch

const VSelectedMoviePageContainer: React.FC<PropsType> = (props) => {

    const {setCurrentMovie, setCollectionId, setCollectionData, setSimilarMovieData, setFavouriteMoviesList, setFavouriteMovie, createFavouriteMoviesList} = props;

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
                    setCollectionData({});
                }
            })();
        }, [movieId]
    );

    return (

        <div>
            <VSelectedMoviePage {...props} movieId={+movieId}/>
        </div>
    )
};


const mapStateToProps = (state: CombinedStateType): MapState => ({
    selectedMovieData: state.MoviePageReducer.selectedMovieData,
    similarMoviesData: state.MoviePageReducer.similarMoviesData,
    collection: state.MoviePageReducer.collection,
    movieCast: state.MoviePageReducer.movieCast,
    reviews: state.MoviePageReducer.reviews,
    favouritesMovies: state.FavouriteMoviesReducer.favouritesMovies
});

export default compose<React.ComponentType>(
    connect(mapStateToProps, {...actions, ...FMactions}),
)(VSelectedMoviePageContainer)