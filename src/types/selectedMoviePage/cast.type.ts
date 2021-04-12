import {CastPersonType} from "../shared.type";

export type MovieCastObjType = {
    id: number,
    profile_path: string,
    character: string,
    name: string
}

export type PropsType = {
    movieCast: Array<MovieCastObjType>,
    setCast: (castData: Array<CastPersonType>) => void,
    movieId: number
}

export type PropsItemType = {
    src: string,
    character: string,
    name: string
}