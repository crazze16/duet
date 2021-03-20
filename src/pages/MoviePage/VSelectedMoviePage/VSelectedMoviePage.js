import React from 'react'
import {
    BackdropSectionSC,
    CollectionContainerSC,
    CreatedSC,
    DescriptionSC,
    FooterInfoSC,
    FooterSC,
    FooterWrapperSC,
    GenreSC,
    GenresSC,
    InfoContentSC,
    InfoSC,
    LinkSC,
    MailSC,
    ProductionSC,
    ProductionsSC,
    RecommendedMoviesListSC,
    RecommendedTitleSC,
    SocialSC,
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
import {VReviewsMemo} from "./VReviews";
import {FaGithub, FaInstagram, FaLinkedin} from 'react-icons/fa';
import {movie} from "../../../VMoviePageApi";

export const VSelectedMoviePage = (props) => {
    const {title, original_title, vote_average, overview, backdrop_path, status,
        genres, production_companies, release_date} = props.selectedMovieData;
    const {similarMoviesData, openModuleVideo, setCurrentMovie, setSimilarMovieData,
        collection, movieId, setCast, movieCast,setReviews, reviews, setCurrentReviewPage,
        favouritesMovies, createFavouriteMoviesList, getFavouriteMoviesList} = props;
    const baseSrc = 'https://image.tmdb.org/t/p/original/';
    const backdrop = `${baseSrc}${backdrop_path}`;

    const similarMovies = similarMoviesData.map((item, index) => <VSimilarMovieItem
            poster={item['poster_path']}
            key={index}
            movieId={item.id}
            setSimilarMovieData={setSimilarMovieData}
            setCurrentMovie={setCurrentMovie}
        />);

    let genresFunc = (data = []) => {
        let genresArr = [];
        data.forEach(item => genresArr.push(item.name));
        return genresArr.join(', ').split(' ').map((item, index) => <GenreSC key={index} to={`/${item}`}>{item}</GenreSC>);
    };

    let production = (data = []) => {
        let arr = [];
        data.forEach(item => arr.push(item.name));
        return arr.join(', ').split(' ').map((item, index) => <ProductionSC key={index} to='/'>{item}</ProductionSC>);
    };
    let releaseDate = (releaseDate = '') => releaseDate.slice(0, 4);

    const createList = () => {
        (async () => {
            const listId = await movie.setList('another test');
            createFavouriteMoviesList(listId.data.id)
        })();
    };
    const getList = () => {
            (async () => {
                const listData = await movie.getList(favouritesMovies.listId);
                console.log('get:', listData)
                getFavouriteMoviesList(listData.data.results);
            })()
    };
    const add = () => {
        movie.updateList(favouritesMovies.listId, movieId);
    };

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
                        <WatchMovieSC onClick={() => createList()}>
                            create
                        </WatchMovieSC>
                        <WatchMovieSC onClick={() => getList()}>
                            get
                        </WatchMovieSC>
                        <WatchMovieSC onClick={() => add()}>
                            add
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
                {similarMovies}
            </RecommendedMoviesListSC>
            <VReviewsMemo movieId={movieId} setReviews={setReviews} reviews={reviews} setCurrentReviewPage={setCurrentReviewPage}/>
            <FooterSC>
                <FooterWrapperSC>
                    <FooterInfoSC>
                        <SocialSC>
                            <LinkSC  target="_blank" href={'https://github.com/crazze16'}>
                                <FaGithub size={'24px'}/>
                            </LinkSC>
                            <LinkSC  target="_blank" href={'https://www.instagram.com/because_nekoz/'}>
                                <FaInstagram size={'24px'}/>
                            </LinkSC>
                            <LinkSC  target="_blank" href={'https://www.linkedin.com/in/vladimir-nekoz-099173204/'}>
                                <FaLinkedin size={'24px'}/>
                            </LinkSC>
                        </SocialSC>
                            <CreatedSC>created by</CreatedSC>
                        <MailSC>vladimirnekoz16@gmail.com</MailSC>
                    </FooterInfoSC>
                </FooterWrapperSC>
            </FooterSC>
        </VWrapperSPSC>
    )
};