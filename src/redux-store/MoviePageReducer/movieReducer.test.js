import {MoviePageReducer, searchMovie} from "./index";

test('renders learn react link', () => {
    let action = searchMovie('Spider-Man');
    let initialState = {
        searchedMovie: null,
    };
    let newState = MoviePageReducer(initialState, action)
    expect(newState.searchedMovie.length).toBeGreaterThan(0)
});
