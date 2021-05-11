import {InferActionsTypes} from "../rootReducer";
import {HPActions} from "./actions";
import {MultiSearchType} from "types/response-api.type";
import {MovieBySearch, TVShowResultType} from "types/shared.type";

type initialStateType = typeof initialState;

const initialState = {
    searchedText: '',
    trending: {} as MultiSearchType,
    searchedResults: {
        page: 1 as number,
        results: [] as Array<MovieBySearch>,
        total_results: null as number | null,
        total_pages: null as number | null,
    },
    popular: {
        data: {
            page: 1 as number,
            results: [] as Array<MovieBySearch>,
            total_results: null as number | null,
            total_pages: null as number | null,
        },
        genres: [] as Array<number>,
        active: 'movies' as 'movies' | 'tv'
    },
    feed: {
        data: {
            page: 1,
            results: [] as Array<MovieBySearch>,
            total_results: null as number | null,
            total_pages: null as number | null,
        },
        genres: [] as Array<any>,
        active: 'movies' as 'movies' | 'tv'
    },
    movies: {
        popular: {
            page: 1,
            results: [] as Array<MovieBySearch>,
            total_pages: null as number | null,
            total_results: null as number | null,
            isActive: true
        },
        nowPlaying: {
            page: 1,
            results: [] as Array<MovieBySearch>,
            total_results: null as number | null,
            dates: {
                maximum: null as string | null,
                minimum: null as string | null,
            },
            total_pages: null as number | null,
        },
        topRated: {
            page: 1,
            results: [] as Array<MovieBySearch>,
            total_pages: null as number | null,
            total_results: null as number | null,
        },
    },
    TVShows: {
        popular: {
            page: 1 as number,
            results: [] as Array<TVShowResultType>,
            total_results: null as number | null,
            total_pages: null as number | null,
            isActive: false
        },
        onTheAir: {
            page: 1 as number,
            results: [] as Array<TVShowResultType>,
            total_results: null as number | null,
            total_pages: null as number | null,
        },
        airingToday: {
            page: 1 as number,
            results: [] as Array<TVShowResultType>,
            total_results: null as number | null,
            total_pages: null as number | null,
        }
    }
};

const HomePageReducer = (state = initialState, action: InferActionsTypes<typeof HPActions>): initialStateType => {
    switch (action.type) {
        case "SET_SEARCHED_TEXT":
            return {
                ...state, searchedText: action.searchedText
            };
        case "SET_SEARCHED_RESULTS":
            return {
                ...state, searchedResults: action.results
            };
        case "SET_POPULAR_TYPE":
            return {
                ...state, popular: {...state.popular, active: action.dataType}
            };
        case "SET_FEED_TYPE":
            return {
                ...state, feed: {...state.feed, active: action.dataType}
            };
        case "SET_POPULAR_GENRE":
            return  {
                ...state, popular: {...state.popular, genres: [...state.popular.genres, action.genre]}
            };
        case "SET_MOVIE_FEED":
            return {
                ...state, feed: {...state.feed, data: action.movieData}
            };
        case "ADD_MOVIE_FEED":
            return {
                ...state, feed: {...state.feed, data: {...state.feed.data, results: [...state.feed.data.results.concat(action.movieData)]}}
            };
        case "SET_FEED_PAGE":
            return {
                ...state, feed: {...state.feed, data: {...state.feed.data, page: action.page} }
            };
        case "REMOVE_POPULAR_GENRE":
            return {
                ...state, popular: {...state.popular, genres: [...state.popular.genres.filter(item => item !== action.genre)]}
            };
        case "ADD_FEED_GENRE":
            return {
                ...state, feed: {...state.feed, genres: [...state.feed.genres, action.genre]}
            };
        case "REMOVE_FEED_GENRE":
            return {
                ...state, feed: {...state.feed, genres: [...state.feed.genres.filter(item => item !== action.genre)]}
            };
        case "SET_SEARCHED_PAGE":
            return {
                ...state, searchedResults: {...state.searchedResults, page: action.page}
            };
        case "SET_POPULAR_DATA":
            return {
                ...state, popular: {...state.popular, data: action.popularData}
            };
        case "SET_TOP_RATED_MOVIES":
            return {
                ...state, movies: {...state.movies, topRated: action.topRatedData}
            };
        case "SET_NOW_PLAYING_MOVIES":
            return {
                ...state, movies: {...state.movies, nowPlaying: action.nowPlayingData}
            };
        case "SET_AIRING_TODAY":
            return {
                ...state, TVShows: {...state.TVShows, airingToday: action.airingTodayData}
            };
        case "SET_ON_THE_AIR":
            return {
                ...state, TVShows: {...state.TVShows, onTheAir: action.onTheAirData}
            };
        case "SET_TRENDING_DATA":
            return {
                ...state, trending: action.trendingData
            };
        default:
            return {...state}
    }
};

export default HomePageReducer