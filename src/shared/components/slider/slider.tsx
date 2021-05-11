import React, {ReactElement, useRef, useState} from "react";
import {SliderType} from "types/shared.type";
import {NavLink} from "react-router-dom";
import {Movie} from "shared/components/movie/movie";
import {
    ArrowLeftSC, ArrowRightSC, BorderSC, CharacterSC, MovieInfoSC,
    RealeseDateSC, SliderSC, SliderWheelWrapperSC, VoteSC
} from "./slider.styles";


export const Slider: React.FC<SliderType> = (props) => {
    const {slidesCount, data, translateLeft, wheelWidth, wheelHeight, startFrom} = props.wheelOptions;
    const {type, width, height} = props.slideOptions;

    const [transLeft, setTransLeft] = useState(translateLeft);
    const [rightCount, setRightCount] = useState(0);
    const sliderElement = useRef<HTMLDivElement>(null);

    const slider = (sliderItems: Array<any>, transalteX: number, slidesCount: number): ReactElement => {
        const setPrev = (): void => {
            if (sliderElement.current && rightCount) {
                sliderElement.current.style.transform = `translateX(${rightCount === 1 ? transLeft - transLeft : transalteX - rightCount * transalteX}px)`;
                setTransLeft(transLeft - transalteX);
                setRightCount((prevState) => prevState - 1);
            }
        };
        const setNext = (): void => {
            if (sliderElement.current && rightCount < (slidesCount / 5) - 1) {
                sliderElement.current.style.transform = `translateX(-${transLeft}px)`;
                setTransLeft(prevState => prevState + transalteX);
                setRightCount(prevState => prevState + 1);
            }
        };

        const returnedSlide = (item: any, index: any) => {
            return (
                <NavLink
                    to={`/movie/${item.id}`} key={index}>
                    {type === 'poster_path' ?
                            <BorderSC>
                                <Movie
                                    title={item.title || item.name}
                                    poster={item[type]}
                                    posterWidth={width}
                                    height={height}
                                />
                                <MovieInfoSC className='additional_info'>
                                    <VoteSC>{item.vote_average}</VoteSC>
                                    <CharacterSC>
                                        {item.character || '(voice)'}
                                    </CharacterSC>
                                    <RealeseDateSC>
                                        {item.release_date ? item.release_date.slice(0, 4) : item.first_air_date ? item.first_air_date.slice(0, 4) : ''}
                                    </RealeseDateSC>
                                </MovieInfoSC>
                            </BorderSC>
                         :
                            // <BackDropSC height={height} poster={'https://image.tmdb.org/t/p/original/' + item[type]}>
                            //
                            // </BackDropSC>
                        ''
                        }

                </NavLink>
            )
        };

        return (
            <SliderSC>
                <ArrowLeftSC onClick={(): void => setPrev()} disabled={rightCount === 0}/>
                <SliderWheelWrapperSC wheelWidth={wheelWidth} wheelHeight={wheelHeight} type={type} left={translateLeft * startFrom} start={startFrom}>
                    <div ref={sliderElement}>
                        {sliderItems && sliderItems.slice(0, slidesCount).map((item, index): ReactElement => returnedSlide(item, index))}
                    </div>
                </SliderWheelWrapperSC>
                <ArrowRightSC onClick={(): void => setNext()} disabled={rightCount === (slidesCount / 5) - 1}/>
            </SliderSC>)
    };
    return slider(data, translateLeft, slidesCount)
};