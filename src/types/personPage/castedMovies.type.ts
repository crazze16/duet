import {CastCreditsType} from "./personPage.type";

export type PropsType = {
    cast: Array<CastCreditsType>
};

export type ListItemPropsType = {
    title: string | null
    original_title: string | null
    release_date: string | null
    poster?: string | null
    id?: number
    genres_ids: Array<number>
    vote_average: number | null
    character: string | null
};