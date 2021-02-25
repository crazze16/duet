import React from 'react'
import {
    DescriptionSC,
    GenreSC,
    GenresSC,
    InfoSC, SimilarMoviesListSC,
    VBackDropSC,
    VGradientSC,
    VMainMoviePageTitleSC,
    VoteAvarageSC,
    VoteSC,
    VoteScoreCS,
    VSubMoviePageTitleSC,
    VWrapperSPSC
} from "./styles";
import {VSimilarMovieItem} from "./VSimilarMovieItem";

export const VSelectedMoviePage = (props) => {
    const {title, original_title, vote_average, overview, backdrop_path, status, genres} = props.selectedMovieData;
    const {similarMoviesData} = props;

    const similarMovies = (data = []) => {
        return data.sort((a, b) => a.popularity < b.popularity ? 1 : -1).map(item => <VSimilarMovieItem
            poster={item['poster_path']}/>);
    };

    let genresFunc = (data = []) => {
        let genresArr = [];
        data.forEach(item => genresArr.push(item.name));

        return genresArr.join(', ').split(' ').map(item => <GenreSC to='/'>{item} </GenreSC>);
    };

    let backdrop = `https://image.tmdb.org/t/p/original/${backdrop_path}`;

    return (
        <VWrapperSPSC>
            <VBackDropSC src={backdrop}>
                <InfoSC>
                    <VMainMoviePageTitleSC>
                        {title}
                    </VMainMoviePageTitleSC>
                    <VSubMoviePageTitleSC>
                        {original_title}
                    </VSubMoviePageTitleSC>
                    <VoteSC>
                        {status === 'Released' ?
                            <VoteAvarageSC>
                                VOTE AVERAGE: <VoteScoreCS score={vote_average}>{vote_average}</VoteScoreCS>
                            </VoteAvarageSC>
                            : <VoteAvarageSC>{status}</VoteAvarageSC>
                        }
                    </VoteSC>
                    <DescriptionSC>
                        {overview}
                    </DescriptionSC>
                    <GenresSC>
                        {genresFunc(genres)}
                    </GenresSC>
                </InfoSC>

                <VGradientSC>
                </VGradientSC>
                Similar movies:
                <SimilarMoviesListSC>
                    {similarMovies(similarMoviesData)}
                </SimilarMoviesListSC>
            </VBackDropSC>

        </VWrapperSPSC>
    )
};