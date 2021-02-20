import React from 'react'
import {VMoviePageItem} from "./VMoviePageItem";
import {connect} from "react-redux";
import {VMoviesListSC, VMoviesPages} from "./styles";
import {setCurrentPage, setMovieData} from "../../../../redux-store/MoviePageReducer";
import {search} from "../../../../VMoviePageApi";

const VMoviePageBody = (props) => {

    let resultMoviesData = props.resultMoviesData.map(item => <VMoviePageItem poster={item['poster_path']}
                                                                              id={item.id}
                                                                              url={props.url}
                                                                              title={item.title}/>);
    let totalPagesArr = [];
    let totalPages = props.totalPages;
    for (let i = 1; i <= totalPages; i++) {
        totalPagesArr.push(i)
    }

    let selectPage = (item) => {
        props.setCurrentPage(item);
        search.getFilmsBySearch(props.searchedMovie, item)
            .then(response => {
                props.setMovieData(response.data.results);
            })
    };

    return (
        <>
            {totalPagesArr.map(item => <VMoviesPages onClick={() => selectPage(item)}>{item}
            </VMoviesPages>)}
            <VMoviesListSC>
                {resultMoviesData}
            </VMoviesListSC>
        </>
    )
};

let mapStateToProps = (state) => ({
    resultMoviesData: state.MoviePageReducer.resultMoviesData,
    totalPages: state.MoviePageReducer.totalPages,
    searchedMovie: state.MoviePageReducer.searchedMovie,
    currentPage: state.MoviePageReducer.currentTarget,
});

export const VMoviePageBodyContainer = connect(mapStateToProps, {setCurrentPage, setMovieData})(VMoviePageBody);