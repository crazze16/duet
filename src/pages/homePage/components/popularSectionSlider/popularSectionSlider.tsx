import React, {useRef} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, {Navigation} from 'swiper';
import {SlideElement} from '../body/body';
import {BodySC, NextSlideSC, PrevSlideSC, SwiperBodySC} from './popularSectionSlider.styles';
import {PopularSectionSliderType} from "types/homePage/popularSectionSlider.type";
SwiperCore.use([Navigation]);

export const PopularSectionSlider: React.FC<PopularSectionSliderType> = (props) => {

    const {data} = {...props};

    const prevRef = useRef<HTMLDivElement>(null);
    const nextRef = useRef<HTMLDivElement>(null);

    return (
        <BodySC>
            <SwiperBodySC>
                <Swiper
                    spaceBetween={20}
                    slidesPerView={7}
                    loop={true}
                    initialSlide={1}
                    navigation={{
                        prevEl: prevRef.current!,
                        nextEl: nextRef.current!
                    }}
                    allowTouchMove={false}
                    slidesPerGroup={5}
                    loopAdditionalSlides={5}
                >
                    {
                        data && data.map(item =>
                            <SwiperSlide key={item.id}>
                                <SlideElement title={item.title || item.name}
                                              poster={item.poster_path}
                                              date={(item.release_date && item.release_date.slice(0, 4)) || (item.first_air_date && item.first_air_date)}
                                              vote={item.vote_average}
                                              id={item.id}
                                              overview={item.overview}
                                />
                            </SwiperSlide>)
                    }
                </Swiper>
            </SwiperBodySC>
            <PrevSlideSC ref={prevRef}/>
            <NextSlideSC ref={nextRef}/>
        </BodySC>
    )
};