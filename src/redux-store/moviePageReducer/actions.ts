import {CastPersonType, CollectionType, MovieBySearch, ReviewDetails, SelectedMovieType} from "../../types/shared.type";

export const MPactions = {
    searchMovie: (searchedText: string) => ({type: 'ON_SEARCH_MOVIE', searchedText} as const),
    setMovieData:  (movieData: Array<MovieBySearch>)  => ({type: 'SET_MOVIES', movieData} as const),
    setSimilarMovieData:  (similarMovieData: Array<MovieBySearch>) => ({type: 'SET_SIMILAR_MOVIES', similarMovieData} as const),
    setTotalPages:  (totalPages: number) => ({type: 'SET_TOTAL_PAGES', totalPages} as const),
    setCurrentPage:  (page: number) => ({type: 'SET_CURRENT_PAGE', page} as const),
    setCurrentMovie:  (selectedMovie: SelectedMovieType)  => ({type: 'SET_CURRENT_MOVIE', selectedMovie} as const),
    setCollectionId:  (collectionId: number | null)  => ({type: 'SET_COLLECTION_ID', collectionId} as const),
    setCollectionData:  (collectionData: CollectionType ) => ({type: 'SET_COLLECTION_DATA', collectionData} as const),
    setCast:  (castData: Array<CastPersonType>) => ({type: 'SET_CAST', castData} as const),
    setReviews:  (reviewsData: Array<ReviewDetails>, reviewsTotalPages: number) => ({type: 'SET_REVIEWS', reviewsData, reviewsTotalPages} as const),
    setCurrentReviewPage:  (reviewPage: number) => ({type: 'SET_CURRENT_REVIEW_PAGE', reviewPage} as const),
    setVideoKey:  (videoKey: string | null) => ({type: 'SET_VIDEO_KEY', videoKey} as const),
    openModuleVideo:  () => ({type: 'TOGGLE_VIDEO'} as const),
};