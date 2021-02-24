import React from 'react'
import {
    DescriptionSC,
    InfoSC,
    TotalVoteSC,
    VBackDropSC,
    VGradientSC,
    VMainMoviePageTitleSC,
    VoteAvarageSC,
    VoteSC,
    VSubMoviePageTitleSC,
    VWrapperSPSC
} from "./styles";

export const VSelectedMoviePage = (props) => {
    let backdrop = `https://image.tmdb.org/t/p/original/${props.selectedMovieData['backdrop_path']}`;
    let poster = `https://image.tmdb.org/t/p/original/${props.selectedMovieData['poster_path']}`;

    return (
        <VWrapperSPSC>
            <VBackDropSC src={backdrop}>
                <InfoSC>
                    <VMainMoviePageTitleSC>
                        {props.selectedMovieData.title}
                    </VMainMoviePageTitleSC>
                    <VSubMoviePageTitleSC>
                        {props.selectedMovieData['original_title']}
                    </VSubMoviePageTitleSC>
                    <DescriptionSC>
                        {props.selectedMovieData.overview}
                    </DescriptionSC>
                    <VoteSC>
                        <VoteAvarageSC>
                            VOTE AVERAGE: {props.selectedMovieData['vote_average']}
                        </VoteAvarageSC>
                        {/*<TotalVoteSC>*/}
                        {/*    {props.selectedMovieData['vote_count']}*/}
                        {/*</TotalVoteSC>*/}
                    </VoteSC>
                </InfoSC>
                <VGradientSC>
                </VGradientSC>
            </VBackDropSC>
            {/*<img src={poster} alt=""/>*/}
        </VWrapperSPSC>
    )
};