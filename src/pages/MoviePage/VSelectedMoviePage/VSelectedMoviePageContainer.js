import React, {useEffect} from 'react'
import {withRouter} from "react-router-dom";
import {movie} from "../../../VMoviePageApi";
import {connect} from "react-redux";
import {
    openModuleVideo,
    setCast,
    setCollectionData,
    setCollectionId,
    setCurrentMovie,
    setCurrentReviewPage,
    setReviews,
    setSimilarMovieData,
} from "../../../redux-store/MoviePageReducer";
import {VSelectedMoviePage} from "./VSelectedMoviePage";
import {
    createFavouriteMoviesList,
    setFavouriteMovie,
    setFavouriteMoviesList
} from "../../../redux-store/FavouriteMoviesReducer";

const VSelectedMoviePageAPI = (props) => {

    const {setCurrentMovie, setCollectionId, setCollectionData, setSimilarMovieData, setFavouriteMoviesList, setFavouriteMovie,createFavouriteMoviesList} = props;

    useEffect(() => {
        const listId = +localStorage.getItem('Favourite Movies list id');
            (async () => {
                const movieId = +props.match.params.movieId;

                //set selected data
                const selectedFilm = await movie.getSelectedFilm(movieId);
                setCurrentMovie(selectedFilm);

                //set similar data
                const similar = await movie.getSimilarMovies(movieId);
                setSimilarMovieData((similar.results).splice(0, 8));

                //set favourite data
                createFavouriteMoviesList(listId);
                const listData = await movie.getList(listId);
                setFavouriteMoviesList(listData.results);

                if (listData.results.some(id => id.id === movieId)) {
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
                    setCollectionData([]);
                }
            })();
        }, [props.match.params.movieId]
    );

    return (
        <div>
            <VSelectedMoviePage {...props} movieId={+props.match.params.movieId}/>
        </div>
    )
};

const VSelectedMoviePageWithRouter = withRouter(VSelectedMoviePageAPI);

const mapStateToProps = (state) => ({
    selectedMovieData: state.MoviePageReducer.selectedMovieData,
    similarMoviesData: state.MoviePageReducer.similarMoviesData,
    collection: state.MoviePageReducer.collection,
    movieCast: state.MoviePageReducer.movieCast,
    reviews: state.MoviePageReducer.reviews,
    favouritesMovies: state.FavouriteMoviesReducer.favouritesMovies
});


export const VSelectedMoviePageContainer = connect(mapStateToProps, {
    setCurrentMovie,
    setSimilarMovieData,
    openModuleVideo,
    setCollectionId,
    setCollectionData,
    setCast,
    setReviews,
    setCurrentReviewPage,
    createFavouriteMoviesList,
    setFavouriteMoviesList,
    setFavouriteMovie,
})(VSelectedMoviePageWithRouter);
