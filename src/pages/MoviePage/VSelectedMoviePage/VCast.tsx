import React, {useEffect} from 'react'
import {movie} from "../../../VMoviePageApi";
import {AvatarsListSC, CastAvatarSC, CastItemSC, CastTitleSC, CastWrapperSC, CharacterSC, NameSC} from "./CastSC";

type MovieCastObjType = {
    id: number,
    profile_path: string,
    character: string,
    name: string
}

type PropsType = {
    movieCast: Array<MovieCastObjType>,
    setCast: (data: Array<object>) => void,
    movieId: number
}

export const VCast: React.FC<PropsType> = (props) => {
    const {movieCast, setCast, movieId} = props;

    useEffect(() => {
            (async () => {
                let castData = await movie.getCastAndCrew(movieId);
                setCast(castData.cast.splice(0, 8));
            })()
        }, [movieId]
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

type PropsItemType = {
    src: string,
    character: string,
    name: string
}

const VCastItem: React.FC<PropsItemType> = (props) => {

    const {src, character, name} = props;


    return (
        <CastItemSC>
            <CastAvatarSC src={src}/>
            <NameSC>{name}</NameSC>
            <CharacterSC>{character}</CharacterSC>
        </CastItemSC>
    )
};

