import React from 'react'
import {
    BackDropSC,
    BackdropSectionSC,
    DescriptionSC,
    GenreSC,
    GenresSC,
    GradientSC,
    InfoContentSC,
    InfoWrapperSC,
    MainTitleSC,
    ProductionContainerSC,
    ProductionSC,
    RecommendedMoviesListSC,
    RecommendedTitleSC,
    SubTitleSC,
    ToggleFavouriteSC,
    VoteContainerSC,
    VoteScoreCS,
    WatchTrailerButtonSC,
    WrapperSPSC
} from "./selectedMoviePage.styles";
import {SimilarMovie} from "../similarMovie/similarMovie";
import {ModalVideo} from "../modalVideo/modalVideo";
import {Cast} from "../cast/сast";
import {ReviewsMemo} from "../reviews/reviews";
import {movieList} from "../../../../api";
import {
    CastPersonType,
    GenresType,
    MovieBySearch,
    ProdactionCompaniesType,
    ReviewDetails,
    SelectedMovieType
} from '../../../../types/shared.type';
import {useDispatch, useSelector} from "react-redux";
import {CombinedStateType} from "../../../../redux-store/rootReducer";
import useLocalStorage from "../../../../hooks/useLocalStorage";
import {LIST_KEY} from "../../../favouriteMoviesPage/favouriteMoviesPageContainer";
import {FMactions} from '../../../../redux-store/favouriteMoviesReducer/actions';
import {MPactions} from '../../../../redux-store/moviePageReducer/actions';
import {Footer} from "../../../../sharedComponents/footer/footer";
import { PropsType } from '../../../../types/selectedMoviePage/selectedMoviePage.type';



export const SelectedMoviePage: React.FC<PropsType> = (props) => {
    const {movieId} = props;

    const dispatch = useDispatch();

    const selectedMovieData = useSelector((state: CombinedStateType) => state.MoviePageReducer.selectedMovieData);
    const similarMoviesData = useSelector((state: CombinedStateType) => state.MoviePageReducer.similarMoviesData);
    const collection = useSelector((state: CombinedStateType) => state.MoviePageReducer.collection);
    const movieCast = useSelector((state: CombinedStateType) => state.MoviePageReducer.movieCast);
    const favouritesMovies = useSelector((state: CombinedStateType) => state.FavouriteMoviesReducer.favouritesMovies);
    const addedToListInProgress = useSelector((state: CombinedStateType) => state.FavouriteMoviesReducer.isFetching);

    const openModuleVideo = () => dispatch(MPactions.openModuleVideo());
    const setCurrentMovie = (selectedMovie: SelectedMovieType) => dispatch(MPactions.setCurrentMovie(selectedMovie));
    const setSimilarMovieData = (similarMovieData: Array<MovieBySearch>) => dispatch(MPactions.setSimilarMovieData(similarMovieData));
    const setCast = (castData: Array<CastPersonType>) => dispatch(MPactions.setCast(castData));
    const setReviews = (reviewsData: Array<ReviewDetails>, reviewsTotalPages: number) => dispatch(MPactions.setReviews(reviewsData, reviewsTotalPages));
    const createFavouriteMoviesList = (listId: number) => dispatch(FMactions.createFavouriteMoviesList(listId));
    const setFavouriteMoviesList = (favouriteData: Array<MovieBySearch>) => dispatch(FMactions.setFavouriteMoviesList(favouriteData));
    const setFavouriteMovie = (flag: boolean) => dispatch(FMactions.setFavouriteMovie(flag));
    const toggleFetch = (isFetching: boolean) => dispatch(FMactions.toggleFetch(isFetching));

    const {
        title, original_title, vote_average, overview, backdrop_path,
        status, genres, production_companies, release_date
    } = selectedMovieData;

    const baseSrc = 'https://image.tmdb.org/t/p/original/';
    const backdrop = `${baseSrc}${backdrop_path}`;

    const similarMovies = similarMoviesData.map((item, index) => <SimilarMovie
        poster={item['poster_path']}
        key={index}
        movieId={item.id}
        setSimilarMovieData={setSimilarMovieData}
        setCurrentMovie={setCurrentMovie}
    />);
    const genresFunc = (data = [] as GenresType): React.ReactNode => {
        let genresArr: Array<string> = [];
        data.forEach(item => genresArr.push(item.name));
        return genresArr.join(', ').split(' ').map((item, index) => <GenreSC key={index}
                                                                             to={`/${item}`}>{item}</GenreSC>);
    };
    const production = (data = [] as ProdactionCompaniesType): React.ReactNode => {
        let arr: Array<string> = [];
        data.forEach(item => arr.push(item.name));
        return arr.join(', ').split(' ').map((item, index) => <ProductionSC key={index} to='/'>{item}</ProductionSC>);
    };
    const releaseDate = (releaseDate = ''): string => releaseDate.slice(0, 4);

    const SetInLocalStorage = (listId: string) => useLocalStorage(LIST_KEY, listId);

    const addToFavourite = (listId = favouritesMovies.listId): void => {
        favouritesMovies.listId ?
            (async () => {
                if (listId) {
                    toggleFetch(true);
                    await movieList.updateList(listId, movieId);
                    const listData = await movieList.getList(listId);
                    setFavouriteMoviesList(listData.results);
                    setFavouriteMovie(true);
                    toggleFetch(false);
                }
            })() :
            (async () => {
                const list = await movieList.setList('test');
                createFavouriteMoviesList(list.data.id);
                const listId = await list.data.id;
                SetInLocalStorage(list.data.id);
                addToFavourite(listId)
            })()
    };
    const removeFromFavourite = (): void => {
        (async () => {
            if (favouritesMovies.listId) {
                toggleFetch(true);
                await movieList.removeItems(favouritesMovies.listId, movieId);
                const listData = await movieList.getList(favouritesMovies.listId);
                setFavouriteMoviesList(listData.results);
                setFavouriteMovie(false)
                toggleFetch(false);
            }
        })()
    };

    return (
        <WrapperSPSC>
            <ModalVideo movieId={movieId}/>
            <BackdropSectionSC>
                <InfoWrapperSC>
                    <InfoContentSC>
                        <MainTitleSC>
                            {title}
                        </MainTitleSC>
                        <SubTitleSC>
                            {releaseDate(release_date)}, {original_title}
                        </SubTitleSC>
                        {
                            status === 'Released' ?
                                <VoteContainerSC>
                                    VOTE AVERAGE: <VoteScoreCS score={vote_average}>{vote_average}</VoteScoreCS>
                                </VoteContainerSC> :
                                <VoteContainerSC>{status}</VoteContainerSC>
                        }
                        {
                            production(production_companies) ?
                                <ProductionContainerSC>
                                    {production(production_companies)}
                                </ProductionContainerSC> :
                                ''
                        }
                        <DescriptionSC>
                            {overview}
                        </DescriptionSC>
                        <GenresSC>
                            {
                                collection.data?.id ?
                                    <GenreSC to='/'>{collection.data.name},</GenreSC> :
                                    ''
                            }
                            {genresFunc(genres)}
                        </GenresSC>
                        <WatchTrailerButtonSC onClick={openModuleVideo}>
                            WATCH TRAILER
                        </WatchTrailerButtonSC>
                        {
                            favouritesMovies.isFavourite ?
                                <ToggleFavouriteSC onClick={() => removeFromFavourite()} disabled={addedToListInProgress}>
                                    REMOVE FROM LIST
                                </ToggleFavouriteSC> :
                                <ToggleFavouriteSC onClick={() => addToFavourite()} disabled={addedToListInProgress}>
                                    ADD TO LIST
                                </ToggleFavouriteSC>
                        }
                    </InfoContentSC>
                </InfoWrapperSC>
                <BackDropSC src={backdrop}>
                    <GradientSC>
                    </GradientSC>
                </BackDropSC>
            </BackdropSectionSC>
            <Cast movieId={+movieId}
                  setCast={setCast}
                  movieCast={movieCast}
            />
            <RecommendedMoviesListSC>
                <RecommendedTitleSC>
                    RECOMMENDED MOVIES
                </RecommendedTitleSC>
                {similarMovies}
            </RecommendedMoviesListSC>
            <ReviewsMemo movieId={+movieId} setReviews={setReviews}/>
            <Footer/>
        </WrapperSPSC>
    )
};