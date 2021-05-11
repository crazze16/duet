import React, {ReactElement, useState} from 'react'
import {PropsType} from "types/personPage/castedMovies.type";
import {CastListSC, ListWrapperSC, MainTitleSC, ShowMoreSC, TotalCastCountSC} from './castedMovies.styles';
import {CastListMovie} from '../castListMovie/castListMovie';

export const CastedMovies: React.FC<PropsType> = (props) => {
    const {cast} = props;

    const [moviesListHeight, setMoviesListHeight] = useState<boolean>(true);
    const [TVListHeight, setTVListHeight] = useState<boolean>(true);

    const movieData = cast.filter(item => item.media_type === "movie" && item.release_date && item.release_date.length);
    const TVShowsData = cast.filter(item => item.media_type === "tv" && item.first_air_date && item.first_air_date);

    const listData = (type: string) => {
        if (type === 'movie') {
            return {date: 'release_date', listHeight: moviesListHeight, setListHeight: setMoviesListHeight} as {date: 'release_date', listHeight: boolean, setListHeight: (height: boolean) => void};
        }
        return {date: 'first_air_date', listHeight: TVListHeight, setListHeight: setTVListHeight} as {date: 'first_air_date',  listHeight: boolean, setListHeight: (height: boolean) => void};
    };

    const actorCastList = (castedData: typeof movieData | typeof TVShowsData, type: 'movie' | 'TV'): ReactElement => {
        const {date, listHeight, setListHeight} = listData(type);

        const sortDataByDate = (): typeof castedData => {
           return castedData.sort((a, b) => (a[date] && b[date])
                ? (Number(b[date].slice(0, 4)) - Number(a[date].slice(0, 4)))
                : '' as never)
        };
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
                        sortDataByDate().map((item, index): ReactElement =>
                                <CastListMovie
                                    key={`${type}_${index}`}
                                    title={item.title || item.name}
                                    release_date={item[date]}
                                    poster={item.poster_path}
                                    id={item.id}
                                    character={item.character}
                                    genres_ids={item.genre_ids}
                                    original_title={item.original_title || item.original_name}
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

