import {CastPersonType} from "../shared.type";

export type PropsType = {
    movieCast: Array<CastPersonType>,
    setCast: (castData: Array<CastPersonType>) => void,
    movieId: number
}

export type PropsItemType = {
    src: string,
    character: string,
    name: string
    id: number
}