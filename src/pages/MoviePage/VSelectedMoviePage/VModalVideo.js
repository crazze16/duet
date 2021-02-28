import React, {useEffect} from 'react'
import {connect} from "react-redux";
import {ModalWrappSC, VideoCloseSC, VideoFrameSC} from "./styles";
import {movie} from "../../../VMoviePageApi";
import {openModuleVideo, setVideoKey} from "../../../redux-store/MoviePageReducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";

const VModalVideo = (props) => {

    useEffect(() => {
            movie.getVideo(props.match.params.movieId)
                .then(videosData => props.setVideoKey(videosData.data.results
                    .sort(item => item.name.includes('Trailer') ? -1 : 1)[0].key) )

        }, [props.match.params.movieId]
    );
   const src = `https://www.youtube.com/embed/${props.videoKey}?mute=1&autoplay=1`;
    return (
        props.isTrailer ?
            <ModalWrappSC  onClick={props.openModuleVideo}>
                <VideoFrameSC>
                    <iframe width='1300' height='700' src={src}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen>
                    </iframe>
                    <VideoCloseSC/>
                </VideoFrameSC>

            </ModalWrappSC>
        : ''

    )
};

const mapStateToProps = state => ({
    isTrailer: state.MoviePageReducer.isTrailer,
    videoKey: state.MoviePageReducer.videoKey
});

export default compose(
    connect(mapStateToProps, {setVideoKey, openModuleVideo}),
    withRouter,
    )(VModalVideo)