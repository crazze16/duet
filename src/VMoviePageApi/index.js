import * as axios from "axios";

export const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
});

export const search = {
    getFilmsBySearch(searchedMovie, currentPage){
       return instance.get(`search/movie?api_key=5b9377492f02937b4e7cf2b6508ab19f&language=en-US&query=${searchedMovie}&page=${currentPage}&include_adult=false`)
    },
};