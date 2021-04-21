import React from "react";
import {ListItemPropsType} from "../../../../types/personPage/castedMovies.type";
import {InfoContainerSC, InfoItemSC, PosterSC, TitlesSC} from "./additionalInfo.styles";
import {Movie} from "../../../moviePage/components/movie/movie";

export const AdditionalInfo: React.FC<ListItemPropsType> = (props) => {

    const {poster, original_title, release_date, character, vote_average} = props;

    return (
        <>
            <PosterSC>
                <Movie poster={poster} height={120} posterWidth={92}/>
            </PosterSC>
            <InfoContainerSC>
                <InfoItemSC>
                    <TitlesSC>Original Title:</TitlesSC> {original_title}
                </InfoItemSC>
                <InfoItemSC>
                    <TitlesSC>Release Date:</TitlesSC> {release_date?.replaceAll('-', '.')}
                </InfoItemSC>
                <InfoItemSC>
                    <TitlesSC>Character:</TitlesSC> {character ? character : 'unknown'}
                </InfoItemSC>
                <InfoItemSC>
                    <TitlesSC>Vote:</TitlesSC> {vote_average}
                </InfoItemSC>
            </InfoContainerSC>
        </>
    )
};