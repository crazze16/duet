import React from 'react'
import {
    BackdropSectionSC,
    CollectionContainerSC,
    DescriptionSC,
    FooterSC,
    GenreSC,
    GenresSC,
    InfoContentSC,
    InfoSC,
    ProductionSC,
    ProductionsSC,
    RecommendedMoviesListSC, RecommendedTitleSC,
    VBackDropSC,
    VGradientSC,
    VMainMoviePageTitleSC,
    VoteAvarageSC,
    VoteScoreCS,
    VSubMoviePageTitleSC,
    VWrapperSPSC,
    WatchMovieSC
} from "./styles";
import {VSimilarMovieItem} from "./VSimilarMovieItem";
import VModalVideo from "./VModalVideo";
import {VCast} from "./VCast";
import {VReviews} from "./VReviews";


export const VSelectedMoviePage = (props) => {
    const {title, original_title, vote_average, overview, backdrop_path, status, genres, production_companies, release_date} = props.selectedMovieData;
    const {similarMoviesData, openModuleVideo, setCurrentMovie, setSimilarMovieData, collection, movieId, setCast, movieCast,setReviews, reviewsData} = props;
    const baseSrc = 'https://image.tmdb.org/t/p/original/';
    const backdrop = `${baseSrc}${backdrop_path}`;


    const similarMovies = (data = []) => {
        return data.map((item, index) => <VSimilarMovieItem
            poster={item['poster_path']}
            key={index}
            movieId={item.id}
            setSimilarMovieData={setSimilarMovieData}
            setCurrentMovie={setCurrentMovie}
        />);
    };

    let genresFunc = (data = []) => {
        let genresArr = [];
        data.forEach(item => genresArr.push(item.name));
        return genresArr.join(', ').split(' ').map((item, index) => <GenreSC key={index} to='/'>{item} </GenreSC>);
    };
    let production = (data = []) => {
        let arr = [];
        data.forEach(item => arr.push(item.name));
        return arr.join(', ').split(' ').map((item, index) => <ProductionSC key={index} to='/'>{item} </ProductionSC>);
    };
    let releaseDate = (releaseDate = '') => releaseDate.slice(0, 4);


    return (
        <VWrapperSPSC>
            <VModalVideo movieId={props.movieId}/>

            <BackdropSectionSC>
                <InfoSC>
                    <InfoContentSC>
                        <VMainMoviePageTitleSC>
                            {title}
                        </VMainMoviePageTitleSC>
                        <VSubMoviePageTitleSC>
                            {releaseDate(release_date)}, {original_title}
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
                        <CollectionContainerSC>
                        </CollectionContainerSC>
                        <GenresSC>
                            {collection.id ? <GenreSC to='/'>{collection.data.name},</GenreSC> : ''}
                            {genresFunc(genres)}
                        </GenresSC>
                        <WatchMovieSC onClick={openModuleVideo}>
                            WATCH TRAILER
                        </WatchMovieSC>
                    </InfoContentSC>
                </InfoSC>

                <VBackDropSC src={backdrop}>
                    <VGradientSC>
                    </VGradientSC>
                </VBackDropSC>
            </BackdropSectionSC>
            <VCast movieId={movieId}
                   setCast={setCast}
                   movieCast={movieCast}
                   />
            <RecommendedMoviesListSC>
                <RecommendedTitleSC>
                    RECOMMENDED MOVIES
                </RecommendedTitleSC>
                {similarMovies(similarMoviesData)}
            </RecommendedMoviesListSC>
            <VReviews movieId={movieId} setReviews={setReviews} reviewsData={reviewsData}/>
            <FooterSC>
            </FooterSC>
        </VWrapperSPSC>

    )
};