import axios from "axios";
import {CollectionType, SelectedMovieType} from "../types/shared.type";
import {
    CastType,
    ListType,
    MoviesBySearchType,
    ResponseType,
    ReviewsType,
    SimilarMoviesType,
    VideoType
} from "../types/response-api.type";

const API_KEY = '5b9377492f02937b4e7cf2b6508ab19f';
const ACCESS_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYmYiOjE2MTYxNzA1NjEsImF1ZCI6IjViOTM3NzQ5MmYwMjkzN2I0ZTdjZjJiNjUwOGFiMTlmIiwianRpIjoiMjkxNDIzNyIsInNjb3BlcyI6WyJhcGlfcmVhZCIsImFwaV93cml0ZSJdLCJ2ZXJzaW9uIjoxLCJzdWIiOiI2MDJlN2ZiYjIyM2UyMDAwM2U5ODU2ODUifQ.BaLxvYlC7YsKu-tmY6dMv2nYkRzlbTeYElXT4V3e_Rw'

export const movieInstance = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
});

export const listInstance = axios.create({
    baseURL: 'https://api.themoviedb.org/4/list/',
    headers: {
        "authorization": `Bearer ${ACCESS_KEY}`,
        "content-type": "application/json;charset=utf-8",
    }
});

export const movie = {
    getFilmsBySearch(searchedMovie: string, currentPage: number) {
        return movieInstance.get<MoviesBySearchType>(`search/movie?api_key=${API_KEY}&language=en-US&query=${searchedMovie}&page=${currentPage}&include_adult=false`).then(res => res.data)
    },
    getSelectedFilm(movieId: number) {
        return movieInstance.get<SelectedMovieType>(`movie/${movieId}?api_key=${API_KEY}&language=en-US`).then(res => res.data)
    },
    getSimilarMovies(movieId: number) {
        return movieInstance.get<SimilarMoviesType>(`/movie/${movieId}/recommendations?api_key=${API_KEY}&language=en-US&page=1`).then(res => res.data)
    },
    getVideo(movieId: number) {
        return movieInstance.get<VideoType>(`/movie/${movieId}/videos?api_key=${API_KEY}&language=en-US`).then(res => res.data)
    },
    getCollection(collectionId: number) {
        return movieInstance.get<CollectionType>(`/collection/${collectionId}?api_key=${API_KEY}&language=en-US`).then(res => res.data)
    },
    getCastAndCrew(collectionId: number) {
        return movieInstance.get<CastType>(`/movie/${collectionId}/credits?api_key=${API_KEY}&language=en-US`).then(res => res.data)
    },
    getReviews(movieId: number, currentPage: number) {
        return movieInstance.get<ReviewsType>(`movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=${currentPage}`).then(res => res.data)
    },
};

export const movieList = {
    setList(listName: string) {
        return listInstance.post(`https://api.themoviedb.org/4/list`, {
            "name": listName,
            "iso_639_1": "en"
        })
    },
    getList(listId: number) {
        return listInstance.get<ListType>(`${listId}?page=1&api_key=${API_KEY}`).then(res => res.data)
    },
    updateList(listId: number, MovieId: number) {
        return listInstance.post<ResponseType>(`${listId}/items`, {
            items: [
                {
                    "media_type": "movie",
                    "media_id": MovieId
                },
            ]
        })
    },
    removeItems(listId: number, MovieId: number) {
        return listInstance.delete<ResponseType>(`${listId}/items`, {
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


