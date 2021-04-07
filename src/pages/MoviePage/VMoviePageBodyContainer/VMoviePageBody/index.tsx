import React from 'react'
import {VMoviePageItem} from "./VMoviePageItem";
import {connect} from "react-redux";
import {VMoviesListSC, VMoviesPagesSC} from "./styles";
import {movie} from "../../../../VMoviePageApi";
import {CombinedStateType} from "../../../../redux-store";
import {MovieBySearch, MovieItemType} from '../../../../types/types';
import {actions} from "../../../../redux-store/MoviePageReducer";
import { useLocation } from 'react-router-dom';


type MapStatePropsType = {
    searchedMovie: string
    totalPages: number | null
    resultMoviesData: Array<MovieItemType>
    currentPage: number | null

}

type MapDispatchPropsType = {
    setCurrentPage: (page: number) => void
    setMovieData: (MovieData: Array<MovieBySearch>) => void
}

type PropsType = MapDispatchPropsType & MapStatePropsType



const VMoviePageBody: React.FC<PropsType> = (props) => {

    let location = useLocation();
    const {totalPages, resultMoviesData, setCurrentPage, searchedMovie, setMovieData, currentPage} = props;

    let resultMoviesDataArr = resultMoviesData.map((item, index) => <VMoviePageItem poster={item.poster_path}
                                                                                    id={item.id}
                                                                                    url={location.pathname}
                                                                                    title={item.title}
                                                                                    key={index}
    /> );



    const pagination = (range: number) => {
        const totalPagesArr = [];
        if(totalPages !== null)
        for (let i = 1; i <= totalPages; i++) {
            totalPagesArr.push(i)
        }
        const mapping = (arr: Array<number>) => arr.map(
            (item, index) =>
                <VMoviesPagesSC key={index} onClick={() => selectPage(item)} isActive={item === currentPage ? '800' : '500'}>
                    {item}
                </VMoviesPagesSC>
        );
        const extremePages = (num: number) => <VMoviesPagesSC onClick={() => selectPage(num)}>{num}</VMoviesPagesSC>;
        const neighbours = (range - 1) / 2;
        const rightLimit = totalPagesArr.length - neighbours;
        if(currentPage !== null)
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

    let selectPage = (item: number) => {
        setCurrentPage(item);
        movie.getFilmsBySearch(searchedMovie, item)
            .then((response) => {
                setMovieData(response.results);
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

let mapStateToProps = (state: CombinedStateType): MapStatePropsType => ({
    resultMoviesData: state.MoviePageReducer.resultMoviesData,
    totalPages: state.MoviePageReducer.totalPages,
    searchedMovie: state.MoviePageReducer.searchedMovie,
    currentPage: state.MoviePageReducer.currentPage,
});

export const VMoviePageBodyContainer = connect(mapStateToProps, {...actions})(VMoviePageBody);