import React from 'react'
import {useDispatch} from "react-redux";
import {actions} from "../../../redux-store/MoviePageReducer";

type PropsType = {
    onSearch: () => void
    searchedMovie: string
}

export const VMoviePageHeader: React.FC<PropsType> = (props) => {

    const {onSearch, searchedMovie} = props;

    const dispatch = useDispatch();
    const searchMovie = (searchedMovie: string) => dispatch(actions.searchMovie(searchedMovie))

    const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        searchMovie(event.target.value)
    };

    const onKeyHandler = (event: React.KeyboardEvent) => {
        if(event.key === 'Enter') {
            onSearch();
        }
    };

    return (
        <div>
            <input type="text" onChange={onInputChange} onKeyPress={onKeyHandler} value={searchedMovie}/>
            <button onClick={onSearch}>search</button>
        </div>
    )
};