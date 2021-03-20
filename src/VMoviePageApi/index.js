import * as axios from "axios";
const API_KEY = '5b9377492f02937b4e7cf2b6508ab19f';
const ACCESS_KEY= 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYmYiOjE2MTYxNzA1NjEsImF1ZCI6IjViOTM3NzQ5MmYwMjkzN2I0ZTdjZjJiNjUwOGFiMTlmIiwianRpIjoiMjkxNDIzNyIsInNjb3BlcyI6WyJhcGlfcmVhZCIsImFwaV93cml0ZSJdLCJ2ZXJzaW9uIjoxLCJzdWIiOiI2MDJlN2ZiYjIyM2UyMDAwM2U5ODU2ODUifQ.BaLxvYlC7YsKu-tmY6dMv2nYkRzlbTeYElXT4V3e_Rw'
export const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',

});
export const list = axios.create({
    baseURL: 'https://api.themoviedb.org/4/list/',
    headers: {
        "authorization": `Bearer ${ACCESS_KEY}`,
        "content-type": "application/json;charset=utf-8"
    }
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
    getReviews(movieId, currentPage){
        return instance.get(`movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=${currentPage}`)
    },
    setList(listName){
        return list.post(`https://api.themoviedb.org/4/list`, {
            "name": listName,
            "iso_639_1": "en"
        })
    },
    getList(listId) {
        return list.get(`${listId}?page=1&api_key=${API_KEY}`)
    },
    updateList(listId, id) {
        return list.post(`${listId}/items`, {
            "items": [
                {
                    "media_type": "movie",
                    "media_id": id
                },
            ]
        })
    },
};

