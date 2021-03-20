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
const CREATE_FAVOURITE_MOVIES_LIST = 'CREATE_FAVOURITE_MOVIES_LIST';
const SET_FAVOURITE_MOVIES_LIST = 'SET_FAVOURITE_MOVIES_LIST';

let initialState = {
    searchedMovie: null,
    resultMoviesData: [],
    selectedMovieData: [],
    similarMoviesData: [],
    currentPage: null,
    totalPages: null,
    videoKey: '',
    isTrailerOpen: false,
    collection: {
        id: null,
        data: []
    },
    movieCast: [],
    reviews: {
        data: [],
        currentPage: 1,
        totalPages: null,
    },
    favouritesMovies: {
        listId: 7082579,
        listData: []
    },
};

export const MoviePageReducer = (state = initialState, action) => {
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
        case CREATE_FAVOURITE_MOVIES_LIST:
            return {
                ...state,
                favouritesMovies: {
                    ...state.favouritesMovies,
                    listId: action.listId
                }
            };
        case SET_FAVOURITE_MOVIES_LIST:
            return {
                ...state,
                favouritesMovies: {
                    ...state.favouritesMovies,
                    listData: action.listData
                }
            };
        default:
            return {...state};
    }
};

export const searchMovie = (searchedText) => ({type: ON_SEARCH_MOVIE, searchedText});
export const setMovieData = (movieData) => ({type: SET_MOVIES, movieData});
export const setSimilarMovieData = (similarMovieData) => ({type: SET_SIMILAR_MOVIES, similarMovieData});
export const setTotalPages = (totalPages) => ({type: SET_TOTAL_PAGES, totalPages});
export const setCurrentPage = (page) => ({type: SET_CURRENT_PAGE, page});
export const setCurrentMovie = (selectedMovie) => ({type: SET_CURRENT_MOVIE, selectedMovie});
export const setCollectionId = (collectionId) => ({type: SET_COLLECTION_ID, collectionId});
export const setCollectionData = (collectionData) => ({type: SET_COLLECTION_DATA, collectionData});
export const setCast = (castData) => ({type: SET_CAST, castData});
export const setReviews = (reviewsData, reviewsTotalPages) => ({type: SET_REVIEWS, reviewsData, reviewsTotalPages});
export const setCurrentReviewPage = (reviewPage) => ({type: SET_CURRENT_REVIEW_PAGE, reviewPage});
export const setVideoKey = (videoKey) => ({type: SET_VIDEO_KEY, videoKey});
export const openModuleVideo = () => ({type: TOGGLE_VIDEO});
export const createFavouriteMoviesList = (listId) => ({type: CREATE_FAVOURITE_MOVIES_LIST, listId});
export const getFavouriteMoviesList = (listData) => ({type: SET_FAVOURITE_MOVIES_LIST, listData});


export default MoviePageReducer