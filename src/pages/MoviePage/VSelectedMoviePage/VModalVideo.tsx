import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {ModalWrappSC, VideoCloseSC, VideoFrameSC} from "./styles";
import {movie} from "../../../API";
import {actions} from "../../../redux-store/MoviePageReducer";
import {CombinedStateType} from "../../../redux-store";


type OwnPropsType = {
    movieId: number
}

type PropsType = OwnPropsType

export const VModalVideo: React.FC<PropsType> = (props) => {
    const {movieId} = props;

    const dispatch = useDispatch();

    const isTrailer = useSelector((state: CombinedStateType) => state.MoviePageReducer.isTrailerOpen);
    const videoKey = useSelector((state: CombinedStateType) => state.MoviePageReducer.videoKey);

    const setVideoKey = (videoKey: string) => dispatch(actions.setVideoKey(videoKey));
    const openModuleVideo = () => dispatch(actions.openModuleVideo());

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
