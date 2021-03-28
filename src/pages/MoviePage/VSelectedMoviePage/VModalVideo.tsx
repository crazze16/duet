import React, {useEffect} from 'react'
import {connect} from "react-redux";
import {ModalWrappSC, VideoCloseSC, VideoFrameSC} from "./styles";
import {movie} from "../../../VMoviePageApi";
import {openModuleVideo, setVideoKey} from "../../../redux-store/MoviePageReducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import {CombinedStateType} from "../../../redux-store";

type MapDispatchPropsType = {
    setVideoKey: (videoKey: string) => void
    openModuleVideo: () => void
}
type MapStatePropsType = {
    isTrailer: boolean,
    videoKey: string | null
}
type OwnPropsType = {
    movieId: number
}

type PropsType = OwnPropsType & MapStatePropsType & MapDispatchPropsType

const VModalVideo: React.FC<PropsType> = (props) => {
    const {setVideoKey, videoKey, openModuleVideo, isTrailer, movieId} = props;


    useEffect(() => {
        (async ()=>{
            try {
                const video = await movie.getVideo(movieId);
                    setVideoKey(video.results
                        .sort(item => item.name.includes('Trailer') ? -1 : 1)[0].key)
            } catch(e) {
                alert(e)
            }
        })()
        }, [movieId]
    );
   const src = `https://www.youtube.com/embed/${videoKey}?mute=1&autoplay=1`;
    return (
        isTrailer ?
            <ModalWrappSC onClick={openModuleVideo}>
                <VideoFrameSC>
                    <iframe width='1300' height='700' src={src}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen>
                    </iframe>
                    <VideoCloseSC/>
                </VideoFrameSC>

            </ModalWrappSC>
        : <></>
    )
};

const mapStateToProps = (state: CombinedStateType): MapStatePropsType => ({
    isTrailer: state.MoviePageReducer.isTrailerOpen,
    videoKey: state.MoviePageReducer.videoKey
});


export const VModalVideoContainer = connect(mapStateToProps, {setVideoKey, openModuleVideo})(VModalVideo);