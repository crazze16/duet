import React, {ReactElement, useState} from 'react'
import {PropsType} from "../../../../types/personPage/castedMovies.type";
import {CastListSC, ListWrapperSC, MainTitleSC, ShowMoreSC, TotalCastCountSC} from './castedMovies.styles';
import {CastListMovie} from '../castListMovie/castListMovie';

export const CastedMovies: React.FC<PropsType> = (props) => {

    const {cast} = props;

    const [moviesListHeight, setmoviesListHeight] = useState<boolean>(true);
    const [TVListHeight, setTVListHeight] = useState<boolean>(true);

    let movieData = [...cast.filter(item => item.media_type === "movie" && item.release_date && item.release_date.length)];
    let TVShowsData = [...cast.filter(item => item.media_type === "tv" && item.first_air_date && item.first_air_date)];

    const actorCastList = (castedData: typeof movieData | typeof TVShowsData, type: 'movie' | 'TV'): ReactElement => {

        const date: 'release_date' | 'first_air_date' = type === 'movie' ? 'release_date' : 'first_air_date';
        const listHeight = type === 'movie' ? moviesListHeight : TVListHeight;
        const setListHeight = type === 'movie' ? setmoviesListHeight : setTVListHeight;

        return (
            <>
                <CastListSC isHide={castedData.length < 19 ? false : listHeight}>
                    <MainTitleSC>
                        {type === "movie" ? 'Movies' : 'TV Shows'}
                        <TotalCastCountSC>
                            ({castedData.length})
                        </TotalCastCountSC>
                    </MainTitleSC>
                    {
                        castedData.sort((a, b) => (a[date] && b[date])
                            ? (Number(b[date].slice(0, 4)) - Number(a[date].slice(0, 4)))
                            : '' as never)
                            .map((item, index): ReactElement =>
                                <CastListMovie
                                    key={`${type}_${index}/${item.id}`}
                                    title={item.title ? item.title : item.name}
                                    release_date={item[date]}
                                    poster={item.poster_path}
                                    id={item.id}
                                    character={item.character}
                                    genres_ids={item.genre_ids}
                                    original_title={item.original_title ? item.original_title : item.original_name}
                                    vote_average={item.vote_average}
                                />
                            )
                    }
                </CastListSC>
                {
                    castedData.length && castedData.length > 19
                        ? (<ShowMoreSC
                            onClick={() => setListHeight(!listHeight)}>{listHeight ? 'SHOW MORE' : 'HIDE'}</ShowMoreSC>)
                        : ('')
                }
            </>
        )
    };
    return (
        <ListWrapperSC>
            {actorCastList(movieData, "movie")}
            {actorCastList(TVShowsData, "TV")}
        </ListWrapperSC>
    )
};

