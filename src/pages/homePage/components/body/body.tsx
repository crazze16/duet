import React from 'react';
import {DateSC, HoverInfoSC, InfoSC, MovieTitleSC, OverviewSC, PosterSC, TitleSC, WrapperSC} from './body.styles';
import SwiperCore, {Navigation} from 'swiper';
import {BodyType} from "types/homePage/body.type";

SwiperCore.use([Navigation]);

export const SlideElement:React.FC<BodyType> = (props) => {
    const {title, poster, date, vote, id, overview} = {...props};

    return (
        <WrapperSC to={`/movie/${id}`}>
            <PosterSC>
                <img src={`https://image.tmdb.org/t/p/w342/${poster}`} alt="" width='100%'/>
                <HoverInfoSC>
                    <TitleSC>
                        {title}
                    </TitleSC>
                    <OverviewSC>
                        {overview}
                    </OverviewSC>
                </HoverInfoSC>
            </PosterSC>
            <InfoSC>
                <MovieTitleSC>
                    <TitleSC>
                        {title}
                    </TitleSC>
                    <DateSC>
                        {date}
                    </DateSC>
                </MovieTitleSC>
                <div>
                    {vote}
                </div>
            </InfoSC>
        </WrapperSC>
)
};

