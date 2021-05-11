import React, {useEffect} from 'react'
import {movie} from "api";
import {AvatarsListSC, AvatarWrapper, PersonAvatarSC, PersonSC, CastTitleSC, CastWrapperSC, CharacterSC, NameSC} from "./cast.styles";
import {PropsItemType, PropsType} from "types/selectedMoviePage/cast.type";

export const Cast: React.FC<PropsType> = (props) => {
    const {movieCast, setCast, movieId} = props;

    useEffect(() => {
            (async () => {
                const castData = await movie.getCastAndCrew(movieId);
                setCast(castData.cast.splice(0, 8));
            })()
        }, [movieId]
    );

    const movieCastArr = movieCast.map(item => <CastPerson
        key={item.id}
        src={item['profile_path']}
        character={item.character}
        name={item.name}
        id={item.id}
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

const CastPerson: React.FC<PropsItemType> = (props) => {

    const {src, character, name, id} = props;
    const noSrc = 'https://socpartnerstvo.org/img/avatar_male.png';

    return (
        <PersonSC to={`/person/${id}`}>
            <AvatarWrapper>
                <PersonAvatarSC src={src ? 'https://image.tmdb.org/t/p/w500' + src : noSrc}/>
            </AvatarWrapper>
            <NameSC>{name}</NameSC>
            <CharacterSC>{character}</CharacterSC>
        </PersonSC>
    )
};

