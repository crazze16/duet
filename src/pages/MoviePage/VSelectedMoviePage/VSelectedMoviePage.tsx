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
import {VModalVideoContainer} from "./VModalVideo";
import {VCast} from "./VCast";
import {VReviewsMemo} from "./VReviews";
import {FaGithub, FaInstagram, FaLinkedin} from 'react-icons/fa';
import {movie} from "../../../VMoviePageApi";
import {
    CastPersonType,
    CollectionType,
    GenresType, MovieBySearch, ProdactionCompaniesType, ReviewDetails, ReviewsType, SelectedMovieType
} from '../../../types/types';
import { NoCommSC } from './ReviewsSC';

type PropsType = {
    selectedMovieData: SelectedMovieType
    similarMoviesData: Array<MovieBySearch>
    movieCast: Array<CastPersonType>
    movieId: number
    reviews: ReviewsType
    collection: {
        id: number | null,
        data: CollectionType
    },
    favouritesMovies: {
        listId: number | null,
        listData: Array<MovieBySearch>
        isFavourite: boolean
    }
    openModuleVideo: () => void
    setCurrentMovie: (selectedMovie: SelectedMovieType) => void
    setSimilarMovieData: (similarMovieData: Array<MovieBySearch>) => void
    setCast: (castData: Array<CastPersonType>) => void
    setReviews: (reviewsData: Array<ReviewDetails>, reviewsTotalPages: number) => void
    setCurrentReviewPage: (reviewPage: number) => void
    createFavouriteMoviesList: (listId: number) => void
    setFavouriteMovie: (flag: boolean) => void
    setFavouriteMoviesList: (favouriteData: Array<MovieBySearch>) => void
}

export const VSelectedMoviePage: React.FC<PropsType> = (props) => {
    const {
        title, original_title, vote_average, overview, backdrop_path, status,
        genres, production_companies, release_date
    } = props.selectedMovieData;
    const {
        similarMoviesData, openModuleVideo, setCurrentMovie, setSimilarMovieData,
        collection, movieId, setCast, movieCast, setReviews, reviews, setCurrentReviewPage,
        favouritesMovies, createFavouriteMoviesList, setFavouriteMoviesList, setFavouriteMovie
    } = props;
    const baseSrc = 'https://image.tmdb.org/t/p/original/';
    const backdrop = `${baseSrc}${backdrop_path}`;

    const similarMovies = similarMoviesData.map((item, index) => <VSimilarMovieItem
        poster={item['poster_path']}
        key={index}
        movieId={item.id}
        setSimilarMovieData={setSimilarMovieData}
        setCurrentMovie={setCurrentMovie}
    />);

    let genresFunc = (data = [] as GenresType): React.ReactNode => {
        let genresArr: Array<string> = [];
        data.forEach(item => genresArr.push(item.name));
        return genresArr.join(', ').split(' ').map((item, index) => <GenreSC key={index}
                                                                             to={`/${item}`}>{item}</GenreSC>);
    };
    let production = (data = [] as ProdactionCompaniesType): React.ReactNode => {
        let arr: Array<string> = [];
        data.forEach(item => arr.push(item.name));
        return arr.join(', ').split(' ').map((item, index) => <ProductionSC key={index} to='/'>{item}</ProductionSC>);
    };
    let releaseDate = (releaseDate = ''): string => releaseDate.slice(0, 4);

    const addToFavourite = (listId = favouritesMovies.listId): void => {
        favouritesMovies.listId ?
            (async () => {
                if (listId) {
                    await movie.updateList(listId, +movieId);
                    const listData = await movie.getList(listId);
                    setFavouriteMoviesList(listData.results);
                    setFavouriteMovie(true)
                }
            })() :
            (async () => {
                const list = await movie.setList('test');
                createFavouriteMoviesList(list.data.id);
                const listId = await list.data.id;
                localStorage.setItem('Favourite Movies list id', list.data.id);
                addToFavourite(listId)
            })()
    };
    const removeFromFavourite = (): void => {
        (async () => {
            if (favouritesMovies.listId) {
                await movie.removeItems(favouritesMovies.listId, +movieId);
                const listData = await movie.getList(favouritesMovies.listId);
                setFavouriteMoviesList(listData.results);
                setFavouriteMovie(false)
            }
        })()
    };

    return (
        <VWrapperSPSC>
            <VModalVideoContainer movieId={movieId}/>
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
                            production(production_companies) ? <ProductionsSC>
                                {production(production_companies)}
                            </ProductionsSC> : ''
                        }
                        <DescriptionSC>
                            {overview}
                        </DescriptionSC>
                        <CollectionContainerSC>
                        </CollectionContainerSC>
                        <GenresSC>
                            {collection.id ? <GenreSC to='/'>{collection.data.name}</GenreSC> : ''}
                            {genresFunc(genres)}
                        </GenresSC>
                        <WatchMovieSC onClick={openModuleVideo}>
                            WATCH TRAILER
                        </WatchMovieSC>
                        {
                            favouritesMovies.isFavourite ? <WatchMovieSC onClick={() => removeFromFavourite()}>
                                REMOVE FROM LIST
                            </WatchMovieSC> : <WatchMovieSC onClick={() => addToFavourite()}>
                                ADD TO LIST
                            </WatchMovieSC>
                        }
                    </InfoContentSC>
                </InfoSC>
                <VBackDropSC src={backdrop}>
                    <VGradientSC>
                    </VGradientSC>
                </VBackDropSC>
            </BackdropSectionSC>
            <VCast movieId={+movieId}
                   setCast={setCast}
                   movieCast={movieCast}
            />
            <RecommendedMoviesListSC>
                <RecommendedTitleSC>
                    RECOMMENDED MOVIES
                </RecommendedTitleSC>
                {similarMovies}
            </RecommendedMoviesListSC>
            <VReviewsMemo movieId={+movieId} setReviews={setReviews} reviews={reviews}
                          setCurrentReviewPage={setCurrentReviewPage}/>
            <FooterSC>
                <FooterWrapperSC>
                    <FooterInfoSC>
                        <SocialSC>
                            <LinkSC target="_blank" href={'https://github.com/crazze16'}>
                                <FaGithub size={'24px'}/>
                            </LinkSC>
                            <LinkSC target="_blank" href={'https://www.instagram.com/because_nekoz/'}>
                                <FaInstagram size={'24px'}/>
                            </LinkSC>
                            <LinkSC target="_blank" href={'https://www.linkedin.com/in/vladimir-nekoz-099173204/'}>
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