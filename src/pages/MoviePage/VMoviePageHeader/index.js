import React from 'react'

export const VMoviePageHeader = (props) => {

    const {buttonSearch} = props;

    let onSearch = (event) => {
        props.searchMovie(event.target.value)
    };

    return (
        <div>
            <input type="text" onChange={onSearch}/>
            <button onClick={buttonSearch}>search</button>
        </div>
    )
};