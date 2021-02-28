import React, {useEffect} from 'react'
import {movie} from "../../../VMoviePageApi";
import {AvatarsListSC, CastAvatarSC, CastItemSC, CastTitleSC, CastWrapperSC, CharacterSC, NameSC} from "./CastSC";
import {VSimilarMovieItem} from "./VSimilarMovieItem";

export const VCast = (props) => {

    const {movieCast, setCast} = props;

    useEffect(() => {
            movie.getCastAndCrew(props.movieId)
                .then(response => setCast(response.data.cast.splice(0, 8)))
        }, [props.movieCast]
    );



    const movieCastArr = (arr = []) => {
        return arr.map(item => <VCastItem
            key={item.id}
            src={'https://image.tmdb.org/t/p/w500' + item['profile_path']}
            character={item.character}
            name={item.name}
        />);
    };

    return (
        <CastWrapperSC>
            <CastTitleSC>MOVIE CAST</CastTitleSC>
            <AvatarsListSC>
                {movieCastArr(movieCast)}
            </AvatarsListSC>
        </CastWrapperSC>
    )

};

const VCastItem = (props) => {

    const {src, character, name} = props;


    return (
        <CastItemSC>
            <CastAvatarSC src={src}/>
            <NameSC>{name}</NameSC>
            <CharacterSC>{character}</CharacterSC>
        </CastItemSC>
    )
};

