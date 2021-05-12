import React, {useEffect, useState} from 'react'
import {useParams} from "react-router";
import {people} from "api";
import {useDispatch, useSelector} from "react-redux";
import {PPactions} from "redux-store/peoplePageReducer/actions";
import {CastCreditsType, DetailsType, PersonSocialType} from 'types/personPage/personPage.type';
import {CombinedStateType} from "redux-store/rootReducer";
import {
    BiographySC, BirthDateSC, ContainerSC, DetailsSC, MainMoviesTitleSC, NameSC,
    PersonInfoContainerSC, PersonMoviesContainerSC, PhotoSC, ScrollToTopSC, ShowMoreSC, WrapperSC
} from './person.styles';
import {GrFacebook, GrInstagram, GrTwitter, SiImdb} from "react-icons/all";
import {IconContext} from "react-icons";
import {socialLinks} from "shared/constants/constants";
import {CastedMovies} from './components/castedMovies/castedMovies';
import {Footer} from "shared/components/footer/footer";
import {getAge, scrollToTop} from 'helpers/functions';
import {Slider} from "shared/components/slider/slider";

export const Person: React.FC = () => {
    const {personId} = useParams<any>();

    const dispatch = useDispatch();

    const [toggleBiography, setToggle] = useState<boolean>(true);

    const details = useSelector((state: CombinedStateType) => state.PeoplePageReducer.credits.details);
    const cast = useSelector((state: CombinedStateType) => state.PeoplePageReducer.credits.cast);
    const social = useSelector((state: CombinedStateType) => state.PeoplePageReducer.credits.social);

    const setDetails = (details: DetailsType) => dispatch(PPactions.setDetails(details));
    const setCast = (castData: Array<CastCreditsType>) => dispatch(PPactions.setCast(castData));
    const setSocialData = (socialData: PersonSocialType) => dispatch(PPactions.setSocialData(socialData));

    const popularCast = [...cast];
    popularCast.sort((a, b) => b.popularity - a.popularity);

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
    return (
        <WrapperSC>
            <ContainerSC>
                <PersonInfoContainerSC>
                    <PhotoSC>
                        <img src={`https://image.tmdb.org/t/p/original/${details.profile_path}`} height={270} alt=""/>
                        <IconContext.Provider value={{color: "#FFF", size: '20px'}}>
                            <div>
                                {social.instagram_id &&
                                <a href={socialLinks.INSTAGRAM + social.instagram_id}><GrInstagram/></a>}
                                {social.facebook_id &&
                                <a href={socialLinks.FACEBOOK + social.facebook_id}><GrFacebook/></a>}
                                {social.twitter_id &&
                                <a href={socialLinks.TWITTER + social.twitter_id}><GrTwitter/></a>}
                                {social.imdb_id && <a href={socialLinks.IMDB + social.imdb_id}><SiImdb/></a>}
                            </div>
                        </IconContext.Provider>
                    </PhotoSC>
                    <DetailsSC>
                        <NameSC>
                            {details.name}
                        </NameSC>
                        <BirthDateSC>
                            Birthday: {details.birthday && details.birthday.replaceAll('-', '.')} ({getAge(details.birthday)} years)
                        </BirthDateSC>
                        <div>
                            Place of birth: {details.place_of_birth}
                        </div>
                        <BiographySC showAll={toggleBiography}>
                            {details.biography}
                        </BiographySC>
                        {
                            details.biography && details.biography.length >= 500
                                ? (<ShowMoreSC
                                    onClick={(): void => setToggle(!toggleBiography)}>{toggleBiography ? 'SHOW MORE' : 'HIDE'}</ShowMoreSC>)
                                : ('')
                        }
                    </DetailsSC>
                </PersonInfoContainerSC>
                <MainMoviesTitleSC>Popular movies with {details.name}:</MainMoviesTitleSC>
                <PersonMoviesContainerSC>
                    <Slider options={{data: popularCast, translateLeft: 1015, slidesCount: 20}}/>
                </PersonMoviesContainerSC>
                <CastedMovies cast={cast}/>
            </ContainerSC>
            <Footer/>
            <ScrollToTopSC onClick={() => scrollToTop()}/>
        </WrapperSC>
    )
};
