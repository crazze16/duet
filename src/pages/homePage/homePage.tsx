import React, {useEffect, useRef, useState} from 'react'
import {movie, trending, TVShow} from "api";
import {useDispatch, useSelector} from "react-redux";
import {HPActions} from "redux-store/homePageReducer/actions";
import {MoviesBySearchType, MultiSearchType} from "types/response-api.type";
import {HomePageHeader} from './components/header/header';
import {CombinedStateType} from "redux-store/rootReducer";
import {BackDropSC, HeaderWrapperSC, NextSlideSC, PrevSlideSC, SliderWrapperSC, WrapperHomeSC} from './mainPage.styles';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/swiper.scss';
import SwiperCore, {Autoplay, Navigation} from 'swiper';
import {Feed} from "./components/feed/feed";
import {Footer} from "shared/components/footer/footer";
import {Popular} from "./components/popular/popular";
import {HomePageType} from "types/homePage/homePage.type";

SwiperCore.use([Autoplay, Navigation]);

export const HomePage: React.FC<HomePageType> = (props) => {

    const dispatch = useDispatch();
    const [headerVisibility, setHeaderVisibility] = useState<boolean>(false);

    const trendingData = useSelector((state: CombinedStateType) => state.HomePageReducer.trending.results);

    const setPopularMovies = (popularMoviesData: MoviesBySearchType) => dispatch(HPActions.setPopularData(popularMoviesData));
    const setPopularTVShows = (popularTVShowsData: MultiSearchType) => dispatch(HPActions.setPopularTVShows(popularTVShowsData.results));
    const setTrendingData = (trendingData: MultiSearchType) => dispatch(HPActions.setTrendingData(trendingData));

    const prevRef = useRef<HTMLDivElement>(null);
    const nextRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        (async () => {
            const popularData = await movie.getPopular();
            setPopularMovies(popularData);
            const TVPopularData = await TVShow.getPopular();
            setPopularTVShows(TVPopularData);
            const trendingData = await trending.getTrending();
            setTrendingData(trendingData);
            window.onscroll = () => {
                if (window.pageYOffset > 150) {
                    setHeaderVisibility(true);
                } else {
                    setHeaderVisibility(false);
                }
            }
        })();
    }, []);

    return (
        <WrapperHomeSC>
            <HeaderWrapperSC headerVisibility={headerVisibility}>
                <HomePageHeader/>
            </HeaderWrapperSC>
            <div>
                <SliderWrapperSC>
                    <Swiper
                        spaceBetween={0}
                        slidesPerView={1}
                        loop={true}
                        centeredSlides={true}
                        autoplay={{delay: 5000, disableOnInteraction: false}}
                        navigation={{
                            prevEl: prevRef.current!,
                            nextEl: nextRef.current!
                        }}
                        allowTouchMove={false}
                    >
                        {trendingData && trendingData.map(item => <SwiperSlide key={item.id}>
                            <BackDropSC poster={'https://image.tmdb.org/t/p/original/' + item.backdrop_path}
                                        to={'/movie/' + item.id}>
                                <div>
                                    {item.title || item.name}
                                </div>
                            </BackDropSC>
                        </SwiperSlide>)}
                    </Swiper>
                    <PrevSlideSC ref={prevRef}/>
                    <NextSlideSC ref={nextRef}/>
                </SliderWrapperSC>
                <Popular/>
                <Feed/>
            </div>
            <Footer/>
        </WrapperHomeSC>
    )
};