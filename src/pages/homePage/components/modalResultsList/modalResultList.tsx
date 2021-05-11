import React, {ChangeEvent} from 'react';
import {
    BorderSC, CloseModalSC, InputWrapperSC, ListSC,
    MovieInfoSC, RealeseDateSC, VoteSC, WrapperSC
} from './modalResultList.styles';
import {useDispatch, useSelector} from "react-redux";
import {CombinedStateType} from "redux-store/rootReducer";
import {Movie} from "shared/components/movie/movie";
import {NavLink, useHistory} from "react-router-dom";
import {HPActions} from "redux-store/homePageReducer/actions";
import {Pagination} from 'shared/components/pagination/pagination';
import {PropsType} from "types/homePage/modalResultList.type";


export const ModalResultList: React.FC<PropsType> = (props) => {
    const {isShowed, closeModalWindow} = {...props};

    const dispatch = useDispatch();
    const history = useHistory();

    const searchedResultsData = useSelector((state: CombinedStateType) => state.HomePageReducer.searchedResults.results);
    const searchedText = useSelector((state: CombinedStateType) => state.HomePageReducer.searchedText);
    const totalPages = useSelector((state: CombinedStateType) => state.HomePageReducer.searchedResults.total_pages);
    const currentPage = useSelector((state: CombinedStateType) => state.HomePageReducer.searchedResults.page);

    const setSearchedText = (searchedText: string) => dispatch(HPActions.setSearchedText(searchedText));
    const setSearchedPage = (page: number) => dispatch(HPActions.setSearchedPage(page));

    const totalPagesArr = [];
    for (let i = 1; i <= totalPages!; i++) {
        totalPagesArr.push(i)
    }

    return (
        <WrapperSC isShowed={isShowed}>
            <InputWrapperSC>
                <div>
                    search
                </div>
                <input type="text" placeholder='Search for a movie or TV series' value={searchedText}
                       onChange={(e: ChangeEvent<HTMLInputElement>) => setSearchedText(e.currentTarget.value)}/>
            </InputWrapperSC>
            <ListSC>
                {
                    searchedResultsData.map((item, index) =>
                        <NavLink
                            to={`/movie/${item.id}`} key={index}>
                            <BorderSC>
                                <Movie
                                    title={item.title || item.name}
                                    poster={item.poster_path}
                                    posterWidth={185}
                                    height={245}
                                    width={185}
                                    elipsis={true}
                                />
                                <MovieInfoSC className='additional_info'>
                                    <VoteSC>{item.vote_average}</VoteSC>
                                    <RealeseDateSC>
                                        {
                                            item.release_date ? item.release_date.slice(0, 4) :
                                                item.first_air_date ? item.first_air_date.slice(0, 4) : ''
                                        }
                                    </RealeseDateSC>
                                </MovieInfoSC>
                            </BorderSC>
                        </NavLink>
                    )
                }
                <CloseModalSC onClick={() => {
                    closeModalWindow(false);
                    history.push({
                        pathname: '/home'
                    });
                }}/>
            </ListSC>
            <Pagination options={{totalPages, range: 9, currentPage, selectPage: setSearchedPage}}/>
        </WrapperSC>
    )
};