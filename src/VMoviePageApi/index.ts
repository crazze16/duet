import axios from "axios";
import {CastPersonType, CollectionType, MovieBySearch, ReviewDetails, SelectedMovieType} from "../types/types";

const API_KEY = '5b9377492f02937b4e7cf2b6508ab19f';
const ACCESS_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYmYiOjE2MTYxNzA1NjEsImF1ZCI6IjViOTM3NzQ5MmYwMjkzN2I0ZTdjZjJiNjUwOGFiMTlmIiwianRpIjoiMjkxNDIzNyIsInNjb3BlcyI6WyJhcGlfcmVhZCIsImFwaV93cml0ZSJdLCJ2ZXJzaW9uIjoxLCJzdWIiOiI2MDJlN2ZiYjIyM2UyMDAwM2U5ODU2ODUifQ.BaLxvYlC7YsKu-tmY6dMv2nYkRzlbTeYElXT4V3e_Rw'

export const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',

});
export const list = axios.create({
    baseURL: 'https://api.themoviedb.org/4/list/',
    headers: {
        "authorization": `Bearer ${ACCESS_KEY}`,
        "content-type": "application/json;charset=utf-8",

    }
});


export const movie = {
    getFilmsBySearch(searchedMovie: string, currentPage: number) {
        return instance.get<MoviesBySearchType>(`search/movie?api_key=${API_KEY}&language=en-US&query=${searchedMovie}&page=${currentPage}&include_adult=false`).then(res => res.data)
    },
    getSelectedFilm(movieId: number) {
        return instance.get<SelectedMovieType>(`movie/${movieId}?api_key=${API_KEY}&language=en-US`).then(res => res.data)
    },

    getSimilarMovies(movieId: number) {
        return instance.get<SimilarMoviesType>(`/movie/${movieId}/recommendations?api_key=${API_KEY}&language=en-US&page=1`).then(res => res.data)
    },
    getVideo(movieId: number) {
        return instance.get<VideoType>(`/movie/${movieId}/videos?api_key=${API_KEY}&language=en-US`).then(res => res.data)
    },
    getCollection(collectionId: number) {
        return instance.get<CollectionType>(`/collection/${collectionId}?api_key=${API_KEY}&language=en-US`).then(res => res.data)
    },
    getCastAndCrew(collectionId: number) {
        return instance.get<CastType>(`/movie/${collectionId}/credits?api_key=${API_KEY}&language=en-US`).then(res => res.data)
    },
    getReviews(movieId: number, currentPage: number) {
        return instance.get<ReviewsType>(`movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=${currentPage}`).then(res => res.data)
    },
    setList(listName: string) {
        return list.post(`https://api.themoviedb.org/4/list`, {
            "name": listName,
            "iso_639_1": "en"
        })
    },
    getList(listId: number) {
        return list.get<ListType>(`${listId}?page=1&api_key=${API_KEY}`).then(res => res.data)
    },
    updateList(listId: number, MovieId: number) {
        return list.post<ResponseType>(`${listId}/items`, {
            items: [
                {
                    "media_type": "movie",
                    "media_id": MovieId
                },
            ]
        })
    },
    removeItems(listId: number, MovieId: number) {
        return list.delete<ResponseType>(`${listId}/items`, {
            data: {
                items: [
                    {
                        "media_type": "movie",
                        "media_id": MovieId
                    }
                ]
            }
        })
    }
};

export type MoviesBySearchType = {
    page: number
    results: Array<MovieBySearch>
    total_pages: number
    total_results: number
}
type SimilarMoviesType = {
    page: number
    results: Array<MovieBySearch>
    total_pages: number
    total_results: number
}
type VideoType = {
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
type CastType = {
    id: number
    cast: Array<CastPersonType>
    crew: Array<object>
}
type ReviewsType = {
    id: number
    page: number
    results: Array<ReviewDetails>
    total_pages: number
    total_results: number
}
type ListType = {
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
type ResponseType = {
    "status_message": string
    "results": [
        {
            "media_type": string
            "media_id": number
            "success": boolean
        }
    ],
    "success": boolean
    "status_code": number
}
