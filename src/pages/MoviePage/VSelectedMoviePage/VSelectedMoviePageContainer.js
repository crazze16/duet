import React, {useEffect} from 'react'
import {withRouter} from "react-router-dom";
import {movie} from "../../../VMoviePageApi";
import {connect} from "react-redux";
import {
    openModuleVideo, setCast, setCollectionData,
    setCollectionId,
    setCurrentMovie, setCurrentReviewPage, setReviews,
    setSimilarMovieData
} from "../../../redux-store/MoviePageReducer";
import {VSelectedMoviePage} from "./VSelectedMoviePage";

const VSelectedMoviePageAPI = (props) => {

    useEffect(() => {
            let movieId = +props.match.params.movieId;
            movie.getSelectedFilm(movieId)
                .then(response => {
                    props.setCurrentMovie(response.data);
                    if(response.data['belongs_to_collection']) {
                        props.setCollectionId(response.data['belongs_to_collection'].id);
                        movie.getCollection(response.data['belongs_to_collection'].id)
                            .then(collectionData => props.setCollectionData(collectionData.data));
                    } else {
                        props.setCollectionId(null);
                        props.setCollectionData([]);
                    }
                })
                .then(() => {
                    movie.getSimilarMovies(movieId)
                        .then(similar => props.setSimilarMovieData((similar.data.results).splice(0,8)))

                })
        }, [props.match.params.movieId]
    );

    return (
        <div>
    <VSelectedMoviePage {...props} movieId={+props.match.params.movieId} />

        </div>
    )
};

const VSelectedMoviePageWithRouter = withRouter(VSelectedMoviePageAPI);

const mapStateToProps = (state) => ({
    selectedMovieData: state.MoviePageReducer.selectedMovieData,
    similarMoviesData: state.MoviePageReducer.similarMoviesData,
    collection: state.MoviePageReducer.collection,
    movieCast: state.MoviePageReducer.movieCast,
    reviews: state.MoviePageReducer.reviews
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
})(VSelectedMoviePageWithRouter);
