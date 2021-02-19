const ON_SEARCH_MOVIE = 'ON_SEARCH_MOVIE';
const SET_MOVIES = 'SET_MOVIES';
const SET_TOTAL_PAGES = 'SET_TOTAL_PAGES';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';

let initialState = {
    searchedMovie: null,
    resultMoviesData: [],
    currentPage: 1,
    totalPages: null,
};

export const MoviePageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ON_SEARCH_MOVIE:
            return {...state, searchedMovie: action.searchedText};
        case SET_MOVIES:
           return {...state, resultMoviesData: action.movieData};
        case SET_TOTAL_PAGES:
           return {...state, totalPages: action.totalPages};
        case SET_CURRENT_PAGE:
           return {...state, currentPage: action.page};
        default:
            return {...state};
    }
};

export const searchMovie = (searchedText) => ({type: ON_SEARCH_MOVIE, searchedText});
export const setMovieData = (movieData) => ({type: SET_MOVIES, movieData});
export const setTotalPages = (totalPages) => ({type: SET_TOTAL_PAGES, totalPages});
export const setCurrentPage = (page) => ({type: SET_CURRENT_PAGE, page});


export default MoviePageReducer