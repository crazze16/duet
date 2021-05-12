import {AuthorDetailsType, ReviewDetails} from "../shared.type";

export type ItemPropsType = {
    author: string
    date: string
    author_details: AuthorDetailsType
    content: string
}

export type PropsReviewsType = {
    setReviews: (reviews: Array<ReviewDetails>, totalPages: number) => void
    movieId: number
}