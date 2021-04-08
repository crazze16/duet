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
    const listData = [...favouritesMovies.listData];

    const [type, setType] = useState('default');

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
    const FavouriteMoviesList: Array<ReactNode> =  sort().map(item => <FavouriteMovieItem key={`key_${item.id}`}
                                                                         id={item.id}
                                                                         title={item.title}
                                                                         poster={item.backdrop_path}
                                                                         removeFromFavourite={removeFromFavourite}
    />);

    return (
        <ListWrapperSC>
            <div>
                <PageTitleSC>Your Picked Movies:</PageTitleSC>
                <SortSC>Sorted by: <select onChange={(e:React.FormEvent<HTMLSelectElement>) => setType(e.currentTarget.value)}>
                    <option value='default'>Newest</option>
                    <option value='reverse'>Oldest</option>
                    <option value='popularity'>Most popular</option>
                    <option value='vote'>Votes</option>
                </select></SortSC>
            </div>
            <ListSC>
                {FavouriteMoviesList}
            </ListSC>
        </ListWrapperSC>
    )
};