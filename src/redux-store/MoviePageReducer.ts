import {
    CastPersonType,
    CollectionType,
    MovieBySearch,
    ReviewDetails,
    SelectedMovieType
} from "../types/types";
import { InferActionsTypes} from "./index";


export type InitialStateType = typeof initialState


let initialState = {
    searchedMovie: '',
    resultMoviesData: [] as Array<MovieBySearch>,
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
        data: [] as Array<ReviewDetails> ,
        currentPage: 1,
        totalPages: null as number | null,
    },

};

 const MoviePageReducer = (state = initialState, action: InferActionsTypes<typeof actions>): InitialStateType => {
    switch (action.type) {
        case 'ON_SEARCH_MOVIE':
            return {...state, searchedMovie: action.searchedText};
        case 'SET_MOVIES':
            return {...state, resultMoviesData: action.movieData};
        case 'SET_CURRENT_MOVIE':
            return {...state, selectedMovieData: action.selectedMovie};
        case 'SET_TOTAL_PAGES':
            return {...state, totalPages: action.totalPages};
        case 'SET_SIMILAR_MOVIES':
            return {...state, similarMoviesData: action.similarMovieData};
        case 'SET_CURRENT_PAGE':
            return {...state, currentPage: action.page};
        case 'SET_COLLECTION_ID':
            return {...state, collection: {...state.collection, id: action.collectionId}};
        case 'SET_COLLECTION_DATA':
            return {...state, collection: {...state.collection, data: action.collectionData}};
        case 'SET_VIDEO_KEY':
            return {...state, videoKey: action.videoKey};
        case 'TOGGLE_VIDEO':
            return {...state, isTrailerOpen: !state.isTrailerOpen};
        case 'SET_CAST':
            return {...state, movieCast: action.castData};
        case 'SET_REVIEWS':
            return {
                ...state,
                reviews: {
                    ...state.reviews,
                    data: action.reviewsData,
                    totalPages: action.reviewsTotalPages
                }
            };
        case 'SET_CURRENT_REVIEW_PAGE':
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

export const actions = {
    searchMovie: (searchedText: string) => ({type: 'ON_SEARCH_MOVIE', searchedText} as const),
    setMovieData:  (movieData: Array<MovieBySearch>)  => ({type: 'SET_MOVIES', movieData} as const),
    setSimilarMovieData:  (similarMovieData: Array<MovieBySearch>) => ({type: 'SET_SIMILAR_MOVIES', similarMovieData} as const),
    setTotalPages:  (totalPages: number) => ({type: 'SET_TOTAL_PAGES', totalPages} as const),
    setCurrentPage:  (page: number) => ({type: 'SET_CURRENT_PAGE', page} as const),
    setCurrentMovie:  (selectedMovie: SelectedMovieType)  => ({type: 'SET_CURRENT_MOVIE', selectedMovie} as const),
    setCollectionId:  (collectionId: number | null)  => ({type: 'SET_COLLECTION_ID', collectionId} as const),
    setCollectionData:  (collectionData: CollectionType) => ({type: 'SET_COLLECTION_DATA', collectionData} as const),
    setCast:  (castData: Array<CastPersonType>) => ({type: 'SET_CAST', castData} as const),
    setReviews:  (reviewsData: Array<ReviewDetails>, reviewsTotalPages: number) => ({type: 'SET_REVIEWS', reviewsData, reviewsTotalPages} as const),
    setCurrentReviewPage:  (reviewPage: number) => ({type: 'SET_CURRENT_REVIEW_PAGE', reviewPage} as const),
    setVideoKey:  (videoKey: string | null) => ({type: 'SET_VIDEO_KEY', videoKey} as const),
    openModuleVideo:  () => ({type: 'TOGGLE_VIDEO'} as const),
 };



export default MoviePageReducer