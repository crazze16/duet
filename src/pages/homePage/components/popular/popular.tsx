import React, {useEffect} from 'react';
import {SelectorSectionSC} from "../../mainPage.styles";
import {HPActions} from "redux-store/homePageReducer/actions";
import {useDispatch, useSelector} from "react-redux";
import {CombinedStateType} from "redux-store/rootReducer";
import {MultiSearchType} from "types/response-api.type";
import {search} from "api";
import {GenresSlider} from "../genresSlider/genresSlider";
import {Selector} from "../selector/selector";
import { NoResultsSC } from './popular.styles';
import { PopularSectionSlider } from '../popularSectionSlider/popularSectionSlider';

export const Popular: React.FC = () => {

    const dispatch = useDispatch();

    const popularData = useSelector((state: CombinedStateType) => state.HomePageReducer.popular);

    const setPopularType = (dataType: 'movies' | 'tv') => dispatch(HPActions.setPopularType(dataType));
    const setPopularData = (popularData: MultiSearchType) => dispatch(HPActions.setPopularData(popularData));
    const setMovieGenre = (genre: number) => dispatch(HPActions.setMovieGenre(genre));
    const removeMovieGenre = (genre: number) => dispatch(HPActions.removeMovieGenre(genre));

    useEffect(() => {
        (async () => {
            let movieData: MultiSearchType;
            if (popularData.active === 'movies') {
                movieData = await search.discoverMovie(popularData.genres.join(','));
            } else {
                movieData = await search.discoverTV(popularData.genres.join(','));
            }
            setPopularData(movieData);
        })()
    }, [popularData.active, popularData.genres]);

    return (
        <>
            <SelectorSectionSC>
                <h2>Popular now</h2>
                <Selector setType={setPopularType} data={popularData} sectionType={'popular'}/>
            </SelectorSectionSC>
            <GenresSlider data={popularData} addGenre={setMovieGenre} removeGenre={removeMovieGenre}/>
            {
                popularData.genres && popularData.data.results.length === 0 ?
                    (<NoResultsSC>No results</NoResultsSC>) :
                    (<PopularSectionSlider data={popularData && popularData.data.results}/>)
            }
        </>
    )
};