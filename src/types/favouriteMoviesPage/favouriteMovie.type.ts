export type PropsType = {
    id: number
    title: string
    poster: string
    removeFromFavourite: (flag: boolean, movieId: number) => void
}