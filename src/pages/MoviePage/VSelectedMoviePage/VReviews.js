import React, {useEffect} from 'react'
import {movie} from "../../../VMoviePageApi";
import {AvatarSC, BodySC, ContentSC, DateSC, InfoSC, NameSC, RatedSC, WrapperSC} from "./Reviews";

export const VReviews = (props) => {
    const {setReviews, reviewsData} = props;

    useEffect(() => {
            movie.getReviews(props.movieId)
                .then(response => setReviews(response.data.results))
        }, [props.movieId]
    );

    let arr = reviewsData.map((item, index) => <ReviewItem key={index}
                                                           author={item.author}
                                                           date={item['created_at']}
                                                           author_details={item.author_details}
                                                           content={item.content}
    />);


    return (
        <div>
            {arr}
        </div>
    )

};

const ReviewItem = (props) => {
    const  {author, date, author_details, content} = props;
    const src = 'https://image.tmdb.org/t/p/original/' + author_details.avatar_path;
    const noSrc = 'https://socpartnerstvo.org/img/avatar_male.png';



return (
        <WrapperSC>
            <AvatarSC src={author_details.avatar_path && author_details.avatar_path.includes('.com') ?  noSrc : author_details.avatar_path ? src : noSrc}/>
            <BodySC>
                <InfoSC>
                    <NameSC>
                        {author}
                    </NameSC>
                    <DateSC>
                        {date.slice(0, date.indexOf('T'))}
                    </DateSC>
                </InfoSC>
                <ContentSC>
                    {content}
                </ContentSC>
            </BodySC>
            <RatedSC>
                {author_details.rating ? author_details.rating : ''}
            </RatedSC>
        </WrapperSC>
    )
}

