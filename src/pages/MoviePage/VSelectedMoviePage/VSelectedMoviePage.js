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
    BackdropSectionSC,
    VoteScoreCS,
    VSubMoviePageTitleSC,
    VWrapperSPSC, InfoContentSC, ProductionSC, ProductionsSC, FooterSC, WatchMovieSC
} from "./styles";
import {VSimilarMovieItem} from "./VSimilarMovieItem";

export const VSelectedMoviePage = (props) => {
    const {title, original_title, vote_average, overview, backdrop_path, status, genres, production_companies} = props.selectedMovieData;
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
    let production = (data = []) => {
        let arr = [];
        data.forEach(item => arr.push(item.name));
        return arr.join(', ').split(' ').map(item => <ProductionSC to='/'>{item} </ProductionSC>);
    };

    let backdrop = `https://image.tmdb.org/t/p/original/${backdrop_path}`;

    return (
        <VWrapperSPSC>
            <BackdropSectionSC>
                <InfoSC>
                    <InfoContentSC>
                        <VMainMoviePageTitleSC>
                            {title}
                        </VMainMoviePageTitleSC>
                        <VSubMoviePageTitleSC>
                            {original_title}
                        </VSubMoviePageTitleSC>
                        {status === 'Released' ?
                            <VoteAvarageSC>
                                VOTE AVERAGE: <VoteScoreCS score={vote_average}>{vote_average}</VoteScoreCS>
                            </VoteAvarageSC>
                            : <VoteAvarageSC>{status}</VoteAvarageSC>
                        }
                        {
                            production(production_companies).length !== 0 ? <ProductionsSC>
                                {production(production_companies)}
                            </ProductionsSC> : ''
                        }
                        <DescriptionSC>
                            {overview}
                        </DescriptionSC>
                        <GenresSC>
                            {genresFunc(genres)}
                        </GenresSC>
                        <WatchMovieSC>
                            WATCH TRAILER
                        </WatchMovieSC>
                    </InfoContentSC>
                </InfoSC>

                <VBackDropSC src={backdrop}>
                    <VGradientSC>
                    </VGradientSC>
                </VBackDropSC>
            </BackdropSectionSC>
            <SimilarMoviesListSC>
                {similarMovies(similarMoviesData)}
            </SimilarMoviesListSC>
            <FooterSC>

            </FooterSC>
        </VWrapperSPSC>

    )
};