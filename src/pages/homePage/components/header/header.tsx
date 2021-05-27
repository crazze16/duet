import React, {ReactElement, useEffect, useState} from 'react'
import {onEnterHandler} from "helpers/functions";
import {HPActions} from "redux-store/homePageReducer/actions";
import {useDispatch, useSelector} from "react-redux";
import {CombinedStateType} from "redux-store/rootReducer";
import {
    HeaderSC,
    HeaderWrapperSC,
    InputWrapperSC,
    LinkSC,
    LinkWrapperSC,
    ModalGenresSC,
    ModalSearchSC,
    SearchIconSC
} from './header.styles';
import {NavLink, useHistory} from 'react-router-dom';
import {movieGenres, TVShowGenres} from 'shared/constants/constants';
import {FiSearch} from 'react-icons/fi';
import {IconContext} from 'react-icons';
import {ModalSearchElement} from '../modalSearch/modalSearch';
import {useOuterClick} from "hooks/useOuterClick";
import {ModalResultList} from '../modalResultsList/modalResultList';
import * as queryString from "querystring";
import {QueryParamsType} from "types/moviePage/header.type";

export const HomePageHeader: React.FC = () => {

    const dispatch = useDispatch();
    const history = useHistory();
    const modalRef = useOuterClick(() => setModalVisibility(false));

    const [modalVisibility, setModalVisibility] = useState<boolean>(false);
    const [modalList, setModalList] = useState(false);
    const [isSearched, setIsSearched] = useState(false);

    const searchedText = useSelector((state: CombinedStateType) => state.HomePageReducer.searchedText);
    const searchedResultsData = useSelector((state: CombinedStateType) => state.HomePageReducer.searchedResults.results);
    const currentPage = useSelector((state: CombinedStateType) => state.HomePageReducer.searchedResults.page);

    const setSearchedText = (searchedText: string) => dispatch(HPActions.setSearchedText(searchedText));
    const setSearchedPage = (page: number) => dispatch(HPActions.setSearchedPage(page));

    const parsed = queryString.parse(history.location.search.substr(1)) as { search: string, page: string };

    const onSearch = async (searchedText: string, page?: number) => {
        if (searchedText) {
            dispatch(HPActions.headerAsyncSearch(searchedText, page));
        }
    };

    const genresList = (genres: { [key: string]: number }):Array<ReactElement> => {
        const list = [];
        for (let key in genres) list.push({name: key, id: genres[key]});
        return list.map(item => <li key={item.id}>
            <NavLink to={`/${item.name}`}>
                {item.name}
            </NavLink>
        </li>);
    };

    useEffect(() => {
        const query: QueryParamsType = {};
        if (searchedText) query.search = searchedText;
        if (currentPage !== 1) query.page = String(currentPage);
        history.push({
            pathname: '/home',
            search: queryString.stringify(query)
        });
        onSearch(searchedText, currentPage)
    }, [searchedText, currentPage, isSearched]);

    useEffect(() => {
        if (parsed.page) setSearchedPage(+parsed.page);
        if (parsed.search) setModalList(true);
        setSearchedText(parsed.search);
    }, []);

    return (
        <HeaderWrapperSC>
            <HeaderSC>
                <LinkWrapperSC>
                        <LinkSC to='/home' activeClassName='active'>
                            home
                    </LinkSC>
                    <LinkSC to='/movies' activeClassName='active'>
                            movies
                        <ModalGenresSC>
                            <ul>
                                {
                                    genresList(movieGenres)
                                }
                            </ul>
                        </ModalGenresSC>
                    </LinkSC>
                    <LinkSC to='/series' activeClassName='active'>
                            series
                        <ModalGenresSC>
                            <ul>
                                {
                                    genresList(TVShowGenres)
                                }
                            </ul>
                        </ModalGenresSC>
                    </LinkSC>
                </LinkWrapperSC>
                <InputWrapperSC ref={modalRef}>
                    <input type="text"
                           onChange={
                               (e) => {
                                   setSearchedText(e.currentTarget.value);
                                   setModalVisibility(true);
                                   setSearchedPage(1);
                               }
                           }
                           onClick={() => setModalVisibility(true)}
                           value={searchedText}
                           onKeyPress={(evenKeyboardEvent) => searchedText && onEnterHandler(evenKeyboardEvent, () => {
                               setModalList(true);
                               setIsSearched(!isSearched);
                           })}
                    />
                    <SearchIconSC onClick={() => {
                        searchedText && setModalList(true);
                        setIsSearched(!isSearched);
                    }}>
                        <IconContext.Provider value={{size: '26px', color: 'white'}}>
                            <FiSearch/>
                        </IconContext.Provider>
                    </SearchIconSC>
                    <ModalSearchSC isVisible={modalVisibility && searchedText} ref={modalRef}>
                        {
                            searchedText && searchedResultsData.length ?
                                (
                                    searchedResultsData.slice(0, 6).map(item =>
                                        <ModalSearchElement
                                            key={item.id}
                                            title={item.title || item.name}
                                            vote={item.vote_average}
                                            date={item.first_air_date || item.release_date}
                                            type={item.media_type}
                                            id={item.id}
                                        />)
                                )
                                : (
                                    <div>No results</div>
                                )
                        }
                    </ModalSearchSC>
                </InputWrapperSC>
            </HeaderSC>
            <ModalResultList isShowed={modalList} closeModalWindow={setModalList}/>
        </HeaderWrapperSC>
    )
};