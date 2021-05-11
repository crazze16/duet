import React, {useRef, useState} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, {Navigation} from 'swiper';
import {movieGenres, TVShowGenres} from "shared/constants/constants";
import {SliderElementSC, WrapperSC} from './genresSlider.styles';
import {GenresSliderType} from "types/homePage/genresSlider.type";

SwiperCore.use([Navigation]);

export const GenresSlider: React.FC<GenresSliderType> = (props) => {

    const {data, addGenre, removeGenre} = {...props};

    const [genres, setGenres] = useState<Array<number>>([]);

    const prevRef = useRef<HTMLDivElement>(null);
    const nextRef = useRef<HTMLDivElement>(null);

    const genresList = (genres: { [key: string]: number }): Array<{ name: string, id: number }> => {
        const list = [];
        for (let key in genres) list.push({name: key, id: genres[key]});
        return list
    };

    const selectGenre = async (genre: number) => {
        if (data.genres && data.genres.includes(genre, 0)) {
            removeGenre(genre);
            setGenres(genres.filter(item => item !== genre))
        } else {
            addGenre(genre);
            setGenres([...genres, genre]);
        }
    };

    return (
        <WrapperSC>
            <Swiper
                spaceBetween={8}
                slidesPerView={8}
                initialSlide={0}
                navigation={{
                    prevEl: prevRef.current!,
                    nextEl: nextRef.current!
                }}
                slidesPerGroup={1}
            >
                {
                    genresList(data.active === "movies" ? movieGenres : TVShowGenres).map((item, index) =>
                        <SwiperSlide key={index}>
                            <SliderElementSC onClick={() => {
                                selectGenre(item.id);
                            }}
                                             active={genres.includes(item.id)}
                            >
                                {item.name}
                            </SliderElementSC>
                        </SwiperSlide>
                    )
                }
            </Swiper>
        </WrapperSC>
    )
};