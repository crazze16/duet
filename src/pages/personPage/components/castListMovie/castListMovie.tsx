import React, {useState} from "react";
import {ListItemPropsType} from "../../../../types/personPage/castedMovies.type";
import {DateSC, TitleSC} from "../castedMovies/castedMovies.styles";
import {AdditionalInfoContainerSC, ShowAdditionalInfoSC} from "../additionalInfo/additionalInfo.styles";
import {AdditionalInfo} from "../additionalInfo/additionalInfo";
import {LinkWrapperSC, ListItemSC, MainMovieInfoSC } from "./castListMovie.styles";

export const CastListMovie: React.FC<ListItemPropsType> = (props) => {

    const {title, release_date, id} = props;

    const [toggleAdditionalInfo, setToggle] = useState<boolean>(false);

    return (
        <ListItemSC>
            <MainMovieInfoSC>
                <LinkWrapperSC to={`/movie/${id}`}>
                    <DateSC>
                        {release_date?.slice(0, 4)}
                    </DateSC>
                    <TitleSC>
                        {title}
                    </TitleSC>
                </LinkWrapperSC>
                <ShowAdditionalInfoSC onClick={():void => setToggle(!toggleAdditionalInfo)} hovered={toggleAdditionalInfo}>open completely</ShowAdditionalInfoSC>
            </MainMovieInfoSC>
            <AdditionalInfoContainerSC showed={toggleAdditionalInfo}>
                <AdditionalInfo {...props}/>
            </AdditionalInfoContainerSC>
        </ListItemSC>
    )
};