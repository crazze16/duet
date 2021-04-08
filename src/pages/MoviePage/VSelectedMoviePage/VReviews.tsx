import React, {useEffect, useRef, useState} from 'react'
import {AuthorDetailsType, ReviewDetails} from '../../../types/types';
import {movie,} from "../../../API";
import {
    AvatarSC,
    BodySC,
    ContentSC,
    DateSC,
    InfoSC,
    NameSC, NoCommSC, PaginationItemSC, PaginationSC,
    ReviewSectionSC,
    ReviewTitleSC,
    ToggleSC,
    WrapperSC
} from "./ReviewsSC";
import {useDispatch, useSelector} from "react-redux";
import {CombinedStateType} from "../../../redux-store";
import {actions} from "../../../redux-store/MoviePageReducer";

type PropsReviewsType = {
    setReviews: (reviews: Array<ReviewDetails>, totalPages: number) => void
    movieId: number
}

const VReviews: React.FC<PropsReviewsType> = (props) => {

    const dispatch = useDispatch();

    const reviews = useSelector((state: CombinedStateType) => state.MoviePageReducer.reviews);

    const setCurrentReviewPage = (reviewPage: number) => dispatch(actions.setCurrentReviewPage(reviewPage));


    const {setReviews, movieId} = props;
    useEffect(() => {
            movie.getReviews(movieId, reviews.currentPage)
                .then(response => {
                    setReviews(response.results, response['total_pages']);
                })
        }, [movieId]
    );


    const reviewsList = reviews.data.map((item, index) => <ReviewItem key={index}
                                                                      author={item.author}
                                                                      date={item['created_at']}
                                                                      author_details={item.author_details}
                                                                      content={item.content}
    />);

    //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    const myRef = useRef(null as any);
    //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

    const scrollTo = (): void => myRef.current.scrollIntoView();

    const selectPage = (page: number): void => {
        scrollTo();
        setCurrentReviewPage(page);
        reviews.currentPage !== page &&
        movie.getReviews(movieId, page)
            .then(response => {
                setReviews(response.results, response['total_pages']);
            })
    };
    let totalPagesArr = [];
    const totalPages = reviews.totalPages;
    if (totalPages)
        for (let i = 1; i <= totalPages; i++) {
            totalPagesArr.push(i)
        }
    totalPagesArr = totalPagesArr.map((item, index) =>
        <PaginationItemSC key={index}
                          onClick={() => selectPage(item)}
                          isActive={item === reviews.currentPage ? 'red' : 'white'}>
            {item}
        </PaginationItemSC>);

    return (
        <ReviewSectionSC>
            <ReviewTitleSC ref={myRef}>
                COMMENTARIES
            </ReviewTitleSC>
            {reviews.data.length !== 0 ? <>{reviewsList}
                <PaginationSC>
                    {totalPagesArr}
                </PaginationSC>
            </> : <NoCommSC>
                No Commentaries :(
            </NoCommSC>}

        </ReviewSectionSC>
    )
};

export const VReviewsMemo = React.memo(VReviews);

type ItemPropsType = {
    author: string
    date: string
    author_details: AuthorDetailsType
    content: string
}

const ReviewItem: React.FC<ItemPropsType> = React.memo(props => {
    const {author, date, author_details, content} = props;
    const src = 'https://image.tmdb.org/t/p/original/' + author_details.avatar_path;
    const noSrc = 'https://socpartnerstvo.org/img/avatar_male.png';

    const [isOpen, setStyle] = useState(false);

    return (
        <WrapperSC>
            <AvatarSC src={author_details.avatar_path && author_details.avatar_path.includes('.com') ?
                noSrc : author_details.avatar_path ? src : noSrc}/>
            <BodySC>
                <InfoSC>
                    <NameSC>
                        {author}
                    </NameSC>
                    <DateSC>
                        {date.slice(0, date.indexOf('T'))}
                    </DateSC>
                </InfoSC>
                <ContentSC isHidden={isOpen}>
                    {content}
                </ContentSC>
                {
                    content.length > 1500 ?
                        <ToggleSC onClick={() => setStyle(!isOpen)}>
                            {isOpen ? 'Hide' : 'Show more'}
                        </ToggleSC> : ''
                }
            </BodySC>
        </WrapperSC>
    )
});

