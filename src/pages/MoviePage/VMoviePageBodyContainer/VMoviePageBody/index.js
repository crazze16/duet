import React from 'react'
import {VMoviePageItem} from "./VMoviePageItem";
import {connect} from "react-redux";
import {Page, VMoviesListSC, VMoviesPages} from "./styles";
import {setCurrentPage, setMovieData} from "../../../../redux-store/MoviePageReducer";
import {movie} from "../../../../VMoviePageApi";

const VMoviePageBody = (props) => {

    const {totalPages, resultMoviesData, setCurrentPage, searchedMovie, setMovieData, currentPage} = props;

    let resultMoviesDataArr = resultMoviesData.map((item, index) => <VMoviePageItem poster={item['poster_path']}
                                                                                    id={item.id}
                                                                                    url={props.url}
                                                                                    title={item.title}
                                                                                    key={index}
    />);


    const pagination = (range) => {
        const totalPagesArr = [];
        for (let i = 1; i <= totalPages; i++) {
            totalPagesArr.push(i)
        }
        const mapping = (arr) => arr.map(
            (item, index) =>
                <VMoviesPages key={index} onClick={() => selectPage(item)} isActive={item === currentPage ? '800' : '500'}>
                    {item}
                </VMoviesPages>
        );
        const extremePages = (num) => <VMoviesPages onClick={() => selectPage(num)}>{num}</VMoviesPages>;
        const neighbours = (range - 1) / 2;
        const rightLimit = totalPagesArr.length - neighbours;
        if (currentPage >= neighbours + 1 && currentPage < rightLimit) {
            return (
                <div>
                    {
                         currentPage >= neighbours + 2 ? extremePages(1) : ''
                    }
                    {
                        mapping(totalPagesArr.filter(i => i >= currentPage - neighbours && i <= currentPage + neighbours))
                    }
                    {extremePages(totalPagesArr.length)}
                </div>
            )
        } else if (currentPage < neighbours + 1) {
            return (
                <div>
                    {
                        mapping(totalPagesArr.filter(i => i <= range))
                    }
                    {currentPage !== null && extremePages(totalPagesArr.length)}
                </div>
            )
        } else if (currentPage >= rightLimit) {
            return (
                <div>
                    {extremePages(1)}
                    {
                        mapping(totalPagesArr.filter(i => i >= (totalPagesArr.length - neighbours * 2) && i <= totalPagesArr.length))
                    }
                </div>
            )
        }
    };

    let selectPage = (item) => {
        setCurrentPage(item);
        movie.getFilmsBySearch(searchedMovie, item)
            .then(response => {
                setMovieData(response.data.results);
            })
    };
    return (
        <>
            {
                pagination(9)
            }
            <VMoviesListSC>
                {resultMoviesDataArr}
            </VMoviesListSC>
        </>
    )
};

let mapStateToProps = (state) => ({
    resultMoviesData: state.MoviePageReducer.resultMoviesData,
    totalPages: state.MoviePageReducer.totalPages,
    searchedMovie: state.MoviePageReducer.searchedMovie,
    currentPage: state.MoviePageReducer.currentPage,
});

export const VMoviePageBodyContainer = connect(mapStateToProps, {setCurrentPage, setMovieData})(VMoviePageBody);