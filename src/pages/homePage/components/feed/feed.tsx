import React, {useEffect} from 'react';
import {search} from "api";
import {useDispatch, useSelector} from "react-redux";
import {HPActions} from "redux-store/homePageReducer/actions";
import {MultiSearchType} from "types/response-api.type";
import {CombinedStateType} from "redux-store/rootReducer";
import {SlideElement} from "../body/body";
import {ElementContainerSC, FeedListSC, UploadBTNSC, WrapperSC, NoResultsSC} from './feed.styles';
import {MovieBySearch} from "types/shared.type";
import {SelectorSectionSC} from "../../mainPage.styles";
import {GenresSlider} from '../genresSlider/genresSlider';
import {Selector} from "../selector/selector";

export const Feed: React.FC = () => {

    const dispatch = useDispatch();

    const setMovieFeed = (movieData: MultiSearchType) => dispatch(HPActions.setMovieFeed(movieData));
    const addMovieFeed = (movieData: Array<MovieBySearch>) => dispatch(HPActions.addMovieFeed(movieData));
    const setFeedPage = (page: number) => dispatch(HPActions.setFeedPage(page));
    const setFeedType = (dataType: 'tv' | 'movies') => dispatch(HPActions.setFeedType(dataType));
    const addFeedGenre = (genre: number) => dispatch(HPActions.addFeedGenre(genre));
    const removeFeedGenre = (genre: number) => dispatch(HPActions.removeFeedGenre(genre));

    const discoverData = useSelector((state: CombinedStateType) => state.HomePageReducer.feed);

    useEffect(() => {
        dispatch(HPActions.setAsyncFeedData(discoverData))
    }, [discoverData.active, discoverData.genres]);

    useEffect(() => {
        (async () => {
            let feedData: MultiSearchType;
            if (discoverData.active === "movies" && discoverData.data.page !== 1) {
                feedData = await search.discoverMovie(discoverData.genres.join(','), discoverData.data.page);
                addMovieFeed(feedData.results);
            } else if (discoverData.active === "tv" && discoverData.data.page !== 1) {
                feedData = await search.discoverTV(discoverData.genres.join(','), discoverData.data.page);
                addMovieFeed(feedData.results);
            }
        })()
    }, [discoverData.data.page]);

    return (
        <>
            <SelectorSectionSC>
                <h2>Discover</h2>
                <Selector setType={setFeedType} data={discoverData} sectionType={'feed'}/>
            </SelectorSectionSC>
            <GenresSlider data={discoverData} addGenre={addFeedGenre} removeGenre={removeFeedGenre}/>
            <WrapperSC>
                <FeedListSC>
                    {
                        (discoverData.genres && discoverData.data.results.length === 0) ?
                            (<NoResultsSC>No results</NoResultsSC>) :
                            (
                                discoverData.data.results && discoverData.data.results.map((item, index) =>
                                    <ElementContainerSC key={index}>
                                        <SlideElement
                                            title={item.title || item.name}
                                            poster={item.poster_path}
                                            date={(item.release_date && item.release_date.slice(0, 4)) || (item.first_air_date && item.first_air_date)}
                                            vote={item.vote_average}
                                            id={item.id}
                                            overview={item.overview}
                                        />
                                    </ElementContainerSC>)
                            )
                    }
                </FeedListSC>
                {
                    (discoverData.genres && discoverData.data.results.length === 0) ?
                        ('') :
                        (<UploadBTNSC onClick={() => setFeedPage(discoverData.data.page + 1)}/>)
                }
            </WrapperSC>
        </>
    )
};