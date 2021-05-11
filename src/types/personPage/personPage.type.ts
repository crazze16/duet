export type CastCreditsType = {
    id: number
    original_language: string
    episode_count: number
    overview: string
    origin_country: Array<string>
    original_name: string
    genre_ids: Array<number>
    name: string
    media_type: 'tv' | 'movie'
    poster_path: string
    first_air_date: string
    vote_average: number
    vote_count: number
    character: string
    backdrop_path: string
    popularity: number
    credit_id: string
    release_date: string
    title: string
    original_title: string
    date?: string
}
export type CrewCreditsType = {
    adult: boolean
    backdrop_path: null | string
    credit_id: string
    department: string
    genre_ids: Array<number>
    id: number
    job: string
    media_type: string
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
}
export type PersonMovies = {
    poster_path: string
    adult: boolean
    overview:  string
    release_date: string
    original_title: string
    genre_ids: Array<number>
    id: number
    media_type: string
    original_language: string
    title: string
    backdrop_path: string
    popularity: number
    vote_count: number
    video: boolean
    vote_average: number
}
export type PopularPersonDataType = {
    profile_path: string
    adult: boolean
    id: number
    known_for: Array<PersonMovies>,
    name: string
    popularity: number
}
export type DetailsType = {
    birthday: string,
    known_for_department: string
    deathday: null | string
    id: number
    name: string
    also_known_as: Array<string>
    gender: number
    biography: string
    popularity: number
    place_of_birth: string
    profile_path: string
    adult: boolean
    imdb_id: string
    homepage: null | string
}
export type PersonSocialType = {
    imdb_id: string | null
    facebook_id: string | null
    freebase_mid: string | null
    freebase_id: string | null
    tvrage_id: number | null
    twitter_id: string | null
    id: number
    instagram_id: string | null
}