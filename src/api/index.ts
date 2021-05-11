import axios from "axios";
import {CollectionType, SelectedMovieType} from "../types/shared.type";
import {
    CastType, ListType, MoviesBySearchType, TVShowResponseType, PersonCreditsType, PopularPersonType,
    ResponseType, ReviewsType, SimilarMoviesType, VideoType, MultiSearchType, NowPlayingType
} from "../types/response-api.type";
import {DetailsType, PersonSocialType} from "types/personPage/personPage.type";

const API_KEY = '5b9377492f02937b4e7cf2b6508ab19f';
const ACCESS_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYmYiOjE2MTYxNzA1NjEsImF1ZCI6IjViOTM3NzQ5MmYwMjkzN2I0ZTdjZjJiNjUwOGFiMTlmIiwianRpIjoiMjkxNDIzNyIsInNjb3BlcyI6WyJhcGlfcmVhZCIsImFwaV93cml0ZSJdLCJ2ZXJzaW9uIjoxLCJzdWIiOiI2MDJlN2ZiYjIyM2UyMDAwM2U5ODU2ODUifQ.BaLxvYlC7YsKu-tmY6dMv2nYkRzlbTeYElXT4V3e_Rw';

export const baseInstance = axios.create({
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
    getSelectedFilm(movieId: number) {
        return baseInstance.get<SelectedMovieType>(`movie/${movieId}?api_key=${API_KEY}&language=en-US`).then(res => res.data)
    },
    getSimilarMovies(movieId: number) {
        return baseInstance.get<SimilarMoviesType>(`movie/${movieId}/recommendations?api_key=${API_KEY}&language=en-US&page=1`).then(res => res.data)
    },
    getVideo(movieId: number) {
        return baseInstance.get<VideoType>(`movie/${movieId}/videos?api_key=${API_KEY}&language=en-US`).then(res => res.data)
    },
    getCollection(collectionId: number) {
        return baseInstance.get<CollectionType>(`collection/${collectionId}?api_key=${API_KEY}&language=en-US`).then(res => res.data)
    },
    getCastAndCrew(collectionId: number) {
        return baseInstance.get<CastType>(`movie/${collectionId}/credits?api_key=${API_KEY}&language=en-US`).then(res => res.data)
    },
    getReviews(movieId: number, currentPage: number) {
        return baseInstance.get<ReviewsType>(`movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=${currentPage}`).then(res => res.data)
    },
    getNowPlaying(page = 1){
        return baseInstance.get<NowPlayingType>(`movie/now_playing?api_key=${API_KEY}&language=en-US&page=${page}`).then(res => res.data)
    },
    getPopular(page = 1){
        return baseInstance.get<MoviesBySearchType>(`movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`).then(res => res.data)
    },
    getTopRated(page = 1){
        return baseInstance.get<MoviesBySearchType>(`movie/top_rated?api_key=${API_KEY}&language=en-US&page=${page}`).then(res => res.data)
    },
};

export const TVShow = {
  getPopular(page = 1){
      return baseInstance.get<MultiSearchType>(`tv/popular?api_key=${API_KEY}&language=en-US&page=${page}`).then(res => res.data)
  },
  getAiringToday(page = 1){
      return baseInstance.get<TVShowResponseType>(`tv/airing_today?api_key=${API_KEY}&language=en-US&page=${page}`).then(res => res.data)
  },
  getOnTheAir(page = 1){
      return baseInstance.get<TVShowResponseType>(`tv/on_the_air?api_key=${API_KEY}&language=en-US&page=${page}`).then(res => res.data)
  },
};

export const search = {
    movieSearch(searchedMovie: string, currentPage: number) {
        return baseInstance.get<MoviesBySearchType>(`search/movie?api_key=${API_KEY}&language=en-US&query=${searchedMovie}&page=${currentPage}&include_adult=false`).then(res => res.data)
    },
    multiSearch( searchedText: string, page = 1) {
        return baseInstance.get<MultiSearchType>(`search/multi?api_key=${API_KEY}&language=en-US&query=${searchedText}&page=${page}&include_adult=false`).then(res => res.data)
    },
    discoverMovie(genre?: string | number, page = 1) {
        return baseInstance.get<MultiSearchType>(`discover/movie?sort_by=popularity.desc&${genre && `with_genres=${genre}`}&page=${page}&region=RU&api_key=${API_KEY}`).then(res => res.data)
    },
    discoverTV(genre?: string | number, page = 1) {
        return baseInstance.get<MultiSearchType>(`discover/tv?sort_by=popularity.desc&${genre && `with_genres=${genre}`}&page=${page}&region=RU&api_key=${API_KEY}`).then(res => res.data)
    },
};

export const trending = {
    getTrending(page = 1, interval: 'day' | 'week' = 'week'){
        return baseInstance.get<MultiSearchType>(`https://api.themoviedb.org/3/trending/tv|movie/${interval}?api_key=${API_KEY}&page=${page}`).then(res => res.data)
    }
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

export const people = {
    getDetails(personId: number){
        return baseInstance.get<DetailsType>(`person/${personId}?api_key=${API_KEY}&language=en-US`).then(res => res.data)
    },
    getPersonCredits(personId: number){
        return baseInstance.get<PersonCreditsType>(`person/${personId}/combined_credits?api_key=${API_KEY}&language=en-US`).then(res => res.data)
    },
    getPersonSocialLinks(personId: number){
        return baseInstance.get<PersonSocialType>(`person/${personId}/external_ids?api_key=${API_KEY}&language=en-US`).then(res => res.data)
    },
    getPopular(page = 1){
        return baseInstance.get<PopularPersonType>(`person/popular?api_key=${API_KEY}&language=en-US&page=${page}`).then(res => res.data)
    }
};


