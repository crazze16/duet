import {
    CastPersonType,
    CollectionType,
    MovieBySearch,
    MovieItemType,
    ReviewDetails,
    SelectedMovieType
} from "../types/types";

const ON_SEARCH_MOVIE = 'ON_SEARCH_MOVIE';
const SET_MOVIES = 'SET_MOVIES';
const SET_TOTAL_PAGES = 'SET_TOTAL_PAGES';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_CURRENT_MOVIE = 'SET_CURRENT_MOVIE';
const SET_SIMILAR_MOVIES = 'SET_SIMILAR_MOVIES';
const SET_VIDEO_KEY = 'SET_VIDEO_KEY';
const SET_COLLECTION_ID = 'SET_COLLECTION_ID';
const SET_COLLECTION_DATA = 'SET_COLLECTION_DATA';
const TOGGLE_VIDEO = 'TOGGLE_VIDEO';
const SET_CAST = 'SET_CAST';
const SET_REVIEWS = 'SET_REVIEWS';
const SET_CURRENT_REVIEW_PAGE = 'SET_CURRENT_REVIEW_PAGE';




export type InitialStateType = typeof initialState


let initialState = {
    searchedMovie: '' as string,
    resultMoviesData: [] as Array<MovieItemType>,
    selectedMovieData: {} as SelectedMovieType,
    similarMoviesData: [] as Array<MovieBySearch>,
    currentPage: null as number | null,
    totalPages: null as number | null,
    videoKey: null as string | null,
    isTrailerOpen: false,
    collection: {
        id: null as number | null,
        data: {} as CollectionType
    },
    movieCast: [] as Array<CastPersonType>,
    reviews: {
        data: [] as Array<ReviewDetails>,
        currentPage: 1,
        totalPages: null as number | null,
    },

};

 const MoviePageReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case ON_SEARCH_MOVIE:
            return {...state, searchedMovie: action.searchedText};
        case SET_MOVIES:
            return {...state, resultMoviesData: action.movieData};
        case SET_CURRENT_MOVIE:
            return {...state, selectedMovieData: action.selectedMovie};
        case SET_TOTAL_PAGES:
            return {...state, totalPages: action.totalPages};
        case SET_SIMILAR_MOVIES:
            return {...state, similarMoviesData: action.similarMovieData};
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.page};
        case SET_COLLECTION_ID:
            return {...state, collection: {...state.collection, id: action.collectionId}};
        case SET_COLLECTION_DATA:
            return {...state, collection: {...state.collection, data: action.collectionData}};
        case SET_VIDEO_KEY:
            return {...state, videoKey: action.videoKey};
        case TOGGLE_VIDEO:
            return {...state, isTrailerOpen: !state.isTrailerOpen};
        case SET_CAST:
            return {...state, movieCast: action.castData};
        case SET_REVIEWS:
            return {
                ...state,
                reviews: {
                    ...state.reviews,
                    data: action.reviewsData,
                    totalPages: action.reviewsTotalPages
                }
            };
        case SET_CURRENT_REVIEW_PAGE:
            return {
                ...state,
                reviews: {
                    ...state.reviews,
                    currentPage: action.reviewPage,
                }
            };
        default:
            return {...state};
    }
};
type TSearchMovie = {type: typeof ON_SEARCH_MOVIE, searchedText: string}
export const searchMovie = (searchedText: string): TSearchMovie => ({type: ON_SEARCH_MOVIE, searchedText});
type TSetMovieData = {type: typeof SET_MOVIES, movieData: Array<MovieItemType>}
export const setMovieData = (movieData: Array<MovieItemType>):TSetMovieData  => ({type: SET_MOVIES, movieData});
type TSetSimilarMovieData = {type: typeof SET_SIMILAR_MOVIES, similarMovieData: Array<MovieBySearch>}
export const setSimilarMovieData = (similarMovieData: Array<MovieBySearch>): TSetSimilarMovieData => ({type: SET_SIMILAR_MOVIES, similarMovieData});
type TSetTotalPages = {type: typeof SET_TOTAL_PAGES, totalPages: number}
export const setTotalPages = (totalPages: number): TSetTotalPages => ({type: SET_TOTAL_PAGES, totalPages});
type TSetCurrentPage = {type: typeof SET_CURRENT_PAGE, page: number}
export const setCurrentPage = (page: number): TSetCurrentPage => ({type: SET_CURRENT_PAGE, page});
type TSetCurrentMovie = {type: typeof SET_CURRENT_MOVIE, selectedMovie: SelectedMovieType}
export const setCurrentMovie = (selectedMovie: SelectedMovieType):TSetCurrentMovie  => ({type: SET_CURRENT_MOVIE, selectedMovie});
type TSetCollectionId = {type: typeof SET_COLLECTION_ID, collectionId: number}
export const setCollectionId = (collectionId: number):TSetCollectionId  => ({type: SET_COLLECTION_ID, collectionId});
type TSetCollectionData =  {type: typeof SET_COLLECTION_DATA, collectionData: CollectionType}
export const setCollectionData = (collectionData: CollectionType):TSetCollectionData => ({type: SET_COLLECTION_DATA, collectionData});
type TSetCast = {type: typeof SET_CAST, castData:Array<CastPersonType>}
export const setCast = (castData: Array<CastPersonType>): TSetCast => ({type: SET_CAST, castData});
type TSetReviews = {type: typeof SET_REVIEWS, reviewsData: Array<ReviewDetails>, reviewsTotalPages: number}
export const setReviews = (reviewsData: Array<ReviewDetails>, reviewsTotalPages: number): TSetReviews=> ({type: SET_REVIEWS, reviewsData, reviewsTotalPages});
type TSetCurrentReviewPage = {type: typeof SET_CURRENT_REVIEW_PAGE, reviewPage: number}
export const setCurrentReviewPage = (reviewPage: number): TSetCurrentReviewPage => ({type: SET_CURRENT_REVIEW_PAGE, reviewPage});
type TSetVideoKey = {type: typeof SET_VIDEO_KEY, videoKey: string | null}
export const setVideoKey = (videoKey: string | null): TSetVideoKey => ({type: SET_VIDEO_KEY, videoKey});
type TOpenModuleVideo = {type: typeof TOGGLE_VIDEO}
export const openModuleVideo = (): TOpenModuleVideo => ({type: TOGGLE_VIDEO});

type ActionsType = TSearchMovie | TSetMovieData | TSetSimilarMovieData | TSetTotalPages | TSetCurrentPage | TSetCurrentMovie | TSetCollectionId | TSetCollectionData
| TSetCast | TSetReviews | TSetCurrentReviewPage | TSetVideoKey | TOpenModuleVideo

export default MoviePageReducer