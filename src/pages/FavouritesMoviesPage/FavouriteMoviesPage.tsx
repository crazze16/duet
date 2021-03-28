import React, {ReactNode, useState} from 'react'
import {ListSC, ListWrapperSC, PageTitleSC, SortSC} from "../../styles/FavouriteMoviesSC";
import {FavouriteMoviesType, MovieBySearch} from '../../types/types';
import { FavouriteMovieItem } from './FavouriteMovieItem';

type PropsType = {
    favouritesMovies: FavouriteMoviesType
    removeFromFavourite: (flag: boolean, movieId: number) => void
}

export const FavouriteMoviePage: React.FC<PropsType> = (props) => {

    const {favouritesMovies, removeFromFavourite} = props;
    let listData = [...favouritesMovies.listData];

    const [type, setType] = useState('default')

        const sort = ():Array<MovieBySearch> => {
            switch (type) {
                case "popularity":
                    return listData.sort((a:MovieBySearch,b:MovieBySearch) => b.popularity - a.popularity);
                case "vote":
                    return listData.sort((a:MovieBySearch,b:MovieBySearch) => b.vote_average - a.vote_average);
                case "reverse":
                    return listData.reverse();
                default:
                    return [...favouritesMovies.listData]
            }
        };
    const arr: Array<ReactNode> =  sort().map(i => <FavouriteMovieItem key={`key_${i.id}`}
                                                                         id={i.id}
                                                                         title={i.title}
                                                                         poster={i.backdrop_path}
                                                                         removeFromFavourite={removeFromFavourite}
    />);

    return (
        <ListWrapperSC>
            <div>
                <PageTitleSC>Your Picked Movies:</PageTitleSC>
                <SortSC>Sorted by: <select onChange={(e) => setType(e.target.value)}>
                    <option value='default'>Newest</option>
                    <option value='reverse'>Oldest</option>
                    <option value='popularity'>Most popular</option>
                    <option value='vote'>Votes</option>
                </select></SortSC>
            </div>
            <ListSC>
                {arr}
            </ListSC>
        </ListWrapperSC>
    )
};