import React, {useEffect} from 'react'
import {movie} from "../../../VMoviePageApi";
import {AvatarsListSC, CastAvatarSC, CastItemSC, CastTitleSC, CastWrapperSC, CharacterSC, NameSC} from "./CastSC";

export const VCast = (props) => {
    const {movieCast, setCast} = props;

    useEffect(() => {
            (async () => {
                let cast = await movie.getCastAndCrew(props.movieId);
                setCast(cast.data.cast.splice(0, 8));
            })()
        }, [props.movieId]
    );

    const movieCastArr = movieCast.map(item => <VCastItem
        key={item.id}
        src={'https://image.tmdb.org/t/p/w500' + item['profile_path']}
        character={item.character}
        name={item.name}
    />);

    return (
        <CastWrapperSC>
            <CastTitleSC>MOVIE CAST</CastTitleSC>
            <AvatarsListSC>
                {movieCastArr}
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

