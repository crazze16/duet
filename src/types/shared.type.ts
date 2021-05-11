export type MovieItemType = { id: number, title: string, poster_path: string, }
export type ReviewsType = { data: Array<ReviewDetails>, currentPage: number, totalPages: number | null }
export type ProdactionCompaniesType =  Array<{name: string, id: number, logo_path: string | null, origin_country: string }>
export type GenresType =  Array<{ id: number, name: string }>
export type MovieBySearch = {
    adult: boolean
    backdrop_path: string
    genre_ids: Array<number>
    id: number
    original_language: string
    original_title: string
    overview: string
    popularity: number
    poster_path: string
    release_date: string
    title: string
    video: boolean
    vote_average: number
    vote_count: number
    media_type?: string
    first_air_date?: string
    origin_country?: Array<string>
    name?: string
    original_name?: string
}
export type CastPersonType = {
    adult: boolean
    cast_id: number
    character: string
    credit_id: string
    gender: 1 | 2
    id: number
    known_for_department: string
    name: string
    order: number
    original_name: string
    popularity: number
    profile_path: string
}
export type SelectedMovieType = {
    adult: boolean
    backdrop_path: string | null
    belongs_to_collection: { id: number, name: string, poster_path: string | null, backdrop_path: string | null } | null
    budget: number
    genres: GenresType
    homepage: string | null
    id: number
    imdb_id: string | null
    original_language: string
    original_title: string
    overview: string | null
    popularity: number
    poster_path: string | null
    production_companies: ProdactionCompaniesType
    production_countries: Array<{ iso_3166_1: string, name: string }>
    release_date: string
    revenue: number
    runtime: number
    spoken_languages: Array<{ iso_3166_1: string, name: string }>
    status: string
    tagline: string | null
    title: string
    video: false
    vote_average: number
    vote_count: number
}
export type AuthorDetailsType = {
    name: string | null,
    username: string | null,
    avatar_path: string | null,
    rating: number |null
}
export type ReviewDetails = {
    author: string
    author_details: AuthorDetailsType
    content: string
    created_at: string
    id: string
    updated_at: string
    url: string
}
export type CollectionType = {
    backdrop_path: string
    id: number
    name: string
    overview: string
    parts: Array<MovieBySearch>
    poster_path: string
}
export type FavouriteMoviesType = {
    listId: number | null
    listData: Array<MovieBySearch>
    isFavourite: boolean
    isCreated: boolean
}
export type MoviePropsType = {
    poster?: string | null | undefined
    title?: string
    posterWidth?: 92 | 154 | 185 | 342 | 500 | 780  | 1280 | 'original'
    height?: number
    id?: number
    width?:number
    elipsis?: boolean
    backdrop?: string | null | undefined

}
type WheelOptionsType = {
    data: Array<object>
    translateLeft: number
    slidesCount: number
    wheelWidth: number
    wheelHeight: number
    startFrom: number,
}
export type SliderType = {
    wheelOptions: WheelOptionsType
    slideOptions: {
        type: 'poster_path' | 'backdrop_path'
        width?: 92 | 154 | 185 | 342 | 500 | 780 | 1280 | 'original'
        height?: number
    }
}
type PaginationOptionsType = {
    totalPages: number | null
    currentPage: number | null
    selectPage?: any
    range: number
}
export type PaginationType = {
    options: PaginationOptionsType
}
export type TVShowResultType = {
    poster_path: string | null
    popularity: number
    id: number
    backdrop_path: string | null
    vote_average: number
    overview: string
    first_air_date: string
    origin_country: Array<string>
    genre_ids: Array<number>
    original_language: string
    vote_count: number
    name: string
    original_name: string
    media_type?: string
}

