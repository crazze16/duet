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
import {VModalVideo} from "./VModalVideo";
import {VCast} from "./VCast";
import {VReviewsMemo} from "./VReviews";
import {FaGithub, FaInstagram, FaLinkedin} from 'react-icons/fa';
import {movie} from "../../../VMoviePageApi";
import {
    CastPersonType,
    GenresType,
    MovieBySearch,
    ProdactionCompaniesType,
    ReviewDetails,
    SelectedMovieType
} from '../../../types/types';
import {useDispatch, useSelector} from "react-redux";
import {CombinedStateType} from "../../../redux-store";
import {actions} from "../../../redux-store/MoviePageReducer";
import {FMactions} from "../../../redux-store/FavouriteMoviesReducer";

type PropsType = {
    movieId: number
}

export const VSelectedMoviePage: React.FC<PropsType> = (props) => {




    const {movieId} = props;

    const dispatch = useDispatch();

    const selectedMovieData = useSelector((state: CombinedStateType) => state.MoviePageReducer.selectedMovieData);
    const similarMoviesData = useSelector((state: CombinedStateType) => state.MoviePageReducer.similarMoviesData);
    const collection = useSelector((state: CombinedStateType) => state.MoviePageReducer.collection);
    const movieCast = useSelector((state: CombinedStateType) => state.MoviePageReducer.movieCast);
    const favouritesMovies = useSelector((state: CombinedStateType) => state.FavouriteMoviesReducer.favouritesMovies);

    const openModuleVideo = () => dispatch(actions.openModuleVideo());
    const setCurrentMovie = (selectedMovie: SelectedMovieType) => dispatch(actions.setCurrentMovie(selectedMovie));
    const setSimilarMovieData = (similarMovieData: Array<MovieBySearch>) => dispatch(actions.setSimilarMovieData(similarMovieData));
    const setCast = (castData: Array<CastPersonType>) => dispatch(actions.setCast(castData));
    const setReviews = (reviewsData: Array<ReviewDetails>, reviewsTotalPages: number) => dispatch(actions.setReviews(reviewsData, reviewsTotalPages));
    const createFavouriteMoviesList = (listId: number) => dispatch(FMactions.createFavouriteMoviesList(listId));
    const setFavouriteMoviesList = (favouriteData: Array<MovieBySearch>) => dispatch(FMactions.setFavouriteMoviesList(favouriteData));
    const setFavouriteMovie = (flag: boolean) => dispatch(FMactions.setFavouriteMovie(flag));

    const { title, original_title, vote_average, overview, backdrop_path,
        status, genres, production_companies, release_date } = selectedMovieData;

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
            <VModalVideo movieId={movieId}/>
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
                            {collection.data?.id ? <GenreSC to='/'>{collection.data.name},</GenreSC> : ''}
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
            <VReviewsMemo movieId={+movieId} setReviews={setReviews}/>
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