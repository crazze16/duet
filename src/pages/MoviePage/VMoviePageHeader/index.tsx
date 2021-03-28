import React from 'react'

type PropsType = {
    onSearch: () => void
    searchMovie: (searchedMovie: string) => void
    searchedMovie: string
}

export const VMoviePageHeader: React.FC<PropsType> = (props) => {

    const {onSearch, searchMovie, searchedMovie} = props;

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