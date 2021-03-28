import React, {useState} from 'react'
import {BackdropSC, HoveredSC, TitleSC, WrapperItemSC} from '../../styles/FavouriteMoviesSC';

type PropsType = {
    id: number
    title: string
    poster: string
    removeFromFavourite: (flag: boolean, movieId: number) => void
}

export const FavouriteMovieItem: React.FC<PropsType> = (props) => {

    const {id, title, poster, removeFromFavourite} = props;
    const [hover, setHover] = useState(false);
    const [handler, setHandler] = useState(true);

    const favouriteMovieToggle = (flag: boolean) => {
        setHandler(flag);
        removeFromFavourite(handler, id);
    };


    return (
        <>
            <WrapperItemSC onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} >

                    <BackdropSC bg={`https://image.tmdb.org/t/p/w780` + poster} to={`/Vapi/movie/${id}`}>
                    </BackdropSC>
                    <TitleSC>
                        {title}
                    </TitleSC>

                    <HoveredSC flag={hover} content={handler} to={`/Vapi/movie/${id}`} onClick={() => favouriteMovieToggle(!handler)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" fill={handler ? `white` : 'transparent'}
                             stroke="white"
                             className="bi bi-bookmark-fill" viewBox="0 0 16 16">
                            <path
                                d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z"/>
                        </svg>
                    </HoveredSC>
            </WrapperItemSC>

        </>
    )
};