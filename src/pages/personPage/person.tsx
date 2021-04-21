import React, {ReactElement, useEffect, useRef, useState} from 'react'
import {useParams} from "react-router";
import {people} from "../../api";
import {useDispatch, useSelector} from "react-redux";
import {PPactions} from "../../redux-store/peoplePageReducer/actions";
import {CastCreditsType, DetailsType, PersonSocialType} from 'types/personPage/personPage.type';
import {CombinedStateType} from "../../redux-store/rootReducer";
import {
    ArrowLeftSC,
    ArrowRightSC,
    BiographySC,
    BirthDateSC,
    BirthPlaceSC,
    BorderSC,
    CharacterSC,
    ContainerSC,
    DetailsSC,
    MainMoviesTitleSC,
    MovieInfoSC,
    NameSC,
    PersonInfoContainerSC,
    PersonMoviesContainerSC,
    PhotoSC,
    RealeseDateSC,
    SliderSC,
    SliderWheelSC,
    SliderWheelWrapperSC,
    SocialLinksCS,
    VoteSC,
    WrapperSC,
    ShowMoreSC,
    ScrollToTopSC
} from './person.styles';
import {Movie} from 'pages/moviePage/components/movie/movie';
import {NavLink} from 'react-router-dom';
import {GrFacebook, GrInstagram, GrTwitter, SiImdb} from "react-icons/all";
import {IconContext} from "react-icons";
import {socialLinks} from "../../shared/constants/constants";
import {CastedMovies} from './components/castedMovies/castedMovies';
import {Footer} from "../../shared/components/footer/footer";

export const Person: React.FC = () => {

    // @ts-ignore
    const {personId} = useParams();

    const dispatch = useDispatch();

    const details = useSelector((state: CombinedStateType) => state.PeoplePageReducer.credits.details);
    const cast = useSelector((state: CombinedStateType) => state.PeoplePageReducer.credits.cast);
    const social = useSelector((state: CombinedStateType) => state.PeoplePageReducer.credits.social);

    const setDetails = (details: DetailsType) => dispatch(PPactions.setDetails(details));
    const setCast = (castData: Array<CastCreditsType>) => dispatch(PPactions.setCast(castData));
    const setSocialData = (socialData: PersonSocialType) => dispatch(PPactions.setSocialData(socialData));

    useEffect(() => {
        (async () => {
            const detailsData = await people.getDetails(personId);
            setDetails(detailsData);
            const castData = await people.getPersonCredits(personId);
            setCast(castData.cast);
            const socialData = await people.getPersonSocialLinks(personId);
            setSocialData(socialData)
        })();

    }, [personId]);

    const getAge = (date = ''): number => {
        const birthDay = Date.parse(date.split('-').reverse().join('/'));
        const currentDate = Date.now();
        let diff = currentDate - birthDay;
        return Math.floor(diff / 31557600000)
    };
    getAge(details.birthday);

    const scrollToTop = ():void => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    const popularCast = [...cast];
    popularCast.sort((a, b) => b.popularity - a.popularity);

    const [toggleBiography, setToggle] = useState<boolean>(true)
    const [transLeft, setTransLeft] = useState(1015);
    const [rightCount, setRightCount] = useState(0);
    const sliderElement = useRef<HTMLDivElement>(null);
    const slider = (sliderItems: Array<CastCreditsType>, transalteX: number, slidesCount: number): ReactElement => {
        const setPrev = ():void => {
            if (sliderElement.current && rightCount > 0) {
                if (rightCount === 1) {
                    sliderElement.current.style.transform = `translateX(${transLeft - transLeft}px)`;
                    setTransLeft(transLeft - transalteX);
                    setRightCount(prevState => prevState - 1);
                } else {
                    sliderElement.current.style.transform = `translateX(${(transalteX - (rightCount * transalteX))}px)`;
                    setTransLeft(transLeft - transalteX);
                    setRightCount(prevState => prevState - 1);
                }
            }
        };
        const setNext = ():void => {
            if (sliderElement.current && rightCount < (slidesCount / 5) - 1) {
                sliderElement.current.style.transform = `translateX(-${transLeft}px)`;
                setTransLeft(prevState => prevState + transalteX);
                setRightCount(prevState => prevState + 1);
            }
        };
        return (
            <SliderSC>
                <ArrowLeftSC onClick={() => setPrev()} disabled={rightCount === 0}/>
                <SliderWheelWrapperSC>
                    <SliderWheelSC ref={sliderElement}>
                        {sliderItems.slice(0, slidesCount).map((item, index): ReactElement => <NavLink
                            to={`/Vapi/movie/${item.id}`} key={index}>
                            <BorderSC>
                                <Movie
                                    title={item.title ? item.title : item.name}
                                    poster={item.poster_path}
                                    posterWidth={185}
                                    height={245}
                                />
                                <MovieInfoSC className='test'>
                                    <VoteSC>{item.vote_average}</VoteSC>
                                    <CharacterSC>
                                        {item.character ? item.character : '(voice)'}
                                    </CharacterSC>
                                    <RealeseDateSC>
                                        {item.release_date ? item.release_date.slice(0, 4) : item.first_air_date ? item.first_air_date.slice(0, 4) : ''}
                                    </RealeseDateSC>
                                </MovieInfoSC>
                            </BorderSC>
                        </NavLink>)}
                    </SliderWheelSC>
                </SliderWheelWrapperSC>
                <ArrowRightSC onClick={() => setNext()} disabled={rightCount === (slidesCount / 5) - 1}/>
            </SliderSC>)
    };
    return (
        <WrapperSC>
            <ContainerSC>
                <PersonInfoContainerSC>
                    <PhotoSC>
                        <img src={`https://image.tmdb.org/t/p/original/${details.profile_path}`} height={270} alt=""/>
                        <IconContext.Provider value={{color: "#FFF", size: '20px'}}>
                            <SocialLinksCS>
                                {social.instagram_id &&
                                <a href={socialLinks.INSTAGRAM + social.instagram_id}><GrInstagram/></a>}
                                {social.facebook_id &&
                                <a href={socialLinks.FACEBOOK + social.facebook_id}><GrFacebook/></a>}
                                {social.twitter_id &&
                                <a href={socialLinks.TWITTER + social.twitter_id}><GrTwitter/></a>}
                                {social.imdb_id && <a href={socialLinks.IMDB + social.imdb_id}><SiImdb/></a>}
                            </SocialLinksCS>
                        </IconContext.Provider>
                    </PhotoSC>
                    <DetailsSC>
                        <NameSC>
                            {details.name}
                        </NameSC>
                        <BirthDateSC>
                            Birthday: {details.birthday && details.birthday.replaceAll('-', '.')} ({getAge(details.birthday)} years)
                        </BirthDateSC>
                        <BirthPlaceSC>
                            Place of birth: {details.place_of_birth}
                        </BirthPlaceSC>
                        <BiographySC showAll={toggleBiography}>
                            {details.biography}
                        </BiographySC>
                        {
                            details.biography && details.biography.length >= 500
                                ? (<ShowMoreSC
                                    onClick={() => setToggle(!toggleBiography)}>{toggleBiography ? 'SHOW MORE' : 'HIDE'}</ShowMoreSC>)
                                : ('')
                        }
                    </DetailsSC>
                </PersonInfoContainerSC>
                <MainMoviesTitleSC>Popular movies with {details.name}:</MainMoviesTitleSC>
                <PersonMoviesContainerSC>
                    {slider(popularCast, 1015, 20)}
                </PersonMoviesContainerSC>
                <CastedMovies cast={cast} />
            </ContainerSC>
            <Footer/>
            <ScrollToTopSC onClick={() => scrollToTop()}/>
        </WrapperSC>
    )
};
