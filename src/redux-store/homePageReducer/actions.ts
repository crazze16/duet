import {MoviesBySearchType, MultiSearchType, NowPlayingType, TVShowResponseType} from "types/response-api.type";
import {MovieBySearch} from "types/shared.type";
import {selectorDataType} from "../../types/homePage/selectorData.type";

export const HPActions = {
    setSearchedText: (searchedText: string) => ({type: 'SET_SEARCHED_TEXT', searchedText} as const),
    setSearchedResults: (results: MultiSearchType) => ({type: 'SET_SEARCHED_RESULTS', results} as const),
    setSearchedPage: (page: number) => ({type: 'SET_SEARCHED_PAGE', page} as const),

    setMovieGenre: (genre: number) => ({type: 'SET_POPULAR_GENRE', genre} as const),
    removeMovieGenre: (genre: number) => ({type: 'REMOVE_POPULAR_GENRE', genre} as const),

    setPopularType: (dataType: 'movies' | 'tv') => ({type: 'SET_POPULAR_TYPE', dataType} as const),
    setPopularData: (popularData: MultiSearchType) => ({type: 'SET_POPULAR_DATA', popularData} as const),

    setMovieFeed: (movieData: MultiSearchType) => ({type: 'SET_MOVIE_FEED', movieData} as const),
    setFeedType: (dataType: 'movies' | 'tv') => ({type: 'SET_FEED_TYPE', dataType} as const),
    addMovieFeed: (movieData: Array<MovieBySearch>) => ({type: 'ADD_MOVIE_FEED', movieData} as const),
    setFeedPage: (page: number) => ({type: 'SET_FEED_PAGE', page} as const),
    addFeedGenre: (genre: number) => ({type: 'ADD_FEED_GENRE', genre} as const),
    removeFeedGenre: (genre: number) => ({type: 'REMOVE_FEED_GENRE', genre} as const),

    setNowPlayingMovies: (nowPlayingData: NowPlayingType) => ({type: 'SET_NOW_PLAYING_MOVIES', nowPlayingData} as const),
    setTopRatedMovies: (topRatedData: MoviesBySearchType) => ({type: 'SET_TOP_RATED_MOVIES', topRatedData} as const),
    setPopularTVShows: (popularTVShowsData: Array<MovieBySearch>) => ({type: 'SET_POPULAR_TV_SHOWS', popularTVShowsData} as const),
    setAiringToday: (airingTodayData: TVShowResponseType) => ({type: 'SET_AIRING_TODAY', airingTodayData} as const),
    setOnTheAir: (onTheAirData: TVShowResponseType) => ({type: 'SET_ON_THE_AIR', onTheAirData} as const),
    setTrendingData: (trendingData: MultiSearchType) => ({type: 'SET_TRENDING_DATA', trendingData} as const),

    setAsyncPopularData: () => ({type: 'SET_ASYNC_TRENDING_DATA'} as const),
    setAsyncTest: (data: selectorDataType) => ({type: 'SET_ASYNC_POPULAR_DATA', data} as const),
    setAsyncFeedData: (data: selectorDataType) => ({type: 'SET_ASYNC_FEED_DATA', data} as const),
    headerAsyncSearch: (searchedText: string, page?: number) => ({type: 'HEADER_ASYNC_SEARCH', searchedText, page} as const),
};