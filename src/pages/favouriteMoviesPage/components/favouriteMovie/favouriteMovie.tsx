import React, {useState} from 'react'
import { PropsType } from '../../../../types/favouriteMoviesPage/favouriteMovie.type';
import {BackdropSC, HoveredSC, TitleSC, WrapperItemSC } from './favouriteMovie.styles';



export const FavouriteMovie: React.FC<PropsType> = (props) => {

    const {id, title, poster, removeFromFavourite} = props;
    const [hover, setHover] = useState(false);
    const [isFavourite, setIsFavourite] = useState(true);

    const toggleFavouriteMovie = (flag: boolean): void => {
        setIsFavourite(flag);
        removeFromFavourite(isFavourite, id);
    };

    return (
            <WrapperItemSC onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} >

                    <BackdropSC bg={`https://image.tmdb.org/t/p/w780` + poster} to={`/Vapi/movie/${id}`}>
                    </BackdropSC>
                    <TitleSC>
                        {title}
                    </TitleSC>

                    <HoveredSC flag={hover} content={isFavourite} to={`/Vapi/movie/${id}`} onClick={() => toggleFavouriteMovie(!isFavourite)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" fill={isFavourite ? `white` : 'transparent'}
                             stroke="white"
                             className="bi bi-bookmark-fill" viewBox="0 0 16 16">
                            <path
                                d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z"/>
                        </svg>
                    </HoveredSC>
            </WrapperItemSC>
    )
};