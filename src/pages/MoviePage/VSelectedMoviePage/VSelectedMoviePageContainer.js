import React, {useEffect} from 'react'
import {withRouter} from "react-router-dom";
import {movie} from "../../../VMoviePageApi";
import {connect} from "react-redux";
import {
    createFavouriteMoviesList,
    openModuleVideo,
    setCast,
    setCollectionData,
    setCollectionId,
    setCurrentMovie,
    setCurrentReviewPage, getFavouriteMoviesList,
    setReviews,
    setSimilarMovieData
} from "../../../redux-store/MoviePageReducer";
import {VSelectedMoviePage} from "./VSelectedMoviePage";

const VSelectedMoviePageAPI = (props) => {

    const {setCurrentMovie, setCollectionId, setCollectionData, setSimilarMovieData} = props;

    useEffect(() => {
            (async () => {
                const movieId = +props.match.params.movieId;
                const selectedFilm = await movie.getSelectedFilm(movieId);
                setCurrentMovie(selectedFilm.data);
                if (selectedFilm.data['belongs_to_collection']) {
                    setCollectionId(selectedFilm.data['belongs_to_collection'].id);
                    const collection = await movie.getCollection(selectedFilm.data['belongs_to_collection'].id);
                    setCollectionData(collection.data);
                } else {
                    setCollectionId(null);
                    setCollectionData([]);
                }
                const similar = await movie.getSimilarMovies(movieId);
                setSimilarMovieData((similar.data.results).splice(0, 8))
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
    favouritesMovies: state.MoviePageReducer.favouritesMovies
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
    getFavouriteMoviesList,
})(VSelectedMoviePageWithRouter);
