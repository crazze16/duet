import {CastCreditsType, CrewCreditsType, PopularPersonDataType} from "./personPage/personPage.type";
import {CastPersonType, MovieBySearch, ReviewDetails, TVShowResultType} from "./shared.type";

export type SimilarMoviesType = {
    page: number
    results: Array<MovieBySearch>
    total_pages: number
    total_results: number
}
export type VideoType = {
    id: number
    results: Array<{
        id: string
        iso_639_1: string
        iso_3166_1: string
        key: string
        name: string
        site: string
        size: number
        type: string
    }>
}
export type CastType = {
    id: number
    cast: Array<CastPersonType>
    crew: Array<object>
}
export type ReviewsType = {
    id: number
    page: number
    results: Array<ReviewDetails>
    total_pages: number
    total_results: number
}
export type ListType = {
    average_rating: number
    backdrop_path: null | string
    comments: object
    created_by: {gravatar_hash: string, id: string, name: string, username: string}
    description: string
    id: number
    iso_639_1: string
    iso_3166_1: string
    name: string
    object_ids: object
    page: number
    poster_path: null | string
    public: boolean
    results: Array<MovieBySearch>
    length: number
    revenue: number
    runtime: number
    sort_by: string
    total_pages: number
    total_results: number
}
export type ResponseType = {
    status_message: string
    results: [
        {
            media_type: string
            media_id: number
            success: boolean
        }
    ],
    success: boolean
    status_code: number
}
export type PersonCreditsType = {
    cast: Array<CastCreditsType>,
    crew: Array<CrewCreditsType>,
    id: number
}
export type PopularPersonType = {
    page: number
    results: Array<PopularPersonDataType>
    total_results: number
    total_pages: number
}

export type TVShowResponseType = {
    page: number
    results: Array<TVShowResultType>
    total_results: number
    total_pages: number
}
export type NowPlayingType = {
    page: number
    results: Array<MovieBySearch>
    total_results: number
    dates: {
        maximum: string
        minimum: string
    }
    total_pages: number
}



export type MoviesBySearchType = {
    page: number
    results: Array<MovieBySearch>
    total_pages: number
    total_results: number
}
export type MultiSearchType = {
    page: number
    results: Array<MovieBySearch>
    total_results: number
    total_pages: number
}
