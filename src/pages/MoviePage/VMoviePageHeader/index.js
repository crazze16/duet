import React from 'react'

export const VMoviePageHeader = (props) => {

    let onSearch = (searchedText) => {
        props.searchMovie(searchedText)
    };

    return (
        <div>
            <input type="text" onChange={(e) => onSearch(e.currentTarget.value)}/>
            <button onClick={() => props.buttonSearch()}>search</button>
        </div>
    )
};