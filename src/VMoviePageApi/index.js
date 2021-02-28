import * as axios from "axios";
const API_KEY = '5b9377492f02937b4e7cf2b6508ab19f'
export const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
});

export const movie = {
    getFilmsBySearch(searchedMovie, currentPage){
       return instance.get(`search/movie?api_key=${API_KEY}&language=en-US&query=${searchedMovie}&page=${currentPage}&include_adult=false`)
    },
    getSelectedFilm(movieId){
        return instance.get(`movie/${movieId}?api_key=${API_KEY}&language=en-US`)
    },

    getSimilarMovies(movieId){
        return instance.get(`/movie/${movieId}/recommendations?api_key=${API_KEY}&language=en-US&page=1`)
    },
    getVideo(movieId){
        return instance.get(`/movie/${movieId}/videos?api_key=${API_KEY}&language=en-US`)
    },
    getCollection(collectionId){
        return instance.get(`/collection/${collectionId}?api_key=${API_KEY}&language=en-US`)
    },
    getCastAndCrew(collectionId){
        return instance.get(`/movie/${collectionId}/credits?api_key=${API_KEY}&language=en-US`)
    },
    getReviews(movieId){
        return instance.get(`movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`)
                            // movie/320288/reviews?api_key=5b9377492f02937b4e7cf2b6508ab19f&language=en-US&page=1
    },
};

