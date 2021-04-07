import React, {useEffect} from 'react'
import {movie} from "../../../VMoviePageApi";
import {AvatarsListSC, AvatarWrapper, CastAvatarSC, CastItemSC, CastTitleSC, CastWrapperSC, CharacterSC, NameSC} from "./CastSC";
import {CastPersonType} from "../../../types/types";

type MovieCastObjType = {
    id: number,
    profile_path: string,
    character: string,
    name: string
}

type PropsType = {
    movieCast: Array<MovieCastObjType>,
    setCast: (castData: Array<CastPersonType>) => void,
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
        src={item['profile_path']}
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
    const noSrc = 'https://socpartnerstvo.org/img/avatar_male.png';


    return (
        <CastItemSC>
            <AvatarWrapper>
                <CastAvatarSC src={src ? 'https://image.tmdb.org/t/p/w500' + src : noSrc}/>
            </AvatarWrapper>
            <NameSC>{name}</NameSC>
            <CharacterSC>{character}</CharacterSC>
        </CastItemSC>
    )
};

