import {
    CastPersonType,
    CollectionType,
    MovieBySearch,
    ReviewDetails,
    SelectedMovieType
} from "../../types/shared.type";
import { InferActionsTypes} from "../rootReducer";
import {MPactions} from "./actions";


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
        data: {} as CollectionType | null
    },
    movieCast: [] as Array<CastPersonType>,
    reviews: {
        data: [] as Array<ReviewDetails> ,
        currentPage: 1,
        totalPages: null as number | null,
    },

};

 const MoviePageReducer = (state = initialState, action: InferActionsTypes<typeof MPactions>): InitialStateType => {
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





export default MoviePageReducer